import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { d as cn, a as _sfc_main$3, b as __nuxt_component_9 } from './server.mjs';
import { defineComponent, provide, computed, unref, mergeProps, withCtx, renderSlot, inject, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7 } from './CardTitle.vue2.mjs';
import { useForwardPropsEmits, ToggleGroupRoot, useForwardProps, ToggleGroupItem } from 'radix-vue';
import { t as toggleVariants } from './index2.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ToggleGroup",
  __ssrInlineRender: true,
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {},
    class: {},
    variant: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    provide("toggleGroup", {
      variant: props.variant,
      size: props.size
    });
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToggleGroupRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex items-center justify-center gap-1", props.class)
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ToggleGroupItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    const context = inject("toggleGroup");
    const delegatedProps = computed(() => {
      const { class: _, variant, size, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(unref(ToggleGroupItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(unref(toggleVariants)({
          variant: ((_a = unref(context)) == null ? void 0 : _a.variant) || _ctx.variant,
          size: ((_b = unref(context)) == null ? void 0 : _b.size) || _ctx.size
        }), props.class)
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
  const _component_Button = _sfc_main$3;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$4;
  const _component_CardHeader = _sfc_main$5;
  const _component_CardTitle = _sfc_main$6;
  const _component_CardContent = _sfc_main$7;
  const _component_ToggleGroup = _sfc_main$2;
  const _component_ToggleGroupItem = _sfc_main$1;
  const _component_Icon = __nuxt_component_9;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Toggle Group </h2><p class="text-muted-foreground"> A set of two-state buttons that can be toggled on or off. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/toggle-group",
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
            to: "https://www.shadcn-vue.com/docs/components/toggle-group",
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
          to: "https://www.radix-vue.com/components/toggle-group",
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
            to: "https://www.radix-vue.com/components/toggle-group",
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
              _push3(ssrRenderComponent(_component_ToggleGroup, { type: "multiple" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "bold",
                      "aria-label": "Toggle bold"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-font-bold",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "italic",
                      "aria-label": "Toggle italic"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-font-italic",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "underline",
                      "aria-label": "Toggle underline"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-underline",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ToggleGroupItem, {
                        value: "bold",
                        "aria-label": "Toggle bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "italic",
                        "aria-label": "Toggle italic"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "underline",
                        "aria-label": "Toggle underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
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
                  createVNode(_component_ToggleGroup, { type: "multiple" }, {
                    default: withCtx(() => [
                      createVNode(_component_ToggleGroupItem, {
                        value: "bold",
                        "aria-label": "Toggle bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "italic",
                        "aria-label": "Toggle italic"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "underline",
                        "aria-label": "Toggle underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
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
                createVNode(_component_ToggleGroup, { type: "multiple" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToggleGroupItem, {
                      value: "bold",
                      "aria-label": "Toggle bold"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-font-bold",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToggleGroupItem, {
                      value: "italic",
                      "aria-label": "Toggle italic"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-font-italic",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToggleGroupItem, {
                      value: "underline",
                      "aria-label": "Toggle underline"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-underline",
                          class: "h-4 w-4"
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
  _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Outline`);
                  } else {
                    return [
                      createTextVNode("Outline")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Outline")
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
              _push3(ssrRenderComponent(_component_ToggleGroup, {
                type: "multiple",
                variant: "outline"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "bold",
                      "aria-label": "Toggle bold"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-font-bold",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "italic",
                      "aria-label": "Toggle italic"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-font-italic",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "underline",
                      "aria-label": "Toggle underline"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-underline",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ToggleGroupItem, {
                        value: "bold",
                        "aria-label": "Toggle bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "italic",
                        "aria-label": "Toggle italic"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "underline",
                        "aria-label": "Toggle underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
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
                  createVNode(_component_ToggleGroup, {
                    type: "multiple",
                    variant: "outline"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ToggleGroupItem, {
                        value: "bold",
                        "aria-label": "Toggle bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "italic",
                        "aria-label": "Toggle italic"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "underline",
                        "aria-label": "Toggle underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
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
                  createTextVNode("Outline")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                createVNode(_component_ToggleGroup, {
                  type: "multiple",
                  variant: "outline"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ToggleGroupItem, {
                      value: "bold",
                      "aria-label": "Toggle bold"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-font-bold",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToggleGroupItem, {
                      value: "italic",
                      "aria-label": "Toggle italic"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-font-italic",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToggleGroupItem, {
                      value: "underline",
                      "aria-label": "Toggle underline"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-underline",
                          class: "h-4 w-4"
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
  _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CardHeader, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_CardTitle, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Single`);
                  } else {
                    return [
                      createTextVNode("Single")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Single")
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
              _push3(ssrRenderComponent(_component_ToggleGroup, { type: "single" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "bold",
                      "aria-label": "Toggle bold"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-font-bold",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "italic",
                      "aria-label": "Toggle italic"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-font-italic",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ToggleGroupItem, {
                      value: "underline",
                      "aria-label": "Toggle underline"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-underline",
                              class: "h-4 w-4"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_ToggleGroupItem, {
                        value: "bold",
                        "aria-label": "Toggle bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "italic",
                        "aria-label": "Toggle italic"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "underline",
                        "aria-label": "Toggle underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
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
                  createVNode(_component_ToggleGroup, { type: "single" }, {
                    default: withCtx(() => [
                      createVNode(_component_ToggleGroupItem, {
                        value: "bold",
                        "aria-label": "Toggle bold"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-bold",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "italic",
                        "aria-label": "Toggle italic"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-font-italic",
                            class: "h-4 w-4"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ToggleGroupItem, {
                        value: "underline",
                        "aria-label": "Toggle underline"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-underline",
                            class: "h-4 w-4"
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
                  createTextVNode("Single")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                createVNode(_component_ToggleGroup, { type: "single" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToggleGroupItem, {
                      value: "bold",
                      "aria-label": "Toggle bold"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-font-bold",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToggleGroupItem, {
                      value: "italic",
                      "aria-label": "Toggle italic"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-font-italic",
                          class: "h-4 w-4"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ToggleGroupItem, {
                      value: "underline",
                      "aria-label": "Toggle underline"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-underline",
                          class: "h-4 w-4"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/toggle-group.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toggleGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { toggleGroup as default };
//# sourceMappingURL=toggle-group.vue.mjs.map
