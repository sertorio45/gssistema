import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, computed, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { d as cn, a as _sfc_main$e } from './server.mjs';
import { _ as _sfc_main$f, a as _sfc_main$g, b as _sfc_main$h, c as _sfc_main$i } from './CardTitle.vue2.mjs';
import { useForwardPropsEmits, ContextMenuRoot, ContextMenuCheckboxItem, ContextMenuItemIndicator, ContextMenuPortal, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, useForwardProps, ContextMenuSubTrigger, ContextMenuTrigger } from 'radix-vue';
import { Check, Circle, ChevronRight } from 'lucide-vue-next';
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
import 'vue-sonner';

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ContextMenu",
  __ssrInlineRender: true,
  props: {
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuRoot), mergeProps(unref(forwarded), _attrs), {
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

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuCheckboxItem",
  __ssrInlineRender: true,
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuCheckboxItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 h-3.5 w-3.5 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ContextMenuItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Check), { class: "h-4 w-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "absolute left-2 h-3.5 w-3.5 flex items-center justify-center" }, [
                createVNode(unref(ContextMenuItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(Check), { class: "h-4 w-4" })
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ContextMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)(
                "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
              createVNode(unref(ContextMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)(
                  "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuItem",
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
      _push(ssrRenderComponent(unref(ContextMenuItem), mergeProps(unref(forwarded), {
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

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuLabel",
  __ssrInlineRender: true,
  props: {
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuLabel), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "px-2 py-1.5 text-sm font-semibold text-foreground",
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

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuRadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuRadioGroup), mergeProps(unref(forwarded), _attrs), {
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
  __name: "ContextMenuRadioItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
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
      _push(ssrRenderComponent(unref(ContextMenuRadioItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 h-3.5 w-3.5 flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ContextMenuItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Circle), { class: "h-2 w-2 fill-current" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Circle), { class: "h-2 w-2 fill-current" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "absolute left-2 h-3.5 w-3.5 flex items-center justify-center" }, [
                createVNode(unref(ContextMenuItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(Circle), { class: "h-2 w-2 fill-current" })
                  ]),
                  _: 1
                })
              ]),
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
  __name: "ContextMenuSeparator",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuSeparator), mergeProps(delegatedProps.value, {
        class: unref(cn)("-mx-1 my-1 h-px bg-border", props.class)
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuShortcut",
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
  __name: "ContextMenuSub",
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
      _push(ssrRenderComponent(unref(ContextMenuSub), mergeProps(unref(forwarded), _attrs), {
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
  __name: "ContextMenuSubContent",
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
      _push(ssrRenderComponent(unref(ContextMenuSubContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuSubTrigger",
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
      _push(ssrRenderComponent(unref(ContextMenuSubTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
          _ctx.inset && "pl-8",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronRight), { class: "ml-auto h-4 w-4" })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ContextMenuTrigger), mergeProps(unref(forwardedProps), _attrs), {
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
  const _component_Button = _sfc_main$e;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$f;
  const _component_CardHeader = _sfc_main$g;
  const _component_CardTitle = _sfc_main$h;
  const _component_CardContent = _sfc_main$i;
  const _component_ContextMenu = _sfc_main$d;
  const _component_ContextMenuTrigger = _sfc_main$1;
  const _component_ContextMenuContent = _sfc_main$b;
  const _component_ContextMenuItem = _sfc_main$a;
  const _component_ContextMenuShortcut = _sfc_main$5;
  const _component_ContextMenuSub = _sfc_main$4;
  const _component_ContextMenuSubTrigger = _sfc_main$2;
  const _component_ContextMenuSubContent = _sfc_main$3;
  const _component_ContextMenuSeparator = _sfc_main$6;
  const _component_ContextMenuCheckboxItem = _sfc_main$c;
  const _component_ContextMenuRadioGroup = _sfc_main$8;
  const _component_ContextMenuLabel = _sfc_main$9;
  const _component_ContextMenuRadioItem = _sfc_main$7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Context Menu </h2><p class="text-muted-foreground"> Displays a menu to the user — such as a set of actions or functions — triggered by a button. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/context-menu",
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
            to: "https://www.shadcn-vue.com/docs/components/context-menu",
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
          to: "https://www.radix-vue.com/components/context-menu",
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
            to: "https://www.radix-vue.com/components/context-menu",
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
              _push3(ssrRenderComponent(_component_ContextMenu, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_ContextMenuTrigger, { class: "h-[150px] w-[300px] flex items-center justify-center border rounded-md border-dashed text-sm" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(` Right click here `);
                        } else {
                          return [
                            createTextVNode(" Right click here ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_ContextMenuContent, { class: "w-64" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_ContextMenuItem, { inset: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Back `);
                                _push6(ssrRenderComponent(_component_ContextMenuShortcut, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`⌘[`);
                                    } else {
                                      return [
                                        createTextVNode("⌘[")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" Back "),
                                  createVNode(_component_ContextMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘[")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuItem, {
                            inset: "",
                            disabled: ""
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Forward `);
                                _push6(ssrRenderComponent(_component_ContextMenuShortcut, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`⌘]`);
                                    } else {
                                      return [
                                        createTextVNode("⌘]")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" Forward "),
                                  createVNode(_component_ContextMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘]")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuItem, { inset: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Reload `);
                                _push6(ssrRenderComponent(_component_ContextMenuShortcut, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`⌘R`);
                                    } else {
                                      return [
                                        createTextVNode("⌘R")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" Reload "),
                                  createVNode(_component_ContextMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘R")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuSub, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_ContextMenuSubTrigger, { inset: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` More Tools `);
                                    } else {
                                      return [
                                        createTextVNode(" More Tools ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_ContextMenuSubContent, { class: "w-48" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_ContextMenuItem, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` Save Page As... `);
                                            _push8(ssrRenderComponent(_component_ContextMenuShortcut, null, {
                                              default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                if (_push9) {
                                                  _push9(`⇧⌘S`);
                                                } else {
                                                  return [
                                                    createTextVNode("⇧⌘S")
                                                  ];
                                                }
                                              }),
                                              _: 1
                                            }, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createTextVNode(" Save Page As... "),
                                              createVNode(_component_ContextMenuShortcut, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("⇧⌘S")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_ContextMenuItem, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Create Shortcut...`);
                                          } else {
                                            return [
                                              createTextVNode("Create Shortcut...")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_ContextMenuItem, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Name Window...`);
                                          } else {
                                            return [
                                              createTextVNode("Name Window...")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_ContextMenuSeparator, null, null, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_ContextMenuItem, null, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`Developer Tools`);
                                          } else {
                                            return [
                                              createTextVNode("Developer Tools")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_ContextMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Save Page As... "),
                                            createVNode(_component_ContextMenuShortcut, null, {
                                              default: withCtx(() => [
                                                createTextVNode("⇧⌘S")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ContextMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Create Shortcut...")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ContextMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Name Window...")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_ContextMenuSeparator),
                                        createVNode(_component_ContextMenuItem, null, {
                                          default: withCtx(() => [
                                            createTextVNode("Developer Tools")
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
                                  createVNode(_component_ContextMenuSubTrigger, { inset: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" More Tools ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuSubContent, { class: "w-48" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_ContextMenuItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save Page As... "),
                                          createVNode(_component_ContextMenuShortcut, null, {
                                            default: withCtx(() => [
                                              createTextVNode("⇧⌘S")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ContextMenuItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Create Shortcut...")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ContextMenuItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Name Window...")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_ContextMenuSeparator),
                                      createVNode(_component_ContextMenuItem, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Developer Tools")
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
                          _push5(ssrRenderComponent(_component_ContextMenuSeparator, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuCheckboxItem, { checked: "" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Show Bookmarks Bar `);
                                _push6(ssrRenderComponent(_component_ContextMenuShortcut, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`⌘⇧B`);
                                    } else {
                                      return [
                                        createTextVNode("⌘⇧B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createTextVNode(" Show Bookmarks Bar "),
                                  createVNode(_component_ContextMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘⇧B")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuCheckboxItem, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Show Full URLs`);
                              } else {
                                return [
                                  createTextVNode("Show Full URLs")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuSeparator, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_ContextMenuRadioGroup, { "model-value": "pedro" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_ContextMenuLabel, { inset: "" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` People `);
                                    } else {
                                      return [
                                        createTextVNode(" People ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_ContextMenuSeparator, null, null, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_ContextMenuRadioItem, { value: "pedro" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Pedro Duarte `);
                                    } else {
                                      return [
                                        createTextVNode(" Pedro Duarte ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_ContextMenuRadioItem, { value: "colm" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Colm Tuite `);
                                    } else {
                                      return [
                                        createTextVNode(" Colm Tuite ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_ContextMenuLabel, { inset: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" People ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuSeparator),
                                  createVNode(_component_ContextMenuRadioItem, { value: "pedro" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Pedro Duarte ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuRadioItem, { value: "colm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Colm Tuite ")
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
                            createVNode(_component_ContextMenuItem, { inset: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" Back "),
                                createVNode(_component_ContextMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘[")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuItem, {
                              inset: "",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Forward "),
                                createVNode(_component_ContextMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘]")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuItem, { inset: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" Reload "),
                                createVNode(_component_ContextMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘R")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuSub, null, {
                              default: withCtx(() => [
                                createVNode(_component_ContextMenuSubTrigger, { inset: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" More Tools ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ContextMenuSubContent, { class: "w-48" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_ContextMenuItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save Page As... "),
                                        createVNode(_component_ContextMenuShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("⇧⌘S")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ContextMenuItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Create Shortcut...")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ContextMenuItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Name Window...")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_ContextMenuSeparator),
                                    createVNode(_component_ContextMenuItem, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Developer Tools")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuSeparator),
                            createVNode(_component_ContextMenuCheckboxItem, { checked: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" Show Bookmarks Bar "),
                                createVNode(_component_ContextMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘⇧B")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuCheckboxItem, null, {
                              default: withCtx(() => [
                                createTextVNode("Show Full URLs")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuSeparator),
                            createVNode(_component_ContextMenuRadioGroup, { "model-value": "pedro" }, {
                              default: withCtx(() => [
                                createVNode(_component_ContextMenuLabel, { inset: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" People ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ContextMenuSeparator),
                                createVNode(_component_ContextMenuRadioItem, { value: "pedro" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Pedro Duarte ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ContextMenuRadioItem, { value: "colm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Colm Tuite ")
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
                      createVNode(_component_ContextMenuTrigger, { class: "h-[150px] w-[300px] flex items-center justify-center border rounded-md border-dashed text-sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" Right click here ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ContextMenuContent, { class: "w-64" }, {
                        default: withCtx(() => [
                          createVNode(_component_ContextMenuItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Back "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘[")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuItem, {
                            inset: "",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Forward "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘]")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Reload "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘R")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuSub, null, {
                            default: withCtx(() => [
                              createVNode(_component_ContextMenuSubTrigger, { inset: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" More Tools ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ContextMenuSubContent, { class: "w-48" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save Page As... "),
                                      createVNode(_component_ContextMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("⇧⌘S")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Create Shortcut...")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Name Window...")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuSeparator),
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Developer Tools")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuSeparator),
                          createVNode(_component_ContextMenuCheckboxItem, { checked: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Show Bookmarks Bar "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘⇧B")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuCheckboxItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Show Full URLs")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuSeparator),
                          createVNode(_component_ContextMenuRadioGroup, { "model-value": "pedro" }, {
                            default: withCtx(() => [
                              createVNode(_component_ContextMenuLabel, { inset: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" People ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ContextMenuSeparator),
                              createVNode(_component_ContextMenuRadioItem, { value: "pedro" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pedro Duarte ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ContextMenuRadioItem, { value: "colm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Colm Tuite ")
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
                  createVNode(_component_ContextMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_ContextMenuTrigger, { class: "h-[150px] w-[300px] flex items-center justify-center border rounded-md border-dashed text-sm" }, {
                        default: withCtx(() => [
                          createTextVNode(" Right click here ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_ContextMenuContent, { class: "w-64" }, {
                        default: withCtx(() => [
                          createVNode(_component_ContextMenuItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Back "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘[")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuItem, {
                            inset: "",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Forward "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘]")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuItem, { inset: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Reload "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘R")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuSub, null, {
                            default: withCtx(() => [
                              createVNode(_component_ContextMenuSubTrigger, { inset: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" More Tools ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ContextMenuSubContent, { class: "w-48" }, {
                                default: withCtx(() => [
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save Page As... "),
                                      createVNode(_component_ContextMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("⇧⌘S")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Create Shortcut...")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Name Window...")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_ContextMenuSeparator),
                                  createVNode(_component_ContextMenuItem, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Developer Tools")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuSeparator),
                          createVNode(_component_ContextMenuCheckboxItem, { checked: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" Show Bookmarks Bar "),
                              createVNode(_component_ContextMenuShortcut, null, {
                                default: withCtx(() => [
                                  createTextVNode("⌘⇧B")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuCheckboxItem, null, {
                            default: withCtx(() => [
                              createTextVNode("Show Full URLs")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ContextMenuSeparator),
                          createVNode(_component_ContextMenuRadioGroup, { "model-value": "pedro" }, {
                            default: withCtx(() => [
                              createVNode(_component_ContextMenuLabel, { inset: "" }, {
                                default: withCtx(() => [
                                  createTextVNode(" People ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ContextMenuSeparator),
                              createVNode(_component_ContextMenuRadioItem, { value: "pedro" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Pedro Duarte ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_ContextMenuRadioItem, { value: "colm" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Colm Tuite ")
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
                createVNode(_component_ContextMenu, null, {
                  default: withCtx(() => [
                    createVNode(_component_ContextMenuTrigger, { class: "h-[150px] w-[300px] flex items-center justify-center border rounded-md border-dashed text-sm" }, {
                      default: withCtx(() => [
                        createTextVNode(" Right click here ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ContextMenuContent, { class: "w-64" }, {
                      default: withCtx(() => [
                        createVNode(_component_ContextMenuItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Back "),
                            createVNode(_component_ContextMenuShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("⌘[")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ContextMenuItem, {
                          inset: "",
                          disabled: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Forward "),
                            createVNode(_component_ContextMenuShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("⌘]")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ContextMenuItem, { inset: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Reload "),
                            createVNode(_component_ContextMenuShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("⌘R")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ContextMenuSub, null, {
                          default: withCtx(() => [
                            createVNode(_component_ContextMenuSubTrigger, { inset: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" More Tools ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuSubContent, { class: "w-48" }, {
                              default: withCtx(() => [
                                createVNode(_component_ContextMenuItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save Page As... "),
                                    createVNode(_component_ContextMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("⇧⌘S")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ContextMenuItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Create Shortcut...")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ContextMenuItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Name Window...")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_ContextMenuSeparator),
                                createVNode(_component_ContextMenuItem, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Developer Tools")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ContextMenuSeparator),
                        createVNode(_component_ContextMenuCheckboxItem, { checked: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" Show Bookmarks Bar "),
                            createVNode(_component_ContextMenuShortcut, null, {
                              default: withCtx(() => [
                                createTextVNode("⌘⇧B")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ContextMenuCheckboxItem, null, {
                          default: withCtx(() => [
                            createTextVNode("Show Full URLs")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ContextMenuSeparator),
                        createVNode(_component_ContextMenuRadioGroup, { "model-value": "pedro" }, {
                          default: withCtx(() => [
                            createVNode(_component_ContextMenuLabel, { inset: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" People ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuSeparator),
                            createVNode(_component_ContextMenuRadioItem, { value: "pedro" }, {
                              default: withCtx(() => [
                                createTextVNode(" Pedro Duarte ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ContextMenuRadioItem, { value: "colm" }, {
                              default: withCtx(() => [
                                createTextVNode(" Colm Tuite ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/context-menu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contextMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contextMenu as default };
//# sourceMappingURL=context-menu.vue.mjs.map
