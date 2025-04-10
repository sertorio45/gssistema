export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData extends LoginCredentials {
  name: string
}

export interface AuthResponse {
  user: {
    id: string
    name: string
    email: string
    avatar?: string | null
    bio?: string | null
  }
  token: string
}

export interface AuthError {
  message: string
  statusCode: number
} 