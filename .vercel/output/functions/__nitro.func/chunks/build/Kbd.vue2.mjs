import { defineComponent, unref, mergeProps, withCtx, createVNode, renderSlot, computed, resolveDynamicComponent } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderVNode } from 'vue/server-renderer';
import { useForwardPropsEmits, VisuallyHidden } from 'radix-vue';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5 } from './DialogTitle.vue2.mjs';
import { v as _sfc_main$6, d as cn } from './server.mjs';
import { _ as _sfc_main$7 } from './CommandList.vue2.mjs';
import { cva } from 'class-variance-authority';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CommandDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DialogTitle = _sfc_main$5;
      const _component_DialogDescription = _sfc_main$6;
      _push(ssrRenderComponent(unref(_sfc_main$3), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), { class: "overflow-hidden p-0 shadow-lg" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(VisuallyHidden), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(VisuallyHidden), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogDescription, { "aria-describedby": "undefined" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogDescription, { "aria-describedby": "undefined" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$7, { class: "[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group]]:px-2 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium" }, {
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
                    createVNode(unref(VisuallyHidden), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(VisuallyHidden), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode(_component_DialogDescription, { "aria-describedby": "undefined" })
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$7, { class: "[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group]]:px-2 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium" }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$4), { class: "overflow-hidden p-0 shadow-lg" }, {
                default: withCtx(() => [
                  createVNode(unref(VisuallyHidden), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(VisuallyHidden), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode(_component_DialogDescription, { "aria-describedby": "undefined" })
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$7, { class: "[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group]]:px-2 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:font-medium" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
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
  __name: "CommandShortcut",
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Kbd",
  __ssrInlineRender: true,
  props: {
    as: { default: "kbd" },
    size: { default: "sm" }
  },
  setup(__props) {
    const props = __props;
    const kbdClass = computed(() => {
      return cva(
        "inline-flex items-center pointer-events-none min-w-5 h-5 select-none justify-center items-center gap-1 rounded border border-border bg-muted font-sans font-medium",
        {
          variants: {
            size: {
              xs: "min-h-4 text-[10px] h-4 px-1",
              sm: "min-h-5 text-[11px] h-5 px-1",
              md: "min-h-6 text-[12px] h-6 px-1.5"
            }
          }
        }
      )({
        size: props.size
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.as), mergeProps({ class: kbdClass.value }, _attrs), {
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
      }), _parent);
    };
  }
});

export { _sfc_main$1 as _, _sfc_main as a, _sfc_main$2 as b };
//# sourceMappingURL=Kbd.vue2.mjs.map
