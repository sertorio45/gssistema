import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, isRef, renderList, createCommentVNode, createApp, computed, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import NumberFlow from '@number-flow/vue';
import { Calendar, DollarSign, Users, CreditCard, Activity } from 'lucide-vue-next';
import { d as cn, a as _sfc_main$9, X as useMounted, h as _sfc_main$g, j as _sfc_main$h } from './server.mjs';
import { DateFormatter, CalendarDate, getLocalTimeZone } from '@internationalized/date';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$a } from './PopoverTrigger.vue2.mjs';
import { _ as _sfc_main$b } from './RangeCalendar.vue2.mjs';
import { _ as _sfc_main$c, a as _sfc_main$d, b as _sfc_main$e, c as _sfc_main$f } from './CardTitle.vue2.mjs';
import { omit, GroupedBar, StackedBar, Axis } from '@unovis/ts';
import { VisBulletLegend, VisTooltip, VisCrosshair, VisGroupedBar, VisStackedBar, VisXYContainer, VisAxis } from '@unovis/vue';
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
import 'vaul-vue';
import 'vue-sonner';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DateRangePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const df = new DateFormatter("en-US", {
      dateStyle: "medium"
    });
    const calendarDate = new CalendarDate(2024, 0, 20);
    const value = ref({
      start: calendarDate,
      end: calendarDate.add({ days: 20 })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = _sfc_main$7;
      const _component_PopoverTrigger = _sfc_main$8;
      const _component_Button = _sfc_main$9;
      const _component_PopoverContent = _sfc_main$a;
      const _component_RangeCalendar = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("grid gap-2", _ctx.$attrs.class ?? "")
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Popover, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    id: "date",
                    variant: "outline",
                    class: unref(cn)(
                      "justify-start text-left font-normal",
                      !unref(value) && "text-muted-foreground"
                    )
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Calendar), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        if (unref(value).start) {
                          _push4(`<!--[-->`);
                          if (unref(value).end) {
                            _push4(`<!--[-->${ssrInterpolate(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)())))} - ${ssrInterpolate(unref(df).format(unref(value).end.toDate(unref(getLocalTimeZone)())))}<!--]-->`);
                          } else {
                            _push4(`<!--[-->${ssrInterpolate(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)())))}<!--]-->`);
                          }
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!--[--> Pick a date <!--]-->`);
                        }
                      } else {
                        return [
                          createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                          unref(value).start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            unref(value).end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(unref(value).end.toDate(unref(getLocalTimeZone)()))), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)()))), 1)
                            ], 64))
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(" Pick a date ")
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      id: "date",
                      variant: "outline",
                      class: unref(cn)(
                        "justify-start text-left font-normal",
                        !unref(value) && "text-muted-foreground"
                      )
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                        unref(value).start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          unref(value).end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(unref(value).end.toDate(unref(getLocalTimeZone)()))), 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)()))), 1)
                          ], 64))
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(" Pick a date ")
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, {
              class: "w-auto p-0",
              align: "end"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_RangeCalendar, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    "weekday-format": "short",
                    "number-of-months": 2,
                    "initial-focus": "",
                    placeholder: unref(value).start,
                    "onUpdate:startValue": (startDate) => unref(value).start = startDate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_RangeCalendar, {
                      modelValue: unref(value),
                      "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                      "weekday-format": "short",
                      "number-of-months": 2,
                      "initial-focus": "",
                      placeholder: unref(value).start,
                      "onUpdate:startValue": (startDate) => unref(value).start = startDate
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onUpdate:startValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    id: "date",
                    variant: "outline",
                    class: unref(cn)(
                      "justify-start text-left font-normal",
                      !unref(value) && "text-muted-foreground"
                    )
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Calendar), { class: "mr-2 h-4 w-4" }),
                      unref(value).start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        unref(value).end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(unref(value).end.toDate(unref(getLocalTimeZone)()))), 1)
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(unref(df).format(unref(value).start.toDate(unref(getLocalTimeZone)()))), 1)
                        ], 64))
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Pick a date ")
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, {
                class: "w-auto p-0",
                align: "end"
              }, {
                default: withCtx(() => [
                  createVNode(_component_RangeCalendar, {
                    modelValue: unref(value),
                    "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
                    "weekday-format": "short",
                    "number-of-months": 2,
                    "initial-focus": "",
                    placeholder: unref(value).start,
                    "onUpdate:startValue": (startDate) => unref(value).start = startDate
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onUpdate:startValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChartLegend",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const elRef = ref();
    function onLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
      const isBulletActive = !props.items[i].inactive;
      const isFilterApplied = props.items.some((i2) => i2.inactive);
      if (isFilterApplied && isBulletActive) {
        emits("update:items", props.items.map((item) => ({ ...item, inactive: false })));
      } else {
        emits("update:items", props.items.map((item) => item.name === d.name ? { ...d, inactive: false } : { ...item, inactive: true }));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "elRef",
        ref: elRef,
        class: "w-max"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VisBulletLegend), {
        items: _ctx.items,
        "on-legend-item-click": onLegendItemClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChartTooltip",
  __ssrInlineRender: true,
  props: {
    title: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$c), mergeProps({ class: "text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.title) {
              _push2(ssrRenderComponent(unref(_sfc_main$d), { class: "border-b p-3" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$e), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$e), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$f), { class: "min-w-[180px] flex flex-col gap-1 p-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.data, (item, key) => {
                    _push3(`<div class="flex justify-between"${_scopeId2}><div class="flex items-center"${_scopeId2}><span class="mr-2 h-2.5 w-2.5"${_scopeId2}><svg width="100%" height="100%" viewBox="0 0 30 30"${_scopeId2}><path d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"${ssrRenderAttr("stroke", item.color)}${ssrRenderAttr("fill", item.color)} stroke-width="1"${_scopeId2}></path></svg></span><span${_scopeId2}>${ssrInterpolate(item.name)}</span></div><span class="ml-4 font-semibold"${_scopeId2}>${ssrInterpolate(item.value)}</span></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                      return openBlock(), createBlock("div", {
                        key,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", { class: "mr-2 h-2.5 w-2.5" }, [
                            (openBlock(), createBlock("svg", {
                              width: "100%",
                              height: "100%",
                              viewBox: "0 0 30 30"
                            }, [
                              createVNode("path", {
                                d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                                stroke: item.color,
                                fill: item.color,
                                "stroke-width": "1"
                              }, null, 8, ["stroke", "fill"])
                            ]))
                          ]),
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ]),
                        createVNode("span", { class: "ml-4 font-semibold" }, toDisplayString(item.value), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.title ? (openBlock(), createBlock(unref(_sfc_main$d), {
                key: 0,
                class: "border-b p-3"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$e), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$f), { class: "min-w-[180px] flex flex-col gap-1 p-3" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                    return openBlock(), createBlock("div", {
                      key,
                      class: "flex justify-between"
                    }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("span", { class: "mr-2 h-2.5 w-2.5" }, [
                          (openBlock(), createBlock("svg", {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 30 30"
                          }, [
                            createVNode("path", {
                              d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                              stroke: item.color,
                              fill: item.color,
                              "stroke-width": "1"
                            }, null, 8, ["stroke", "fill"])
                          ]))
                        ]),
                        createVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createVNode("span", { class: "ml-4 font-semibold" }, toDisplayString(item.value), 1)
                    ]);
                  }), 128))
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartCrosshair",
  __ssrInlineRender: true,
  props: {
    colors: { default: () => [] },
    index: {},
    items: {},
    customTooltip: {}
  },
  setup(__props) {
    const props = __props;
    const wm = /* @__PURE__ */ new WeakMap();
    function template(d) {
      if (wm.has(d)) {
        return wm.get(d);
      } else {
        const componentDiv = (void 0).createElement("div");
        const omittedData = Object.entries(omit(d, [props.index])).map(([key, value]) => {
          const legendReference = props.items.find((i) => i.name === key);
          return { ...legendReference, value };
        });
        const TooltipComponent = props.customTooltip ?? _sfc_main$4;
        createApp(TooltipComponent, { title: d[props.index].toString(), data: omittedData }).mount(componentDiv);
        wm.set(d, componentDiv.innerHTML);
        return componentDiv.innerHTML;
      }
    }
    function color(d, i) {
      return props.colors[i] ?? "transparent";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(VisTooltip), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }, null, _parent));
      _push(ssrRenderComponent(unref(VisCrosshair), {
        template,
        color
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

function defaultColors(count = 3) {
  const quotient = Math.floor(count / 2);
  const remainder = count % 2;
  const primaryCount = quotient + remainder;
  const secondaryCount = quotient;
  return [
    ...Array.from(Array.from({ length: primaryCount }).keys()).map((i) => `hsl(var(--primary) / ${1 - 1 / primaryCount * i})`),
    ...Array.from(Array.from({ length: secondaryCount }).keys()).map((i) => `hsl(var(--vis-secondary-color) / ${1 - 1 / secondaryCount * i})`)
  ];
}

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BarChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: true },
    showYAxis: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    showLegend: { type: Boolean, default: true },
    showGridLine: { type: Boolean, default: true },
    customTooltip: {},
    type: { default: "grouped" },
    roundedCorners: { default: 0 }
  },
  emits: ["legendItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const index = computed(() => props.index);
    const colors = computed(() => {
      var _a;
      return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(props.categories.length);
    });
    const legendItems = ref(props.categories.map((category, i) => ({
      name: category,
      color: colors.value[i],
      inactive: false
    })));
    const isMounted = useMounted();
    function handleLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
    }
    const VisBarComponent = computed(() => props.type === "grouped" ? VisGroupedBar : VisStackedBar);
    const selectorsBar = computed(() => props.type === "grouped" ? GroupedBar.selectors.bar : StackedBar.selectors.bar);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-[400px] flex flex-col items-end", _ctx.$attrs.class ?? "")
      }, _attrs))}>`);
      if (_ctx.showLegend) {
        _push(ssrRenderComponent(unref(_sfc_main$5), {
          items: legendItems.value,
          "onUpdate:items": ($event) => legendItems.value = $event,
          onLegendItemClick: handleLegendItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VisXYContainer), {
        data: _ctx.data,
        style: { height: unref(isMounted) ? "100%" : "auto" },
        margin: _ctx.margin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.showTooltip) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), {
                colors: colors.value,
                items: legendItems.value,
                "custom-tooltip": _ctx.customTooltip,
                index: index.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(VisBarComponent), {
              x: (d, i) => i,
              y: _ctx.categories.map((category) => (d) => d[category]),
              color: colors.value,
              "rounded-corners": _ctx.roundedCorners,
              "bar-padding": 0.05,
              attributes: {
                [selectorsBar.value]: {
                  opacity: (d, i) => {
                    var _a;
                    const pos = i % _ctx.categories.length;
                    return ((_a = legendItems.value[pos]) == null ? void 0 : _a.inactive) ? _ctx.filterOpacity : 1;
                  }
                }
              }
            }, null, _parent2, _scopeId));
            if (_ctx.showXAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "x",
                "tick-format": _ctx.xFormatter ?? ((v) => {
                  var _a;
                  return (_a = _ctx.data[v]) == null ? void 0 : _a[index.value];
                }),
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--muted-foreground))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showYAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--muted-foreground))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.showTooltip ? (openBlock(), createBlock(unref(_sfc_main$3), {
                key: 0,
                colors: colors.value,
                items: legendItems.value,
                "custom-tooltip": _ctx.customTooltip,
                index: index.value
              }, null, 8, ["colors", "items", "custom-tooltip", "index"])) : createCommentVNode("", true),
              createVNode(unref(VisBarComponent), {
                x: (d, i) => i,
                y: _ctx.categories.map((category) => (d) => d[category]),
                color: colors.value,
                "rounded-corners": _ctx.roundedCorners,
                "bar-padding": 0.05,
                attributes: {
                  [selectorsBar.value]: {
                    opacity: (d, i) => {
                      var _a;
                      const pos = i % _ctx.categories.length;
                      return ((_a = legendItems.value[pos]) == null ? void 0 : _a.inactive) ? _ctx.filterOpacity : 1;
                    }
                  }
                }
              }, null, 8, ["x", "y", "color", "rounded-corners", "attributes"]),
              _ctx.showXAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 1,
                type: "x",
                "tick-format": _ctx.xFormatter ?? ((v) => {
                  var _a;
                  return (_a = _ctx.data[v]) == null ? void 0 : _a[index.value];
                }),
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--muted-foreground))"
              }, null, 8, ["tick-format"])) : createCommentVNode("", true),
              _ctx.showYAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 2,
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--muted-foreground))"
              }, null, 8, ["tick-format", "grid-line", "attributes"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Overview",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      { name: "Jan", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Feb", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Mar", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Apr", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "May", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Jun", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Jul", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Aug", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Sep", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Oct", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Nov", total: Math.floor(Math.random() * 5e3) + 1e3 },
      { name: "Dec", total: Math.floor(Math.random() * 5e3) + 1e3 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BarChart = _sfc_main$2;
      _push(ssrRenderComponent(_component_BarChart, mergeProps({
        data,
        categories: ["total"],
        index: "name",
        "rounded-corners": 4
      }, _attrs), null, _parent));
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const dataCard = ref({
      totalRevenue: 0,
      totalRevenueDesc: 0,
      subscriptions: 0,
      subscriptionsDesc: 0,
      sales: 0,
      salesDesc: 0,
      activeNow: 0,
      activeNowDesc: 0
    });
    const dataRecentSales = [
      {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: 1999
      },
      {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: 39
      },
      {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: 299
      },
      {
        name: "William Kim",
        email: "will@email.com",
        amount: 99
      },
      {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        amount: 39
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BaseDateRangePicker = _sfc_main$6;
      const _component_Button = _sfc_main$9;
      const _component_Card = _sfc_main$c;
      const _component_CardHeader = _sfc_main$d;
      const _component_CardTitle = _sfc_main$e;
      const _component_CardContent = _sfc_main$f;
      const _component_DashboardOverview = _sfc_main$1;
      const _component_Avatar = _sfc_main$g;
      const _component_AvatarFallback = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-4" }, _attrs))}><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="text-2xl font-bold tracking-tight"> Dashboard </h2><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_BaseDateRangePicker, null, null, _parent));
      _push(ssrRenderComponent(_component_Button, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Download`);
          } else {
            return [
              createTextVNode("Download")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><main class="flex flex-1 flex-col gap-4 md:gap-8"><div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2 md:gap-8">`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Total Revenue `);
                      } else {
                        return [
                          createTextVNode(" Total Revenue ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(DollarSign), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Total Revenue ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(DollarSign), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).totalRevenue,
                    format: { style: "currency", currency: "USD", trailingZeroDisplay: "stripIfInteger" }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-muted-foreground"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).totalRevenueDesc,
                    prefix: "+",
                    format: { style: "percent", minimumFractionDigits: 1 }
                  }, null, _parent3, _scopeId2));
                  _push3(` from last month </p>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).totalRevenue,
                        format: { style: "currency", currency: "USD", trailingZeroDisplay: "stripIfInteger" }
                      }, null, 8, ["value"])
                    ]),
                    createVNode("p", { class: "text-xs text-muted-foreground" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).totalRevenueDesc,
                        prefix: "+",
                        format: { style: "percent", minimumFractionDigits: 1 }
                      }, null, 8, ["value"]),
                      createTextVNode(" from last month ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Total Revenue ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(DollarSign), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).totalRevenue,
                      format: { style: "currency", currency: "USD", trailingZeroDisplay: "stripIfInteger" }
                    }, null, 8, ["value"])
                  ]),
                  createVNode("p", { class: "text-xs text-muted-foreground" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).totalRevenueDesc,
                      prefix: "+",
                      format: { style: "percent", minimumFractionDigits: 1 }
                    }, null, 8, ["value"]),
                    createTextVNode(" from last month ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Subscriptions `);
                      } else {
                        return [
                          createTextVNode(" Subscriptions ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Users), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Subscriptions ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Users), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).subscriptions,
                    prefix: "+"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-muted-foreground"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).subscriptionsDesc,
                    prefix: "+",
                    format: { style: "percent", minimumFractionDigits: 1 }
                  }, null, _parent3, _scopeId2));
                  _push3(` from last month </p>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).subscriptions,
                        prefix: "+"
                      }, null, 8, ["value"])
                    ]),
                    createVNode("p", { class: "text-xs text-muted-foreground" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).subscriptionsDesc,
                        prefix: "+",
                        format: { style: "percent", minimumFractionDigits: 1 }
                      }, null, 8, ["value"]),
                      createTextVNode(" from last month ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Subscriptions ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Users), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).subscriptions,
                      prefix: "+"
                    }, null, 8, ["value"])
                  ]),
                  createVNode("p", { class: "text-xs text-muted-foreground" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).subscriptionsDesc,
                      prefix: "+",
                      format: { style: "percent", minimumFractionDigits: 1 }
                    }, null, 8, ["value"]),
                    createTextVNode(" from last month ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sales `);
                      } else {
                        return [
                          createTextVNode(" Sales ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(CreditCard), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Sales ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(CreditCard), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).sales,
                    prefix: "+"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-muted-foreground"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).salesDesc,
                    prefix: "+",
                    format: { style: "percent", minimumFractionDigits: 1 }
                  }, null, _parent3, _scopeId2));
                  _push3(` from last month </p>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).sales,
                        prefix: "+"
                      }, null, 8, ["value"])
                    ]),
                    createVNode("p", { class: "text-xs text-muted-foreground" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).salesDesc,
                        prefix: "+",
                        format: { style: "percent", minimumFractionDigits: 1 }
                      }, null, 8, ["value"]),
                      createTextVNode(" from last month ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Sales ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(CreditCard), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).sales,
                      prefix: "+"
                    }, null, 8, ["value"])
                  ]),
                  createVNode("p", { class: "text-xs text-muted-foreground" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).salesDesc,
                      prefix: "+",
                      format: { style: "percent", minimumFractionDigits: 1 }
                    }, null, 8, ["value"]),
                    createTextVNode(" from last month ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Active Now `);
                      } else {
                        return [
                          createTextVNode(" Active Now ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Activity), { class: "h-4 w-4 text-muted-foreground" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                      default: withCtx(() => [
                        createTextVNode(" Active Now ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-2xl font-bold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).activeNow,
                    prefix: "+"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-xs text-muted-foreground"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(NumberFlow), {
                    value: unref(dataCard).activeNowDesc,
                    prefix: "+"
                  }, null, _parent3, _scopeId2));
                  _push3(` since last hour </p>`);
                } else {
                  return [
                    createVNode("div", { class: "text-2xl font-bold" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).activeNow,
                        prefix: "+"
                      }, null, 8, ["value"])
                    ]),
                    createVNode("p", { class: "text-xs text-muted-foreground" }, [
                      createVNode(unref(NumberFlow), {
                        value: unref(dataCard).activeNowDesc,
                        prefix: "+"
                      }, null, 8, ["value"]),
                      createTextVNode(" since last hour ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, { class: "flex flex-row items-center justify-between pb-2 space-y-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-sm font-medium" }, {
                    default: withCtx(() => [
                      createTextVNode(" Active Now ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Activity), { class: "h-4 w-4 text-muted-foreground" })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-2xl font-bold" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).activeNow,
                      prefix: "+"
                    }, null, 8, ["value"])
                  ]),
                  createVNode("p", { class: "text-xs text-muted-foreground" }, [
                    createVNode(unref(NumberFlow), {
                      value: unref(dataCard).activeNowDesc,
                      prefix: "+"
                    }, null, 8, ["value"]),
                    createTextVNode(" since last hour ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 md:gap-8">`);
      _push(ssrRenderComponent(_component_Card, { class: "xl:col-span-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Overview`);
                      } else {
                        return [
                          createTextVNode("Overview")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Overview")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "pl-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DashboardOverview, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DashboardOverview)
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
                      createTextVNode("Overview")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "pl-2" }, {
                default: withCtx(() => [
                  createVNode(_component_DashboardOverview)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Recent Sales`);
                      } else {
                        return [
                          createTextVNode("Recent Sales")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Recent Sales")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "grid gap-8" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(dataRecentSales, (recentSales) => {
                    _push3(`<div class="flex items-center gap-4"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Avatar, { class: "hidden h-9 w-9 sm:flex" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_AvatarFallback, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(recentSales.name.split(" ").map((n) => n[0]).join(""))}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(recentSales.name.split(" ").map((n) => n[0]).join("")), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_AvatarFallback, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(recentSales.name.split(" ").map((n) => n[0]).join("")), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="grid gap-1"${_scopeId2}><p class="text-sm font-medium leading-none"${_scopeId2}>${ssrInterpolate(recentSales.name)}</p><p class="text-sm text-muted-foreground"${_scopeId2}>${ssrInterpolate(recentSales.email)}</p></div><div class="ml-auto font-medium"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(NumberFlow), {
                      value: recentSales.amount,
                      format: { style: "currency", currency: "USD", trailingZeroDisplay: "stripIfInteger" },
                      prefix: "+"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(dataRecentSales, (recentSales) => {
                      return createVNode("div", {
                        key: recentSales.name,
                        class: "flex items-center gap-4"
                      }, [
                        createVNode(_component_Avatar, { class: "hidden h-9 w-9 sm:flex" }, {
                          default: withCtx(() => [
                            createVNode(_component_AvatarFallback, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(recentSales.name.split(" ").map((n) => n[0]).join("")), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "grid gap-1" }, [
                          createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(recentSales.name), 1),
                          createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(recentSales.email), 1)
                        ]),
                        createVNode("div", { class: "ml-auto font-medium" }, [
                          createVNode(unref(NumberFlow), {
                            value: recentSales.amount,
                            format: { style: "currency", currency: "USD", trailingZeroDisplay: "stripIfInteger" },
                            prefix: "+"
                          }, null, 8, ["value"])
                        ])
                      ]);
                    }), 64))
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
                      createTextVNode("Recent Sales")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "grid gap-8" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(dataRecentSales, (recentSales) => {
                    return createVNode("div", {
                      key: recentSales.name,
                      class: "flex items-center gap-4"
                    }, [
                      createVNode(_component_Avatar, { class: "hidden h-9 w-9 sm:flex" }, {
                        default: withCtx(() => [
                          createVNode(_component_AvatarFallback, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(recentSales.name.split(" ").map((n) => n[0]).join("")), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "grid gap-1" }, [
                        createVNode("p", { class: "text-sm font-medium leading-none" }, toDisplayString(recentSales.name), 1),
                        createVNode("p", { class: "text-sm text-muted-foreground" }, toDisplayString(recentSales.email), 1)
                      ]),
                      createVNode("div", { class: "ml-auto font-medium" }, [
                        createVNode(unref(NumberFlow), {
                          value: recentSales.amount,
                          format: { style: "currency", currency: "USD", trailingZeroDisplay: "stripIfInteger" },
                          prefix: "+"
                        }, null, 8, ["value"])
                      ])
                    ]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
