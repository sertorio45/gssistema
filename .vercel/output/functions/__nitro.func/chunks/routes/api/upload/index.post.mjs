import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
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

const UPLOAD_DIR = join(process.cwd(), "public", "avatars");
const index_post = defineEventHandler(async (event) => {
  try {
    await mkdir(UPLOAD_DIR, { recursive: true });
    const body = await readBody(event);
    if (!body.imageData) {
      throw createError({
        statusCode: 400,
        message: "Nenhuma imagem foi enviada"
      });
    }
    const base64Regex = /^data:image\/(jpeg|png|gif|webp);base64,/;
    if (!base64Regex.test(body.imageData)) {
      throw createError({
        statusCode: 400,
        message: "Formato de imagem inv\xE1lido"
      });
    }
    const matches = body.imageData.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      throw createError({
        statusCode: 400,
        message: "Formato de imagem inv\xE1lido"
      });
    }
    const imageType = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, "base64");
    const filename = `avatar-${randomUUID()}.${imageType}`;
    const filepath = join(UPLOAD_DIR, filename);
    await writeFile(filepath, buffer);
    const avatarUrl = `/avatars/${filename}`;
    return {
      success: true,
      avatarUrl
    };
  } catch (error) {
    console.error("Erro ao fazer upload do avatar:", error);
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "Erro ao processar o upload do avatar"
    });
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
