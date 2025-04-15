import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
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

const me_get = defineEventHandler(async (event) => {
  const user = event.context.user;
  if (!user) {
    return createError({
      statusCode: 401,
      message: "N\xE3o autorizado"
    });
  }
  const { password, ...userWithoutPassword } = user;
  event.context.user = user;
  return userWithoutPassword;
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
