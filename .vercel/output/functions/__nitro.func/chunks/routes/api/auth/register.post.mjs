import { d as defineEventHandler, r as readBody, c as createError, p as prisma, a as getJwtSecret, s as setCookie, i as isProduction } from '../../../nitro/nitro.mjs';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@prisma/client';
import '@iconify/utils';
import 'consola';

const register_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password || !body.name) {
      return createError({
        statusCode: 400,
        message: "Todos os campos s\xE3o obrigat\xF3rios"
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email: body.email }
    });
    if (existingUser) {
      return createError({
        statusCode: 400,
        message: "Email j\xE1 est\xE1 em uso"
      });
    }
    const hashedPassword = await hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: hashedPassword
      }
    });
    const jwtSecret = getJwtSecret();
    const token = jwt.sign(
      { userId: user.id },
      jwtSecret,
      { expiresIn: "7d" }
    );
    setCookie(event, "auth_token", token, {
      maxAge: 7 * 24 * 60 * 60,
      // 7 dias em segundos
      secure: isProduction(),
      path: "/",
      sameSite: "lax"
    });
    const { password, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      token
    };
  } catch {
    return createError({
      statusCode: 500,
      message: "Erro interno do servidor"
    });
  }
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
