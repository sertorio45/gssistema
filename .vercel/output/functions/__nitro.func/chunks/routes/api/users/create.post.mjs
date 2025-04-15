import { d as defineEventHandler, r as readBody, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
import { hash } from 'bcryptjs';
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

const create_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.name || !body.email || !body.password) {
      return createError({
        statusCode: 400,
        message: "Nome, email e senha s\xE3o obrigat\xF3rios"
      });
    }
    const existingUserEmail = await prisma.user.findUnique({
      where: { email: body.email }
    });
    if (existingUserEmail) {
      return createError({
        statusCode: 400,
        message: "Este email j\xE1 est\xE1 em uso"
      });
    }
    const existingUserName = await prisma.user.findFirst({
      where: { name: body.name }
    });
    if (existingUserName) {
      return createError({
        statusCode: 400,
        message: "Este nome j\xE1 est\xE1 em uso"
      });
    }
    const hashedPassword = await hash(body.password, 10);
    const allowedRoles = ["admin", "funcionario", "cliente"];
    const role = body.role && allowedRoles.includes(body.role) ? body.role : "cliente";
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        bio: body.bio || null,
        avatar: body.avatar || null,
        status: body.status !== void 0 ? body.status : true,
        role
      },
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
    return user;
  } catch (error) {
    console.error("Erro ao criar usu\xE1rio:", error);
    return createError({
      statusCode: 500,
      message: "Erro ao criar usu\xE1rio"
    });
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
