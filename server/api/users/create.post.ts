import { hash } from 'bcryptjs'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    if (!body.name || !body.email || !body.password) {
      return createError({
        statusCode: 400,
        message: 'Nome, email e senha são obrigatórios',
      })
    }

    // Verificar se o e-mail já está em uso
    const existingUserEmail = await prisma.user.findUnique({
      where: { email: body.email },
    })

    if (existingUserEmail) {
      return createError({
        statusCode: 400,
        message: 'Este email já está em uso',
      })
    }

    // Verificar se o nome já está em uso
    const existingUserName = await prisma.user.findFirst({
      where: { name: body.name },
    })

    if (existingUserName) {
      return createError({
        statusCode: 400,
        message: 'Este nome já está em uso',
      })
    }

    // Hash da senha
    const hashedPassword = await hash(body.password, 10)

    // Criar o usuário
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        bio: body.bio || null,
        avatar: body.avatar || null,
        status: body.status !== undefined ? body.status : true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        bio: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return user
  }
  catch (error) {
    console.error('Erro ao criar usuário:', error)
    return createError({
      statusCode: 500,
      message: 'Erro ao criar usuário',
    })
  }
}) 