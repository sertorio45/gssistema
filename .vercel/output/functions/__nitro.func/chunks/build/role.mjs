import { Z as defineNuxtRouteMiddleware, u as useAuth, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue/server-renderer';
import 'devalue';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import 'vaul-vue';
import 'lucide-vue-next';
import 'vue-sonner';

const role = defineNuxtRouteMiddleware((to) => {
  const { user, isAuthenticated } = useAuth();
  const requiredRoles = to.meta.requiredRoles;
  if (!requiredRoles || requiredRoles.length === 0) {
    return;
  }
  if (!isAuthenticated) {
    return navigateTo("/login");
  }
  if (!user || !requiredRoles.includes(user.role)) {
    return navigateTo("/403");
  }
});

export { role as default };
//# sourceMappingURL=role.mjs.map
