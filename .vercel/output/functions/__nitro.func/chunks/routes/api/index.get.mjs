import { d as defineEventHandler } from '../../nitro/nitro.mjs';
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
const index_get = defineEventHandler(async (_event) => {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        updatedAt: "desc"
      }
    });
    const formattedArticles = articles.map((article) => ({
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
    }));
    return {
      success: true,
      data: formattedArticles
    };
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return {
      success: false,
      error: error instanceof Error ? `Erro ao buscar artigos: ${error.message}` : "Erro ao buscar artigos"
    };
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
