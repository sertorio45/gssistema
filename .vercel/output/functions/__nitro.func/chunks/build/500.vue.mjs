import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { e as useRouter, a as _sfc_main$1 } from './server.mjs';
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

const _sfc_main = {
  __name: "500",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-svh" }, _attrs))}><div class="m-auto h-full w-full flex flex-col items-center justify-center gap-2"><h1 class="text-[7rem] font-bold leading-tight"> 500 </h1><span class="font-medium">Oops! Something went wrong :&#39;)</span><p class="text-center text-muted-foreground"> We apologize for the inconvenience. <br> Please try again later. </p><div class="mt-6 flex gap-4">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        onClick: ($event) => unref(router).back()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go Back `);
          } else {
            return [
              createTextVNode(" Go Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => unref(router).push("/")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back to Home `);
          } else {
            return [
              createTextVNode(" Back to Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(error)/500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=500.vue.mjs.map
