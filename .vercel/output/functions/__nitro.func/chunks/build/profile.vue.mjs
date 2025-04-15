import { _ as __nuxt_component_0 } from './Layout.vue.mjs';
import { useForm, Field, FieldArray } from 'vee-validate';
import { u as useAuth, Y as toast, c as _sfc_main$2, g as _sfc_main$3, d as cn, b as __nuxt_component_9, a as _sfc_main$b } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock, unref, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, d as _sfc_main$8, c as _sfc_main$9 } from './FormMessage.vue2.mjs';
import { _ as _sfc_main$7 } from './Input.vue2.mjs';
import { _ as _sfc_main$a } from './Textarea.vue2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import './nuxt-link.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProfileForm",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const loading = ref(false);
    const formVisible = ref(false);
    const loadingFinished = ref(false);
    ref(false);
    ref(["m@example.com", "m@google.com", "m@support.com"]);
    const userData = ref({
      username: "",
      email: "",
      bio: "",
      avatar: ""
    });
    ref(null);
    const formSchema = toTypedSchema(z.object({
      username: z.string().min(2, {
        message: "Nome de usuário deve ter pelo menos 2 caracteres."
      }).max(30, {
        message: "Nome de usuário não pode ter mais de 30 caracteres."
      }),
      email: z.string({
        required_error: "Email é obrigatório."
      }).email("Forneça um email válido."),
      bio: z.string().max(160, { message: "Bio não pode ter mais de 160 caracteres." }).min(4, { message: "Bio deve ter pelo menos 4 caracteres." }),
      urls: z.array(
        z.object({
          value: z.string().url({ message: "Forneça uma URL válida." })
        })
      ).optional()
    }));
    const { handleSubmit, resetForm } = useForm({
      validationSchema: formSchema,
      initialValues: {
        username: "",
        email: "",
        bio: "",
        urls: [
          { value: "https://shadcn.com" },
          { value: "http://twitter.com/shadcn" }
        ]
      }
    });
    handleSubmit(async (formValues) => {
      var _a;
      try {
        loading.value = true;
        if ((_a = auth.user) == null ? void 0 : _a.id) {
          const updatedUser = await auth.updateProfile(auth.user.id, {
            name: formValues.username,
            email: formValues.email,
            bio: formValues.bio
          });
          userData.value = {
            username: updatedUser.name || "",
            email: updatedUser.email || "",
            bio: updatedUser.bio || "",
            avatar: updatedUser.avatar || ""
          };
          auth.syncUserData();
          toast({
            title: "Perfil atualizado com sucesso!",
            description: "As alterações já estão disponíveis em todo o sistema."
          });
        }
      } catch (error) {
        toast({
          title: "Erro ao atualizar perfil",
          description: (error == null ? void 0 : error.message) || "Tente novamente mais tarde.",
          variant: "destructive"
        });
      } finally {
        loading.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$2;
      const _component_Skeleton = _sfc_main$3;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$4;
      const _component_FormLabel = _sfc_main$5;
      const _component_FormControl = _sfc_main$6;
      const _component_Input = _sfc_main$7;
      const _component_FormDescription = _sfc_main$8;
      const _component_FormMessage = _sfc_main$9;
      const _component_Textarea = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      const _component_Button = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-form-wrapper" }, _attrs))} data-v-fe5a9888><div data-v-fe5a9888><h3 class="text-lg font-medium" data-v-fe5a9888>Perfil</h3><p class="text-sm text-muted-foreground" data-v-fe5a9888> Assim é como os outros vão te ver no site. </p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`<div class="relative mt-6 min-h-[500px]" data-v-fe5a9888><div class="${ssrRenderClass([{
        "opacity-0": formVisible.value,
        "opacity-100": !formVisible.value
      }, "skeleton-container"])}" data-v-fe5a9888><div class="space-y-8" data-v-fe5a9888><div class="space-y-2" data-v-fe5a9888>`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-4 w-24" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-full" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-3 w-3/4" }, null, _parent));
      _push(`</div><div class="space-y-2" data-v-fe5a9888>`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-4 w-16" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-full" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-3 w-2/4" }, null, _parent));
      _push(`</div><div class="space-y-2" data-v-fe5a9888>`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-4 w-12" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-24 w-full" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-3 w-3/5" }, null, _parent));
      _push(`</div><div class="flex gap-2" data-v-fe5a9888>`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-32" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-32" }, null, _parent));
      _push(`</div></div></div><div class="${ssrRenderClass([{
        "opacity-0": !formVisible.value || !loadingFinished.value,
        "opacity-100": formVisible.value && loadingFinished.value
      }, "form-container"])}" data-v-fe5a9888><form class="space-y-8" data-v-fe5a9888>`);
      _push(ssrRenderComponent(_component_FormField, { name: "username" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nome de usuário`);
                      } else {
                        return [
                          createTextVNode("Nome de usuário")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative" data-v-fe5a9888${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "usuário"
                        }, componentField, { disabled: loading.value }), null, _parent4, _scopeId3));
                        if (loading.value) {
                          _push4(`<div class="absolute inset-0 flex items-center justify-center bg-background/50" data-v-fe5a9888${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-3/4" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_Input, mergeProps({
                              type: "text",
                              placeholder: "usuário"
                            }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                            loading.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 flex items-center justify-center bg-background/50"
                            }, [
                              createVNode(_component_Skeleton, { class: "h-5 w-3/4" })
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Este é seu nome de exibição público. Pode ser seu nome real ou um pseudônimo. `);
                      } else {
                        return [
                          createTextVNode(" Este é seu nome de exibição público. Pode ser seu nome real ou um pseudônimo. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Nome de usuário")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_Input, mergeProps({
                            type: "text",
                            placeholder: "usuário"
                          }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute inset-0 flex items-center justify-center bg-background/50"
                          }, [
                            createVNode(_component_Skeleton, { class: "h-5 w-3/4" })
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Este é seu nome de exibição público. Pode ser seu nome real ou um pseudônimo. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Nome de usuário")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_Input, mergeProps({
                          type: "text",
                          placeholder: "usuário"
                        }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute inset-0 flex items-center justify-center bg-background/50"
                        }, [
                          createVNode(_component_Skeleton, { class: "h-5 w-3/4" })
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Este é seu nome de exibição público. Pode ser seu nome real ou um pseudônimo. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { name: "email" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative" data-v-fe5a9888${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Input, mergeProps({
                          type: "email",
                          placeholder: "seu@email.com"
                        }, componentField, { disabled: loading.value }), null, _parent4, _scopeId3));
                        if (loading.value) {
                          _push4(`<div class="absolute inset-0 flex items-center justify-center bg-background/50" data-v-fe5a9888${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-3/4" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_Input, mergeProps({
                              type: "email",
                              placeholder: "seu@email.com"
                            }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                            loading.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 flex items-center justify-center bg-background/50"
                            }, [
                              createVNode(_component_Skeleton, { class: "h-5 w-3/4" })
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Este é o seu email para login e comunicações. `);
                      } else {
                        return [
                          createTextVNode(" Este é o seu email para login e comunicações. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Email")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_Input, mergeProps({
                            type: "email",
                            placeholder: "seu@email.com"
                          }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute inset-0 flex items-center justify-center bg-background/50"
                          }, [
                            createVNode(_component_Skeleton, { class: "h-5 w-3/4" })
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Este é o seu email para login e comunicações. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Email")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_Input, mergeProps({
                          type: "email",
                          placeholder: "seu@email.com"
                        }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute inset-0 flex items-center justify-center bg-background/50"
                        }, [
                          createVNode(_component_Skeleton, { class: "h-5 w-3/4" })
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Este é o seu email para login e comunicações. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FormField, { name: "bio" }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FormItem, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormLabel, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bio`);
                      } else {
                        return [
                          createTextVNode("Bio")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative" data-v-fe5a9888${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Textarea, mergeProps({ placeholder: "Conte um pouco sobre você" }, componentField, { disabled: loading.value }), null, _parent4, _scopeId3));
                        if (loading.value) {
                          _push4(`<div class="absolute inset-0 flex items-center justify-center bg-background/50" data-v-fe5a9888${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Skeleton, { class: "h-20 w-3/4" }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_Textarea, mergeProps({ placeholder: "Conte um pouco sobre você" }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                            loading.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 flex items-center justify-center bg-background/50"
                            }, [
                              createVNode(_component_Skeleton, { class: "h-20 w-3/4" })
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormDescription, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Você pode <span data-v-fe5a9888${_scopeId3}>@mencionar</span> outros usuários e organizações para criar links. `);
                      } else {
                        return [
                          createTextVNode(" Você pode "),
                          createVNode("span", null, "@mencionar"),
                          createTextVNode(" outros usuários e organizações para criar links. ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Bio")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormControl, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_Textarea, mergeProps({ placeholder: "Conte um pouco sobre você" }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                          loading.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute inset-0 flex items-center justify-center bg-background/50"
                          }, [
                            createVNode(_component_Skeleton, { class: "h-20 w-3/4" })
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_FormDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Você pode "),
                        createVNode("span", null, "@mencionar"),
                        createTextVNode(" outros usuários e organizações para criar links. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FormItem, null, {
                default: withCtx(() => [
                  createVNode(_component_FormLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Bio")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormControl, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_Textarea, mergeProps({ placeholder: "Conte um pouco sobre você" }, componentField, { disabled: loading.value }), null, 16, ["disabled"]),
                        loading.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute inset-0 flex items-center justify-center bg-background/50"
                        }, [
                          createVNode(_component_Skeleton, { class: "h-20 w-3/4" })
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_FormDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Você pode "),
                      createVNode("span", null, "@mencionar"),
                      createTextVNode(" outros usuários e organizações para criar links. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_FormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-fe5a9888>`);
      _push(ssrRenderComponent(unref(FieldArray), { name: "urls" }, {
        default: withCtx(({ fields, push, remove }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(fields, (field, index) => {
              _push2(`<div data-v-fe5a9888${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FormField, {
                name: `urls[${index}].value`
              }, {
                default: withCtx(({ componentField }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_FormItem, null, {
                      default: withCtx((_, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_FormLabel, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` URLs `);
                              } else {
                                return [
                                  createTextVNode(" URLs ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_FormDescription, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Adicione links para seu site, blog ou perfis sociais. `);
                              } else {
                                return [
                                  createTextVNode(" Adicione links para seu site, blog ou perfis sociais. ")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="relative flex items-center" data-v-fe5a9888${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_FormControl, null, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Input, mergeProps({
                                  type: "url",
                                  ref_for: true
                                }, componentField, { disabled: loading.value }), null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_Input, mergeProps({
                                    type: "url",
                                    ref_for: true
                                  }, componentField, { disabled: loading.value }), null, 16, ["disabled"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<button type="button" class="absolute end-0 py-2 pe-3 text-muted-foreground"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-fe5a9888${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-cross-1",
                            class: "w-3"
                          }, null, _parent4, _scopeId3));
                          _push4(`</button></div>`);
                          _push4(ssrRenderComponent(_component_FormMessage, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_FormLabel, {
                              class: unref(cn)(index !== 0 && "sr-only")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" URLs ")
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createVNode(_component_FormDescription, {
                              class: unref(cn)(index !== 0 && "sr-only")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Adicione links para seu site, blog ou perfis sociais. ")
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            createVNode("div", { class: "relative flex items-center" }, [
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Input, mergeProps({
                                    type: "url",
                                    ref_for: true
                                  }, componentField, { disabled: loading.value }), null, 16, ["disabled"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("button", {
                                type: "button",
                                class: "absolute end-0 py-2 pe-3 text-muted-foreground",
                                onClick: ($event) => remove(index),
                                disabled: loading.value
                              }, [
                                createVNode(_component_Icon, {
                                  name: "i-radix-icons-cross-1",
                                  class: "w-3"
                                })
                              ], 8, ["onClick", "disabled"])
                            ]),
                            createVNode(_component_FormMessage)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" URLs ")
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_FormDescription, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Adicione links para seu site, blog ou perfis sociais. ")
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode("div", { class: "relative flex items-center" }, [
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Input, mergeProps({
                                  type: "url",
                                  ref_for: true
                                }, componentField, { disabled: loading.value }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("button", {
                              type: "button",
                              class: "absolute end-0 py-2 pe-3 text-muted-foreground",
                              onClick: ($event) => remove(index),
                              disabled: loading.value
                            }, [
                              createVNode(_component_Icon, {
                                name: "i-radix-icons-cross-1",
                                class: "w-3"
                              })
                            ], 8, ["onClick", "disabled"])
                          ]),
                          createVNode(_component_FormMessage)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              variant: "outline",
              size: "sm",
              class: "mt-2 w-20 text-xs",
              onClick: ($event) => push({ value: "" }),
              disabled: loading.value
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Adicionar URL `);
                } else {
                  return [
                    createTextVNode(" Adicionar URL ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(fields, (field, index) => {
                return openBlock(), createBlock("div", {
                  key: `urls-${field.key}`
                }, [
                  createVNode(_component_FormField, {
                    name: `urls[${index}].value`
                  }, {
                    default: withCtx(({ componentField }) => [
                      createVNode(_component_FormItem, null, {
                        default: withCtx(() => [
                          createVNode(_component_FormLabel, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" URLs ")
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode(_component_FormDescription, {
                            class: unref(cn)(index !== 0 && "sr-only")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Adicione links para seu site, blog ou perfis sociais. ")
                            ]),
                            _: 2
                          }, 1032, ["class"]),
                          createVNode("div", { class: "relative flex items-center" }, [
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_Input, mergeProps({
                                  type: "url",
                                  ref_for: true
                                }, componentField, { disabled: loading.value }), null, 16, ["disabled"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("button", {
                              type: "button",
                              class: "absolute end-0 py-2 pe-3 text-muted-foreground",
                              onClick: ($event) => remove(index),
                              disabled: loading.value
                            }, [
                              createVNode(_component_Icon, {
                                name: "i-radix-icons-cross-1",
                                class: "w-3"
                              })
                            ], 8, ["onClick", "disabled"])
                          ]),
                          createVNode(_component_FormMessage)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["name"])
                ]);
              }), 128)),
              createVNode(_component_Button, {
                type: "button",
                variant: "outline",
                size: "sm",
                class: "mt-2 w-20 text-xs",
                onClick: ($event) => push({ value: "" }),
                disabled: loading.value
              }, {
                default: withCtx(() => [
                  createTextVNode(" Adicionar URL ")
                ]),
                _: 2
              }, 1032, ["onClick", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-start gap-2" data-v-fe5a9888>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        disabled: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-lucide-loader-2",
                class: "mr-2 h-4 w-4 animate-spin"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(loading.value ? "Atualizando..." : "Atualizar perfil")}`);
          } else {
            return [
              loading.value ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "i-lucide-loader-2",
                class: "mr-2 h-4 w-4 animate-spin"
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(loading.value ? "Atualizando..." : "Atualizar perfil"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        variant: "outline",
        onClick: unref(resetForm),
        disabled: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Limpar formulário `);
          } else {
            return [
              createTextVNode(" Limpar formulário ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></div>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/settings/ProfileForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe5a9888"]]);

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SettingsLayout = __nuxt_component_0;
  const _component_SettingsProfileForm = __nuxt_component_1;
  _push(ssrRenderComponent(_component_SettingsLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_SettingsProfileForm, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_SettingsProfileForm)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profile as default };
//# sourceMappingURL=profile.vue.mjs.map
