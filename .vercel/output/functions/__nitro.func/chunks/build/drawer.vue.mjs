import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { DrawerTrigger, DrawerClose } from 'vaul-vue';
import { d as cn, a as _sfc_main$2, K as _sfc_main$7, L as _sfc_main$8, M as _sfc_main$9, N as _sfc_main$a, O as _sfc_main$b, b as __nuxt_component_9 } from './server.mjs';
import { defineComponent, mergeProps, unref, ref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { VisXYContainer, VisStackedBar } from '@unovis/vue';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6 } from './CardTitle.vue2.mjs';
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
import 'lucide-vue-next';
import 'vue-sonner';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DrawerFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mt-auto flex flex-col gap-2 p-4", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "drawer",
  __ssrInlineRender: true,
  setup(__props) {
    const goal = ref(350);
    const data = [
      { goal: 400 },
      { goal: 300 },
      { goal: 200 },
      { goal: 300 },
      { goal: 200 },
      { goal: 278 },
      { goal: 189 },
      { goal: 239 },
      { goal: 300 },
      { goal: 200 },
      { goal: 278 },
      { goal: 189 },
      { goal: 349 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_15;
      const _component_Card = _sfc_main$3;
      const _component_CardHeader = _sfc_main$4;
      const _component_CardTitle = _sfc_main$5;
      const _component_CardContent = _sfc_main$6;
      const _component_Drawer = _sfc_main$7;
      const _component_DrawerTrigger = DrawerTrigger;
      const _component_DrawerContent = _sfc_main$8;
      const _component_DrawerHeader = _sfc_main$9;
      const _component_DrawerTitle = _sfc_main$a;
      const _component_DrawerDescription = _sfc_main$b;
      const _component_Icon = __nuxt_component_9;
      const _component_DrawerFooter = _sfc_main$1;
      const _component_DrawerClose = DrawerClose;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Dialog </h2><p class="text-muted-foreground"> A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. </p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "xs",
        variant: "outline",
        class: "text-xs",
        "as-child": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.shadcn-vue.com/docs/components/drawer",
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
                to: "https://www.shadcn-vue.com/docs/components/drawer",
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
              to: "https://github.com/radix-vue/vaul-vue",
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
                to: "https://github.com/radix-vue/vaul-vue",
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
                  _push3(ssrRenderComponent(_component_Drawer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DrawerTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Open Drawer `);
                                  } else {
                                    return [
                                      createTextVNode(" Open Drawer ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Open Drawer ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DrawerContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mx-auto max-w-sm w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_DrawerHeader, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DrawerTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Move Goal`);
                                        } else {
                                          return [
                                            createTextVNode("Move Goal")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DrawerDescription, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Set your daily activity goal.`);
                                        } else {
                                          return [
                                            createTextVNode("Set your daily activity goal.")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DrawerTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Move Goal")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DrawerDescription, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Set your daily activity goal.")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="p-4 pb-0"${_scopeId4}><div class="flex items-center justify-center space-x-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Button, {
                                variant: "outline",
                                size: "icon",
                                class: "h-8 w-8 shrink-0 rounded-full",
                                disabled: unref(goal) <= 200,
                                onClick: ($event) => goal.value -= 10
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "radix-icons:minus",
                                      class: "h-4 w-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="sr-only"${_scopeId5}>Decrease</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: "radix-icons:minus",
                                        class: "h-4 w-4"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Decrease")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="flex-1 text-center"${_scopeId4}><div class="text-7xl font-bold tracking-tighter"${_scopeId4}>${ssrInterpolate(unref(goal))}</div><div class="text-[0.70rem] text-muted-foreground uppercase"${_scopeId4}> Calories/day </div></div>`);
                              _push5(ssrRenderComponent(_component_Button, {
                                variant: "outline",
                                size: "icon",
                                class: "h-8 w-8 shrink-0 rounded-full",
                                disabled: unref(goal) >= 400,
                                onClick: ($event) => goal.value += 10
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "radix-icons:plus",
                                      class: "h-4 w-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span class="sr-only"${_scopeId5}>Increase</span>`);
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: "radix-icons:plus",
                                        class: "h-4 w-4"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Increase")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="my-3 h-[120px] px-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(VisXYContainer), {
                                data,
                                class: "h-[120px]",
                                style: {
                                  "opacity": 0.9,
                                  "--theme-primary": `hsl(var(--foreground))`
                                }
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(VisStackedBar), {
                                      x: (d, i) => i,
                                      y: (d) => d.goal,
                                      color: "var(--theme-primary)",
                                      "bar-padding": 0.1,
                                      "rounded-corners": 0
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(VisStackedBar), {
                                        x: (d, i) => i,
                                        y: (d) => d.goal,
                                        color: "var(--theme-primary)",
                                        "bar-padding": 0.1,
                                        "rounded-corners": 0
                                      }, null, 8, ["x", "y"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                              _push5(ssrRenderComponent(_component_DrawerFooter, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Button, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Submit`);
                                        } else {
                                          return [
                                            createTextVNode("Submit")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DrawerClose, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Cancel `);
                                              } else {
                                                return [
                                                  createTextVNode(" Cancel ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Button, { variant: "outline" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Cancel ")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Button, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Submit")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DrawerClose, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, { variant: "outline" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mx-auto max-w-sm w-full" }, [
                                  createVNode(_component_DrawerHeader, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DrawerTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Move Goal")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DrawerDescription, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Set your daily activity goal.")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "p-4 pb-0" }, [
                                    createVNode("div", { class: "flex items-center justify-center space-x-2" }, [
                                      createVNode(_component_Button, {
                                        variant: "outline",
                                        size: "icon",
                                        class: "h-8 w-8 shrink-0 rounded-full",
                                        disabled: unref(goal) <= 200,
                                        onClick: ($event) => goal.value -= 10
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "radix-icons:minus",
                                            class: "h-4 w-4"
                                          }),
                                          createVNode("span", { class: "sr-only" }, "Decrease")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "onClick"]),
                                      createVNode("div", { class: "flex-1 text-center" }, [
                                        createVNode("div", { class: "text-7xl font-bold tracking-tighter" }, toDisplayString(unref(goal)), 1),
                                        createVNode("div", { class: "text-[0.70rem] text-muted-foreground uppercase" }, " Calories/day ")
                                      ]),
                                      createVNode(_component_Button, {
                                        variant: "outline",
                                        size: "icon",
                                        class: "h-8 w-8 shrink-0 rounded-full",
                                        disabled: unref(goal) >= 400,
                                        onClick: ($event) => goal.value += 10
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "radix-icons:plus",
                                            class: "h-4 w-4"
                                          }),
                                          createVNode("span", { class: "sr-only" }, "Increase")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "onClick"])
                                    ]),
                                    createVNode("div", { class: "my-3 h-[120px] px-3" }, [
                                      createVNode(unref(VisXYContainer), {
                                        data,
                                        class: "h-[120px]",
                                        style: {
                                          "opacity": 0.9,
                                          "--theme-primary": `hsl(var(--foreground))`
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(VisStackedBar), {
                                            x: (d, i) => i,
                                            y: (d) => d.goal,
                                            color: "var(--theme-primary)",
                                            "bar-padding": 0.1,
                                            "rounded-corners": 0
                                          }, null, 8, ["x", "y"])
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  createVNode(_component_DrawerFooter, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Submit")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DrawerClose, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, { variant: "outline" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Cancel ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DrawerTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open Drawer ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DrawerContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mx-auto max-w-sm w-full" }, [
                                createVNode(_component_DrawerHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DrawerTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Move Goal")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DrawerDescription, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Set your daily activity goal.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "p-4 pb-0" }, [
                                  createVNode("div", { class: "flex items-center justify-center space-x-2" }, [
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      size: "icon",
                                      class: "h-8 w-8 shrink-0 rounded-full",
                                      disabled: unref(goal) <= 200,
                                      onClick: ($event) => goal.value -= 10
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "radix-icons:minus",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Decrease")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"]),
                                    createVNode("div", { class: "flex-1 text-center" }, [
                                      createVNode("div", { class: "text-7xl font-bold tracking-tighter" }, toDisplayString(unref(goal)), 1),
                                      createVNode("div", { class: "text-[0.70rem] text-muted-foreground uppercase" }, " Calories/day ")
                                    ]),
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      size: "icon",
                                      class: "h-8 w-8 shrink-0 rounded-full",
                                      disabled: unref(goal) >= 400,
                                      onClick: ($event) => goal.value += 10
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "radix-icons:plus",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Increase")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"])
                                  ]),
                                  createVNode("div", { class: "my-3 h-[120px] px-3" }, [
                                    createVNode(unref(VisXYContainer), {
                                      data,
                                      class: "h-[120px]",
                                      style: {
                                        "opacity": 0.9,
                                        "--theme-primary": `hsl(var(--foreground))`
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VisStackedBar), {
                                          x: (d, i) => i,
                                          y: (d) => d.goal,
                                          color: "var(--theme-primary)",
                                          "bar-padding": 0.1,
                                          "rounded-corners": 0
                                        }, null, 8, ["x", "y"])
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode(_component_DrawerFooter, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Submit")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DrawerClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, { variant: "outline" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
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
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                      createVNode(_component_Drawer, null, {
                        default: withCtx(() => [
                          createVNode(_component_DrawerTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Open Drawer ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DrawerContent, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mx-auto max-w-sm w-full" }, [
                                createVNode(_component_DrawerHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DrawerTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Move Goal")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DrawerDescription, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Set your daily activity goal.")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "p-4 pb-0" }, [
                                  createVNode("div", { class: "flex items-center justify-center space-x-2" }, [
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      size: "icon",
                                      class: "h-8 w-8 shrink-0 rounded-full",
                                      disabled: unref(goal) <= 200,
                                      onClick: ($event) => goal.value -= 10
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "radix-icons:minus",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Decrease")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"]),
                                    createVNode("div", { class: "flex-1 text-center" }, [
                                      createVNode("div", { class: "text-7xl font-bold tracking-tighter" }, toDisplayString(unref(goal)), 1),
                                      createVNode("div", { class: "text-[0.70rem] text-muted-foreground uppercase" }, " Calories/day ")
                                    ]),
                                    createVNode(_component_Button, {
                                      variant: "outline",
                                      size: "icon",
                                      class: "h-8 w-8 shrink-0 rounded-full",
                                      disabled: unref(goal) >= 400,
                                      onClick: ($event) => goal.value += 10
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "radix-icons:plus",
                                          class: "h-4 w-4"
                                        }),
                                        createVNode("span", { class: "sr-only" }, "Increase")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"])
                                  ]),
                                  createVNode("div", { class: "my-3 h-[120px] px-3" }, [
                                    createVNode(unref(VisXYContainer), {
                                      data,
                                      class: "h-[120px]",
                                      style: {
                                        "opacity": 0.9,
                                        "--theme-primary": `hsl(var(--foreground))`
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(VisStackedBar), {
                                          x: (d, i) => i,
                                          y: (d) => d.goal,
                                          color: "var(--theme-primary)",
                                          "bar-padding": 0.1,
                                          "rounded-corners": 0
                                        }, null, 8, ["x", "y"])
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode(_component_DrawerFooter, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Submit")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DrawerClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, { variant: "outline" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cancel ")
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
                    createVNode(_component_Drawer, null, {
                      default: withCtx(() => [
                        createVNode(_component_DrawerTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Open Drawer ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DrawerContent, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mx-auto max-w-sm w-full" }, [
                              createVNode(_component_DrawerHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DrawerTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Move Goal")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DrawerDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Set your daily activity goal.")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "p-4 pb-0" }, [
                                createVNode("div", { class: "flex items-center justify-center space-x-2" }, [
                                  createVNode(_component_Button, {
                                    variant: "outline",
                                    size: "icon",
                                    class: "h-8 w-8 shrink-0 rounded-full",
                                    disabled: unref(goal) <= 200,
                                    onClick: ($event) => goal.value -= 10
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "radix-icons:minus",
                                        class: "h-4 w-4"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Decrease")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"]),
                                  createVNode("div", { class: "flex-1 text-center" }, [
                                    createVNode("div", { class: "text-7xl font-bold tracking-tighter" }, toDisplayString(unref(goal)), 1),
                                    createVNode("div", { class: "text-[0.70rem] text-muted-foreground uppercase" }, " Calories/day ")
                                  ]),
                                  createVNode(_component_Button, {
                                    variant: "outline",
                                    size: "icon",
                                    class: "h-8 w-8 shrink-0 rounded-full",
                                    disabled: unref(goal) >= 400,
                                    onClick: ($event) => goal.value += 10
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "radix-icons:plus",
                                        class: "h-4 w-4"
                                      }),
                                      createVNode("span", { class: "sr-only" }, "Increase")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"])
                                ]),
                                createVNode("div", { class: "my-3 h-[120px] px-3" }, [
                                  createVNode(unref(VisXYContainer), {
                                    data,
                                    class: "h-[120px]",
                                    style: {
                                      "opacity": 0.9,
                                      "--theme-primary": `hsl(var(--foreground))`
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(VisStackedBar), {
                                        x: (d, i) => i,
                                        y: (d) => d.goal,
                                        color: "var(--theme-primary)",
                                        "bar-padding": 0.1,
                                        "rounded-corners": 0
                                      }, null, 8, ["x", "y"])
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode(_component_DrawerFooter, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Submit")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DrawerClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, { variant: "outline" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Cancel ")
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
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/drawer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=drawer.vue.mjs.map
