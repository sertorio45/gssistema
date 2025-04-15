import { l as useRoute, e as useRouter, m as useAsyncData, a as _sfc_main$1, b as __nuxt_component_9, g as _sfc_main$2 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useArticle, s as statuses } from './data.mjs';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5 } from './index.mjs';
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8, c as _sfc_main$a } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$9 } from './CardDescription.vue2.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const { getArticle, deleteArticle } = useArticle();
    const { data: article, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`article-${id}`, () => getArticle(id))), __temp = await __temp, __restore(), __temp);
    const statusDisplay = computed(() => {
      if (!article.value) return null;
      return statuses.find((s) => s.value === article.value.status);
    });
    const formatDate = (date) => {
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "long",
        timeStyle: "short"
      }).format(new Date(date));
    };
    async function handleDelete() {
      if (!confirm("Tem certeza que deseja excluir este artigo?")) return;
      try {
        const success = await deleteArticle(id);
        if (success) {
          router.push("/articles");
        }
      } catch (error2) {
        console.error("Erro ao excluir artigo:", error2);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_Icon = __nuxt_component_9;
      const _component_Skeleton = _sfc_main$2;
      const _component_Alert = _sfc_main$3;
      const _component_AlertTitle = _sfc_main$4;
      const _component_AlertDescription = _sfc_main$5;
      const _component_Card = _sfc_main$6;
      const _component_CardHeader = _sfc_main$7;
      const _component_CardTitle = _sfc_main$8;
      const _component_CardDescription = _sfc_main$9;
      const _component_CardContent = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-stretch gap-4" }, _attrs))}><div class="flex flex-wrap items-end justify-between gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Detalhes do Artigo </h2><p class="text-muted-foreground"> Visualize as informações do artigo </p></div><div class="flex space-x-2">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        onClick: ($event) => unref(router).push("/articles")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-arrow-left",
              class: "mr-2 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` Voltar `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-radix-icons-arrow-left",
                class: "mr-2 h-4 w-4"
              }),
              createTextVNode(" Voltar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(article)) {
        _push(ssrRenderComponent(_component_Button, {
          variant: "outline",
          onClick: ($event) => unref(router).push(`/articles/edit/${unref(id)}`)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-radix-icons-pencil-1",
                class: "mr-2 h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(` Editar `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "i-radix-icons-pencil-1",
                  class: "mr-2 h-4 w-4"
                }),
                createTextVNode(" Editar ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(article)) {
        _push(ssrRenderComponent(_component_Button, {
          variant: "destructive",
          onClick: handleDelete
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-radix-icons-trash",
                class: "mr-2 h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(` Excluir `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "i-radix-icons-trash",
                  class: "mr-2 h-4 w-4"
                }),
                createTextVNode(" Excluir ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(pending)) {
        _push(`<div class="w-full p-8 flex justify-center">`);
        _push(ssrRenderComponent(_component_Skeleton, { class: "w-full h-[500px]" }, null, _parent));
        _push(`</div>`);
      } else if (unref(error) || !unref(article)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Alert, { variant: "destructive" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AlertTitle, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Erro`);
                  } else {
                    return [
                      createTextVNode("Erro")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AlertDescription, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Não foi possível carregar o artigo. Por favor, tente novamente. `);
                  } else {
                    return [
                      createTextVNode(" Não foi possível carregar o artigo. Por favor, tente novamente. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_AlertTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Erro")
                  ]),
                  _: 1
                }),
                createVNode(_component_AlertDescription, null, {
                  default: withCtx(() => [
                    createTextVNode(" Não foi possível carregar o artigo. Por favor, tente novamente. ")
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
        _push(`<div class="space-y-6">`);
        _push(ssrRenderComponent(_component_Card, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(article).title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(article).title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_CardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                          if (unref(statusDisplay)) {
                            _push4(`<span class="flex items-center"${_scopeId3}>`);
                            if (unref(statusDisplay).icon) {
                              _push4(`<i class="${ssrRenderClass(`${unref(statusDisplay).icon} mr-1 h-4 w-4`)}"${_scopeId3}></i>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(` ${ssrInterpolate(unref(statusDisplay).label)}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<span class="text-muted-foreground"${_scopeId3}> Slug: ${ssrInterpolate(unref(article).slug)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              unref(statusDisplay) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "flex items-center"
                              }, [
                                unref(statusDisplay).icon ? (openBlock(), createBlock("i", {
                                  key: 0,
                                  class: `${unref(statusDisplay).icon} mr-1 h-4 w-4`
                                }, null, 2)) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(unref(statusDisplay).label), 1)
                              ])) : createCommentVNode("", true),
                              createVNode("span", { class: "text-muted-foreground" }, " Slug: " + toDisplayString(unref(article).slug), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(article).title), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardDescription, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            unref(statusDisplay) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "flex items-center"
                            }, [
                              unref(statusDisplay).icon ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: `${unref(statusDisplay).icon} mr-1 h-4 w-4`
                              }, null, 2)) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(unref(statusDisplay).label), 1)
                            ])) : createCommentVNode("", true),
                            createVNode("span", { class: "text-muted-foreground" }, " Slug: " + toDisplayString(unref(article).slug), 1)
                          ])
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
                    _push3(`<div class="grid grid-cols-1 md:grid-cols-3 gap-6"${_scopeId2}><div class="space-y-2"${_scopeId2}><h3 class="font-medium"${_scopeId2}>Meta Descrição</h3><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(unref(article).meta_description || "Nenhuma")}</p></div><div class="space-y-2"${_scopeId2}><h3 class="font-medium"${_scopeId2}>Categorias</h3><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(unref(article).categories || "Nenhuma")}</p></div><div class="space-y-2"${_scopeId2}><h3 class="font-medium"${_scopeId2}>Tags</h3><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(unref(article).tags || "Nenhuma")}</p></div><div class="space-y-2"${_scopeId2}><h3 class="font-medium"${_scopeId2}>Criado em</h3><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(formatDate(unref(article).created_at))}</p></div><div class="space-y-2"${_scopeId2}><h3 class="font-medium"${_scopeId2}>Atualizado em</h3><p class="text-muted-foreground"${_scopeId2}>${ssrInterpolate(formatDate(unref(article).updated_at))}</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("h3", { class: "font-medium" }, "Meta Descrição"),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(unref(article).meta_description || "Nenhuma"), 1)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("h3", { class: "font-medium" }, "Categorias"),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(unref(article).categories || "Nenhuma"), 1)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("h3", { class: "font-medium" }, "Tags"),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(unref(article).tags || "Nenhuma"), 1)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("h3", { class: "font-medium" }, "Criado em"),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(formatDate(unref(article).created_at)), 1)
                        ]),
                        createVNode("div", { class: "space-y-2" }, [
                          createVNode("h3", { class: "font-medium" }, "Atualizado em"),
                          createVNode("p", { class: "text-muted-foreground" }, toDisplayString(formatDate(unref(article).updated_at)), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(article).title), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center gap-2" }, [
                          unref(statusDisplay) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex items-center"
                          }, [
                            unref(statusDisplay).icon ? (openBlock(), createBlock("i", {
                              key: 0,
                              class: `${unref(statusDisplay).icon} mr-1 h-4 w-4`
                            }, null, 2)) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(statusDisplay).label), 1)
                          ])) : createCommentVNode("", true),
                          createVNode("span", { class: "text-muted-foreground" }, " Slug: " + toDisplayString(unref(article).slug), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardContent, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("h3", { class: "font-medium" }, "Meta Descrição"),
                        createVNode("p", { class: "text-muted-foreground" }, toDisplayString(unref(article).meta_description || "Nenhuma"), 1)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("h3", { class: "font-medium" }, "Categorias"),
                        createVNode("p", { class: "text-muted-foreground" }, toDisplayString(unref(article).categories || "Nenhuma"), 1)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("h3", { class: "font-medium" }, "Tags"),
                        createVNode("p", { class: "text-muted-foreground" }, toDisplayString(unref(article).tags || "Nenhuma"), 1)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("h3", { class: "font-medium" }, "Criado em"),
                        createVNode("p", { class: "text-muted-foreground" }, toDisplayString(formatDate(unref(article).created_at)), 1)
                      ]),
                      createVNode("div", { class: "space-y-2" }, [
                        createVNode("h3", { class: "font-medium" }, "Atualizado em"),
                        createVNode("p", { class: "text-muted-foreground" }, toDisplayString(formatDate(unref(article).updated_at)), 1)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Card, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CardHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardTitle, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Conteúdo`);
                        } else {
                          return [
                            createTextVNode("Conteúdo")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Conteúdo")
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
                    _push3(`<div class="prose prose-sm max-w-none dark:prose-invert"${_scopeId2}><p${_scopeId2}>${ssrInterpolate(unref(article).content)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "prose prose-sm max-w-none dark:prose-invert" }, [
                        createVNode("p", null, toDisplayString(unref(article).content), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_CardHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Conteúdo")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_CardContent, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "prose prose-sm max-w-none dark:prose-invert" }, [
                      createVNode("p", null, toDisplayString(unref(article).content), 1)
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.vue.mjs.map
