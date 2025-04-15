import { d as defineEventHandler, p as prisma, c as createError } from '../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        bio: true,
        status: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });
    return users;
  } catch (error) {
    console.error("Erro ao buscar usu\xE1rios:", error);
    return createError({
      statusCode: 500,
      message: "Erro ao buscar usu\xE1rios"
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
