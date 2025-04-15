import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { ref, defineComponent, mergeProps, unref, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { G as createInjectionState, d as cn, a as _sfc_main$6 } from './server.mjs';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a } from './CardTitle.vue2.mjs';
import emblaCarouselVue from 'embla-carousel-vue';
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';
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
import 'radix-vue';
import 'class-variance-authority';
import 'vaul-vue';
import 'vue-sonner';

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(true);
    const canScrollPrev = ref(true);
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const carouselArgs = useProvideCarousel(props, emits);
    __expose(carouselArgs);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", unref(carouselArgs), null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowRight), { class: "h-4 w-4 text-current" })
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
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$6), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowLeft), { class: "h-4 w-4 text-current" })
              ])
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
  const _component_Button = _sfc_main$6;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$7;
  const _component_CardHeader = _sfc_main$8;
  const _component_CardTitle = _sfc_main$9;
  const _component_CardContent = _sfc_main$a;
  const _component_Carousel = _sfc_main$5;
  const _component_CarouselContent = _sfc_main$4;
  const _component_CarouselItem = _sfc_main$3;
  const _component_CarouselPrevious = _sfc_main$1;
  const _component_CarouselNext = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Carousel </h2><p class="text-muted-foreground"> A carousel with motion and swipe built using Embla. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/carousel",
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
            to: "https://www.shadcn-vue.com/docs/components/carousel",
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
          to: "https://www.radix-vue.com/components/carousel",
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
            to: "https://www.radix-vue.com/components/carousel",
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
  _push(`</div></div><div class="flex flex-col gap-4">`);
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
              _push3(`<div class="w-full flex items-center justify-center gap-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Carousel, { class: "relative max-w-xs w-full" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CarouselContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(5, (_5, index) => {
                            _push5(ssrRenderComponent(_component_CarouselItem, { key: index }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="p-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_Card, null, {
                                    default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                          default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<span class="text-4xl font-semibold"${_scopeId7}>${ssrInterpolate(index + 1)}</span>`);
                                            } else {
                                              return [
                                                createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "p-1" }, [
                                      createVNode(_component_Card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (_5, index) => {
                              return createVNode(_component_CarouselItem, { key: index }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "p-1" }, [
                                    createVNode(_component_Card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CarouselPrevious, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CarouselNext, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_CarouselContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_4, index) => {
                            return createVNode(_component_CarouselItem, { key: index }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-1" }, [
                                  createVNode(_component_Card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CarouselPrevious),
                      createVNode(_component_CarouselNext)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-full flex items-center justify-center gap-4" }, [
                  createVNode(_component_Carousel, { class: "relative max-w-xs w-full" }, {
                    default: withCtx(() => [
                      createVNode(_component_CarouselContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_3, index) => {
                            return createVNode(_component_CarouselItem, { key: index }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-1" }, [
                                  createVNode(_component_Card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CarouselPrevious),
                      createVNode(_component_CarouselNext)
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
              createVNode("div", { class: "w-full flex items-center justify-center gap-4" }, [
                createVNode(_component_Carousel, { class: "relative max-w-xs w-full" }, {
                  default: withCtx(() => [
                    createVNode(_component_CarouselContent, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (_2, index) => {
                          return createVNode(_component_CarouselItem, { key: index }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-1" }, [
                                createVNode(_component_Card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-4xl font-semibold" }, toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselPrevious),
                    createVNode(_component_CarouselNext)
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
                    _push4(`Sizes`);
                  } else {
                    return [
                      createTextVNode("Sizes")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Sizes")
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
              _push3(`<div class="min-h-200px w-full flex items-center justify-center gap-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Carousel, {
                class: "relative max-w-xs w-full",
                opts: {
                  align: "start"
                }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CarouselContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(5, (_5, index) => {
                            _push5(ssrRenderComponent(_component_CarouselItem, {
                              key: index,
                              class: "lg:basis-1/3 md:basis-1/2"
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="p-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_Card, null, {
                                    default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                          default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<span class="text-2xl font-semibold"${_scopeId7}>${ssrInterpolate(index + 1)}</span>`);
                                            } else {
                                              return [
                                                createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "p-1" }, [
                                      createVNode(_component_Card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (_5, index) => {
                              return createVNode(_component_CarouselItem, {
                                key: index,
                                class: "lg:basis-1/3 md:basis-1/2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "p-1" }, [
                                    createVNode(_component_Card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CarouselPrevious, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CarouselNext, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_CarouselContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_4, index) => {
                            return createVNode(_component_CarouselItem, {
                              key: index,
                              class: "lg:basis-1/3 md:basis-1/2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-1" }, [
                                  createVNode(_component_Card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CarouselPrevious),
                      createVNode(_component_CarouselNext)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "min-h-200px w-full flex items-center justify-center gap-4" }, [
                  createVNode(_component_Carousel, {
                    class: "relative max-w-xs w-full",
                    opts: {
                      align: "start"
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CarouselContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_3, index) => {
                            return createVNode(_component_CarouselItem, {
                              key: index,
                              class: "lg:basis-1/3 md:basis-1/2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-1" }, [
                                  createVNode(_component_Card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CarouselPrevious),
                      createVNode(_component_CarouselNext)
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
                  createTextVNode("Sizes")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "min-h-200px w-full flex items-center justify-center gap-4" }, [
                createVNode(_component_Carousel, {
                  class: "relative max-w-xs w-full",
                  opts: {
                    align: "start"
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CarouselContent, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (_2, index) => {
                          return createVNode(_component_CarouselItem, {
                            key: index,
                            class: "lg:basis-1/3 md:basis-1/2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-1" }, [
                                createVNode(_component_Card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CardContent, { class: "aspect-square flex items-center justify-center p-6" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselPrevious),
                    createVNode(_component_CarouselNext)
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
                    _push4(`Orientation Vertical`);
                  } else {
                    return [
                      createTextVNode("Orientation Vertical")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_CardTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Orientation Vertical")
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
              _push3(`<div class="min-h-350px w-full flex items-center justify-center gap-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Carousel, {
                orientation: "vertical",
                class: "relative max-w-xs w-full",
                opts: {
                  align: "start"
                }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CarouselContent, { class: "h-150px -mt-1 md:h-200px" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList(5, (_5, index) => {
                            _push5(ssrRenderComponent(_component_CarouselItem, {
                              key: index,
                              class: "p-1 md:basis-1/2"
                            }, {
                              default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<div class="p-1"${_scopeId5}>`);
                                  _push6(ssrRenderComponent(_component_Card, null, {
                                    default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(ssrRenderComponent(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                          default: withCtx((_8, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<span class="text-2xl font-semibold"${_scopeId7}>${ssrInterpolate(index + 1)}</span>`);
                                            } else {
                                              return [
                                                createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      } else {
                                        return [
                                          createVNode(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "p-1" }, [
                                      createVNode(_component_Card, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(5, (_5, index) => {
                              return createVNode(_component_CarouselItem, {
                                key: index,
                                class: "p-1 md:basis-1/2"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "p-1" }, [
                                    createVNode(_component_Card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CarouselPrevious, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CarouselNext, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_CarouselContent, { class: "h-150px -mt-1 md:h-200px" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_4, index) => {
                            return createVNode(_component_CarouselItem, {
                              key: index,
                              class: "p-1 md:basis-1/2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-1" }, [
                                  createVNode(_component_Card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CarouselPrevious),
                      createVNode(_component_CarouselNext)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "min-h-350px w-full flex items-center justify-center gap-4" }, [
                  createVNode(_component_Carousel, {
                    orientation: "vertical",
                    class: "relative max-w-xs w-full",
                    opts: {
                      align: "start"
                    }
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CarouselContent, { class: "h-150px -mt-1 md:h-200px" }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(5, (_3, index) => {
                            return createVNode(_component_CarouselItem, {
                              key: index,
                              class: "p-1 md:basis-1/2"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "p-1" }, [
                                  createVNode(_component_Card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CarouselPrevious),
                      createVNode(_component_CarouselNext)
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
                  createTextVNode("Orientation Vertical")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_CardContent, null, {
            default: withCtx(() => [
              createVNode("div", { class: "min-h-350px w-full flex items-center justify-center gap-4" }, [
                createVNode(_component_Carousel, {
                  orientation: "vertical",
                  class: "relative max-w-xs w-full",
                  opts: {
                    align: "start"
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CarouselContent, { class: "h-150px -mt-1 md:h-200px" }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (_2, index) => {
                          return createVNode(_component_CarouselItem, {
                            key: index,
                            class: "p-1 md:basis-1/2"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-1" }, [
                                createVNode(_component_Card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CardContent, { class: "flex items-center justify-center p-6" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-2xl font-semibold" }, toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselPrevious),
                    createVNode(_component_CarouselNext)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/carousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { carousel as default };
//# sourceMappingURL=carousel.vue.mjs.map
