import type { AuthResponse, RegisterData } from '~/types/auth'
import { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { isProduction } from '../../utils/environment'
import { getJwtSecret } from '../../utils/jwt'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<RegisterData>(event)

    if (!body.email || !body.password || !body.name) {
      return createError({
        statusCode: 400,
        message: 'Todos os campos são obrigatórios',
      })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    })

    if (existingUser) {
      return createError({
        statusCode: 400,
        message: 'Email já está em uso',
      })
    }

    const hashedPassword = await hash(body.password, 10)

    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: hashedPassword,
      },
    })

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
  catch {
    return createError({
      statusCode: 500,
      message: 'Erro interno do servidor',
    })
  }
})
