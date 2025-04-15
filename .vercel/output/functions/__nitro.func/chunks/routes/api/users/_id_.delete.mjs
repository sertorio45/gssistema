import { d as defineEventHandler, g as getRouterParam, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'jsonwebtoken';
import '@prisma/client';
import '@iconify/utils';
import 'consola';
import 'node:module';

const _id__delete = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      return createError({
        statusCode: 400,
        message: "ID do usu\xE1rio \xE9 obrigat\xF3rio"
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: { id }
    });
    if (!existingUser) {
      return createError({
        statusCode: 404,
        message: "Usu\xE1rio n\xE3o encontrado"
      });
    }
    await prisma.user.delete({
      where: { id }
    });
    return {
      success: true,
      message: "Usu\xE1rio exclu\xEDdo com sucesso"
    };
  } catch (error) {
    console.error("Erro ao excluir usu\xE1rio:", error);
    return createError({
      statusCode: 500,
      message: "Erro ao excluir usu\xE1rio"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
