import jwt from 'jsonwebtoken'
import { getJwtSecret } from '../utils/jwt'
import prisma from '../utils/prisma'

// Mapeamento de rotas e permissões
const routePermissions: Record<string, string[]> = {
  // Rotas administrativas - apenas admin
  '/admin': ['admin'],
  '/admin/users': ['admin'],
  '/admin/settings': ['admin'],
  
  // Rotas para funcionários - admin e funcionário podem acessar
  '/dashboard': ['admin', 'funcionario'],
  '/reports': ['admin', 'funcionario'],
  '/tasks': ['admin', 'funcionario'],
  '/financeiro': ['admin', 'funcionario'], // Adicione aqui a sua nova rota
  
  // Rotas para clientes - todos podem acessar
  '/profile': ['admin', 'funcionario', 'cliente'],
  '/orders': ['admin', 'funcionario', 'cliente'],
  '/account': ['admin', 'funcionario', 'cliente'],
}

export default defineEventHandler(async (event) => {
  // Ignora rotas que não são da API
  if (!event.path.startsWith('/api/')) {
    return
  }

  // Lista de rotas públicas da API
  const publicRoutes = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/forgot-password',
    '/api/upload/image', // Permitir upload de imagens sem autenticação
  ]

  // Ignora rotas públicas
  if (publicRoutes.includes(event.path)) {
    return
  }

  // Obtém o token do cabeçalho Authorization
  const authHeader = event.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '')

  // Se não houver token, verifica se existe no cookie
  if (!token) {
    // Tenta obter o token dos cookies
    const authCookie = getCookie(event, 'auth_token')

    if (!authCookie) {
      return createError({
        statusCode: 401,
        message: 'Token não fornecido',
      })
    }

    // Usa o token do cookie
    await verifyAndSetUser(event, authCookie)
    return
  }

  // Se tiver token no cabeçalho, verifica e define o usuário
  await verifyAndSetUser(event, token)
})

/**
 * Função auxiliar para verificar o token e definir o usuário no contexto
 * @param event Evento Nitro da requisição
 * @param token Token JWT a ser verificado
 */
async function verifyAndSetUser(
  event: any,
  token: string,
): Promise<void | ReturnType<typeof createError>> {
  try {
    // Obtém o JWT_SECRET do ambiente através do utilitário
    const jwtSecret = getJwtSecret()

    // Verifica o token
    const decoded = jwt.verify(token, jwtSecret) as { userId: string }

    // Busca o usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!user) {
      return createError({
        statusCode: 401,
        message: 'Usuário não encontrado',
      })
    }

    // Adiciona o usuário ao contexto
    event.context.user = user
  }
  catch {
    return createError({
      statusCode: 401,
      message: 'Token inválido ou expirado',
    })
  }
}
