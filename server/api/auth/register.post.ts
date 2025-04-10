import { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../../utils/prisma'
import type { RegisterData, AuthResponse } from '~/types/auth'

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