import { defineComponent, mergeProps, unref, withCtx, createVNode, renderSlot, computed, resolveDynamicComponent, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, useSSRContext, ref, isRef, createCommentVNode, renderList, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { d as cn, P as _sfc_main$p, R as _sfc_main$q, W as useMediaQuery, y as useVModel, $ as useEventListener, a0 as useAppConfig, a as _sfc_main$u, b as __nuxt_component_9, H as useShortcuts, e as useRouter, I as defineShortcuts, u as useAuth, g as _sfc_main$O, h as _sfc_main$P, i as _sfc_main$Q, j as _sfc_main$R, k as _sfc_main$X, a1 as _sfc_main$Y, a2 as useAppSettings, l as useRoute, c as _sfc_main$Z } from './server.mjs';
import { createContext, Primitive, TooltipProvider } from 'radix-vue';
import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { _ as _sfc_main$y, a as _sfc_main$z, b as _sfc_main$A, c as _sfc_main$C } from './DropdownMenuTrigger.vue2.mjs';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$r, a as _sfc_main$s, b as _sfc_main$t } from './TooltipTrigger.vue2.mjs';
import { a as _sfc_main$B, _ as _sfc_main$E } from './DropdownMenuSeparator.vue2.mjs';
import { _ as _sfc_main$S } from './DropdownMenuGroup.vue2.mjs';
import { _ as _sfc_main$T, a as _sfc_main$U, b as _sfc_main$W } from './DialogTitle.vue2.mjs';
import { _ as _sfc_main$V } from './DialogHeader.vue2.mjs';
import { _ as _sfc_main$D } from './DropdownMenuShortcut.vue2.mjs';
import { a as _sfc_main$F, b as _sfc_main$G, _ as _sfc_main$M } from './Kbd.vue2.mjs';
import { a as _sfc_main$H, b as _sfc_main$I, c as _sfc_main$J, d as _sfc_main$K, e as _sfc_main$L } from './CommandList.vue2.mjs';
import { _ as _sfc_main$N } from './CommandSeparator.vue2.mjs';
import { _ as _sfc_main$v, a as _sfc_main$w, b as _sfc_main$x } from './CollapsibleTrigger.vue2.mjs';
import { PanelLeft } from 'lucide-vue-next';
import { f as _sfc_main$_ } from './BreadcrumbCustom.vue2.mjs';
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
import 'vaul-vue';
import 'vue-sonner';

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const [useSidebar, provideSidebarContext] = createContext("Sidebar");

const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.collapsible === "none") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(cn)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", props.class)
        }, _ctx.$attrs, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else if (unref(isMobile)) {
        _push(ssrRenderComponent(_sfc_main$p, mergeProps({ open: unref(openMobile) }, _ctx.$attrs, { "onUpdate:open": unref(setOpenMobile) }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$q, {
                "data-sidebar": "sidebar",
                "data-mobile": "true",
                side: _ctx.side,
                class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="h-full w-full flex flex-col"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "h-full w-full flex flex-col" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$q, {
                  "data-sidebar": "sidebar",
                  "data-mobile": "true",
                  side: _ctx.side,
                  class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
                  style: {
                    "--sidebar-width": unref(SIDEBAR_WIDTH_MOBILE)
                  }
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "h-full w-full flex flex-col" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                }, 8, ["side", "style"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "group peer hidden md:block",
          "data-state": unref(state),
          "data-collapsible": unref(state) === "collapsed" ? _ctx.collapsible : "",
          "data-variant": _ctx.variant,
          "data-side": _ctx.side
        }, _attrs))}><div class="${ssrRenderClass(unref(cn)(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          _ctx.variant === "floating" || _ctx.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
        ))}"></div><div${ssrRenderAttrs(mergeProps({
          class: unref(cn)(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            _ctx.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            _ctx.variant === "floating" || _ctx.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem_+_2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            props.class
          )
        }, _ctx.$attrs))}><div data-sidebar="sidebar" class="h-full w-full flex flex-col bg-sidebar group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      }
    };
  }
});

const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "SidebarContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "content",
        class: unref(cn)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "SidebarFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "footer",
        class: unref(cn)("flex flex-col gap-2 p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroup",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "group",
        class: unref(cn)("relative flex w-full min-w-0 flex-col p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "SidebarGroupLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "group-label",
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(cn)(
          "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
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

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SidebarHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-sidebar": "header",
        class: unref(cn)("flex flex-col gap-2 p-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SidebarInset",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "overflow-x-auto relative flex min-h-svh flex-1 flex-col bg-background",
          "peer-data-[variant=inset]:min-h-[calc(100svh-1rem)] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset][&>header]:rounded-t-xl md:peer-data-[variant=inset]:shadow",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenu",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu",
        class: unref(cn)("flex w-full min-w-0 flex-col gap-1", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});

const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuButtonChild",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "menu-button",
        "data-size": _ctx.size,
        "data-active": _ctx.isActive,
        class: unref(cn)(unref(sidebarMenuButtonVariants)({ variant: _ctx.variant, size: _ctx.size }), props.class),
        as: _ctx.as,
        "as-child": _ctx.asChild
      }, _ctx.$attrs, _attrs), {
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

const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "SidebarMenuButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile, state } = useSidebar();
    const delegatedProps = computed(() => {
      const { tooltip, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.tooltip) {
        _push(ssrRenderComponent(_sfc_main$g, mergeProps({ ...delegatedProps.value, ..._ctx.$attrs }, _attrs), {
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
      } else {
        _push(ssrRenderComponent(_sfc_main$r, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$s, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$g, { ...delegatedProps.value, ..._ctx.$attrs }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$g, { ...delegatedProps.value, ..._ctx.$attrs }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 16)
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$t, {
                side: "right",
                align: "center",
                hidden: unref(state) !== "collapsed" || unref(isMobile)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (typeof _ctx.tooltip === "string") {
                      _push3(`<!--[-->${ssrInterpolate(_ctx.tooltip)}<!--]-->`);
                    } else {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(_ctx.tooltip), null, null), _parent3, _scopeId2);
                    }
                  } else {
                    return [
                      typeof _ctx.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createTextVNode(toDisplayString(_ctx.tooltip), 1)
                      ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.tooltip), { key: 1 }))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$s, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$g, { ...delegatedProps.value, ..._ctx.$attrs }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 16)
                  ]),
                  _: 3
                }),
                createVNode(_sfc_main$t, {
                  side: "right",
                  align: "center",
                  hidden: unref(state) !== "collapsed" || unref(isMobile)
                }, {
                  default: withCtx(() => [
                    typeof _ctx.tooltip === "string" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString(_ctx.tooltip), 1)
                    ], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.tooltip), { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["hidden"])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
});

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu-item",
        class: unref(cn)("group/menu-item relative", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
});

const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSub",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        "data-sidebar": "menu-badge",
        class: unref(cn)(
          "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ul>`);
    };
  }
});

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SidebarMenuSubButton",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    size: { default: "md" },
    isActive: { type: Boolean },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-sidebar": "menu-sub-button",
        as: _ctx.as,
        "as-child": _ctx.asChild,
        "data-size": _ctx.size,
        "data-active": _ctx.isActive,
        class: unref(cn)(
          "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
          "aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
          _ctx.size === "sm" && "text-xs",
          _ctx.size === "md" && "text-sm",
          "group-data-[collapsible=icon]:hidden",
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

const _sfc_main$b = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$2 = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sidebar/SidebarMenuSubItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SidebarProvider",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean, default: true },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const isMobile = useMediaQuery("(max-width: 768px)");
    const openMobile = ref(false);
    const open = useVModel(props, "open", emits, {
      defaultValue: props.defaultOpen ?? false,
      passive: props.open === void 0
    });
    function setOpen(value) {
      open.value = value;
      (void 0).cookie = `${SIDEBAR_COOKIE_NAME}=${open.value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }
    function setOpenMobile(value) {
      openMobile.value = value;
    }
    function toggleSidebar() {
      return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
    }
    useEventListener("keydown", (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    });
    const state = computed(() => open.value ? "expanded" : "collapsed");
    const sidebar = useAppConfig().sidebar;
    provideSidebarContext({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps({ "delay-duration": 0 }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({
              "--sidebar-width": unref(SIDEBAR_WIDTH),
              "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
            })}" class="${ssrRenderClass(("cn" in _ctx ? _ctx.cn : unref(cn))(`group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar`, [props.class, ((_a = unref(sidebar)) == null ? void 0 : _a.side) === "right" ? "flex-row-reverse" : ""]))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                style: {
                  "--sidebar-width": unref(SIDEBAR_WIDTH),
                  "--sidebar-width-icon": unref(SIDEBAR_WIDTH_ICON)
                },
                class: ("cn" in _ctx ? _ctx.cn : unref(cn))(`group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar`, [props.class, ((_b = unref(sidebar)) == null ? void 0 : _b.side) === "right" ? "flex-row-reverse" : ""])
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 6)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SidebarRail",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { toggleSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabindex: -1,
        title: "Toggle Sidebar",
        class: unref(cn)(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "SidebarTrigger",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { toggleSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$u, mergeProps({
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        class: unref(cn)("h-4 w-4", props.class),
        onClick: unref(toggleSidebar)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PanelLeft), null, null, _parent2, _scopeId));
            _push2(`<span class="sr-only"${_scopeId}>Toggle Sidebar</span>`);
          } else {
            return [
              createVNode(unref(PanelLeft)),
              createVNode("span", { class: "sr-only" }, "Toggle Sidebar")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-[current=page]:bg-sidebar-accent aria-[current=page]:font-medium aria-[current=page]:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavGroup",
  __ssrInlineRender: true,
  props: {
    item: {},
    size: { default: "default" }
  },
  setup(__props) {
    const { setOpenMobile } = useSidebar();
    const openCollapsible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$h;
      const _component_Collapsible = _sfc_main$v;
      const _component_SidebarMenuItem = _sfc_main$e;
      const _component_CollapsibleTrigger = _sfc_main$w;
      const _component_SidebarMenuButton = _sfc_main$f;
      const _component_Icon = __nuxt_component_9;
      const _component_CollapsibleContent = _sfc_main$x;
      const _component_SidebarMenuSub = _sfc_main$d;
      const _component_SidebarMenuSubItem = __nuxt_component_8;
      const _component_SidebarMenuSubButton = _sfc_main$c;
      const _component_NuxtLink = __nuxt_component_15;
      _push(ssrRenderComponent(_component_SidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Collapsible, {
              key: _ctx.item.title,
              open: unref(openCollapsible),
              "onUpdate:open": ($event) => isRef(openCollapsible) ? openCollapsible.value = $event : null,
              "as-child": "",
              class: "group/collapsible"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SidebarMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CollapsibleTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuButton, {
                                tooltip: _ctx.item.title,
                                size: _ctx.size
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: _ctx.item.icon || "",
                                      mode: "svg"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<span${_scopeId5}>${ssrInterpolate(_ctx.item.title)}</span>`);
                                    if (_ctx.item.new) {
                                      _push6(`<span class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"${_scopeId5}> New </span>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-chevron-right",
                                      class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Icon, {
                                        name: _ctx.item.icon || "",
                                        mode: "svg"
                                      }, null, 8, ["name"]),
                                      createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                                      _ctx.item.new ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                      }, " New ")) : createCommentVNode("", true),
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-chevron-right",
                                        class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuButton, {
                                  tooltip: _ctx.item.title,
                                  size: _ctx.size
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: _ctx.item.icon || "",
                                      mode: "svg"
                                    }, null, 8, ["name"]),
                                    createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                                    _ctx.item.new ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                    }, " New ")) : createCommentVNode("", true),
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-chevron-right",
                                      class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["tooltip", "size"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CollapsibleContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuSub, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.item.children, (subItem) => {
                                      _push6(ssrRenderComponent(_component_SidebarMenuSubItem, {
                                        key: subItem.title
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_NuxtLink, {
                                                    to: subItem.link,
                                                    onClick: ($event) => unref(setOpenMobile)(false)
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`<span${_scopeId8}>${ssrInterpolate(subItem.title)}</span>`);
                                                        if (subItem.new) {
                                                          _push9(`<span class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"${_scopeId8}> New </span>`);
                                                        } else {
                                                          _push9(`<!---->`);
                                                        }
                                                      } else {
                                                        return [
                                                          createVNode("span", null, toDisplayString(subItem.title), 1),
                                                          subItem.new ? (openBlock(), createBlock("span", {
                                                            key: 0,
                                                            class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                          }, " New ")) : createCommentVNode("", true)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_NuxtLink, {
                                                      to: subItem.link,
                                                      onClick: ($event) => unref(setOpenMobile)(false)
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode("span", null, toDisplayString(subItem.title), 1),
                                                        subItem.new ? (openBlock(), createBlock("span", {
                                                          key: 0,
                                                          class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                        }, " New ")) : createCommentVNode("", true)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["to", "onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_NuxtLink, {
                                                    to: subItem.link,
                                                    onClick: ($event) => unref(setOpenMobile)(false)
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode("span", null, toDisplayString(subItem.title), 1),
                                                      subItem.new ? (openBlock(), createBlock("span", {
                                                        key: 0,
                                                        class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                      }, " New ")) : createCommentVNode("", true)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["to", "onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (subItem) => {
                                        return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                          key: subItem.title
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_NuxtLink, {
                                                  to: subItem.link,
                                                  onClick: ($event) => unref(setOpenMobile)(false)
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode("span", null, toDisplayString(subItem.title), 1),
                                                    subItem.new ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                    }, " New ")) : createCommentVNode("", true)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["to", "onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuSub, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (subItem) => {
                                      return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                        key: subItem.title
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_NuxtLink, {
                                                to: subItem.link,
                                                onClick: ($event) => unref(setOpenMobile)(false)
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("span", null, toDisplayString(subItem.title), 1),
                                                  subItem.new ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                  }, " New ")) : createCommentVNode("", true)
                                                ]),
                                                _: 2
                                              }, 1032, ["to", "onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
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
                          createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarMenuButton, {
                                tooltip: _ctx.item.title,
                                size: _ctx.size
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: _ctx.item.icon || "",
                                    mode: "svg"
                                  }, null, 8, ["name"]),
                                  createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                                  _ctx.item.new ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                  }, " New ")) : createCommentVNode("", true),
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-chevron-right",
                                    class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                  })
                                ]),
                                _: 1
                              }, 8, ["tooltip", "size"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CollapsibleContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarMenuSub, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (subItem) => {
                                    return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                      key: subItem.title
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_NuxtLink, {
                                              to: subItem.link,
                                              onClick: ($event) => unref(setOpenMobile)(false)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("span", null, toDisplayString(subItem.title), 1),
                                                subItem.new ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                                }, " New ")) : createCommentVNode("", true)
                                              ]),
                                              _: 2
                                            }, 1032, ["to", "onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
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
                } else {
                  return [
                    createVNode(_component_SidebarMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuButton, {
                              tooltip: _ctx.item.title,
                              size: _ctx.size
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: _ctx.item.icon || "",
                                  mode: "svg"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                                _ctx.item.new ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                }, " New ")) : createCommentVNode("", true),
                                createVNode(_component_Icon, {
                                  name: "i-lucide-chevron-right",
                                  class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                                })
                              ]),
                              _: 1
                            }, 8, ["tooltip", "size"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CollapsibleContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuSub, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (subItem) => {
                                  return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                    key: subItem.title
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: subItem.link,
                                            onClick: ($event) => unref(setOpenMobile)(false)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", null, toDisplayString(subItem.title), 1),
                                              subItem.new ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                              }, " New ")) : createCommentVNode("", true)
                                            ]),
                                            _: 2
                                          }, 1032, ["to", "onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
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
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(), createBlock(_component_Collapsible, {
                key: _ctx.item.title,
                open: unref(openCollapsible),
                "onUpdate:open": ($event) => isRef(openCollapsible) ? openCollapsible.value = $event : null,
                "as-child": "",
                class: "group/collapsible"
              }, {
                default: withCtx(() => [
                  createVNode(_component_SidebarMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_CollapsibleTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuButton, {
                            tooltip: _ctx.item.title,
                            size: _ctx.size
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: _ctx.item.icon || "",
                                mode: "svg"
                              }, null, 8, ["name"]),
                              createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                              _ctx.item.new ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                              }, " New ")) : createCommentVNode("", true),
                              createVNode(_component_Icon, {
                                name: "i-lucide-chevron-right",
                                class: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                              })
                            ]),
                            _: 1
                          }, 8, ["tooltip", "size"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CollapsibleContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuSub, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.item.children, (subItem) => {
                                return openBlock(), createBlock(_component_SidebarMenuSubItem, {
                                  key: subItem.title
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_SidebarMenuSubButton, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: subItem.link,
                                          onClick: ($event) => unref(setOpenMobile)(false)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", null, toDisplayString(subItem.title), 1),
                                            subItem.new ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                            }, " New ")) : createCommentVNode("", true)
                                          ]),
                                          _: 2
                                        }, 1032, ["to", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
              }, 8, ["open", "onUpdate:open"]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavLink",
  __ssrInlineRender: true,
  props: {
    item: {},
    size: { default: "default" }
  },
  setup(__props) {
    const { setOpenMobile } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$h;
      const _component_SidebarMenuItem = _sfc_main$e;
      const _component_SidebarMenuButton = _sfc_main$f;
      const _component_NuxtLink = __nuxt_component_15;
      const _component_Icon = __nuxt_component_9;
      _push(ssrRenderComponent(_component_SidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SidebarMenuButton, {
                    "as-child": "",
                    tooltip: _ctx.item.title,
                    size: _ctx.size
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: _ctx.item.link,
                          onClick: ($event) => unref(setOpenMobile)(false)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: _ctx.item.icon || "",
                                mode: "svg"
                              }, null, _parent5, _scopeId4));
                              _push5(`<span${_scopeId4}>${ssrInterpolate(_ctx.item.title)}</span>`);
                              if (_ctx.item.new) {
                                _push5(`<span class="rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"${_scopeId4}> New </span>`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: _ctx.item.icon || "",
                                  mode: "svg"
                                }, null, 8, ["name"]),
                                createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                                _ctx.item.new ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                                }, " New ")) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtLink, {
                            to: _ctx.item.link,
                            onClick: ($event) => unref(setOpenMobile)(false)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: _ctx.item.icon || "",
                                mode: "svg"
                              }, null, 8, ["name"]),
                              createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                              _ctx.item.new ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                              }, " New ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["to", "onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SidebarMenuButton, {
                      "as-child": "",
                      tooltip: _ctx.item.title,
                      size: _ctx.size
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: _ctx.item.link,
                          onClick: ($event) => unref(setOpenMobile)(false)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: _ctx.item.icon || "",
                              mode: "svg"
                            }, null, 8, ["name"]),
                            createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                            _ctx.item.new ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                            }, " New ")) : createCommentVNode("", true)
                          ]),
                          _: 1
                        }, 8, ["to", "onClick"])
                      ]),
                      _: 1
                    }, 8, ["tooltip", "size"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_SidebarMenuButton, {
                    "as-child": "",
                    tooltip: _ctx.item.title,
                    size: _ctx.size
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtLink, {
                        to: _ctx.item.link,
                        onClick: ($event) => unref(setOpenMobile)(false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: _ctx.item.icon || "",
                            mode: "svg"
                          }, null, 8, ["name"]),
                          createVNode("span", null, toDisplayString(_ctx.item.title), 1),
                          _ctx.item.new ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "rounded-md bg-#adfa1d px-1.5 py-0.5 text-xs text-black leading-none no-underline group-hover:no-underline"
                          }, " New ")) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["to", "onClick"])
                    ]),
                    _: 1
                  }, 8, ["tooltip", "size"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavHeader",
  __ssrInlineRender: true,
  props: {
    teams: {}
  },
  setup(__props) {
    const props = __props;
    const { isMobile } = useSidebar();
    const activeTeam = ref(props.teams[0]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$h;
      const _component_SidebarMenuItem = _sfc_main$e;
      const _component_DropdownMenu = _sfc_main$y;
      const _component_DropdownMenuTrigger = _sfc_main$z;
      const _component_SidebarMenuButton = _sfc_main$f;
      const _component_Icon = __nuxt_component_9;
      const _component_DropdownMenuContent = _sfc_main$A;
      const _component_DropdownMenuLabel = _sfc_main$B;
      const _component_DropdownMenuItem = _sfc_main$C;
      const _component_DropdownMenuShortcut = _sfc_main$D;
      const _component_DropdownMenuSeparator = _sfc_main$E;
      _push(ssrRenderComponent(_component_SidebarMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: unref(activeTeam).logo,
                                      class: "size-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="grid flex-1 text-left text-sm leading-tight"${_scopeId5}><span class="truncate font-semibold"${_scopeId5}>${ssrInterpolate(unref(activeTeam).name)}</span><span class="truncate text-xs"${_scopeId5}>${ssrInterpolate(unref(activeTeam).plan)}</span></div>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                        createVNode(_component_Icon, {
                                          name: unref(activeTeam).logo,
                                          class: "size-4"
                                        }, null, 8, ["name"])
                                      ]),
                                      createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                        createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                        createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                      ]),
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-chevrons-up-down",
                                        class: "ml-auto"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuButton, {
                                  size: "lg",
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                      createVNode(_component_Icon, {
                                        name: unref(activeTeam).logo,
                                        class: "size-4"
                                      }, null, 8, ["name"])
                                    ]),
                                    createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                      createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                      createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                    ]),
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DropdownMenuContent, {
                          class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                          align: "start",
                          side: unref(isMobile) ? "bottom" : "right"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DropdownMenuLabel, { class: "text-xs text-muted-foreground" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Teams `);
                                  } else {
                                    return [
                                      createTextVNode(" Teams ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(_ctx.teams, (team, index) => {
                                _push5(ssrRenderComponent(_component_DropdownMenuItem, {
                                  key: team.name,
                                  class: "gap-2 p-2",
                                  onClick: ($event) => activeTeam.value = team
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="size-6 flex items-center justify-center border rounded-sm"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: team.logo,
                                        class: "size-4 shrink-0"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div> ${ssrInterpolate(team.name)} `);
                                      _push6(ssrRenderComponent(_component_DropdownMenuShortcut, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`⌘${ssrInterpolate(index + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode("⌘" + toDisplayString(index + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode("div", { class: "size-6 flex items-center justify-center border rounded-sm" }, [
                                          createVNode(_component_Icon, {
                                            name: team.logo,
                                            class: "size-4 shrink-0"
                                          }, null, 8, ["name"])
                                        ]),
                                        createTextVNode(" " + toDisplayString(team.name) + " ", 1),
                                        createVNode(_component_DropdownMenuShortcut, null, {
                                          default: withCtx(() => [
                                            createTextVNode("⌘" + toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuItem, { class: "gap-2 p-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="size-6 flex items-center justify-center border rounded-md bg-background"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-plus",
                                      class: "size-4"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div><div class="text-muted-foreground font-medium"${_scopeId5}> Add team </div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "size-6 flex items-center justify-center border rounded-md bg-background" }, [
                                        createVNode(_component_Icon, {
                                          name: "i-lucide-plus",
                                          class: "size-4"
                                        })
                                      ]),
                                      createVNode("div", { class: "text-muted-foreground font-medium" }, " Add team ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DropdownMenuLabel, { class: "text-xs text-muted-foreground" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Teams ")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.teams, (team, index) => {
                                  return openBlock(), createBlock(_component_DropdownMenuItem, {
                                    key: team.name,
                                    class: "gap-2 p-2",
                                    onClick: ($event) => activeTeam.value = team
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "size-6 flex items-center justify-center border rounded-sm" }, [
                                        createVNode(_component_Icon, {
                                          name: team.logo,
                                          class: "size-4 shrink-0"
                                        }, null, 8, ["name"])
                                      ]),
                                      createTextVNode(" " + toDisplayString(team.name) + " ", 1),
                                      createVNode(_component_DropdownMenuShortcut, null, {
                                        default: withCtx(() => [
                                          createTextVNode("⌘" + toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128)),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuItem, { class: "gap-2 p-2" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "size-6 flex items-center justify-center border rounded-md bg-background" }, [
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-plus",
                                        class: "size-4"
                                      })
                                    ]),
                                    createVNode("div", { class: "text-muted-foreground font-medium" }, " Add team ")
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
                          createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                    createVNode(_component_Icon, {
                                      name: unref(activeTeam).logo,
                                      class: "size-4"
                                    }, null, 8, ["name"])
                                  ]),
                                  createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                    createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                    createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                  ]),
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-chevrons-up-down",
                                    class: "ml-auto"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuContent, {
                            class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                            align: "start",
                            side: unref(isMobile) ? "bottom" : "right"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, { class: "text-xs text-muted-foreground" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Teams ")
                                ]),
                                _: 1
                              }),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.teams, (team, index) => {
                                return openBlock(), createBlock(_component_DropdownMenuItem, {
                                  key: team.name,
                                  class: "gap-2 p-2",
                                  onClick: ($event) => activeTeam.value = team
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "size-6 flex items-center justify-center border rounded-sm" }, [
                                      createVNode(_component_Icon, {
                                        name: team.logo,
                                        class: "size-4 shrink-0"
                                      }, null, 8, ["name"])
                                    ]),
                                    createTextVNode(" " + toDisplayString(team.name) + " ", 1),
                                    createVNode(_component_DropdownMenuShortcut, null, {
                                      default: withCtx(() => [
                                        createTextVNode("⌘" + toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128)),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuItem, { class: "gap-2 p-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "size-6 flex items-center justify-center border rounded-md bg-background" }, [
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-plus",
                                      class: "size-4"
                                    })
                                  ]),
                                  createVNode("div", { class: "text-muted-foreground font-medium" }, " Add team ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["side"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuButton, {
                              size: "lg",
                              class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                  createVNode(_component_Icon, {
                                    name: unref(activeTeam).logo,
                                    class: "size-4"
                                  }, null, 8, ["name"])
                                ]),
                                createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                  createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                  createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                                ]),
                                createVNode(_component_Icon, {
                                  name: "i-lucide-chevrons-up-down",
                                  class: "ml-auto"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenuContent, {
                          class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                          align: "start",
                          side: unref(isMobile) ? "bottom" : "right"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenuLabel, { class: "text-xs text-muted-foreground" }, {
                              default: withCtx(() => [
                                createTextVNode(" Teams ")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.teams, (team, index) => {
                              return openBlock(), createBlock(_component_DropdownMenuItem, {
                                key: team.name,
                                class: "gap-2 p-2",
                                onClick: ($event) => activeTeam.value = team
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "size-6 flex items-center justify-center border rounded-sm" }, [
                                    createVNode(_component_Icon, {
                                      name: team.logo,
                                      class: "size-4 shrink-0"
                                    }, null, 8, ["name"])
                                  ]),
                                  createTextVNode(" " + toDisplayString(team.name) + " ", 1),
                                  createVNode(_component_DropdownMenuShortcut, null, {
                                    default: withCtx(() => [
                                      createTextVNode("⌘" + toDisplayString(index + 1), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128)),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuItem, { class: "gap-2 p-2" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "size-6 flex items-center justify-center border rounded-md bg-background" }, [
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-plus",
                                    class: "size-4"
                                  })
                                ]),
                                createVNode("div", { class: "text-muted-foreground font-medium" }, " Add team ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["side"])
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
              createVNode(_component_SidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuButton, {
                            size: "lg",
                            class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "aspect-square size-8 flex items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" }, [
                                createVNode(_component_Icon, {
                                  name: unref(activeTeam).logo,
                                  class: "size-4"
                                }, null, 8, ["name"])
                              ]),
                              createVNode("div", { class: "grid flex-1 text-left text-sm leading-tight" }, [
                                createVNode("span", { class: "truncate font-semibold" }, toDisplayString(unref(activeTeam).name), 1),
                                createVNode("span", { class: "truncate text-xs" }, toDisplayString(unref(activeTeam).plan), 1)
                              ]),
                              createVNode(_component_Icon, {
                                name: "i-lucide-chevrons-up-down",
                                class: "ml-auto"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenuContent, {
                        class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                        align: "start",
                        side: unref(isMobile) ? "bottom" : "right"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownMenuLabel, { class: "text-xs text-muted-foreground" }, {
                            default: withCtx(() => [
                              createTextVNode(" Teams ")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.teams, (team, index) => {
                            return openBlock(), createBlock(_component_DropdownMenuItem, {
                              key: team.name,
                              class: "gap-2 p-2",
                              onClick: ($event) => activeTeam.value = team
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "size-6 flex items-center justify-center border rounded-sm" }, [
                                  createVNode(_component_Icon, {
                                    name: team.logo,
                                    class: "size-4 shrink-0"
                                  }, null, 8, ["name"])
                                ]),
                                createTextVNode(" " + toDisplayString(team.name) + " ", 1),
                                createVNode(_component_DropdownMenuShortcut, null, {
                                  default: withCtx(() => [
                                    createTextVNode("⌘" + toDisplayString(index + 1), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128)),
                          createVNode(_component_DropdownMenuSeparator),
                          createVNode(_component_DropdownMenuItem, { class: "gap-2 p-2" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "size-6 flex items-center justify-center border rounded-md bg-background" }, [
                                createVNode(_component_Icon, {
                                  name: "i-lucide-plus",
                                  class: "size-4"
                                })
                              ]),
                              createVNode("div", { class: "text-muted-foreground font-medium" }, " Add team ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["side"])
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
    };
  }
});

const navMenu = [
  {
    heading: "General",
    items: [
      {
        title: "Home",
        icon: "i-lucide-home",
        link: "/"
      },
      {
        title: "Email",
        icon: "i-lucide-mail",
        link: "/email",
        requiredRoles: ["admin", "funcionario"]
      },
      {
        title: "Tasks",
        icon: "i-lucide-calendar-check-2",
        link: "/tasks",
        new: true,
        requiredRoles: ["admin", "funcionario"]
      }
    ]
  },
  {
    heading: "",
    items: [
      {
        title: "Articles",
        icon: "i-lucide-file-text",
        requiredRoles: ["admin", "funcionario", "cliente"],
        children: [
          {
            title: "Listing all",
            link: "/articles",
            requiredRoles: ["admin", "funcionario", "cliente"]
          },
          {
            title: "Create",
            link: "/articles/create",
            requiredRoles: ["admin", "funcionario"]
          }
        ]
      }
    ]
  },
  {
    heading: "",
    items: [
      {
        title: "Administration",
        icon: "i-lucide-briefcase",
        requiredRoles: ["admin"],
        children: [
          {
            title: "Users",
            icon: "i-lucide-users",
            link: "/admin/users",
            requiredRoles: ["admin"]
          }
        ]
      }
    ]
  },
  {
    heading: "Pages",
    items: [
      {
        title: "Authentication",
        icon: "i-lucide-lock-keyhole-open",
        children: [
          {
            title: "Login",
            icon: "i-lucide-circle",
            link: "/login"
          },
          {
            title: "Login Basic",
            icon: "i-lucide-circle",
            link: "/login-basic"
          },
          {
            title: "Register",
            icon: "i-lucide-circle",
            link: "/register"
          },
          {
            title: "Forgot Password",
            icon: "i-lucide-circle",
            link: "/forgot-password"
          }
        ]
      },
      {
        title: "Errors",
        icon: "i-lucide-triangle-alert",
        children: [
          {
            title: "401 - Unauthorized",
            icon: "i-lucide-circle",
            link: "/401"
          },
          {
            title: "403 - Forbidden",
            icon: "i-lucide-circle",
            link: "/403"
          },
          {
            title: "404 - Not Found",
            icon: "i-lucide-circle",
            link: "/404"
          },
          {
            title: "500 - Internal Server Error",
            icon: "i-lucide-circle",
            link: "/500"
          },
          {
            title: "503 - Service Unavailable",
            icon: "i-lucide-circle",
            link: "/503"
          }
        ]
      },
      {
        title: "Account Settings",
        icon: "i-lucide-settings",
        new: true,
        children: [
          {
            title: "Profile",
            icon: "i-lucide-circle",
            link: "/settings/profile"
          },
          {
            title: "Account",
            icon: "i-lucide-circle",
            link: "/settings/account"
          },
          {
            title: "Appearance",
            icon: "i-lucide-circle",
            link: "/settings/appearance"
          },
          {
            title: "Notifications",
            icon: "i-lucide-circle",
            link: "/settings/notifications"
          },
          {
            title: "Display",
            icon: "i-lucide-circle",
            link: "/settings/display"
          }
        ]
      }
    ]
  },
  {
    heading: "Components",
    items: [
      {
        title: "Components",
        icon: "i-lucide-component",
        children: [
          {
            title: "Accordion",
            icon: "i-lucide-circle",
            link: "/components/accordion"
          },
          {
            title: "Alert",
            icon: "i-lucide-circle",
            link: "/components/alert"
          },
          {
            title: "Alert Dialog",
            icon: "i-lucide-circle",
            link: "/components/alert-dialog"
          },
          {
            title: "Aspect Ratio",
            icon: "i-lucide-circle",
            link: "/components/aspect-ratio"
          },
          {
            title: "Avatar",
            icon: "i-lucide-circle",
            link: "/components/avatar"
          },
          {
            title: "Badge",
            icon: "i-lucide-circle",
            link: "/components/badge"
          },
          {
            title: "Breadcrumb",
            icon: "i-lucide-circle",
            link: "/components/breadcrumb"
          },
          {
            title: "Button",
            icon: "i-lucide-circle",
            link: "/components/button"
          },
          {
            title: "Calendar",
            icon: "i-lucide-circle",
            link: "/components/calendar"
          },
          {
            title: "Card",
            icon: "i-lucide-circle",
            link: "/components/card"
          },
          {
            title: "Carousel",
            icon: "i-lucide-circle",
            link: "/components/carousel"
          },
          {
            title: "Checkbox",
            icon: "i-lucide-circle",
            link: "/components/checkbox"
          },
          {
            title: "Collapsible",
            icon: "i-lucide-circle",
            link: "/components/collapsible"
          },
          {
            title: "Combobox",
            icon: "i-lucide-circle",
            link: "/components/combobox"
          },
          {
            title: "Command",
            icon: "i-lucide-circle",
            link: "/components/command"
          },
          {
            title: "Context Menu",
            icon: "i-lucide-circle",
            link: "/components/context-menu"
          },
          {
            title: "Dialog",
            icon: "i-lucide-circle",
            link: "/components/dialog"
          },
          {
            title: "Drawer",
            icon: "i-lucide-circle",
            link: "/components/drawer"
          },
          {
            title: "Dropdown Menu",
            icon: "i-lucide-circle",
            link: "/components/dropdown-menu"
          },
          {
            title: "Form",
            icon: "i-lucide-circle",
            link: "/components/form"
          },
          {
            title: "Hover Card",
            icon: "i-lucide-circle",
            link: "/components/hover-card"
          },
          {
            title: "Input",
            icon: "i-lucide-circle",
            link: "/components/input"
          },
          {
            title: "Label",
            icon: "i-lucide-circle",
            link: "/components/label"
          },
          {
            title: "Menubar",
            icon: "i-lucide-circle",
            link: "/components/menubar"
          },
          {
            title: "Navigation Menu",
            icon: "i-lucide-circle",
            link: "/components/navigation-menu"
          },
          {
            title: "Number Field",
            icon: "i-lucide-circle",
            link: "/components/number-field"
          },
          {
            title: "Pagination",
            icon: "i-lucide-circle",
            link: "/components/pagination"
          },
          {
            title: "PIN Input",
            icon: "i-lucide-circle",
            link: "/components/pin-input"
          },
          {
            title: "Popover",
            icon: "i-lucide-circle",
            link: "/components/popover"
          },
          {
            title: "Progress",
            icon: "i-lucide-circle",
            link: "/components/progress"
          },
          {
            title: "Radio Group",
            icon: "i-lucide-circle",
            link: "/components/radio-group"
          },
          {
            title: "Range Calendar",
            icon: "i-lucide-circle",
            link: "/components/range-calendar"
          },
          {
            title: "Resizable",
            icon: "i-lucide-circle",
            link: "/components/resizable"
          },
          {
            title: "Scroll Area",
            icon: "i-lucide-circle",
            link: "/components/scroll-area"
          },
          {
            title: "Select",
            icon: "i-lucide-circle",
            link: "/components/select"
          },
          {
            title: "Separator",
            icon: "i-lucide-circle",
            link: "/components/separator"
          },
          {
            title: "Sheet",
            icon: "i-lucide-circle",
            link: "/components/sheet"
          },
          {
            title: "Skeleton",
            icon: "i-lucide-circle",
            link: "/components/skeleton"
          },
          {
            title: "Slider",
            icon: "i-lucide-circle",
            link: "/components/slider"
          },
          {
            title: "Sonner",
            icon: "i-lucide-circle",
            link: "/components/sonner"
          },
          {
            title: "Stepper",
            icon: "i-lucide-circle",
            link: "/components/stepper",
            new: true
          },
          {
            title: "Switch",
            icon: "i-lucide-circle",
            link: "/components/switch"
          },
          {
            title: "Table",
            icon: "i-lucide-circle",
            link: "/components/table"
          },
          {
            title: "Tabs",
            icon: "i-lucide-circle",
            link: "/components/tabs"
          },
          {
            title: "Tags Input",
            icon: "i-lucide-circle",
            link: "/components/tags-input"
          },
          {
            title: "Textarea",
            icon: "i-lucide-circle",
            link: "/components/textarea"
          },
          {
            title: "Toast",
            icon: "i-lucide-circle",
            link: "/components/toast"
          },
          {
            title: "Toggle",
            icon: "i-lucide-circle",
            link: "/components/toggle"
          },
          {
            title: "Toggle Group",
            icon: "i-lucide-circle",
            link: "/components/toggle-group"
          },
          {
            title: "Tooltip",
            icon: "i-lucide-circle",
            link: "/components/tooltip"
          }
        ]
      }
    ]
  }
];
const navMenuBottom = [
  {
    title: "Help & Support",
    icon: "i-lucide-circle-help",
    link: "https://github.com/dianprata/nuxt-shadcn-dashboard"
  },
  {
    title: "Feedback",
    icon: "i-lucide-send",
    link: "https://github.com/dianprata/nuxt-shadcn-dashboard"
  }
];
function filterMenuByRole(menus, role) {
  if (!role) {
    return [];
  }
  const normalizedRole = typeof role === "string" ? role.toLowerCase() : String(role).toLowerCase();
  return menus.map((menuSection) => {
    const filteredItems = menuSection.items.filter((item) => {
      if ("link" in item) {
        if (!item.requiredRoles) {
          return true;
        }
        return item.requiredRoles.some((r) => r.toLowerCase() === normalizedRole);
      }
      if ("children" in item) {
        if (item.requiredRoles && !item.requiredRoles.some((r) => r.toLowerCase() === normalizedRole)) {
          return false;
        }
        const filteredChildren = item.children.filter(
          (child) => !child.requiredRoles || child.requiredRoles.some((r) => r.toLowerCase() === normalizedRole)
        );
        if (filteredChildren.length === 0) {
          return false;
        }
        item = { ...item, children: filteredChildren };
        return true;
      }
      return true;
    });
    if (filteredItems.length === 0) {
      return void 0;
    }
    return {
      ...menuSection,
      items: filteredItems
    };
  }).filter((section) => !!section);
}

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const { metaSymbol } = useShortcuts();
    const openCommand = ref(false);
    const router = useRouter();
    defineShortcuts({
      Meta_K: () => openCommand.value = true
    });
    const componentsNav = computed(() => {
      return navMenu.flatMap((nav) => nav.items).find((item) => item.title === "Components");
    });
    function handleSelectLink(link) {
      router.push(link);
      openCommand.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenuButton = _sfc_main$f;
      const _component_Button = _sfc_main$u;
      const _component_Icon = __nuxt_component_9;
      const _component_BaseKbd = _sfc_main$F;
      const _component_CommandDialog = _sfc_main$G;
      const _component_CommandInput = _sfc_main$H;
      const _component_CommandList = _sfc_main$I;
      const _component_CommandEmpty = _sfc_main$J;
      const _component_CommandGroup = _sfc_main$K;
      const _component_CommandItem = _sfc_main$L;
      const _component_CommandShortcut = _sfc_main$M;
      const _component_CommandSeparator = _sfc_main$N;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SidebarMenuButton, {
        "as-child": "",
        tooltip: "Search"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              variant: "outline",
              size: "sm",
              class: "text-xs",
              onClick: ($event) => openCommand.value = !unref(openCommand)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "i-lucide-search" }, null, _parent3, _scopeId2));
                  _push3(`<span class="font-normal group-data-[collapsible=icon]:hidden"${_scopeId2}>Search documentation</span><div class="ml-auto flex items-center space-x-0.5 group-data-[collapsible=icon]:hidden"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_BaseKbd, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(metaSymbol))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(metaSymbol)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_BaseKbd, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`K`);
                      } else {
                        return [
                          createTextVNode("K")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_Icon, { name: "i-lucide-search" }),
                    createVNode("span", { class: "font-normal group-data-[collapsible=icon]:hidden" }, "Search documentation"),
                    createVNode("div", { class: "ml-auto flex items-center space-x-0.5 group-data-[collapsible=icon]:hidden" }, [
                      createVNode(_component_BaseKbd, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(metaSymbol)), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_BaseKbd, null, {
                        default: withCtx(() => [
                          createTextVNode("K")
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
              createVNode(_component_Button, {
                variant: "outline",
                size: "sm",
                class: "text-xs",
                onClick: ($event) => openCommand.value = !unref(openCommand)
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, { name: "i-lucide-search" }),
                  createVNode("span", { class: "font-normal group-data-[collapsible=icon]:hidden" }, "Search documentation"),
                  createVNode("div", { class: "ml-auto flex items-center space-x-0.5 group-data-[collapsible=icon]:hidden" }, [
                    createVNode(_component_BaseKbd, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(metaSymbol)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_BaseKbd, null, {
                      default: withCtx(() => [
                        createTextVNode("K")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommandDialog, {
        open: unref(openCommand),
        "onUpdate:open": ($event) => isRef(openCommand) ? openCommand.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CommandInput, { placeholder: "Type a command or search..." }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommandList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CommandEmpty, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`No results found.`);
                      } else {
                        return [
                          createTextVNode("No results found.")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CommandGroup, { heading: "Suggestions" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CommandItem, {
                          value: "Home",
                          onSelect: ($event) => handleSelectLink("/")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Home `);
                              _push5(ssrRenderComponent(_component_CommandShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BaseKbd, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`G`);
                                        } else {
                                          return [
                                            createTextVNode("G")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_BaseKbd, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`H`);
                                        } else {
                                          return [
                                            createTextVNode("H")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BaseKbd, null, {
                                        default: withCtx(() => [
                                          createTextVNode("G")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_BaseKbd, null, {
                                        default: withCtx(() => [
                                          createTextVNode("H")
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
                                createTextVNode(" Home "),
                                createVNode(_component_CommandShortcut, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseKbd, null, {
                                      default: withCtx(() => [
                                        createTextVNode("G")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseKbd, null, {
                                      default: withCtx(() => [
                                        createTextVNode("H")
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
                        _push4(ssrRenderComponent(_component_CommandItem, {
                          value: "email",
                          onSelect: ($event) => handleSelectLink("/email")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Email `);
                              _push5(ssrRenderComponent(_component_CommandShortcut, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_BaseKbd, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`G`);
                                        } else {
                                          return [
                                            createTextVNode("G")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_BaseKbd, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`E`);
                                        } else {
                                          return [
                                            createTextVNode("E")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_BaseKbd, null, {
                                        default: withCtx(() => [
                                          createTextVNode("G")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_BaseKbd, null, {
                                        default: withCtx(() => [
                                          createTextVNode("E")
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
                                createTextVNode(" Email "),
                                createVNode(_component_CommandShortcut, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_BaseKbd, null, {
                                      default: withCtx(() => [
                                        createTextVNode("G")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_BaseKbd, null, {
                                      default: withCtx(() => [
                                        createTextVNode("E")
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
                          createVNode(_component_CommandItem, {
                            value: "Home",
                            onSelect: ($event) => handleSelectLink("/")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Home "),
                              createVNode(_component_CommandShortcut, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseKbd, null, {
                                    default: withCtx(() => [
                                      createTextVNode("G")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseKbd, null, {
                                    default: withCtx(() => [
                                      createTextVNode("H")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSelect"]),
                          createVNode(_component_CommandItem, {
                            value: "email",
                            onSelect: ($event) => handleSelectLink("/email")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Email "),
                              createVNode(_component_CommandShortcut, null, {
                                default: withCtx(() => [
                                  createVNode(_component_BaseKbd, null, {
                                    default: withCtx(() => [
                                      createTextVNode("G")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_BaseKbd, null, {
                                    default: withCtx(() => [
                                      createTextVNode("E")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSelect"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CommandSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CommandGroup, { heading: "Components" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList((_a = unref(componentsNav)) == null ? void 0 : _a.children, (nav) => {
                          _push4(ssrRenderComponent(_component_CommandItem, {
                            key: nav.title,
                            value: nav.title,
                            class: "gap-2",
                            onSelect: ($event) => handleSelectLink(nav.link)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_Icon, { name: "i-radix-icons-circle" }, null, _parent5, _scopeId4));
                                _push5(` ${ssrInterpolate(nav.title)}`);
                              } else {
                                return [
                                  createVNode(_component_Icon, { name: "i-radix-icons-circle" }),
                                  createTextVNode(" " + toDisplayString(nav.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(componentsNav)) == null ? void 0 : _b.children, (nav) => {
                            return openBlock(), createBlock(_component_CommandItem, {
                              key: nav.title,
                              value: nav.title,
                              class: "gap-2",
                              onSelect: ($event) => handleSelectLink(nav.link)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, { name: "i-radix-icons-circle" }),
                                createTextVNode(" " + toDisplayString(nav.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "onSelect"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CommandEmpty, null, {
                      default: withCtx(() => [
                        createTextVNode("No results found.")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CommandGroup, { heading: "Suggestions" }, {
                      default: withCtx(() => [
                        createVNode(_component_CommandItem, {
                          value: "Home",
                          onSelect: ($event) => handleSelectLink("/")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Home "),
                            createVNode(_component_CommandShortcut, null, {
                              default: withCtx(() => [
                                createVNode(_component_BaseKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("G")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("H")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onSelect"]),
                        createVNode(_component_CommandItem, {
                          value: "email",
                          onSelect: ($event) => handleSelectLink("/email")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Email "),
                            createVNode(_component_CommandShortcut, null, {
                              default: withCtx(() => [
                                createVNode(_component_BaseKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("G")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_BaseKbd, null, {
                                  default: withCtx(() => [
                                    createTextVNode("E")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onSelect"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CommandSeparator),
                    createVNode(_component_CommandGroup, { heading: "Components" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(componentsNav)) == null ? void 0 : _a.children, (nav) => {
                            return openBlock(), createBlock(_component_CommandItem, {
                              key: nav.title,
                              value: nav.title,
                              class: "gap-2",
                              onSelect: ($event) => handleSelectLink(nav.link)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, { name: "i-radix-icons-circle" }),
                                createTextVNode(" " + toDisplayString(nav.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["value", "onSelect"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CommandInput, { placeholder: "Type a command or search..." }),
              createVNode(_component_CommandList, null, {
                default: withCtx(() => [
                  createVNode(_component_CommandEmpty, null, {
                    default: withCtx(() => [
                      createTextVNode("No results found.")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CommandGroup, { heading: "Suggestions" }, {
                    default: withCtx(() => [
                      createVNode(_component_CommandItem, {
                        value: "Home",
                        onSelect: ($event) => handleSelectLink("/")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Home "),
                          createVNode(_component_CommandShortcut, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("G")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("H")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onSelect"]),
                      createVNode(_component_CommandItem, {
                        value: "email",
                        onSelect: ($event) => handleSelectLink("/email")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Email "),
                          createVNode(_component_CommandShortcut, null, {
                            default: withCtx(() => [
                              createVNode(_component_BaseKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("G")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_BaseKbd, null, {
                                default: withCtx(() => [
                                  createTextVNode("E")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onSelect"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CommandSeparator),
                  createVNode(_component_CommandGroup, { heading: "Components" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(componentsNav)) == null ? void 0 : _a.children, (nav) => {
                          return openBlock(), createBlock(_component_CommandItem, {
                            key: nav.title,
                            value: nav.title,
                            class: "gap-2",
                            onSelect: ($event) => handleSelectLink(nav.link)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, { name: "i-radix-icons-circle" }),
                              createTextVNode(" " + toDisplayString(nav.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "onSelect"]);
                        }), 128))
                      ];
                    }),
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
      _push(`<!--]-->`);
    };
  }
});

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarNavFooter",
  __ssrInlineRender: true,
  props: {
    user: {}
  },
  setup(__props) {
    const { isMobile, setOpenMobile } = useSidebar();
    const auth = useAuth();
    const showModalTheme = ref(false);
    const isLoading = ref(true);
    const avatarLoaded = ref(false);
    ref(false);
    function handleLogout() {
      auth.logout();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarMenu = _sfc_main$h;
      const _component_SidebarMenuItem = _sfc_main$e;
      const _component_DropdownMenu = _sfc_main$y;
      const _component_DropdownMenuTrigger = _sfc_main$z;
      const _component_SidebarMenuButton = _sfc_main$f;
      const _component_Skeleton = _sfc_main$O;
      const _component_Avatar = _sfc_main$P;
      const _component_AvatarImage = _sfc_main$Q;
      const _component_AvatarFallback = _sfc_main$R;
      const _component_Icon = __nuxt_component_9;
      const _component_DropdownMenuContent = _sfc_main$A;
      const _component_DropdownMenuLabel = _sfc_main$B;
      const _component_DropdownMenuSeparator = _sfc_main$E;
      const _component_DropdownMenuGroup = _sfc_main$S;
      const _component_DropdownMenuItem = _sfc_main$C;
      const _component_NuxtLink = __nuxt_component_15;
      const _component_Dialog = _sfc_main$T;
      const _component_DialogContent = _sfc_main$U;
      const _component_DialogHeader = _sfc_main$V;
      const _component_DialogTitle = _sfc_main$W;
      const _component_DialogDescription = _sfc_main$X;
      const _component_ThemeCustomize = _sfc_main$Y;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SidebarMenu, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarMenuItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenu, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center space-x-4" data-v-9fec9356${_scopeId5}><div class="relative h-10 w-10" data-v-9fec9356${_scopeId5}>`);
                                    if (unref(isLoading) || !unref(avatarLoaded)) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-10 rounded-full absolute inset-0" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`<div class="${ssrRenderClass([[unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"], "absolute inset-0 transition-opacity duration-200"])}" data-v-9fec9356${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (_ctx.user.avatar) {
                                            _push7(ssrRenderComponent(_component_AvatarImage, {
                                              src: _ctx.user.avatar,
                                              alt: _ctx.user.name
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(ssrRenderComponent(_component_AvatarFallback, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(_ctx.user.name.split(" ").map((n) => n[0]).join(""))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                              key: 0,
                                              src: _ctx.user.avatar,
                                              alt: _ctx.user.name
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                            createVNode(_component_AvatarFallback, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div><div class="space-y-1" data-v-9fec9356${_scopeId5}>`);
                                    if (unref(isLoading)) {
                                      _push6(`<!--[-->`);
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-4 w-[100px] rounded" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-3 w-[150px] rounded" }, null, _parent6, _scopeId5));
                                      _push6(`<!--]-->`);
                                    } else {
                                      _push6(`<!--[--><span class="block font-semibold text-sm" data-v-9fec9356${_scopeId5}>${ssrInterpolate(_ctx.user.name)}</span><span class="block text-xs text-muted-foreground" data-v-9fec9356${_scopeId5}>${ssrInterpolate(_ctx.user.email)}</span><!--]-->`);
                                    }
                                    _push6(`</div></div>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto size-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center space-x-4" }, [
                                        createVNode("div", { class: "relative h-10 w-10" }, [
                                          unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                            key: 0,
                                            class: "h-10 w-10 rounded-full absolute inset-0"
                                          })) : createCommentVNode("", true),
                                          createVNode("div", {
                                            class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                          }, [
                                            createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                              default: withCtx(() => [
                                                _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                  key: 0,
                                                  src: _ctx.user.avatar,
                                                  alt: _ctx.user.name
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                createVNode(_component_AvatarFallback, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ], 2)
                                        ]),
                                        createVNode("div", { class: "space-y-1" }, [
                                          unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                            createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                            createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                          ], 64))
                                        ])
                                      ]),
                                      createVNode(_component_Icon, {
                                        name: "i-lucide-chevrons-up-down",
                                        class: "ml-auto size-4"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SidebarMenuButton, {
                                  size: "lg",
                                  class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center space-x-4" }, [
                                      createVNode("div", { class: "relative h-10 w-10" }, [
                                        unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                          key: 0,
                                          class: "h-10 w-10 rounded-full absolute inset-0"
                                        })) : createCommentVNode("", true),
                                        createVNode("div", {
                                          class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                        }, [
                                          createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                            default: withCtx(() => [
                                              _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                key: 0,
                                                src: _ctx.user.avatar,
                                                alt: _ctx.user.name
                                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                              createVNode(_component_AvatarFallback, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ], 2)
                                      ]),
                                      createVNode("div", { class: "space-y-1" }, [
                                        unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                          createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                          createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                        ], 64))
                                      ])
                                    ]),
                                    createVNode(_component_Icon, {
                                      name: "i-lucide-chevrons-up-down",
                                      class: "ml-auto size-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DropdownMenuContent, {
                          class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex items-center space-x-4 px-2 py-2" data-v-9fec9356${_scopeId5}><div class="relative h-10 w-10" data-v-9fec9356${_scopeId5}>`);
                                    if (unref(isLoading) || !unref(avatarLoaded)) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-10 rounded-full absolute inset-0" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`<div class="${ssrRenderClass([[unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"], "absolute inset-0 transition-opacity duration-200"])}" data-v-9fec9356${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          if (_ctx.user.avatar) {
                                            _push7(ssrRenderComponent(_component_AvatarImage, {
                                              src: _ctx.user.avatar,
                                              alt: _ctx.user.name
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(ssrRenderComponent(_component_AvatarFallback, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(_ctx.user.name.split(" ").map((n) => n[0]).join(""))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                              key: 0,
                                              src: _ctx.user.avatar,
                                              alt: _ctx.user.name
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                            createVNode(_component_AvatarFallback, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div></div><div class="space-y-1" data-v-9fec9356${_scopeId5}>`);
                                    if (unref(isLoading)) {
                                      _push6(`<!--[-->`);
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-4 w-[100px] rounded" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-3 w-[150px] rounded" }, null, _parent6, _scopeId5));
                                      _push6(`<!--]-->`);
                                    } else {
                                      _push6(`<!--[--><span class="block font-semibold text-sm" data-v-9fec9356${_scopeId5}>${ssrInterpolate(_ctx.user.name)}</span><span class="block text-xs text-muted-foreground" data-v-9fec9356${_scopeId5}>${ssrInterpolate(_ctx.user.email)}</span><!--]-->`);
                                    }
                                    _push6(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex items-center space-x-4 px-2 py-2" }, [
                                        createVNode("div", { class: "relative h-10 w-10" }, [
                                          unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                            key: 0,
                                            class: "h-10 w-10 rounded-full absolute inset-0"
                                          })) : createCommentVNode("", true),
                                          createVNode("div", {
                                            class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                          }, [
                                            createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                              default: withCtx(() => [
                                                _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                  key: 0,
                                                  src: _ctx.user.avatar,
                                                  alt: _ctx.user.name
                                                }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                                createVNode(_component_AvatarFallback, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ], 2)
                                        ]),
                                        createVNode("div", { class: "space-y-1" }, [
                                          unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                            createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                            createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                            createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                            createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                          ], 64))
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Icon, { name: "i-lucide-badge-check" }, null, _parent7, _scopeId6));
                                          _push7(` Account `);
                                        } else {
                                          return [
                                            createVNode(_component_Icon, { name: "i-lucide-badge-check" }),
                                            createTextVNode(" Account ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_NuxtLink, {
                                            to: "/settings",
                                            onClick: ($event) => unref(setOpenMobile)(false)
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Icon, { name: "i-lucide-settings" }, null, _parent8, _scopeId7));
                                                _push8(` Settings `);
                                              } else {
                                                return [
                                                  createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                                  createTextVNode(" Settings ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, {
                                              to: "/settings",
                                              onClick: ($event) => unref(setOpenMobile)(false)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                                createTextVNode(" Settings ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Icon, { name: "i-lucide-bell" }, null, _parent7, _scopeId6));
                                          _push7(` Notifications `);
                                        } else {
                                          return [
                                            createVNode(_component_Icon, { name: "i-lucide-bell" }),
                                            createTextVNode(" Notifications ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DropdownMenuItem, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_NuxtLink, {
                                            onClick: ($event) => showModalTheme.value = true,
                                            external: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Icon, { name: "i-lucide-paintbrush" }, null, _parent8, _scopeId7));
                                                _push8(` Theme `);
                                              } else {
                                                return [
                                                  createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                                  createTextVNode(" Theme ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_NuxtLink, {
                                              onClick: ($event) => showModalTheme.value = true,
                                              external: "",
                                              target: "_blank"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                                createTextVNode(" Theme ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, { name: "i-lucide-badge-check" }),
                                          createTextVNode(" Account ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuItem, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            to: "/settings",
                                            onClick: ($event) => unref(setOpenMobile)(false)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                              createTextVNode(" Settings ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, { name: "i-lucide-bell" }),
                                          createTextVNode(" Notifications ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuSeparator),
                                      createVNode(_component_DropdownMenuItem, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_NuxtLink, {
                                            onClick: ($event) => showModalTheme.value = true,
                                            external: "",
                                            target: "_blank"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                              createTextVNode(" Theme ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_DropdownMenuItem, { onClick: handleLogout }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Icon, { name: "i-lucide-log-out" }, null, _parent6, _scopeId5));
                                    _push6(` Log out `);
                                  } else {
                                    return [
                                      createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                      createTextVNode(" Log out ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center space-x-4 px-2 py-2" }, [
                                      createVNode("div", { class: "relative h-10 w-10" }, [
                                        unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                          key: 0,
                                          class: "h-10 w-10 rounded-full absolute inset-0"
                                        })) : createCommentVNode("", true),
                                        createVNode("div", {
                                          class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                        }, [
                                          createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                            default: withCtx(() => [
                                              _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                key: 0,
                                                src: _ctx.user.avatar,
                                                alt: _ctx.user.name
                                              }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                              createVNode(_component_AvatarFallback, null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ], 2)
                                      ]),
                                      createVNode("div", { class: "space-y-1" }, [
                                        unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                          createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                          createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                        ], 64))
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, { name: "i-lucide-badge-check" }),
                                        createTextVNode(" Account ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuItem, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          to: "/settings",
                                          onClick: ($event) => unref(setOpenMobile)(false)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                            createTextVNode(" Settings ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, { name: "i-lucide-bell" }),
                                        createTextVNode(" Notifications ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DropdownMenuSeparator),
                                    createVNode(_component_DropdownMenuItem, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_NuxtLink, {
                                          onClick: ($event) => showModalTheme.value = true,
                                          external: "",
                                          target: "_blank"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                            createTextVNode(" Theme ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                    createTextVNode(" Log out ")
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
                          createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_SidebarMenuButton, {
                                size: "lg",
                                class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center space-x-4" }, [
                                    createVNode("div", { class: "relative h-10 w-10" }, [
                                      unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-10 w-10 rounded-full absolute inset-0"
                                      })) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                      }, [
                                        createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                          default: withCtx(() => [
                                            _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                              key: 0,
                                              src: _ctx.user.avatar,
                                              alt: _ctx.user.name
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                            createVNode(_component_AvatarFallback, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ], 2)
                                    ]),
                                    createVNode("div", { class: "space-y-1" }, [
                                      unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                        createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                        createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                      ], 64))
                                    ])
                                  ]),
                                  createVNode(_component_Icon, {
                                    name: "i-lucide-chevrons-up-down",
                                    class: "ml-auto size-4"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuContent, {
                            class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                            side: unref(isMobile) ? "bottom" : "right",
                            align: "end"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center space-x-4 px-2 py-2" }, [
                                    createVNode("div", { class: "relative h-10 w-10" }, [
                                      unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-10 w-10 rounded-full absolute inset-0"
                                      })) : createCommentVNode("", true),
                                      createVNode("div", {
                                        class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                      }, [
                                        createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                          default: withCtx(() => [
                                            _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                              key: 0,
                                              src: _ctx.user.avatar,
                                              alt: _ctx.user.name
                                            }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                            createVNode(_component_AvatarFallback, null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ], 2)
                                    ]),
                                    createVNode("div", { class: "space-y-1" }, [
                                      unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                        createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                        createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                      ], 64))
                                    ])
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, { name: "i-lucide-badge-check" }),
                                      createTextVNode(" Account ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        to: "/settings",
                                        onClick: ($event) => unref(setOpenMobile)(false)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                          createTextVNode(" Settings ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, { name: "i-lucide-bell" }),
                                      createTextVNode(" Notifications ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DropdownMenuSeparator),
                                  createVNode(_component_DropdownMenuItem, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_NuxtLink, {
                                        onClick: ($event) => showModalTheme.value = true,
                                        external: "",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                          createTextVNode(" Theme ")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                  createTextVNode(" Log out ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["side"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_SidebarMenuButton, {
                              size: "lg",
                              class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center space-x-4" }, [
                                  createVNode("div", { class: "relative h-10 w-10" }, [
                                    unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-10 w-10 rounded-full absolute inset-0"
                                    })) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                    }, [
                                      createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                        default: withCtx(() => [
                                          _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                            key: 0,
                                            src: _ctx.user.avatar,
                                            alt: _ctx.user.name
                                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                          createVNode(_component_AvatarFallback, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ], 2)
                                  ]),
                                  createVNode("div", { class: "space-y-1" }, [
                                    unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                      createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                      createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                    ], 64))
                                  ])
                                ]),
                                createVNode(_component_Icon, {
                                  name: "i-lucide-chevrons-up-down",
                                  class: "ml-auto size-4"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DropdownMenuContent, {
                          class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                          side: unref(isMobile) ? "bottom" : "right",
                          align: "end"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center space-x-4 px-2 py-2" }, [
                                  createVNode("div", { class: "relative h-10 w-10" }, [
                                    unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-10 w-10 rounded-full absolute inset-0"
                                    })) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                    }, [
                                      createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                        default: withCtx(() => [
                                          _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                            key: 0,
                                            src: _ctx.user.avatar,
                                            alt: _ctx.user.name
                                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                          createVNode(_component_AvatarFallback, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ], 2)
                                  ]),
                                  createVNode("div", { class: "space-y-1" }, [
                                    unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                      createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                      createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                      createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                      createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                    ], 64))
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, { name: "i-lucide-badge-check" }),
                                    createTextVNode(" Account ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuItem, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      to: "/settings",
                                      onClick: ($event) => unref(setOpenMobile)(false)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                        createTextVNode(" Settings ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, { name: "i-lucide-bell" }),
                                    createTextVNode(" Notifications ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DropdownMenuSeparator),
                                createVNode(_component_DropdownMenuItem, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_NuxtLink, {
                                      onClick: ($event) => showModalTheme.value = true,
                                      external: "",
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                        createTextVNode(" Theme ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DropdownMenuSeparator),
                            createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                                createTextVNode(" Log out ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["side"])
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
              createVNode(_component_SidebarMenuItem, null, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                        default: withCtx(() => [
                          createVNode(_component_SidebarMenuButton, {
                            size: "lg",
                            class: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center space-x-4" }, [
                                createVNode("div", { class: "relative h-10 w-10" }, [
                                  unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-10 rounded-full absolute inset-0"
                                  })) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                  }, [
                                    createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                      default: withCtx(() => [
                                        _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                          key: 0,
                                          src: _ctx.user.avatar,
                                          alt: _ctx.user.name
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                        createVNode(_component_AvatarFallback, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                    createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                    createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                  ], 64))
                                ])
                              ]),
                              createVNode(_component_Icon, {
                                name: "i-lucide-chevrons-up-down",
                                class: "ml-auto size-4"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DropdownMenuContent, {
                        class: "min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg",
                        side: unref(isMobile) ? "bottom" : "right",
                        align: "end"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_DropdownMenuLabel, { class: "p-0 font-normal" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center space-x-4 px-2 py-2" }, [
                                createVNode("div", { class: "relative h-10 w-10" }, [
                                  unref(isLoading) || !unref(avatarLoaded) ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-10 rounded-full absolute inset-0"
                                  })) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: ["absolute inset-0 transition-opacity duration-200", [unref(isLoading) || !unref(avatarLoaded) ? "opacity-0" : "opacity-100"]]
                                  }, [
                                    createVNode(_component_Avatar, { class: "h-10 w-10 rounded-full" }, {
                                      default: withCtx(() => [
                                        _ctx.user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                          key: 0,
                                          src: _ctx.user.avatar,
                                          alt: _ctx.user.name
                                        }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                                        createVNode(_component_AvatarFallback, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.user.name.split(" ").map((n) => n[0]).join("")), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)
                                ]),
                                createVNode("div", { class: "space-y-1" }, [
                                  unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(_component_Skeleton, { class: "h-4 w-[100px] rounded" }),
                                    createVNode(_component_Skeleton, { class: "h-3 w-[150px] rounded" })
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createVNode("span", { class: "block font-semibold text-sm" }, toDisplayString(_ctx.user.name), 1),
                                    createVNode("span", { class: "block text-xs text-muted-foreground" }, toDisplayString(_ctx.user.email), 1)
                                  ], 64))
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuSeparator),
                          createVNode(_component_DropdownMenuGroup, null, {
                            default: withCtx(() => [
                              createVNode(_component_DropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "i-lucide-badge-check" }),
                                  createTextVNode(" Account ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuItem, { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    to: "/settings",
                                    onClick: ($event) => unref(setOpenMobile)(false)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, { name: "i-lucide-settings" }),
                                      createTextVNode(" Settings ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, { name: "i-lucide-bell" }),
                                  createTextVNode(" Notifications ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DropdownMenuSeparator),
                              createVNode(_component_DropdownMenuItem, null, {
                                default: withCtx(() => [
                                  createVNode(_component_NuxtLink, {
                                    onClick: ($event) => showModalTheme.value = true,
                                    external: "",
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, { name: "i-lucide-paintbrush" }),
                                      createTextVNode(" Theme ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DropdownMenuSeparator),
                          createVNode(_component_DropdownMenuItem, { onClick: handleLogout }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, { name: "i-lucide-log-out" }),
                              createTextVNode(" Log out ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["side"])
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
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(showModalTheme),
        "onUpdate:open": ($event) => isRef(showModalTheme) ? showModalTheme.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Customize`);
                            } else {
                              return [
                                createTextVNode("Customize")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Customize &amp; Preview in Real Time `);
                            } else {
                              return [
                                createTextVNode(" Customize & Preview in Real Time ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Customize")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                            default: withCtx(() => [
                              createTextVNode(" Customize & Preview in Real Time ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ThemeCustomize, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Customize")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                          default: withCtx(() => [
                            createTextVNode(" Customize & Preview in Real Time ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ThemeCustomize)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Customize")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, { class: "text-xs text-muted-foreground" }, {
                        default: withCtx(() => [
                          createTextVNode(" Customize & Preview in Real Time ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_ThemeCustomize)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarNavFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9fec9356"]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    function resolveNavItemComponent(item) {
      if ("children" in item)
        return _sfc_main$7;
      return _sfc_main$6;
    }
    const teams = [
      {
        name: "Acme Inc",
        logo: "i-lucide-gallery-vertical-end",
        plan: "Enterprise"
      },
      {
        name: "Acme Corp.",
        logo: "i-lucide-audio-waveform",
        plan: "Startup"
      },
      {
        name: "Evil Corp.",
        logo: "i-lucide-command",
        plan: "Free"
      }
    ];
    const auth = useAuth();
    const user = ref({
      name: "",
      email: "",
      avatar: "/avatars/avatartion.png",
      // Avatar padrão
      role: ""
    });
    const filteredMenu = computed(() => {
      if (!auth.user || !auth.user.role) {
        return [];
      }
      return filterMenuByRole(navMenu, auth.user.role);
    });
    watch(() => auth.user, (newUser) => {
      if (newUser) {
        user.value = {
          name: newUser.name || "Usuário",
          email: newUser.email || "usuario@exemplo.com",
          avatar: newUser.avatar || "/avatars/avatartion.png",
          role: newUser.role || ""
        };
      }
    }, { immediate: true, deep: true });
    const { sidebar } = useAppSettings();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = _sfc_main$o;
      const _component_SidebarHeader = _sfc_main$j;
      const _component_LayoutSidebarNavHeader = _sfc_main$5;
      const _component_Search = _sfc_main$4;
      const _component_SidebarContent = _sfc_main$n;
      const _component_SidebarGroup = _sfc_main$l;
      const _component_SidebarGroupLabel = _sfc_main$k;
      const _component_SidebarFooter = _sfc_main$m;
      const _component_LayoutSidebarNavFooter = __nuxt_component_10;
      const _component_SidebarRail = _sfc_main$9;
      _push(ssrRenderComponent(_component_Sidebar, mergeProps({
        collapsible: unref(sidebar).collapsible,
        side: unref(sidebar).side,
        variant: unref(sidebar).variant
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SidebarHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutSidebarNavHeader, { teams }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Search, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutSidebarNavHeader, { teams }),
                    createVNode(_component_Search)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SidebarContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(filteredMenu), (nav, indexGroup) => {
                    _push3(ssrRenderComponent(_component_SidebarGroup, { key: indexGroup }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (nav.heading) {
                            _push4(ssrRenderComponent(_component_SidebarGroupLabel, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(nav.heading)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(nav.heading), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--[-->`);
                          ssrRenderList(nav.items, (item, index) => {
                            ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
                              key: index,
                              item
                            }, null), _parent4, _scopeId3);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            nav.heading ? (openBlock(), createBlock(_component_SidebarGroupLabel, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(nav.heading), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(nav.items, (item, index) => {
                              return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                                key: index,
                                item
                              }, null, 8, ["item"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_SidebarGroup, { class: "mt-auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(navMenuBottom), (item, index) => {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: index,
                            item,
                            size: "sm"
                          }, null), _parent4, _scopeId3);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(navMenuBottom), (item, index) => {
                            return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                              key: index,
                              item,
                              size: "sm"
                            }, null, 8, ["item"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredMenu), (nav, indexGroup) => {
                      return openBlock(), createBlock(_component_SidebarGroup, { key: indexGroup }, {
                        default: withCtx(() => [
                          nav.heading ? (openBlock(), createBlock(_component_SidebarGroupLabel, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(nav.heading), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(nav.items, (item, index) => {
                            return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                              key: index,
                              item
                            }, null, 8, ["item"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128)),
                    createVNode(_component_SidebarGroup, { class: "mt-auto" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(navMenuBottom), (item, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: index,
                            item,
                            size: "sm"
                          }, null, 8, ["item"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SidebarFooter, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_LayoutSidebarNavFooter, { user: unref(user) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_LayoutSidebarNavFooter, { user: unref(user) }, null, 8, ["user"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SidebarRail, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SidebarHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutSidebarNavHeader, { teams }),
                  createVNode(_component_Search)
                ]),
                _: 1
              }),
              createVNode(_component_SidebarContent, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredMenu), (nav, indexGroup) => {
                    return openBlock(), createBlock(_component_SidebarGroup, { key: indexGroup }, {
                      default: withCtx(() => [
                        nav.heading ? (openBlock(), createBlock(_component_SidebarGroupLabel, { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(nav.heading), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(nav.items, (item, index) => {
                          return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                            key: index,
                            item
                          }, null, 8, ["item"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128)),
                  createVNode(_component_SidebarGroup, { class: "mt-auto" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(navMenuBottom), (item, index) => {
                        return openBlock(), createBlock(resolveDynamicComponent(resolveNavItemComponent(item)), {
                          key: index,
                          item,
                          size: "sm"
                        }, null, 8, ["item"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_SidebarFooter, null, {
                default: withCtx(() => [
                  createVNode(_component_LayoutSidebarNavFooter, { user: unref(user) }, null, 8, ["user"])
                ]),
                _: 1
              }),
              createVNode(_component_SidebarRail)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    function setLinks() {
      if (route.fullPath === "/") {
        return [{ title: "Home", href: "/" }];
      }
      const segments = route.fullPath.split("/").filter((item) => item !== "");
      const breadcrumbs = segments.map((item, index) => {
        const str = item.replace(/-/g, " ");
        const title = str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        return {
          title,
          href: `/${segments.slice(0, index + 1).join("/")}`
        };
      });
      return [{ title: "Home", href: "/" }, ...breadcrumbs];
    }
    const links = ref(setLinks());
    watch(() => route.fullPath, (val) => {
      if (val) {
        links.value = setLinks();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SidebarTrigger = _sfc_main$8;
      const _component_Separator = _sfc_main$Z;
      const _component_BaseBreadcrumbCustom = _sfc_main$_;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-10 h-53px flex items-center gap-4 border-b bg-background px-4 md:px-6" }, _attrs))}><div class="w-full flex items-center gap-4">`);
      _push(ssrRenderComponent(_component_SidebarTrigger, null, null, _parent));
      _push(ssrRenderComponent(_component_Separator, {
        orientation: "vertical",
        class: "h-4"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BaseBreadcrumbCustom, { links: unref(links) }, null, _parent));
      _push(`</div><div class="ml-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></header>`);
    };
  }
});

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SidebarProvider = _sfc_main$a;
  const _component_LayoutAppSidebar = _sfc_main$2;
  const _component_SidebarInset = _sfc_main$i;
  const _component_LayoutHeader = _sfc_main$1;
  _push(ssrRenderComponent(_component_SidebarProvider, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_LayoutAppSidebar, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_SidebarInset, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_LayoutHeader, null, null, _parent3, _scopeId2));
              _push3(`<div class="min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6"${_scopeId2}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
              _push3(`</div>`);
            } else {
              return [
                createVNode(_component_LayoutHeader),
                createVNode("div", { class: "min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_LayoutAppSidebar),
          createVNode(_component_SidebarInset, null, {
            default: withCtx(() => [
              createVNode(_component_LayoutHeader),
              createVNode("div", { class: "min-w-0 w-full flex-1 overflow-x-auto p-4 lg:p-6" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ]),
            _: 3
          })
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
