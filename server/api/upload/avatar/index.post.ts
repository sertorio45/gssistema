import { randomUUID } from 'node:crypto'
import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { createError } from 'h3'

// Define o diretório de uploads
const UPLOAD_DIR = join(process.cwd(), 'public', 'avatars')

export default defineEventHandler(async (event) => {
  try {
    // Garantir que o diretório de uploads exista
    await mkdir(UPLOAD_DIR, { recursive: true })

    // Ler o corpo da requisição
    const body = await readBody(event)
    
    if (!body.imageData) {
      throw createError({
        statusCode: 400,
        message: 'Nenhuma imagem foi enviada',
      })
    }

    // Verificar se é uma string base64 válida
    const base64Regex = /^data:image\/(jpeg|png|gif|webp);base64,/
    if (!base64Regex.test(body.imageData)) {
      throw createError({
        statusCode: 400,
        message: 'Formato de imagem inválido',
      })
    }

    // Extrair dados e tipo da imagem
    const matches = body.imageData.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/)
    if (!matches || matches.length !== 3) {
      throw createError({
        statusCode: 400,
        message: 'Formato de imagem inválido',
      })
    }

    const imageType = matches[1]
    const base64Data = matches[2]
    const buffer = Buffer.from(base64Data, 'base64')

    // Gerar nome único para o arquivo
    const filename = `avatar-${randomUUID()}.${imageType}`
    const filepath = join(UPLOAD_DIR, filename)

    // Salvar no servidor
    await writeFile(filepath, buffer)

    // Caminho relativo para o frontend
    const avatarUrl = `/avatars/${filename}`

    return {
      success: true,
      avatarUrl,
    }
  } catch (error: any) {
    console.error('Erro ao fazer upload do avatar:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Erro ao processar o upload do avatar',
    })
  }
}) 