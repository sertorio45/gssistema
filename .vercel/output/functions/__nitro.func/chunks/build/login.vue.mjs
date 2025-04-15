import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Auth.vue2.mjs';
import { _ as _sfc_main$2 } from './SignIn.vue2.mjs';
import './nuxt-link.mjs';
import './server.mjs';
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
import 'node:module';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'devalue';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import 'vaul-vue';
import 'lucide-vue-next';
import 'vue-sonner';
import './Input.vue2.mjs';
import './PasswordInput.vue2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutAuth = _sfc_main$1;
      const _component_AuthSignIn = _sfc_main$2;
      _push(ssrRenderComponent(_component_LayoutAuth, mergeProps({ reverse: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid mx-auto max-w-sm gap-6"${_scopeId}><div class="grid gap-2 text-center"${_scopeId}><h1 class="text-2xl font-semibold tracking-tight"${_scopeId}> Welcome back </h1><p class="text-balance text-sm text-muted-foreground"${_scopeId}> Login with your Apple or Google account </p></div>`);
            _push2(ssrRenderComponent(_component_AuthSignIn, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid mx-auto max-w-sm gap-6" }, [
                createVNode("div", { class: "grid gap-2 text-center" }, [
                  createVNode("h1", { class: "text-2xl font-semibold tracking-tight" }, " Welcome back "),
                  createVNode("p", { class: "text-balance text-sm text-muted-foreground" }, " Login with your Apple or Google account ")
                ]),
                createVNode(_component_AuthSignIn)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.vue.mjs.map
