import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, computed, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { d as cn, a as _sfc_main$6, _ as _sfc_main$b } from './server.mjs';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a } from './CardTitle.vue2.mjs';
import { useForwardPropsEmits, NumberFieldRoot, useForwardProps, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from 'radix-vue';
import { Minus, Plus } from 'lucide-vue-next';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "NumberField",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    modelValue: {},
    min: {},
    max: {},
    step: {},
    formatOptions: {},
    locale: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: {},
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
      _push(ssrRenderComponent(unref(NumberFieldRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("grid gap-1.5", props.class)
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldDecrement",
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
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NumberFieldDecrement), mergeProps(unref(forwarded), {
        class: unref(cn)("absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(Minus), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(Minus), { class: "h-4 w-4" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldIncrement",
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
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NumberFieldIncrement), mergeProps(unref(forwarded), {
        class: unref(cn)("absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(Plus), { class: "h-4 w-4" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NumberFieldInput",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NumberFieldInput), mergeProps({
        class: unref(cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-10 py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50")
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$6;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$7;
  const _component_CardHeader = _sfc_main$8;
  const _component_CardTitle = _sfc_main$9;
  const _component_CardContent = _sfc_main$a;
  const _component_NumberField = _sfc_main$5;
  const _component_Label = _sfc_main$b;
  const _component_NumberFieldContent = _sfc_main$4;
  const _component_NumberFieldDecrement = _sfc_main$3;
  const _component_NumberFieldInput = _sfc_main$1;
  const _component_NumberFieldIncrement = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Number Field </h2><p class="text-muted-foreground"> A number field allows a user to enter a number and increment or decrement the value using stepper buttons. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/number-field",
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
            to: "https://www.shadcn-vue.com/docs/components/number-field",
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
          to: "https://www.radix-vue.com/components/number-field",
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
            to: "https://www.radix-vue.com/components/number-field",
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
              _push3(ssrRenderComponent(_component_NumberField, {
                id: "age",
                "default-value": 18,
                min: 0
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Label, { for: "age" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`Age`);
                        } else {
                          return [
                            createTextVNode("Age")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_NumberFieldContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_NumberFieldDecrement, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_NumberFieldInput, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_NumberFieldIncrement, null, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_NumberFieldDecrement),
                            createVNode(_component_NumberFieldInput),
                            createVNode(_component_NumberFieldIncrement)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_Label, { for: "age" }, {
                        default: withCtx(() => [
                          createTextVNode("Age")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NumberFieldContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_NumberFieldDecrement),
                          createVNode(_component_NumberFieldInput),
                          createVNode(_component_NumberFieldIncrement)
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
                  createVNode(_component_NumberField, {
                    id: "age",
                    "default-value": 18,
                    min: 0
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Label, { for: "age" }, {
                        default: withCtx(() => [
                          createTextVNode("Age")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NumberFieldContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_NumberFieldDecrement),
                          createVNode(_component_NumberFieldInput),
                          createVNode(_component_NumberFieldIncrement)
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
                createVNode(_component_NumberField, {
                  id: "age",
                  "default-value": 18,
                  min: 0
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Label, { for: "age" }, {
                      default: withCtx(() => [
                        createTextVNode("Age")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NumberFieldContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_NumberFieldDecrement),
                        createVNode(_component_NumberFieldInput),
                        createVNode(_component_NumberFieldIncrement)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/number-field.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const numberField = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { numberField as default };
//# sourceMappingURL=number-field.vue.mjs.map
