import { defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Auth",
  __ssrInlineRender: true,
  props: {
    reverse: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["relative flex items-center justify-center px-4 h-dvh lg:max-w-none lg:px-0", { "flex-row-reverse": _ctx.reverse }]
      }, _attrs))}><div class="relative hidden h-full flex-1 flex-col bg-muted p-10 text-white lg:flex dark:border-r"><div class="absolute inset-0 bg-zinc-900"></div><div class="relative z-20 flex items-center text-lg font-medium"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="mr-2 h-6 w-6"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg> Acme Inc </div><div class="relative z-20 mt-auto"><blockquote class="space-y-2"><p class="text-lg"> “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.” </p><footer class="text-sm"> Sofia Davis </footer></blockquote></div></div><div class="mx-auto flex-1 lg:p-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=Auth.vue2.mjs.map
