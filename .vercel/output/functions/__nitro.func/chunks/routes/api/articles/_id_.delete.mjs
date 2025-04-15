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

const prisma = new PrismaClient();
const _id__delete = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      return {
        success: false,
        error: "ID n\xE3o fornecido"
      };
    }
    await prisma.article.delete({
      where: { id }
    });
    return {
      success: true,
      message: "Artigo exclu\xEDdo com sucesso"
    };
  } catch (error) {
    console.error("Erro ao excluir artigo:", error);
    return {
      success: false,
      error: error instanceof Error ? `Erro ao excluir artigo: ${error.message}` : "Erro ao excluir artigo"
    };
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
