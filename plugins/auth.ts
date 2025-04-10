import type { $Fetch } from 'nitropack'

export default defineNuxtPlugin(() => {
  const auth = useAuth()

  addRouteMiddleware('global-auth', (to) => {
    const { isAuthenticated } = useAuth()

    // Lista de rotas públicas que não precisam de autenticação
    const publicPaths = ['/login', '/register', '/esqueci-senha', '/(auth)']

    // Verificar se a rota atual começa com algum dos caminhos públicos
    const isPublicRoute = publicPaths.some(path => to.path.startsWith(path))

    // Se não for uma rota pública e o usuário não estiver autenticado
    if (!isPublicRoute && !isAuthenticated) {
      // Redirecionar para a página de login
      return navigateTo('/login')
    }
  }, { global: true })

  return {
    provide: {
      // Função helper para fazer requisições autenticadas
      authFetch: (url: string, options: any = {}) => {
        // Adiciona o token apenas para requisições da API
        const headers = url.startsWith('/api/') && auth.token
          ? { Authorization: `Bearer ${auth.token}` }
          : {}

        return $fetch(url, {
          ...options,
          headers: {
            ...headers,
            ...options.headers,
          },
        })
      },
    },
  }
}) 