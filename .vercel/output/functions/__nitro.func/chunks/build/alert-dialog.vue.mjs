import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { a as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b, e as _sfc_main$c, f as _sfc_main$d, g as _sfc_main$e } from './AlertDialogTitle.vue2.mjs';
import { AlertDialogTrigger } from 'radix-vue';
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
import 'class-variance-authority';
import 'vaul-vue';
import 'lucide-vue-next';
import 'vue-sonner';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AlertDialogTrigger), mergeProps(props, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$2;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$3;
  const _component_CardHeader = _sfc_main$4;
  const _component_CardTitle = _sfc_main$5;
  const _component_CardContent = _sfc_main$6;
  const _component_AlertDialog = _sfc_main$7;
  const _component_AlertDialogTrigger = _sfc_main$1;
  const _component_AlertDialogContent = _sfc_main$8;
  const _component_AlertDialogHeader = _sfc_main$9;
  const _component_AlertDialogTitle = _sfc_main$a;
  const _component_AlertDialogDescription = _sfc_main$b;
  const _component_AlertDialogFooter = _sfc_main$c;
  const _component_AlertDialogCancel = _sfc_main$d;
  const _component_AlertDialogAction = _sfc_main$e;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Alert Dialog </h2><p class="text-muted-foreground"> A modal dialog that interrupts the user with important content and expects a response. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/alert-dialog",
          external: "",
          target: "_blank"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="i-radix-icons-code mr-2"${_scopeId2}></span> Component Source `);
            } else {
              return [
                createVNode("span", { class: "i-radix-icons-code mr-2" }),
                createTextVNode(" Component Source ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, {
            to: "https://www.shadcn-vue.com/docs/components/alert-dialog",
            external: "",
            target: "_blank"
          }, {
            default: withCtx(() => [
              createVNode("span", { class: "i-radix-icons-code mr-2" }),
              createTextVNode(" Component Source ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.radix-vue.com/components/alert-dialog",
          external: "",
          target: "_blank"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Primitive API Reference `);
            } else {
              return [
                createTextVNode(" Primitive API Reference ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, {
            to: "https://www.radix-vue.com/components/alert-dialog",
            external: "",
            target: "_blank"
          }, {
            default: withCtx(() => [
              createTextVNode(" Primitive API Reference ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col gap-4 md:flex-row">`);
  _push(ssrRenderComponent(_component_Card, { class: "flex-1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Basic`);
                  } else {
                    return [
                      createTextVNode("Basic")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Basic")
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
              _push3(`<div class="h-200px flex items-center justify-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_AlertDialog, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_AlertDialogTrigger, { "as-child": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Show Dialog `);
                              } else {
                                return [
                                  createTextVNode(" Show Dialog ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Show Dialog ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AlertDialogContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_AlertDialogHeader, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_AlertDialogTitle, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Are you absolutely sure?`);
                                    } else {
                                      return [
                                        createTextVNode("Are you absolutely sure?")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_AlertDialogDescription, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` This action cannot be undone. This will permanently delete your account and remove your data from our servers. `);
                                    } else {
                                      return [
                                        createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_AlertDialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Are you absolutely sure?")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_AlertDialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_AlertDialogFooter, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_AlertDialogCancel, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cancel`);
                                    } else {
                                      return [
                                        createTextVNode("Cancel")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_AlertDialogAction, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Continue`);
                                    } else {
                                      return [
                                        createTextVNode("Continue")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_AlertDialogCancel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_AlertDialogAction, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Continue")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_AlertDialogHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_AlertDialogTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Are you absolutely sure?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AlertDialogDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AlertDialogFooter, null, {
                              default: withCtx(() => [
                                createVNode(_component_AlertDialogCancel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_AlertDialogAction, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Continue")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_AlertDialogTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Show Dialog ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDialogContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_AlertDialogHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_AlertDialogTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Are you absolutely sure?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AlertDialogDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AlertDialogFooter, null, {
                            default: withCtx(() => [
                              createVNode(_component_AlertDialogCancel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AlertDialogAction, null, {
                                default: withCtx(() => [
                                  createTextVNode("Continue")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "h-200px flex items-center justify-center" }, [
                  createVNode(_component_AlertDialog, null, {
                    default: withCtx(() => [
                      createVNode(_component_AlertDialogTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Show Dialog ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDialogContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_AlertDialogHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_AlertDialogTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Are you absolutely sure?")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AlertDialogDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AlertDialogFooter, null, {
                            default: withCtx(() => [
                              createVNode(_component_AlertDialogCancel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_AlertDialogAction, null, {
                                default: withCtx(() => [
                                  createTextVNode("Continue")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
                  createTextVNode("Basic")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "h-200px flex items-center justify-center" }, [
                createVNode(_component_AlertDialog, null, {
                  default: withCtx(() => [
                    createVNode(_component_AlertDialogTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { variant: "outline" }, {
                          default: withCtx(() => [
                            createTextVNode(" Show Dialog ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AlertDialogContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_AlertDialogHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_AlertDialogTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Are you absolutely sure?")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AlertDialogDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AlertDialogFooter, null, {
                          default: withCtx(() => [
                            createVNode(_component_AlertDialogCancel, null, {
                              default: withCtx(() => [
                                createTextVNode("Cancel")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_AlertDialogAction, null, {
                              default: withCtx(() => [
                                createTextVNode("Continue")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/alert-dialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alertDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { alertDialog as default };
//# sourceMappingURL=alert-dialog.vue.mjs.map
