import axios from 'axios'
import { tokenStorage, useAuthStore } from '../stores/authStore'
import { mockAuthApi } from './mockAuth'

// TODO: Backend hazır olunca gerçek URL
const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

// Request interceptor — her isteğe Bearer token ekle
api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor — 401 gelirse token refresh dene
let isRefreshing = false
let failedQueue: Array<{
  resolve: (token: string) => void
  reject: (error: unknown) => void
}> = []

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((promise) => {
    if (token) {
      promise.resolve(token)
    } else {
      promise.reject(error)
    }
  })
  failedQueue = []
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // 401 ve henüz retry yapılmadıysa
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Başka bir refresh zaten çalışıyor, sıraya ekle
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`
              resolve(api(originalRequest))
            },
            reject,
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      const refreshToken = tokenStorage.getRefreshToken()
      if (!refreshToken) {
        useAuthStore.getState().logout()
        isRefreshing = false
        return Promise.reject(error)
      }

      try {
        // TODO: Backend gelince -> const res = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken })
        const newTokens = await mockAuthApi.refresh(refreshToken)

        tokenStorage.setTokens(newTokens.accessToken, newTokens.refreshToken)
        processQueue(null, newTokens.accessToken)

        originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`
        return api(originalRequest)
      } catch (refreshError) {
        processQueue(refreshError, null)
        useAuthStore.getState().logout()
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  },
)

export default api
