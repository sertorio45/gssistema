import { d as defineEventHandler, g as getRouterParam } from '../../../nitro/nitro.mjs';
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
const _id__get = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      return {
        success: false,
        error: "ID n\xE3o fornecido"
      };
    }
    const article = await prisma.article.findUnique({
      where: { id }
    });
    if (!article) {
      return {
        success: false,
        error: "Artigo n\xE3o encontrado"
      };
    }
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
    console.error("Erro ao buscar artigo:", error);
    return {
      success: false,
      error: error instanceof Error ? `Erro ao buscar artigo: ${error.message}` : "Erro ao buscar artigo"
    };
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
