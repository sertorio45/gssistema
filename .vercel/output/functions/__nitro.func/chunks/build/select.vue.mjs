import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { d as cn, a as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$c } from './SelectContent.vue2.mjs';
import { _ as _sfc_main$b } from './SelectGroup.vue2.mjs';
import { SelectLabel } from 'radix-vue';
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
import 'class-variance-authority';
import 'vaul-vue';
import 'lucide-vue-next';
import 'vue-sonner';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SelectLabel",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SelectLabel), mergeProps({
        class: unref(cn)("px-2 py-1.5 text-sm font-semibold", props.class)
      }, _attrs), {
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
  const _component_Select = _sfc_main$7;
  const _component_SelectTrigger = _sfc_main$8;
  const _component_SelectValue = _sfc_main$9;
  const _component_SelectContent = _sfc_main$a;
  const _component_SelectGroup = _sfc_main$b;
  const _component_SelectLabel = _sfc_main$1;
  const _component_SelectItem = _sfc_main$c;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Select </h2><p class="text-muted-foreground"> Displays a list of options for the user to pick from—triggered by a button. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/select",
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
            to: "https://www.shadcn-vue.com/docs/components/select",
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
          to: "https://www.radix-vue.com/components/select",
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
            to: "https://www.radix-vue.com/components/select",
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
              _push3(ssrRenderComponent(_component_Select, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_SelectTrigger, { class: "w-[180px]" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Select a fruit" }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_SelectContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_SelectGroup, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_SelectLabel, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Fruits`);
                                    } else {
                                      return [
                                        createTextVNode("Fruits")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SelectItem, { value: "apple" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Apple `);
                                    } else {
                                      return [
                                        createTextVNode(" Apple ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SelectItem, { value: "banana" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Banana `);
                                    } else {
                                      return [
                                        createTextVNode(" Banana ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SelectItem, { value: "blueberry" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Blueberry `);
                                    } else {
                                      return [
                                        createTextVNode(" Blueberry ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SelectItem, { value: "grapes" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Grapes `);
                                    } else {
                                      return [
                                        createTextVNode(" Grapes ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SelectItem, { value: "pineapple" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Pineapple `);
                                    } else {
                                      return [
                                        createTextVNode(" Pineapple ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_SelectLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Fruits")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "apple" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Apple ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "banana" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Banana ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "blueberry" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Blueberry ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "grapes" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Grapes ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectItem, { value: "pineapple" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pineapple ")
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
                            createVNode(_component_SelectGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Fruits")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "apple" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Apple ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "banana" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Banana ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "blueberry" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Blueberry ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "grapes" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Grapes ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "pineapple" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pineapple ")
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
                      createVNode(_component_SelectTrigger, { class: "w-[180px]" }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Fruits")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "apple" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Apple ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "banana" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Banana ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "blueberry" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Blueberry ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "grapes" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Grapes ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "pineapple" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pineapple ")
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
                createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                  createVNode(_component_Select, null, {
                    default: withCtx(() => [
                      createVNode(_component_SelectTrigger, { class: "w-[180px]" }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SelectContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SelectGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Fruits")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "apple" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Apple ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "banana" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Banana ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "blueberry" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Blueberry ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "grapes" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Grapes ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "pineapple" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pineapple ")
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
              createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                createVNode(_component_Select, null, {
                  default: withCtx(() => [
                    createVNode(_component_SelectTrigger, { class: "w-[180px]" }, {
                      default: withCtx(() => [
                        createVNode(_component_SelectValue, { placeholder: "Select a fruit" })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SelectContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_SelectGroup, null, {
                          default: withCtx(() => [
                            createVNode(_component_SelectLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Fruits")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "apple" }, {
                              default: withCtx(() => [
                                createTextVNode(" Apple ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "banana" }, {
                              default: withCtx(() => [
                                createTextVNode(" Banana ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "blueberry" }, {
                              default: withCtx(() => [
                                createTextVNode(" Blueberry ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "grapes" }, {
                              default: withCtx(() => [
                                createTextVNode(" Grapes ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectItem, { value: "pineapple" }, {
                              default: withCtx(() => [
                                createTextVNode(" Pineapple ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const select = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { select as default };
//# sourceMappingURL=select.vue.mjs.map
