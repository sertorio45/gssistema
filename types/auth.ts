export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  name: string
}

export type UserRole = 'admin' | 'funcionario' | 'cliente'

export interface AuthResponse {
  user: {
    id: string
    name: string
    email: string
    avatar?: string | null
    bio?: string | null
    role: UserRole
  }
  token: string
}

export interface AuthError {
  message: string
  statusCode: number
} 