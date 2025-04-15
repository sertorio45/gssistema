import { d as defineEventHandler, g as getRouterParam, r as readBody, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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
import 'node:module';

const _id__patch = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    const body = await readBody(event);
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
    const updateData = {};
    if (body.name !== void 0) {
      updateData.name = body.name;
    }
    if (body.email !== void 0) {
      updateData.email = body.email;
    }
    if (body.bio !== void 0) {
      updateData.bio = body.bio;
    }
    if (body.avatar !== void 0) {
      updateData.avatar = body.avatar;
    }
    if (body.status !== void 0) {
      updateData.status = Number(body.status);
    }
    if (body.password) {
      updateData.password = await hash(body.password, 10);
    }
    if (body.role !== void 0) {
      const allowedRoles = ["admin", "funcionario", "cliente"];
      if (allowedRoles.includes(body.role)) {
        updateData.role = body.role;
      } else {
        return createError({
          statusCode: 400,
          message: "Role inv\xE1lida. Valores permitidos: admin, funcionario, cliente"
        });
      }
    }
    console.error("Dados a serem atualizados:", updateData);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        bio: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    });
    console.error("Usu\xE1rio atualizado com sucesso:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("Erro ao atualizar usu\xE1rio:", error);
    return createError({
      statusCode: 500,
      message: "Erro ao atualizar usu\xE1rio"
    });
  }
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
