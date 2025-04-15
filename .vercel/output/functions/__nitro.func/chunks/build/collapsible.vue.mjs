import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { a as _sfc_main$1, b as __nuxt_component_9 } from './server.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$6, a as _sfc_main$7, b as _sfc_main$8 } from './CollapsibleTrigger.vue2.mjs';
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
  const _component_Collapsible = _sfc_main$6;
  const _component_CollapsibleTrigger = _sfc_main$7;
  const _component_Icon = __nuxt_component_9;
  const _component_CollapsibleContent = _sfc_main$8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Collapsible </h2><p class="text-muted-foreground"> An interactive component which expands/collapses a panel. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/collapsible",
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
            to: "https://www.shadcn-vue.com/docs/components/collapsible",
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
          to: "https://www.radix-vue.com/components/collapsible",
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
            to: "https://www.radix-vue.com/components/collapsible",
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
  _push(`</div></div><div class="grid gap-4 md:grid-cols-2">`);
  _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
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
              _push3(`<div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Collapsible, { class: "w-full md:w-[350px] space-y-2" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CollapsibleTrigger, { "as-child": "" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="flex cursor-pointer items-center justify-between px-4 space-x-4"${_scopeId4}><h4 class="text-sm font-semibold"${_scopeId4}> @peduarte starred 3 repositories </h4>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            variant: "ghost",
                            size: "sm",
                            class: "w-9 p-0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_Icon, {
                                  name: "radix-icons:caret-sort",
                                  class: "h-4 w-4"
                                }, null, _parent6, _scopeId5));
                                _push6(`<span class="sr-only"${_scopeId5}>Toggle</span>`);
                              } else {
                                return [
                                  createVNode(_component_Icon, {
                                    name: "radix-icons:caret-sort",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Toggle")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex cursor-pointer items-center justify-between px-4 space-x-4" }, [
                              createVNode("h4", { class: "text-sm font-semibold" }, " @peduarte starred 3 repositories "),
                              createVNode(_component_Button, {
                                variant: "ghost",
                                size: "sm",
                                class: "w-9 p-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "radix-icons:caret-sort",
                                    class: "h-4 w-4"
                                  }),
                                  createVNode("span", { class: "sr-only" }, "Toggle")
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<div class="border rounded-md px-4 py-3 text-sm font-mono"${_scopeId3}> @radix-ui/primitives </div>`);
                    _push4(ssrRenderComponent(_component_CollapsibleContent, { class: "space-y-2" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="border rounded-md px-4 py-3 text-sm font-mono"${_scopeId4}> @radix-ui/colors </div><div class="border rounded-md px-4 py-3 text-sm font-mono"${_scopeId4}> @stitches/react </div>`);
                        } else {
                          return [
                            createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/colors "),
                            createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @stitches/react ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex cursor-pointer items-center justify-between px-4 space-x-4" }, [
                            createVNode("h4", { class: "text-sm font-semibold" }, " @peduarte starred 3 repositories "),
                            createVNode(_component_Button, {
                              variant: "ghost",
                              size: "sm",
                              class: "w-9 p-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "radix-icons:caret-sort",
                                  class: "h-4 w-4"
                                }),
                                createVNode("span", { class: "sr-only" }, "Toggle")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/primitives "),
                      createVNode(_component_CollapsibleContent, { class: "space-y-2" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/colors "),
                          createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @stitches/react ")
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
                createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                  createVNode(_component_Collapsible, { class: "w-full md:w-[350px] space-y-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex cursor-pointer items-center justify-between px-4 space-x-4" }, [
                            createVNode("h4", { class: "text-sm font-semibold" }, " @peduarte starred 3 repositories "),
                            createVNode(_component_Button, {
                              variant: "ghost",
                              size: "sm",
                              class: "w-9 p-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "radix-icons:caret-sort",
                                  class: "h-4 w-4"
                                }),
                                createVNode("span", { class: "sr-only" }, "Toggle")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/primitives "),
                      createVNode(_component_CollapsibleContent, { class: "space-y-2" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/colors "),
                          createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @stitches/react ")
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
              createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                createVNode(_component_Collapsible, { class: "w-full md:w-[350px] space-y-2" }, {
                  default: withCtx(() => [
                    createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex cursor-pointer items-center justify-between px-4 space-x-4" }, [
                          createVNode("h4", { class: "text-sm font-semibold" }, " @peduarte starred 3 repositories "),
                          createVNode(_component_Button, {
                            variant: "ghost",
                            size: "sm",
                            class: "w-9 p-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "radix-icons:caret-sort",
                                class: "h-4 w-4"
                              }),
                              createVNode("span", { class: "sr-only" }, "Toggle")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/primitives "),
                    createVNode(_component_CollapsibleContent, { class: "space-y-2" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @radix-ui/colors "),
                        createVNode("div", { class: "border rounded-md px-4 py-3 text-sm font-mono" }, " @stitches/react ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/collapsible.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const collapsible = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { collapsible as default };
//# sourceMappingURL=collapsible.vue.mjs.map
