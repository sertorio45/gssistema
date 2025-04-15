import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { a as _sfc_main$1, b as __nuxt_component_9 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8 } from './index.mjs';
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
import 'devalue';
import 'clsx';
import 'tailwind-merge';
import 'radix-vue';
import 'class-variance-authority';
import 'vaul-vue';
import 'lucide-vue-next';
import 'vue-sonner';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$2;
  const _component_CardHeader = _sfc_main$3;
  const _component_CardTitle = _sfc_main$4;
  const _component_CardContent = _sfc_main$5;
  const _component_Alert = _sfc_main$6;
  const _component_Icon = __nuxt_component_9;
  const _component_AlertTitle = _sfc_main$7;
  const _component_AlertDescription = _sfc_main$8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Alert </h2><p class="text-muted-foreground"> Displays a callout for user attention. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/alert",
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
            to: "https://www.shadcn-vue.com/docs/components/alert",
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
              _push3(ssrRenderComponent(_component_Alert, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Icon, {
                      name: "i-radix-icons-rocket",
                      mode: "svg",
                      class: "h-4 w-4"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AlertTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Heads up!`);
                        } else {
                          return [
                            createTextVNode("Heads up!")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AlertDescription, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` You can add components to your app using the cli. `);
                        } else {
                          return [
                            createTextVNode(" You can add components to your app using the cli. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-rocket",
                        mode: "svg",
                        class: "h-4 w-4"
                      }),
                      createVNode(_component_AlertTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Heads up!")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" You can add components to your app using the cli. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Alert, null, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "i-radix-icons-rocket",
                      mode: "svg",
                      class: "h-4 w-4"
                    }),
                    createVNode(_component_AlertTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Heads up!")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AlertDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" You can add components to your app using the cli. ")
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
              createVNode(_component_Alert, null, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "i-radix-icons-rocket",
                    mode: "svg",
                    class: "h-4 w-4"
                  }),
                  createVNode(_component_AlertTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Heads up!")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AlertDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" You can add components to your app using the cli. ")
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
  }, _parent));
  _push(ssrRenderComponent(_component_Card, { class: "flex-1" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Destructive`);
                  } else {
                    return [
                      createTextVNode("Destructive")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Destructive")
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
              _push3(ssrRenderComponent(_component_Alert, { variant: "destructive" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Icon, {
                      name: "i-radix-icons-exclamation-triangle",
                      mode: "svg"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AlertTitle, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Error`);
                        } else {
                          return [
                            createTextVNode("Error")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AlertDescription, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Your session has expired. Please log in again. `);
                        } else {
                          return [
                            createTextVNode(" Your session has expired. Please log in again. ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-exclamation-triangle",
                        mode: "svg"
                      }),
                      createVNode(_component_AlertTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Error")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Your session has expired. Please log in again. ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Alert, { variant: "destructive" }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "i-radix-icons-exclamation-triangle",
                      mode: "svg"
                    }),
                    createVNode(_component_AlertTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Error")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AlertDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(" Your session has expired. Please log in again. ")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CardHeader, null, {
            default: withCtx(() => [
              createVNode(_component_CardTitle, null, {
                default: withCtx(() => [
                  createTextVNode("Destructive")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode(_component_Alert, { variant: "destructive" }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    name: "i-radix-icons-exclamation-triangle",
                    mode: "svg"
                  }),
                  createVNode(_component_AlertTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Error")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AlertDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(" Your session has expired. Please log in again. ")
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
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { alert as default };
//# sourceMappingURL=alert.vue.mjs.map
