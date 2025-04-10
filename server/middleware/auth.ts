import jwt from 'jsonwebtoken'
import prisma from '../utils/prisma'

export default defineEventHandler(async (event) => {
  // Ignora rotas que não são da API
  if (!event.path.startsWith('/api/')) {
    return
  }

  // Lista de rotas públicas da API
  const publicRoutes = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/forgot-password'
  ]
  
  // Ignora rotas públicas
  if (publicRoutes.includes(event.path)) {
    return
  }

  const token = event.headers.get('authorization')?.replace('Bearer ', '')

  if (!token) {
    return createError({
      statusCode: 401,
      message: 'Token não fornecido',
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { userId: string }
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!user) {
      return createError({
        statusCode: 401,
        message: 'Usuário não encontrado',
      })
    }

    // @ts-ignore
    event.context.user = user
  } catch (error) {
    return createError({
      statusCode: 401,
      message: 'Token inválido',
    })
  }
}) 