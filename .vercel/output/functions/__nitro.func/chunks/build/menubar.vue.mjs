import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, computed, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { d as cn, b as __nuxt_component_9, a as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$c, a as _sfc_main$d, b as _sfc_main$e, c as _sfc_main$f } from './CardTitle.vue2.mjs';
import { useForwardPropsEmits, MenubarRoot, useForwardProps, MenubarPortal, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from 'radix-vue';
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

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Menubar",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
          props.class
        )
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

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MenubarContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 8 },
    align: { default: "start" },
    alignOffset: { default: -4 },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarContent), mergeProps(unref(forwardedProps), {
              class: unref(cn)(
                "z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenubarContent), mergeProps(unref(forwardedProps), {
                class: unref(cn)(
                  "z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MenubarItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          _ctx.inset && "pl-8",
          props.class
        )
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

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MenubarMenu",
  __ssrInlineRender: true,
  props: {
    value: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarMenu), mergeProps(props, _attrs), {
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

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarSeparator), mergeProps({
        class: unref(cn)("-mx-1 my-1 h-px bg-muted", props.class)
      }, unref(forwardedProps), _attrs), null, _parent));
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MenubarShortcut",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: unref(cn)("ml-auto text-xs tracking-widest text-muted-foreground", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSub",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarSub), mergeProps(unref(forwarded), _attrs), {
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSubContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenubarSubContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenubarSubContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MenubarSubTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_9;
      _push(ssrRenderComponent(unref(MenubarSubTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          _ctx.inset && "pl-8",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-chevron-right",
              class: "ml-auto h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-chevron-right",
                class: "ml-auto h-4 w-4"
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MenubarTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(MenubarTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          props.class
        )
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
  const _component_Button = _sfc_main$b;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$c;
  const _component_CardHeader = _sfc_main$d;
  const _component_CardTitle = _sfc_main$e;
  const _component_CardContent = _sfc_main$f;
  const _component_Menubar = _sfc_main$a;
  const _component_MenubarMenu = _sfc_main$7;
  const _component_MenubarTrigger = _sfc_main$1;
  const _component_MenubarContent = _sfc_main$9;
  const _component_MenubarItem = _sfc_main$8;
  const _component_MenubarShortcut = _sfc_main$5;
  const _component_MenubarSeparator = _sfc_main$6;
  const _component_MenubarSub = _sfc_main$4;
  const _component_MenubarSubTrigger = _sfc_main$2;
  const _component_MenubarSubContent = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Menubar </h2><p class="text-muted-foreground"> A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/menubar",
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
            to: "https://www.shadcn-vue.com/docs/components/menubar",
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
          to: "https://www.radix-vue.com/components/menubar",
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
            to: "https://www.radix-vue.com/components/menubar",
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
              _push3(ssrRenderComponent(_component_Menubar, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_MenubarMenu, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_MenubarTrigger, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`File`);
                              } else {
                                return [
                                  createTextVNode("File")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_MenubarContent, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` New Tab `);
                                      _push7(ssrRenderComponent(_component_MenubarShortcut, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`⌘T`);
                                          } else {
                                            return [
                                              createTextVNode("⌘T")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createTextVNode(" New Tab "),
                                        createVNode(_component_MenubarShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("⌘T")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`New Window`);
                                    } else {
                                      return [
                                        createTextVNode("New Window")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Share`);
                                    } else {
                                      return [
                                        createTextVNode("Share")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Print`);
                                    } else {
                                      return [
                                        createTextVNode("Print")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" New Tab "),
                                      createVNode(_component_MenubarShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("⌘T")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("New Window")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSeparator),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Share")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSeparator),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Print")
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
                            createVNode(_component_MenubarTrigger, null, {
                              default: withCtx(() => [
                                createTextVNode("File")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" New Tab "),
                                    createVNode(_component_MenubarShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("⌘T")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("New Window")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSeparator),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Share")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSeparator),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Print")
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
                    _push4(ssrRenderComponent(_component_MenubarMenu, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_MenubarTrigger, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Edit`);
                              } else {
                                return [
                                  createTextVNode("Edit")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_MenubarContent, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Undo `);
                                      _push7(ssrRenderComponent(_component_MenubarShortcut, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`⌘Z`);
                                          } else {
                                            return [
                                              createTextVNode("⌘Z")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createTextVNode(" Undo "),
                                        createVNode(_component_MenubarShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("⌘Z")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Redo `);
                                      _push7(ssrRenderComponent(_component_MenubarShortcut, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`⇧⌘Z`);
                                          } else {
                                            return [
                                              createTextVNode("⇧⌘Z")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createTextVNode(" Redo "),
                                        createVNode(_component_MenubarShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("⇧⌘Z")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarSub, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_MenubarSubTrigger, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Find`);
                                          } else {
                                            return [
                                              createTextVNode("Find")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_MenubarSubContent, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_MenubarItem, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Search the web`);
                                                } else {
                                                  return [
                                                    createTextVNode("Search the web")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_MenubarItem, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Find...`);
                                                } else {
                                                  return [
                                                    createTextVNode("Find...")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_MenubarItem, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Find Next`);
                                                } else {
                                                  return [
                                                    createTextVNode("Find Next")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                            _push8(ssrRenderComponent(_component_MenubarItem, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`Find Previous`);
                                                } else {
                                                  return [
                                                    createTextVNode("Find Previous")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_MenubarItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Search the web")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MenubarSeparator),
                                              createVNode(_component_MenubarItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Find...")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MenubarItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Find Next")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MenubarItem, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Find Previous")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_MenubarSubTrigger, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Find")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_MenubarSubContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_MenubarItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Search the web")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MenubarSeparator),
                                            createVNode(_component_MenubarItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Find...")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MenubarItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Find Next")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MenubarItem, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Find Previous")
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
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarSeparator, null, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cut`);
                                    } else {
                                      return [
                                        createTextVNode("Cut")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Copy`);
                                    } else {
                                      return [
                                        createTextVNode("Copy")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_MenubarItem, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Paste`);
                                    } else {
                                      return [
                                        createTextVNode("Paste")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Undo "),
                                      createVNode(_component_MenubarShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("⌘Z")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Redo "),
                                      createVNode(_component_MenubarShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("⇧⌘Z")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSeparator),
                                  createVNode(_component_MenubarSub, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_MenubarSubTrigger, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarSubContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_MenubarItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Search the web")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MenubarSeparator),
                                          createVNode(_component_MenubarItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Find...")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MenubarItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Find Next")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MenubarItem, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Find Previous")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSeparator),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Cut")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Copy")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Paste")
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
                            createVNode(_component_MenubarTrigger, null, {
                              default: withCtx(() => [
                                createTextVNode("Edit")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Undo "),
                                    createVNode(_component_MenubarShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("⌘Z")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Redo "),
                                    createVNode(_component_MenubarShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("⇧⌘Z")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSeparator),
                                createVNode(_component_MenubarSub, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_MenubarSubTrigger, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarSubContent, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_MenubarItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Search the web")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_MenubarSeparator),
                                        createVNode(_component_MenubarItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Find...")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_MenubarItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Find Next")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_MenubarItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Find Previous")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSeparator),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Cut")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Copy")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Paste")
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
                      createVNode(_component_MenubarMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("File")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" New Tab "),
                                  createVNode(_component_MenubarShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘T")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("New Window")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Share")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Print")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("Edit")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Undo "),
                                  createVNode(_component_MenubarShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘Z")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Redo "),
                                  createVNode(_component_MenubarShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⇧⌘Z")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarSub, null, {
                                default: withCtx(() => [
                                  createVNode(_component_MenubarSubTrigger, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSubContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Search the web")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarSeparator),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find...")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find Next")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find Previous")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Cut")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Copy")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Paste")
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
                  createVNode(_component_Menubar, null, {
                    default: withCtx(() => [
                      createVNode(_component_MenubarMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("File")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" New Tab "),
                                  createVNode(_component_MenubarShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘T")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("New Window")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Share")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Print")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MenubarMenu, null, {
                        default: withCtx(() => [
                          createVNode(_component_MenubarTrigger, null, {
                            default: withCtx(() => [
                              createTextVNode("Edit")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MenubarContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Undo "),
                                  createVNode(_component_MenubarShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘Z")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Redo "),
                                  createVNode(_component_MenubarShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⇧⌘Z")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarSub, null, {
                                default: withCtx(() => [
                                  createVNode(_component_MenubarSubTrigger, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Find")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MenubarSubContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Search the web")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarSeparator),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find...")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find Next")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_MenubarItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Find Previous")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarSeparator),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Cut")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Copy")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MenubarItem, null, {
                                default: withCtx(() => [
                                  createTextVNode("Paste")
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
                createVNode(_component_Menubar, null, {
                  default: withCtx(() => [
                    createVNode(_component_MenubarMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarTrigger, null, {
                          default: withCtx(() => [
                            createTextVNode("File")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" New Tab "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘T")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode("New Window")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarSeparator),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Share")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarSeparator),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Print")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MenubarMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_MenubarTrigger, null, {
                          default: withCtx(() => [
                            createTextVNode("Edit")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MenubarContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" Undo "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘Z")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode(" Redo "),
                                createVNode(_component_MenubarShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⇧⌘Z")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarSeparator),
                            createVNode(_component_MenubarSub, null, {
                              default: withCtx(() => [
                                createVNode(_component_MenubarSubTrigger, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Find")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_MenubarSubContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Search the web")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarSeparator),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find...")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find Next")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MenubarItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Find Previous")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarSeparator),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Cut")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Copy")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MenubarItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Paste")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/menubar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const menubar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { menubar as default };
//# sourceMappingURL=menubar.vue.mjs.map
