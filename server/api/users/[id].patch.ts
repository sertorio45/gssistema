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

    // Verificar se outros campos foram fornecidos para atualização
    const updateData: any = {}
    
    if (body.name !== undefined) {
      updateData.name = body.name
    }
    
    if (body.email !== undefined) {
      updateData.email = body.email
    }
    
    if (body.bio !== undefined) {
      updateData.bio = body.bio
    }
    
    if (body.avatar !== undefined) {
      updateData.avatar = body.avatar
    }
    
    if (body.status !== undefined) {
      updateData.status = Number(body.status)
    }
    
    if (body.password) {
      // Hash da nova senha
      updateData.password = await hash(body.password, 10)
    }
    
    // Validar e atualizar a role
    if (body.role !== undefined) {
      const allowedRoles = ['admin', 'funcionario', 'cliente']
      if (allowedRoles.includes(body.role)) {
        updateData.role = body.role
      } else {
        return createError({
          statusCode: 400,
          message: 'Role inválida. Valores permitidos: admin, funcionario, cliente',
        })
      }
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