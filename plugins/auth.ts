export default defineNuxtPlugin(() => {
  const auth = useAuth()

  addRouteMiddleware('global-auth', async (to) => {
    // Lista de rotas públicas que não precisam de autenticação
    const publicPaths = ['/login', '/register', '/esqueci-senha', '/(auth)', '/forgot-password']

    // Verificar se a rota atual começa com algum dos caminhos públicos
    const isPublicRoute = publicPaths.some(path => to.path.startsWith(path))

    // Se estiver autenticado mas não tiver dados do usuário, carrega-os
    if (auth.isAuthenticated && !auth.user) {
      console.warn('[AUTH] Carregando dados do usuário durante navegação')
      await auth.fetchUserData()
    }

    // Se não for uma rota pública e o usuário não estiver autenticado
    if (!isPublicRoute && !auth.isAuthenticated) {
      console.warn('Redirecionando para login: rota protegida e não autenticado')
      // Redirecionar para a página de login
      return navigateTo('/login')
    }

    // Se for uma rota pública e o usuário estiver autenticado, redirecionar para a home
    if (isPublicRoute && auth.isAuthenticated) {
      console.warn('Redirecionando para home: rota pública e autenticado')
      return navigateTo('/')
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
