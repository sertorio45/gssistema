import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { d as cn, a as _sfc_main$2 } from './server.mjs';
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b, e as _sfc_main$c } from './TableHeader.vue2.mjs';
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
import 'lucide-vue-next';
import 'vue-sonner';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableCaption",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<caption${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mt-4 text-sm text-muted-foreground", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</caption>`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table",
  __ssrInlineRender: true,
  setup(__props) {
    const invoices = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal"
      },
      {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer"
      },
      {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card"
      },
      {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal"
      },
      {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer"
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_15;
      const _component_Card = _sfc_main$3;
      const _component_CardHeader = _sfc_main$4;
      const _component_CardTitle = _sfc_main$5;
      const _component_CardContent = _sfc_main$6;
      const _component_Table = _sfc_main$7;
      const _component_TableCaption = _sfc_main$1;
      const _component_TableHeader = _sfc_main$8;
      const _component_TableRow = _sfc_main$9;
      const _component_TableHead = _sfc_main$a;
      const _component_TableBody = _sfc_main$b;
      const _component_TableCell = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Table </h2><p class="text-muted-foreground"> A responsive table component. </p></div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        size: "xs",
        variant: "outline",
        class: "text-xs",
        "as-child": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "https://www.shadcn-vue.com/docs/components/table",
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
                to: "https://www.shadcn-vue.com/docs/components/table",
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
                  _push3(ssrRenderComponent(_component_Table, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableCaption, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`A list of your recent invoices.`);
                            } else {
                              return [
                                createTextVNode("A list of your recent invoices.")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "w-[100px]" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Invoice `);
                                        } else {
                                          return [
                                            createTextVNode(" Invoice ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Status`);
                                        } else {
                                          return [
                                            createTextVNode("Status")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Method`);
                                        } else {
                                          return [
                                            createTextVNode("Method")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Amount `);
                                        } else {
                                          return [
                                            createTextVNode(" Amount ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Invoice ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Status")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Method")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Amount ")
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
                                createVNode(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Invoice ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Status")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Method")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Amount ")
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
                        _push4(ssrRenderComponent(_component_TableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(invoices, (invoice) => {
                                _push5(ssrRenderComponent(_component_TableRow, {
                                  key: invoice.invoice
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(invoice.invoice)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(invoice.invoice), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(invoice.paymentStatus)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(invoice.paymentStatus), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(invoice.paymentMethod)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(invoice.paymentMethod), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(invoice.totalAmount)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(invoice.totalAmount), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, { class: "font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(invoice.invoice), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(invoice.paymentStatus), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(invoice.paymentMethod), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, { class: "text-right" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(invoice.totalAmount), 1)
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
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(invoices, (invoice) => {
                                  return createVNode(_component_TableRow, {
                                    key: invoice.invoice
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, { class: "font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(invoice.invoice), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(invoice.paymentStatus), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(invoice.paymentMethod), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(invoice.totalAmount), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableCaption, null, {
                            default: withCtx(() => [
                              createTextVNode("A list of your recent invoices.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Invoice ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Status")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Method")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Amount ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(invoices, (invoice) => {
                                return createVNode(_component_TableRow, {
                                  key: invoice.invoice
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.invoice), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.paymentStatus), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.paymentMethod), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.totalAmount), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                      createVNode(_component_Table, null, {
                        default: withCtx(() => [
                          createVNode(_component_TableCaption, null, {
                            default: withCtx(() => [
                              createTextVNode("A list of your recent invoices.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Invoice ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Status")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Method")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Amount ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(invoices, (invoice) => {
                                return createVNode(_component_TableRow, {
                                  key: invoice.invoice
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, { class: "font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.invoice), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.paymentStatus), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.paymentMethod), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(invoice.totalAmount), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
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
                    createVNode(_component_Table, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableCaption, null, {
                          default: withCtx(() => [
                            createTextVNode("A list of your recent invoices.")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_TableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, { class: "w-[100px]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Invoice ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Method")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Amount ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TableBody, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(invoices, (invoice) => {
                              return createVNode(_component_TableRow, {
                                key: invoice.invoice
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TableCell, { class: "font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(invoice.invoice), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(invoice.paymentStatus), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(invoice.paymentMethod), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(invoice.totalAmount), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=table.vue.mjs.map
