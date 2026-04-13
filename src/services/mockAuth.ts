import type { LoginRequest, LoginResponse, User, AuthTokens } from './types'

// TODO: Backend hazır olunca bu dosya silinecek, gerçek API çağrılarına geçilecek

const MOCK_USER: User = {
  id: 1,
  email: 'demo@balizparmak.com',
  name: 'Demo Kullanıcı',
  role: 'admin',
}

const MOCK_PASSWORD = 'Baliz2026!'

// Basit JWT benzeri token üretici (gerçek JWT değil, sadece mock)
function generateMockToken(type: 'access' | 'refresh'): string {
  const payload = {
    sub: MOCK_USER.id,
    email: MOCK_USER.email,
    type,
    iat: Date.now(),
    exp: Date.now() + (type === 'access' ? 15 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000), // access: 15dk, refresh: 7gün
  }
  return btoa(JSON.stringify(payload))
}

function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token))
    return Date.now() > payload.exp
  } catch {
    return true
  }
}

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const mockAuthApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    await delay(500) // Gerçek API gecikmesi simülasyonu

    if (data.email === MOCK_USER.email && data.password === MOCK_PASSWORD) {
      return {
        user: MOCK_USER,
        tokens: {
          accessToken: generateMockToken('access'),
          refreshToken: generateMockToken('refresh'),
        },
      }
    }

    throw { message: 'E-posta veya şifre hatalı.', statusCode: 401 }
  },

  async refresh(refreshToken: string): Promise<AuthTokens> {
    await delay(200)

    if (isTokenExpired(refreshToken)) {
      throw { message: 'Oturum süresi doldu. Lütfen tekrar giriş yapın.', statusCode: 401 }
    }

    return {
      accessToken: generateMockToken('access'),
      refreshToken: generateMockToken('refresh'),
    }
  },

  async getMe(accessToken: string): Promise<User> {
    await delay(200)

    if (isTokenExpired(accessToken)) {
      throw { message: 'Token süresi doldu.', statusCode: 401 }
    }

    return MOCK_USER
  },
}
