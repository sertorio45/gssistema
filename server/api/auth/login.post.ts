import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../../utils/prisma'
import type { LoginCredentials, AuthResponse, AuthError } from '~/types/auth'

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

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' }
    )

    const { password, ...userWithoutPassword } = user

    return {
      user: userWithoutPassword,
      token,
    } as AuthResponse
  } catch (error) {
    return createError({
      statusCode: 500,
      message: 'Erro interno do servidor',
    })
  }
}) 