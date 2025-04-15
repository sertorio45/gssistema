import { d as defineEventHandler, r as readBody, c as createError, p as prisma, a as getJwtSecret, s as setCookie, i as isProduction } from '../../../nitro/nitro.mjs';
import { compare } from 'bcryptjs';
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
import 'node:module';

const login_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.email || !body.password) {
      return createError({
        statusCode: 400,
        message: "Email e senha s\xE3o obrigat\xF3rios"
      });
    }
    const user = await prisma.user.findUnique({
      where: { email: body.email }
    });
    if (!user) {
      return createError({
        statusCode: 401,
        message: "Credenciais inv\xE1lidas"
      });
    }
    const isValidPassword = await compare(body.password, user.password);
    if (!isValidPassword) {
      return createError({
        statusCode: 401,
        message: "Credenciais inv\xE1lidas"
      });
    }
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
  } catch (error) {
    console.error("Erro no login:", error);
    return createError({
      statusCode: 500,
      message: "Erro interno do servidor"
    });
  }
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
