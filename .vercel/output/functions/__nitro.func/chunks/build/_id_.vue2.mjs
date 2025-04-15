import { l as useRoute, e as useRouter, m as useAsyncData, a as _sfc_main$1, b as __nuxt_component_9, g as _sfc_main$2 } from './server.mjs';
import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useArticle } from './data.mjs';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$7 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$6 } from './CardDescription.vue2.mjs';
import { _ as _sfc_main$8 } from './CardFooter.vue2.mjs';
import { _ as _sfc_main$9 } from './ArticleForm.vue2.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const isSubmitting = ref(false);
    const id = route.params.id;
    const { getArticle, updateArticle } = useArticle();
    const { data: article, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`article-${id}`, () => getArticle(id))), __temp = await __temp, __restore(), __temp);
    const formattedData = computed(() => {
      if (!article.value) {
        return {};
      }
      return {
        title: article.value.title,
        content: article.value.content,
        meta_description: article.value.meta_description,
        slug: article.value.slug,
        status: article.value.status,
        categories: article.value.categories,
        tags: article.value.tags
      };
    });
    async function handleSubmit(values) {
      try {
        isSubmitting.value = true;
        const result = await updateArticle(id, values);
        if (result) {
          router.push("/articles");
        }
      } catch (e) {
        console.error("Erro ao atualizar artigo:", e);
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
      const _component_Skeleton = _sfc_main$2;
      const _component_Card = _sfc_main$3;
      const _component_CardHeader = _sfc_main$4;
      const _component_CardTitle = _sfc_main$5;
      const _component_CardDescription = _sfc_main$6;
      const _component_CardContent = _sfc_main$7;
      const _component_CardFooter = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="mb-8"><div class="flex flex-wrap items-center justify-between gap-4"><div><h2 class="text-2xl font-bold tracking-tight"> Editar Artigo </h2><p class="text-muted-foreground mt-1"> Atualize as informações do artigo </p></div>`);
      if (unref(article)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Button, {
          variant: "outline",
          class: "mr-2",
          onClick: ($event) => unref(router).push(`/articles/${unref(id)}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "radix-icons:eye-open",
                class: "mr-2 h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(` Visualizar artigo `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "radix-icons:eye-open",
                  class: "mr-2 h-4 w-4"
                }),
                createTextVNode(" Visualizar artigo ")
              ];
            }
          }),
          _: 1
        }, _parent));
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(pending)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Skeleton, { class: "w-full h-[60px] rounded-lg" }, null, _parent));
        _push(ssrRenderComponent(_component_Skeleton, { class: "w-full h-[500px] rounded-lg" }, null, _parent));
        _push(`</div>`);
      } else if (unref(error) || !unref(article)) {
        _push(`<div class="max-w-md mx-auto">`);
        _push(ssrRenderComponent(_component_Card, { class: "border-destructive/50" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardTitle, { class: "flex items-center text-destructive" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-exclamation-triangle",
                            class: "mr-2 h-5 w-5 text-destructive"
                          }, null, _parent4, _scopeId3));
                          _push4(` Erro ao carregar `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-exclamation-triangle",
                              class: "mr-2 h-5 w-5 text-destructive"
                            }),
                            createTextVNode(" Erro ao carregar ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_CardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Não foi possível carregar o artigo solicitado `);
                        } else {
                          return [
                            createTextVNode(" Não foi possível carregar o artigo solicitado ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardTitle, { class: "flex items-center text-destructive" }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-exclamation-triangle",
                            class: "mr-2 h-5 w-5 text-destructive"
                          }),
                          createTextVNode(" Erro ao carregar ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Não foi possível carregar o artigo solicitado ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_CardContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p${_scopeId2}>Verifique se o artigo existe ou tente novamente mais tarde.</p>`);
                  } else {
                    return [
                      createVNode("p", null, "Verifique se o artigo existe ou tente novamente mais tarde.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_CardFooter, { class: "border-t bg-muted/50 px-6 py-4" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      variant: "default",
                      onClick: ($event) => unref(router).push("/articles")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-arrow-left",
                            class: "mr-2 h-4 w-4 text-primary-foreground"
                          }, null, _parent4, _scopeId3));
                          _push4(` Voltar para a lista `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-arrow-left",
                              class: "mr-2 h-4 w-4 text-primary-foreground"
                            }),
                            createTextVNode(" Voltar para a lista ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        variant: "default",
                        onClick: ($event) => unref(router).push("/articles")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-arrow-left",
                            class: "mr-2 h-4 w-4 text-primary-foreground"
                          }),
                          createTextVNode(" Voltar para a lista ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_CardTitle, { class: "flex items-center text-destructive" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-exclamation-triangle",
                          class: "mr-2 h-5 w-5 text-destructive"
                        }),
                        createTextVNode(" Erro ao carregar ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Não foi possível carregar o artigo solicitado ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardContent, null, {
                  default: withCtx(() => [
                    createVNode("p", null, "Verifique se o artigo existe ou tente novamente mais tarde.")
                  ]),
                  _: 1
                }),
                createVNode(_component_CardFooter, { class: "border-t bg-muted/50 px-6 py-4" }, {
                  default: withCtx(() => [
                    createVNode(_component_Button, {
                      variant: "default",
                      onClick: ($event) => unref(router).push("/articles")
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-arrow-left",
                          class: "mr-2 h-4 w-4 text-primary-foreground"
                        }),
                        createTextVNode(" Voltar para a lista ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Card, { class: "shadow-sm border-0 overflow-hidden" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CardContent, { class: "p-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$9, {
                      "initial-values": unref(formattedData),
                      "is-editing": true,
                      "is-submitting": unref(isSubmitting),
                      onSubmit: handleSubmit,
                      onCancel: handleCancel
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$9, {
                        "initial-values": unref(formattedData),
                        "is-editing": true,
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
                    createVNode(_sfc_main$9, {
                      "initial-values": unref(formattedData),
                      "is-editing": true,
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
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue2.mjs.map
