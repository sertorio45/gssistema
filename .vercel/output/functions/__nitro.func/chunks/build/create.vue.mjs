import { e as useRouter, a as _sfc_main$1, b as __nuxt_component_9 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useArticle } from './data.mjs';
import { _ as _sfc_main$4, a as articleDefaultValues } from './ArticleForm.vue2.mjs';
import { _ as _sfc_main$2, c as _sfc_main$3 } from './CardTitle.vue2.mjs';
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
import 'vee-validate';
import '@vee-validate/zod';
import 'zod';
import './FormMessage.vue2.mjs';
import './Input.vue2.mjs';
import './Textarea.vue2.mjs';
import '@tinymce/tinymce-vue';
import './SelectContent.vue2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { createArticle } = useArticle();
    const router = useRouter();
    const isSubmitting = ref(false);
    async function handleSubmit(values) {
      try {
        isSubmitting.value = true;
        const result = await createArticle(values);
        if (result) {
          router.push("/articles");
        }
      } catch (error) {
        console.error("Erro ao criar artigo:", error);
      } finally {
        isSubmitting.value = false;
      }
    }
    function handleCancel() {
      router.push("/articles");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_Icon = __nuxt_component_9;
      const _component_Card = _sfc_main$2;
      const _component_CardContent = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="mb-8"><div class="flex flex-wrap items-center justify-between gap-4"><div><h2 class="text-2xl font-bold tracking-tight"> Criar Artigo </h2><p class="text-muted-foreground mt-1"> Crie um novo artigo para publicação no sistema </p></div><div>`);
      _push(ssrRenderComponent(_component_Button, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "radix-icons:magic-wand",
              class: "mr-2 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` Gerar com IA `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "radix-icons:magic-wand",
                class: "mr-2 h-4 w-4"
              }),
              createTextVNode(" Gerar com IA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_Card, { class: "shadow-sm border-0 overflow-hidden rounded" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    "initial-values": unref(articleDefaultValues),
                    "is-editing": false,
                    "is-submitting": unref(isSubmitting),
                    onSubmit: handleSubmit,
                    onCancel: handleCancel
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      "initial-values": unref(articleDefaultValues),
                      "is-editing": false,
                      "is-submitting": unref(isSubmitting),
                      onSubmit: handleSubmit,
                      onCancel: handleCancel
                    }, null, 8, ["initial-values", "is-submitting"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
                    "initial-values": unref(articleDefaultValues),
                    "is-editing": false,
                    "is-submitting": unref(isSubmitting),
                    onSubmit: handleSubmit,
                    onCancel: handleCancel
                  }, null, 8, ["initial-values", "is-submitting"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create.vue.mjs.map
