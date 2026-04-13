// Auth types - backend ile aynı contract

export interface User {
  id: number
  email: string
  name: string
  role: 'user' | 'admin'
}

export interface AuthTokens {
  accessToken: string
  refreshToken: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  tokens: AuthTokens
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
}

export interface ApiError {
  message: string
  statusCode: number
}
