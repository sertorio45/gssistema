import { defineComponent, computed, unref, mergeProps, withCtx, createBlock, createCommentVNode, openBlock, createVNode, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { d as cn } from './server.mjs';
import { GripVertical } from 'lucide-vue-next';
import { useForwardPropsEmits, SplitterResizeHandle, SplitterGroup } from 'radix-vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResizableHandle",
  __ssrInlineRender: true,
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    withHandle: { type: Boolean }
  },
  emits: ["dragging"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SplitterResizeHandle), mergeProps(unref(forwarded), {
        class: unref(cn)("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.withHandle) {
              _push2(`<div class="z-10 h-4 w-3 flex items-center justify-center border rounded-sm bg-border"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(GripVertical), { class: "h-2.5 w-2.5" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.withHandle ? (openBlock(), createBlock("div", {
                key: 0,
                class: "z-10 h-4 w-3 flex items-center justify-center border rounded-sm bg-border"
              }, [
                createVNode(unref(GripVertical), { class: "h-2.5 w-2.5" })
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResizablePanelGroup",
  __ssrInlineRender: true,
  props: {
    id: {},
    autoSaveId: {},
    direction: {},
    keyboardResizeBy: {},
    storage: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["layout"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SplitterGroup), mergeProps(unref(forwarded), {
        class: unref(cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", props.class)
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

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=ResizablePanelGroup.vue2.mjs.map
