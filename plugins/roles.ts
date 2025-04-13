import type { UserRole } from '~/types/auth'

export default defineNuxtPlugin(() => {
  const auth = useAuth()

  addRouteMiddleware('global-role', (to) => {
    // Adiciona logs para depuração
    console.warn('[DEBUG] Verificando permissões para a rota:', to.path)
    console.warn('[DEBUG] Meta da rota:', to.meta)
    console.warn('[DEBUG] Usuário atual:', auth.user)
    
    // Se a rota não tem meta de permissões, permite acesso
    if (!to.meta.requiredRoles) {
      console.warn('[DEBUG] Nenhuma role requerida, permitindo acesso')
      return
    }

    const requiredRoles = to.meta.requiredRoles as UserRole[]
    console.warn('[DEBUG] Roles requeridas:', requiredRoles)
    
    // Se não houver usuário ou não tiver role, nega acesso
    if (!auth.user || !auth.user.role) {
      console.warn('[DEBUG] Acesso negado: Usuário sem role definida')
      return navigateTo('/403')
    }
    
    // Importante: Se a role vier do SQLite pode ter formato diferente
    const userRole = typeof auth.user.role === 'string' ? auth.user.role : String(auth.user.role)
    console.warn('[DEBUG] Role do usuário (após conversão):', userRole)
    
    // Verifica se a role do usuário está na lista de roles permitidas
    const hasPermission = requiredRoles.some(role => role.toLowerCase() === userRole.toLowerCase())
    if (!hasPermission) {
      console.warn(`[DEBUG] Acesso negado: Role ${userRole} não tem permissão para acessar ${to.path}`)
      console.warn('[DEBUG] Roles requeridas:', requiredRoles)
      return navigateTo('/403')
    }
    
    console.warn('[DEBUG] Acesso permitido!')
  }, { global: true })
}) 