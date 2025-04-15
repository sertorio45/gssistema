import { d as defineEventHandler, g as getRouterParam, r as readBody } from '../../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'jsonwebtoken';
import '@iconify/utils';
import 'consola';
import 'node:module';

const prisma = new PrismaClient();
const _id__put = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const body = await readBody(event);
    if (!id) {
      return {
        success: false,
        error: "ID n\xE3o fornecido"
      };
    }
    if (!body.title || !body.content || !body.slug) {
      return {
        success: false,
        error: "Campos obrigat\xF3rios n\xE3o preenchidos"
      };
    }
    const article = await prisma.article.update({
      where: { id },
      data: {
        title: body.title,
        content: body.content,
        metaDescription: body.meta_description || null,
        slug: body.slug,
        status: body.status || "draft",
        categories: body.categories || null,
        tags: body.tags || null
      }
    });
    const formattedArticle = {
      id: article.id,
      title: article.title,
      content: article.content,
      meta_description: article.metaDescription,
      slug: article.slug,
      status: article.status,
      categories: article.categories,
      tags: article.tags,
      created_at: article.createdAt,
      updated_at: article.updatedAt
    };
    return {
      success: true,
      data: formattedArticle
    };
  } catch (error) {
    console.error("Erro ao atualizar artigo:", error);
    return {
      success: false,
      error: error instanceof Error ? `Erro ao atualizar artigo: ${error.message}` : "Erro ao atualizar artigo"
    };
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
