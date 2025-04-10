import type { AuthResponse, LoginCredentials } from '~/types/auth'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { isProduction } from '../../utils/environment'
import { getJwtSecret } from '../../utils/jwt'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<LoginCredentials>(event)

    if (!body.email || !body.password) {
      return createError({
        statusCode: 400,
        message: 'Email e senha são obrigatórios',
      })
    }

    const user = await prisma.user.findUnique({
      where: { email: body.email },
    })

    if (!user) {
      return createError({
        statusCode: 401,
        message: 'Credenciais inválidas',
      })
    }

    const isValidPassword = await compare(body.password, user.password)

    if (!isValidPassword) {
      return createError({
        statusCode: 401,
        message: 'Credenciais inválidas',
      })
    }

    // Obtém o JWT_SECRET do ambiente através do utilitário
    const jwtSecret = getJwtSecret()

    // Gera o token JWT
    const token = jwt.sign(
      { userId: user.id },
      jwtSecret,
      { expiresIn: '7d' },
    )

    // Armazena o token no cookie
    setCookie(event, 'auth_token', token, {
      maxAge: 7 * 24 * 60 * 60, // 7 dias em segundos
      secure: isProduction(),
      path: '/',
      sameSite: 'lax',
    })

    const { password, ...userWithoutPassword } = user

    return {
      user: userWithoutPassword,
      token,
    } as AuthResponse
  }
  // Usamos a sintaxe de "erro anônimo" para evitar alerta de variável não utilizada
  catch {
    // O erro específico não é usado, mas poderia ser logado em um sistema de monitoramento
    return createError({
      statusCode: 500,
      message: 'Erro interno do servidor',
    })
  }
})
