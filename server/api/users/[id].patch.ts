import { hash } from 'bcryptjs'
import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)

    if (!id) {
      return createError({
        statusCode: 400,
        message: 'ID do usuário é obrigatório',
      })
    }

    // Verificar se o usuário existe
    const existingUser = await prisma.user.findUnique({
      where: { id },
    })

    if (!existingUser) {
      return createError({
        statusCode: 404,
        message: 'Usuário não encontrado',
      })
    }

    // Preparar dados para atualização
    const updateData: any = {}

    if (body.name) {
      // Verificar se o novo nome já está em uso por outro usuário
      if (body.name !== existingUser.name) {
        const nameInUse = await prisma.user.findFirst({
          where: { 
            name: body.name,
            NOT: { id: existingUser.id }
          },
        })

        if (nameInUse) {
          return createError({
            statusCode: 400,
            message: 'Este nome já está em uso',
          })
        }
      }
      updateData.name = body.name
    }
    
    if (body.email) {
      // Verificar se o novo e-mail já está em uso por outro usuário
      if (body.email !== existingUser.email) {
        const emailInUse = await prisma.user.findUnique({
          where: { email: body.email },
        })

        if (emailInUse) {
          return createError({
            statusCode: 400,
            message: 'Este email já está em uso',
          })
        }
      }
      updateData.email = body.email
    }

    if (body.password) {
      updateData.password = await hash(body.password, 10)
    }

    if (body.bio !== undefined) {
      updateData.bio = body.bio
    }
    
    if (body.avatar !== undefined) {
      updateData.avatar = body.avatar
    }
    
    // Tratamento específico para o status
    if (body.status !== undefined) {
      // Forçar o tipo para número e garantir que seja sempre 1 ou 0
      let statusValue
      
      if (typeof body.status === 'string') {
        statusValue = body.status === '1' ? 1 : 0
      } else if (typeof body.status === 'boolean') {
        statusValue = body.status === true ? 1 : 0
      } else {
        statusValue = parseInt(body.status) ? 1 : 0
      }
      
      updateData.status = statusValue
    }

    console.error('Dados a serem atualizados:', updateData)

    // Atualizar o usuário
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
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

    console.error('Usuário atualizado com sucesso:', updatedUser)
    return updatedUser
  }
  catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    return createError({
      statusCode: 500,
      message: 'Erro ao atualizar usuário',
    })
  }
}) 