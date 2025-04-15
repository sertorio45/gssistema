import { d as defineEventHandler, b as readMultipartFormData, c as createError } from '../../../nitro/nitro.mjs';
import { randomUUID } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'jsonwebtoken';
import '@prisma/client';
import '@iconify/utils';
import 'consola';

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");
const index_post = defineEventHandler(async (event) => {
  try {
    await mkdir(UPLOAD_DIR, { recursive: true });
    const formData = await readMultipartFormData(event);
    if (!formData || formData.length === 0) {
      throw createError({
        statusCode: 400,
        message: "Nenhuma imagem foi enviada"
      });
    }
    const fileField = formData.find((field) => field.name === "file");
    if (!fileField || !fileField.data || !fileField.filename) {
      throw createError({
        statusCode: 400,
        message: "Formato inv\xE1lido de upload"
      });
    }
    const fileExt = fileField.filename.split(".").pop() || "jpg";
    const validExtensions = ["jpg", "jpeg", "png", "gif", "webp", "svg"];
    if (!validExtensions.includes(fileExt.toLowerCase())) {
      throw createError({
        statusCode: 400,
        message: "Formato de arquivo n\xE3o permitido"
      });
    }
    const filename = `img-${randomUUID()}.${fileExt}`;
    const filepath = join(UPLOAD_DIR, filename);
    await writeFile(filepath, fileField.data);
    const imageUrl = `/uploads/${filename}`;
    return {
      location: imageUrl
      // Importante: TinyMCE espera uma propriedade 'location'
    };
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Erro ao processar o upload da imagem"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
