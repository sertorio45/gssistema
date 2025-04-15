import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
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

const prisma = new PrismaClient();
const index_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.title || !body.content || !body.slug) {
      return {
        success: false,
        error: "Campos obrigat\xF3rios n\xE3o preenchidos"
      };
    }
    const article = await prisma.article.create({
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
    console.error("Erro ao criar artigo:", error);
    return {
      success: false,
      error: error instanceof Error ? `Erro ao criar artigo: ${error.message}` : "Erro ao criar artigo"
    };
  }
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
