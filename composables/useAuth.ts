import type { AuthResponse, LoginCredentials, RegisterData } from '~/types/auth'
import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', () => {
  // Usamos um cookie normal (não HttpOnly) para token de autenticação
  // Isso permite acesso tanto pelo cliente quanto pelo servidor
  const authToken = useCookie('auth_token', {
    maxAge: 7 * 24 * 60 * 60, // 7 dias em segundos
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
  })

  const user = ref<AuthResponse['user'] | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Estado de autenticação baseado no token no cookie
  const isAuthenticated = computed(() => !!authToken.value)

  async function login(credentials: LoginCredentials) {
    try {
      loading.value = true
      error.value = null

      const response = await $fetch<AuthResponse>('/api/auth/login', {
        method: 'POST',
        body: credentials,
      })

      // Armazena o token no cookie
      authToken.value = response.token
      user.value = response.user

      // Redireciona para a home
      navigateTo('/')
    }
    catch (e: any) {
      error.value = e.data?.message || 'Erro ao fazer login'
      throw error.value
    }
    finally {
      loading.value = false
    }
  }

  async function register(data: RegisterData) {
    try {
      loading.value = true
      error.value = null

      const response = await $fetch<AuthResponse>('/api/auth/register', {
        method: 'POST',
        body: data,
      })

      // Armazena o token no cookie
      authToken.value = response.token
      user.value = response.user

      // Redireciona para a home
      navigateTo('/')
    }
    catch (e: any) {
      error.value = e.data?.message || 'Erro ao criar conta'
      throw error.value
    }
    finally {
      loading.value = false
    }
  }

  function logout() {
    // Limpa os dados locais
    authToken.value = null
    user.value = null

    // Redireciona para a página de login
    navigateTo('/login')
  }

  // Carrega os dados do usuário quando houver um token
  const fetchUserData = async () => {
    if (authToken.value && !user.value) {
      try {
        loading.value = true
        // Carrega os dados do usuário
        const userData = await $fetch<AuthResponse['user']>('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${authToken.value}`,
          },
        })
        user.value = userData
      }
      catch (e: any) {
        // Em caso de erro, apenas loga o erro mas NÃO faz logout
        console.warn('Erro ao carregar dados do usuário:', e)
        error.value = 'Erro ao carregar perfil, tente fazer login novamente.'
        // Caso o erro seja de autenticação, limpa o token mas não redireciona
        if (e.response?.status === 401) {
          authToken.value = null
        }
      }
      finally {
        loading.value = false
      }
    }
  }

  // Função para recarregar explicitamente os dados do usuário
  const refreshUserData = async () => {
    if (authToken.value) {
      try {
        loading.value = true
        // Carrega os dados do usuário com parâmetro para evitar cache
        const userData = await $fetch<AuthResponse['user']>('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${authToken.value}`,
          },
          query: {
            _t: Date.now(), // Adiciona timestamp para evitar cache
          },
        })
        
        // Atualiza os dados do usuário no estado
        user.value = userData
        
        // Dispara evento para notificar os componentes sobre a atualização
        if (import.meta.client) {
          window.dispatchEvent(new Event('user-updated'))
        }
      }
      catch (e: any) {
        // Em caso de erro, apenas loga o erro mas NÃO faz logout
        console.warn('Erro ao recarregar dados do usuário:', e)
        // Não chamar logout() aqui para evitar deslogamento automático
        error.value = 'Erro ao atualizar perfil, tente novamente.'
      }
      finally {
        loading.value = false
      }
    }
  }

  // Função utilitária para atualizar a UI sem recarregar dados
  const syncUserData = () => {
    // Dispara evento para atualizar componentes sem fazer requisição
    if (import.meta.client) {
      window.dispatchEvent(new Event('user-updated'))
    }
  }

  // Função para atualizar o perfil do usuário
  const updateProfile = async (userId: string, profileData: any) => {
    try {
      loading.value = true
      error.value = null

      // Atualiza o perfil chamando a API
      const updatedUser = await $fetch<AuthResponse['user']>(`/api/users/${userId}`, {
        method: 'PATCH',
        body: profileData,
        headers: {
          Authorization: `Bearer ${authToken.value}`,
        },
      })

      // Atualiza os dados do usuário no estado
      user.value = updatedUser

      // Notifica os componentes sobre a atualização
      if (import.meta.client) {
        window.dispatchEvent(new Event('user-updated'))
      }

      return updatedUser
    }
    catch (e: any) {
      error.value = e.data?.message || 'Erro ao atualizar perfil'
      throw error.value
    }
    finally {
      loading.value = false
    }
  }

  // Carrega dados do usuário na montagem do componente
  onMounted(fetchUserData)

  // Retorna os métodos e propriedades que queremos expor
  return {
    user,
    token: authToken,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    fetchUserData,
    refreshUserData,
    updateProfile,
    syncUserData,
  }
})
