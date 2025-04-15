import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { d as cn, b as __nuxt_component_9 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { Primitive } from 'radix-vue';
import { ChevronRight } from 'lucide-vue-next';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "breadcrumb",
        class: props.class
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</nav>`);
    };
  }
});

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        class: unref(cn)("inline-flex items-center gap-1.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</li>`);
    };
  }
});

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbLink",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "as-child": _ctx.asChild,
        class: unref(cn)("transition-colors hover:text-foreground", props.class)
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbList",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ol${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</ol>`);
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbPage",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        class: unref(cn)("font-normal text-foreground", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbSeparator",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(mergeProps({
        role: "presentation",
        "aria-hidden": "true",
        class: unref(cn)("[&>svg]:size-3.5", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(unref(ChevronRight), null, null, _parent));
      }, _push, _parent);
      _push(`</li>`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BreadcrumbCustom",
  __ssrInlineRender: true,
  props: {
    links: {},
    separator: { default: "i-lucide-chevron-right" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = _sfc_main$6;
      const _component_BreadcrumbList = _sfc_main$3;
      const _component_BreadcrumbItem = _sfc_main$5;
      const _component_BreadcrumbLink = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_15;
      const _component_BreadcrumbPage = _sfc_main$2;
      const _component_BreadcrumbSeparator = _sfc_main$1;
      const _component_Icon = __nuxt_component_9;
      _push(ssrRenderComponent(_component_Breadcrumb, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BreadcrumbList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.links, (link, index) => {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_BreadcrumbItem, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (index !== _ctx.links.length - 1) {
                            _push4(ssrRenderComponent(_component_BreadcrumbLink, { "as-child": "" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_NuxtLink, {
                                    to: link.href
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(link.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(link.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_NuxtLink, {
                                      to: link.href
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(link.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_BreadcrumbPage, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(link.title)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(link.title), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            index !== _ctx.links.length - 1 ? (openBlock(), createBlock(_component_BreadcrumbLink, {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: link.href
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(_component_BreadcrumbPage, { key: 1 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(link.title), 1)
                              ]),
                              _: 2
                            }, 1024))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (index < _ctx.links.length - 1) {
                      _push3(ssrRenderComponent(_component_BreadcrumbSeparator, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: _ctx.separator,
                              mode: "svg"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_Icon, {
                                name: _ctx.separator,
                                mode: "svg"
                              }, null, 8, ["name"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link, index) => {
                      return openBlock(), createBlock(Fragment, { key: index }, [
                        createVNode(_component_BreadcrumbItem, null, {
                          default: withCtx(() => [
                            index !== _ctx.links.length - 1 ? (openBlock(), createBlock(_component_BreadcrumbLink, {
                              key: 0,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_NuxtLink, {
                                  to: link.href
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(_component_BreadcrumbPage, { key: 1 }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(link.title), 1)
                              ]),
                              _: 2
                            }, 1024))
                          ]),
                          _: 2
                        }, 1024),
                        index < _ctx.links.length - 1 ? (openBlock(), createBlock(_component_BreadcrumbSeparator, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: _ctx.separator,
                              mode: "svg"
                            }, null, 8, ["name"])
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BreadcrumbList, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.links, (link, index) => {
                    return openBlock(), createBlock(Fragment, { key: index }, [
                      createVNode(_component_BreadcrumbItem, null, {
                        default: withCtx(() => [
                          index !== _ctx.links.length - 1 ? (openBlock(), createBlock(_component_BreadcrumbLink, {
                            key: 0,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_NuxtLink, {
                                to: link.href
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(link.title), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(_component_BreadcrumbPage, { key: 1 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(link.title), 1)
                            ]),
                            _: 2
                          }, 1024))
                        ]),
                        _: 2
                      }, 1024),
                      index < _ctx.links.length - 1 ? (openBlock(), createBlock(_component_BreadcrumbSeparator, { key: 0 }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: _ctx.separator,
                            mode: "svg"
                          }, null, 8, ["name"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ], 64);
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

export { _sfc_main$6 as _, _sfc_main$3 as a, _sfc_main$5 as b, _sfc_main$4 as c, _sfc_main$1 as d, _sfc_main$2 as e, _sfc_main as f };
//# sourceMappingURL=BreadcrumbCustom.vue2.mjs.map
