import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { d as cn, m as useToast, J as useClipboard, a as _sfc_main$4, v as _sfc_main$d, _ as _sfc_main$e, b as __nuxt_component_9 } from './server.mjs';
import { defineComponent, unref, mergeProps, withCtx, renderSlot, computed, createVNode, ref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$9, a as _sfc_main$a, b as _sfc_main$c } from './DialogTitle.vue2.mjs';
import { DialogClose, useForwardPropsEmits, DialogPortal, DialogOverlay, DialogContent, DialogTrigger } from 'radix-vue';
import { _ as _sfc_main$b } from './DialogHeader.vue2.mjs';
import { _ as _sfc_main$f } from './Input.vue2.mjs';
import { _ as _sfc_main$g } from './DialogFooter.vue2.mjs';
import { X } from 'lucide-vue-next';
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
import 'vue-sonner';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogClose), mergeProps(props, _attrs), {
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
  __name: "DialogScrollContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid data-[state=closed]:animate-out data-[state=open]:animate-in place-items-center overflow-y-auto bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: unref(cn)(
                      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                      props.class
                    )
                  }, unref(forwarded), {
                    onPointerDownOutside: (event) => {
                      const originalEvent = event.detail.originalEvent;
                      const target = originalEvent.target;
                      if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                      }
                    }
                  }), {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                        _push4(ssrRenderComponent(unref(DialogClose), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent5, _scopeId4));
                              _push5(`<span class="sr-only"${_scopeId4}>Close</span>`);
                            } else {
                              return [
                                createVNode(unref(X), { class: "h-4 w-4" }),
                                createVNode("span", { class: "sr-only" }, "Close")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default"),
                          createVNode(unref(DialogClose), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                            default: withCtx(() => [
                              createVNode(unref(X), { class: "h-4 w-4" }),
                              createVNode("span", { class: "sr-only" }, "Close")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DialogContent), mergeProps({
                      class: unref(cn)(
                        "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                        props.class
                      )
                    }, unref(forwarded), {
                      onPointerDownOutside: (event) => {
                        const originalEvent = event.detail.originalEvent;
                        const target = originalEvent.target;
                        if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                          event.preventDefault();
                        }
                      }
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default"),
                        createVNode(unref(DialogClose), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                          default: withCtx(() => [
                            createVNode(unref(X), { class: "h-4 w-4" }),
                            createVNode("span", { class: "sr-only" }, "Close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onPointerDownOutside"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DialogOverlay), { class: "fixed inset-0 z-50 grid data-[state=closed]:animate-out data-[state=open]:animate-in place-items-center overflow-y-auto bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" }, {
                default: withCtx(() => [
                  createVNode(unref(DialogContent), mergeProps({
                    class: unref(cn)(
                      "relative z-50 grid w-full max-w-lg my-8 gap-4 border border-border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full",
                      props.class
                    )
                  }, unref(forwarded), {
                    onPointerDownOutside: (event) => {
                      const originalEvent = event.detail.originalEvent;
                      const target = originalEvent.target;
                      if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
                        event.preventDefault();
                      }
                    }
                  }), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default"),
                      createVNode(unref(DialogClose), { class: "absolute right-3 top-3 rounded-md p-0.5 transition-colors hover:bg-secondary" }, {
                        default: withCtx(() => [
                          createVNode(unref(X), { class: "h-4 w-4" }),
                          createVNode("span", { class: "sr-only" }, "Close")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 3
                  }, 16, ["class", "onPointerDownOutside"])
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
  __name: "DialogTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogTrigger), mergeProps(props, _attrs), {
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { toast } = useToast();
    const link = ref("https://shadcn-vue.com/docs/installation");
    const { text, copy, copied, isSupported } = useClipboard({ source: link });
    async function handleCopyLink() {
      await copy(link.value);
      if (isSupported.value && copied.value) {
        toast({
          title: "Text Copied",
          description: text.value
        });
      } else {
        toast({
          title: "Copy failed",
          description: "Your browser does not support Clipboard API"
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_15;
      const _component_Card = _sfc_main$5;
      const _component_CardHeader = _sfc_main$6;
      const _component_CardTitle = _sfc_main$7;
      const _component_CardContent = _sfc_main$8;
      const _component_Dialog = _sfc_main$9;
      const _component_DialogTrigger = _sfc_main$1;
      const _component_DialogContent = _sfc_main$a;
      const _component_DialogHeader = _sfc_main$b;
      const _component_DialogTitle = _sfc_main$c;
      const _component_DialogDescription = _sfc_main$d;
      const _component_Label = _sfc_main$e;
      const _component_Input = _sfc_main$f;
      const _component_DialogFooter = _sfc_main$g;
      const _component_Icon = __nuxt_component_9;
      const _component_DialogClose = _sfc_main$3;
      const _component_DialogScrollContent = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Dialog </h2><p class="text-muted-foreground"> A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. </p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "xs",
        variant: "outline",
        class: "text-xs",
        "as-child": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.shadcn-vue.com/docs/components/dialog",
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
                to: "https://www.shadcn-vue.com/docs/components/dialog",
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
              to: "https://www.radix-vue.com/components/dialog",
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
                to: "https://www.radix-vue.com/components/dialog",
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
                  _push3(ssrRenderComponent(_component_Dialog, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Edit Profile `);
                                  } else {
                                    return [
                                      createTextVNode(" Edit Profile ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit Profile ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DialogHeader, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Edit profile`);
                                        } else {
                                          return [
                                            createTextVNode("Edit profile")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DialogDescription, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Make changes to your profile here. Click save when you&#39;re done. `);
                                        } else {
                                          return [
                                            createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit profile")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DialogDescription, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="grid gap-4 py-4"${_scopeId4}><div class="grid grid-cols-4 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, {
                                for: "name",
                                class: "text-right"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Name `);
                                  } else {
                                    return [
                                      createTextVNode(" Name ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                id: "name",
                                value: "Pedro Duarte",
                                class: "col-span-3"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="grid grid-cols-4 items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, {
                                for: "username",
                                class: "text-right"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Username `);
                                  } else {
                                    return [
                                      createTextVNode(" Username ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                id: "username",
                                value: "@peduarte",
                                class: "col-span-3"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                              _push5(ssrRenderComponent(_component_DialogFooter, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Button, { type: "submit" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Save changes `);
                                        } else {
                                          return [
                                            createTextVNode(" Save changes ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Button, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save changes ")
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
                                createVNode(_component_DialogHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit profile")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DialogDescription, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid gap-4 py-4" }, [
                                  createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                    createVNode(_component_Label, {
                                      for: "name",
                                      class: "text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Name ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      id: "name",
                                      value: "Pedro Duarte",
                                      class: "col-span-3"
                                    })
                                  ]),
                                  createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                    createVNode(_component_Label, {
                                      for: "username",
                                      class: "text-right"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Username ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      id: "username",
                                      value: "@peduarte",
                                      class: "col-span-3"
                                    })
                                  ])
                                ]),
                                createVNode(_component_DialogFooter, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { type: "submit" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save changes ")
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
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Profile ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit profile")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid gap-4 py-4" }, [
                                createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                  createVNode(_component_Label, {
                                    for: "name",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Name ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "name",
                                    value: "Pedro Duarte",
                                    class: "col-span-3"
                                  })
                                ]),
                                createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                  createVNode(_component_Label, {
                                    for: "username",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Username ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "username",
                                    value: "@peduarte",
                                    class: "col-span-3"
                                  })
                                ])
                              ]),
                              createVNode(_component_DialogFooter, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
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
                      createVNode(_component_Dialog, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Profile ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit profile")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid gap-4 py-4" }, [
                                createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                  createVNode(_component_Label, {
                                    for: "name",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Name ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "name",
                                    value: "Pedro Duarte",
                                    class: "col-span-3"
                                  })
                                ]),
                                createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                  createVNode(_component_Label, {
                                    for: "username",
                                    class: "text-right"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Username ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "username",
                                    value: "@peduarte",
                                    class: "col-span-3"
                                  })
                                ])
                              ]),
                              createVNode(_component_DialogFooter, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
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
                    createVNode(_component_Dialog, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit Profile ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogContent, { class: "sm:max-w-[425px]" }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_DialogTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit profile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DialogDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "grid gap-4 py-4" }, [
                              createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                createVNode(_component_Label, {
                                  for: "name",
                                  class: "text-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Name ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "name",
                                  value: "Pedro Duarte",
                                  class: "col-span-3"
                                })
                              ]),
                              createVNode("div", { class: "grid grid-cols-4 items-center gap-4" }, [
                                createVNode(_component_Label, {
                                  for: "username",
                                  class: "text-right"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Username ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "username",
                                  value: "@peduarte",
                                  class: "col-span-3"
                                })
                              ])
                            ]),
                            createVNode(_component_DialogFooter, null, {
                              default: withCtx(() => [
                                createVNode(_component_Button, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save changes ")
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
      _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Custom close button`);
                      } else {
                        return [
                          createTextVNode("Custom close button")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Custom close button")
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
                  _push3(ssrRenderComponent(_component_Dialog, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Share `);
                                  } else {
                                    return [
                                      createTextVNode(" Share ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Share ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-md" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DialogHeader, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Share link`);
                                        } else {
                                          return [
                                            createTextVNode("Share link")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DialogDescription, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Anyone who has this link will be able to view this. `);
                                        } else {
                                          return [
                                            createTextVNode(" Anyone who has this link will be able to view this. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Share link")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DialogDescription, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Anyone who has this link will be able to view this. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="flex items-center space-x-2"${_scopeId4}><div class="grid flex-1 gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, {
                                for: "link",
                                class: "sr-only"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Link `);
                                  } else {
                                    return [
                                      createTextVNode(" Link ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                id: "link",
                                "default-value": unref(link),
                                "read-only": ""
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_Button, {
                                type: "submit",
                                size: "sm",
                                class: "px-3",
                                onClick: handleCopyLink
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<span class="sr-only"${_scopeId5}>Copy</span>`);
                                    _push6(ssrRenderComponent(_component_Icon, {
                                      name: "radix-icons:copy",
                                      class: "h-4 w-4"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("span", { class: "sr-only" }, "Copy"),
                                      createVNode(_component_Icon, {
                                        name: "radix-icons:copy",
                                        class: "h-4 w-4"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_DialogFooter, { class: "sm:justify-start" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogClose, { "as-child": "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Button, {
                                            type: "button",
                                            variant: "secondary"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Close `);
                                              } else {
                                                return [
                                                  createTextVNode(" Close ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Button, {
                                              type: "button",
                                              variant: "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Close ")
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
                                      createVNode(_component_DialogClose, { "as-child": "" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            type: "button",
                                            variant: "secondary"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Close ")
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
                            } else {
                              return [
                                createVNode(_component_DialogHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Share link")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DialogDescription, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Anyone who has this link will be able to view this. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                  createVNode("div", { class: "grid flex-1 gap-2" }, [
                                    createVNode(_component_Label, {
                                      for: "link",
                                      class: "sr-only"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Link ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      id: "link",
                                      "default-value": unref(link),
                                      "read-only": ""
                                    }, null, 8, ["default-value"])
                                  ]),
                                  createVNode(_component_Button, {
                                    type: "submit",
                                    size: "sm",
                                    class: "px-3",
                                    onClick: handleCopyLink
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "sr-only" }, "Copy"),
                                      createVNode(_component_Icon, {
                                        name: "radix-icons:copy",
                                        class: "h-4 w-4"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_DialogFooter, { class: "sm:justify-start" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogClose, { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, {
                                          type: "button",
                                          variant: "secondary"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Close ")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Share ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, { class: "sm:max-w-md" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Share link")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Anyone who has this link will be able to view this. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode("div", { class: "grid flex-1 gap-2" }, [
                                  createVNode(_component_Label, {
                                    for: "link",
                                    class: "sr-only"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Link ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "link",
                                    "default-value": unref(link),
                                    "read-only": ""
                                  }, null, 8, ["default-value"])
                                ]),
                                createVNode(_component_Button, {
                                  type: "submit",
                                  size: "sm",
                                  class: "px-3",
                                  onClick: handleCopyLink
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "sr-only" }, "Copy"),
                                    createVNode(_component_Icon, {
                                      name: "radix-icons:copy",
                                      class: "h-4 w-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_DialogFooter, { class: "sm:justify-start" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, {
                                        type: "button",
                                        variant: "secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Close ")
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
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                      createVNode(_component_Dialog, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Share ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, { class: "sm:max-w-md" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Share link")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Anyone who has this link will be able to view this. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode("div", { class: "grid flex-1 gap-2" }, [
                                  createVNode(_component_Label, {
                                    for: "link",
                                    class: "sr-only"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Link ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "link",
                                    "default-value": unref(link),
                                    "read-only": ""
                                  }, null, 8, ["default-value"])
                                ]),
                                createVNode(_component_Button, {
                                  type: "submit",
                                  size: "sm",
                                  class: "px-3",
                                  onClick: handleCopyLink
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "sr-only" }, "Copy"),
                                    createVNode(_component_Icon, {
                                      name: "radix-icons:copy",
                                      class: "h-4 w-4"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_component_DialogFooter, { class: "sm:justify-start" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogClose, { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, {
                                        type: "button",
                                        variant: "secondary"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Close ")
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
                      createTextVNode("Custom close button")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                    createVNode(_component_Dialog, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Share ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogContent, { class: "sm:max-w-md" }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_DialogTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Share link")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DialogDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Anyone who has this link will be able to view this. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode("div", { class: "grid flex-1 gap-2" }, [
                                createVNode(_component_Label, {
                                  for: "link",
                                  class: "sr-only"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Link ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "link",
                                  "default-value": unref(link),
                                  "read-only": ""
                                }, null, 8, ["default-value"])
                              ]),
                              createVNode(_component_Button, {
                                type: "submit",
                                size: "sm",
                                class: "px-3",
                                onClick: handleCopyLink
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "sr-only" }, "Copy"),
                                  createVNode(_component_Icon, {
                                    name: "radix-icons:copy",
                                    class: "h-4 w-4"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_DialogFooter, { class: "sm:justify-start" }, {
                              default: withCtx(() => [
                                createVNode(_component_DialogClose, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, {
                                      type: "button",
                                      variant: "secondary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Close ")
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
                        _push4(`Scroll body`);
                      } else {
                        return [
                          createTextVNode("Scroll body")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Scroll body")
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
                  _push3(ssrRenderComponent(_component_Dialog, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Edit Profile `);
                                  } else {
                                    return [
                                      createTextVNode(" Edit Profile ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit Profile ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogContent, { class: "grid-rows-[auto_minmax(0,1fr)_auto] max-h-[90dvh] p-0 sm:max-w-[425px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DialogHeader, { class: "p-6 pb-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Edit profile`);
                                        } else {
                                          return [
                                            createTextVNode("Edit profile")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DialogDescription, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Make changes to your profile here. Click save when you&#39;re done. `);
                                        } else {
                                          return [
                                            createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit profile")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DialogDescription, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="grid gap-4 overflow-y-auto px-6 py-4"${_scopeId4}><div class="h-[300dvh] flex flex-col justify-between"${_scopeId4}><p${_scopeId4}> This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. </p><p${_scopeId4}>This content should appear at the bottom after you scroll.</p></div></div>`);
                              _push5(ssrRenderComponent(_component_DialogFooter, { class: "p-6 pt-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Button, { type: "submit" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Save changes `);
                                        } else {
                                          return [
                                            createTextVNode(" Save changes ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Button, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save changes ")
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
                                createVNode(_component_DialogHeader, { class: "p-6 pb-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit profile")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DialogDescription, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid gap-4 overflow-y-auto px-6 py-4" }, [
                                  createVNode("div", { class: "h-[300dvh] flex flex-col justify-between" }, [
                                    createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. "),
                                    createVNode("p", null, "This content should appear at the bottom after you scroll.")
                                  ])
                                ]),
                                createVNode(_component_DialogFooter, { class: "p-6 pt-0" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { type: "submit" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save changes ")
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
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Profile ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, { class: "grid-rows-[auto_minmax(0,1fr)_auto] max-h-[90dvh] p-0 sm:max-w-[425px]" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, { class: "p-6 pb-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit profile")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid gap-4 overflow-y-auto px-6 py-4" }, [
                                createVNode("div", { class: "h-[300dvh] flex flex-col justify-between" }, [
                                  createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. "),
                                  createVNode("p", null, "This content should appear at the bottom after you scroll.")
                                ])
                              ]),
                              createVNode(_component_DialogFooter, { class: "p-6 pt-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
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
                      createVNode(_component_Dialog, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Profile ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, { class: "grid-rows-[auto_minmax(0,1fr)_auto] max-h-[90dvh] p-0 sm:max-w-[425px]" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, { class: "p-6 pb-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Edit profile")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid gap-4 overflow-y-auto px-6 py-4" }, [
                                createVNode("div", { class: "h-[300dvh] flex flex-col justify-between" }, [
                                  createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. "),
                                  createVNode("p", null, "This content should appear at the bottom after you scroll.")
                                ])
                              ]),
                              createVNode(_component_DialogFooter, { class: "p-6 pt-0" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
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
                      createTextVNode("Scroll body")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                    createVNode(_component_Dialog, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit Profile ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogContent, { class: "grid-rows-[auto_minmax(0,1fr)_auto] max-h-[90dvh] p-0 sm:max-w-[425px]" }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogHeader, { class: "p-6 pb-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_DialogTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit profile")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DialogDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "grid gap-4 overflow-y-auto px-6 py-4" }, [
                              createVNode("div", { class: "h-[300dvh] flex flex-col justify-between" }, [
                                createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal. "),
                                createVNode("p", null, "This content should appear at the bottom after you scroll.")
                              ])
                            ]),
                            createVNode(_component_DialogFooter, { class: "p-6 pt-0" }, {
                              default: withCtx(() => [
                                createVNode(_component_Button, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save changes ")
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
      _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Scroll overlay`);
                      } else {
                        return [
                          createTextVNode("Scroll overlay")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Scroll overlay")
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
                  _push3(ssrRenderComponent(_component_Dialog, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Edit Profile `);
                                  } else {
                                    return [
                                      createTextVNode(" Edit Profile ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, { variant: "outline" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit Profile ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogScrollContent, { class: "sm:max-w-[425px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DialogHeader, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Modal title`);
                                        } else {
                                          return [
                                            createTextVNode("Modal title")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_DialogDescription, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Here is modal with overlay scroll `);
                                        } else {
                                          return [
                                            createTextVNode(" Here is modal with overlay scroll ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Modal title")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DialogDescription, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" Here is modal with overlay scroll ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="grid h-[300dvh] gap-4 py-4"${_scopeId4}><p${_scopeId4}> This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed. </p></div>`);
                              _push5(ssrRenderComponent(_component_DialogFooter, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_Button, { type: "submit" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Save changes `);
                                        } else {
                                          return [
                                            createTextVNode(" Save changes ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_Button, { type: "submit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save changes ")
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
                                createVNode(_component_DialogHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Modal title")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_DialogDescription, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" Here is modal with overlay scroll ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid h-[300dvh] gap-4 py-4" }, [
                                  createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed. ")
                                ]),
                                createVNode(_component_DialogFooter, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Button, { type: "submit" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save changes ")
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
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Profile ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogScrollContent, { class: "sm:max-w-[425px]" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Modal title")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Here is modal with overlay scroll ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid h-[300dvh] gap-4 py-4" }, [
                                createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed. ")
                              ]),
                              createVNode(_component_DialogFooter, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
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
                      createVNode(_component_Dialog, null, {
                        default: withCtx(() => [
                          createVNode(_component_DialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_Button, { variant: "outline" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit Profile ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogScrollContent, { class: "sm:max-w-[425px]" }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Modal title")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_DialogDescription, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" Here is modal with overlay scroll ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid h-[300dvh] gap-4 py-4" }, [
                                createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed. ")
                              ]),
                              createVNode(_component_DialogFooter, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, { type: "submit" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save changes ")
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
                      createTextVNode("Scroll overlay")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px" }, [
                    createVNode(_component_Dialog, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit Profile ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogScrollContent, { class: "sm:max-w-[425px]" }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_DialogTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Modal title")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_DialogDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Here is modal with overlay scroll ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "grid h-[300dvh] gap-4 py-4" }, [
                              createVNode("p", null, " This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will move the modal as needed. ")
                            ]),
                            createVNode(_component_DialogFooter, null, {
                              default: withCtx(() => [
                                createVNode(_component_Button, { type: "submit" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Save changes ")
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
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/dialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dialog.vue.mjs.map
