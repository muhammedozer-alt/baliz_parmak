import { create } from 'zustand'
import type { User } from '../services/types'
import { mockAuthApi } from '../services/mockAuth'

// Token storage keys
const ACCESS_TOKEN_KEY = 'bp_access_token'
const REFRESH_TOKEN_KEY = 'bp_refresh_token'

// Token helpers
const tokenStorage = {
  getAccessToken: () => localStorage.getItem(ACCESS_TOKEN_KEY),
  getRefreshToken: () => localStorage.getItem(REFRESH_TOKEN_KEY),

  setTokens: (accessToken: string, refreshToken: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  },

  clear: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
  },
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isInitialized: boolean

  // Actions
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  initialize: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isInitialized: false,

  login: async (email, password) => {
    set({ isLoading: true })
    try {
      // TODO: Backend gelince -> axios.post('/api/auth/login', { email, password })
      const response = await mockAuthApi.login({ email, password })

      tokenStorage.setTokens(response.tokens.accessToken, response.tokens.refreshToken)
      set({ user: response.user, isLoading: false })
      return { success: true }
    } catch (err: unknown) {
      set({ isLoading: false })
      const error = err as { message?: string }
      return { success: false, error: error.message ?? 'Giriş başarısız.' }
    }
  },

  logout: () => {
    tokenStorage.clear()
    set({ user: null })
  },

  // Sayfa yenilendiğinde token'dan kullanıcıyı geri yükle
  initialize: async () => {
    const accessToken = tokenStorage.getAccessToken()
    const refreshToken = tokenStorage.getRefreshToken()

    if (!accessToken || !refreshToken) {
      set({ isInitialized: true })
      return
    }

    try {
      // TODO: Backend gelince -> axios.get('/api/auth/me')
      const user = await mockAuthApi.getMe(accessToken)
      set({ user, isInitialized: true })
    } catch {
      // Access token expired, try refresh
      try {
        // TODO: Backend gelince -> axios.post('/api/auth/refresh', { refreshToken })
        const newTokens = await mockAuthApi.refresh(refreshToken)
        tokenStorage.setTokens(newTokens.accessToken, newTokens.refreshToken)

        const user = await mockAuthApi.getMe(newTokens.accessToken)
        set({ user, isInitialized: true })
      } catch {
        // Refresh de başarısız, temizle
        tokenStorage.clear()
        set({ isInitialized: true })
      }
    }
  },
}))

// Export for axios interceptor usage
export { tokenStorage }
