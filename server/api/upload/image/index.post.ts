import { randomUUID } from 'node:crypto'
import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { createError } from 'h3'

// Define o diretório de uploads
const UPLOAD_DIR = join(process.cwd(), 'public', 'uploads')

export default defineEventHandler(async (event) => {
  try {
    // Garantir que o diretório de uploads exista
    await mkdir(UPLOAD_DIR, { recursive: true })

    // Para TinyMCE, as imagens são enviadas como FormData multipart
    const formData = await readMultipartFormData(event)
    
    if (!formData || formData.length === 0) {
      throw createError({
        statusCode: 400,
        message: 'Nenhuma imagem foi enviada',
      })
    }

    // Encontra o arquivo no formData
    const fileField = formData.find(field => field.name === 'file')
    
    if (!fileField || !fileField.data || !fileField.filename) {
      throw createError({
        statusCode: 400,
        message: 'Formato inválido de upload',
      })
    }

    // Extrair extensão do arquivo
    const fileExt = fileField.filename.split('.').pop() || 'jpg'
    
    // Verifica se é uma extensão de imagem válida
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']
    if (!validExtensions.includes(fileExt.toLowerCase())) {
      throw createError({
        statusCode: 400,
        message: 'Formato de arquivo não permitido',
      })
    }

    // Gerar nome único para o arquivo
    const filename = `img-${randomUUID()}.${fileExt}`
    const filepath = join(UPLOAD_DIR, filename)

    // Salvar no servidor
    await writeFile(filepath, fileField.data)

    // Caminho relativo para o frontend
    const imageUrl = `/uploads/${filename}`

    // Formato de resposta esperado pelo TinyMCE
    return {
      location: imageUrl, // Importante: TinyMCE espera uma propriedade 'location'
    }
  } catch (error: any) {
    console.error('Erro ao fazer upload da imagem:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Erro ao processar o upload da imagem',
    })
  }
}) 