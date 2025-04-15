import { defineComponent, mergeProps, unref, withCtx, createVNode, createBlock, toDisplayString, openBlock, createTextVNode, computed, h, Fragment, renderList, createCommentVNode, ref, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { s as statuses, u as useArticle } from './data.mjs';
import { _ as _sfc_main$e } from './Checkbox.vue2.mjs';
import { d as cn, a as _sfc_main$a, b as __nuxt_component_9, e as useRouter, c as _sfc_main$m, E as _sfc_main$n, F as valueUpdater, m as useAsyncData, g as _sfc_main$F } from './server.mjs';
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$b, c as _sfc_main$c } from './DropdownMenuTrigger.vue2.mjs';
import { _ as _sfc_main$d, a as _sfc_main$w } from './DropdownMenuSeparator.vue2.mjs';
import { z } from 'zod';
import { useVueTable, getFacetedUniqueValues, getFacetedRowModel, getSortedRowModel, getPaginationRowModel, getFilteredRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$y } from './Input.vue2.mjs';
import { _ as _sfc_main$k, a as _sfc_main$l, b as _sfc_main$o } from './PopoverTrigger.vue2.mjs';
import { _ as _sfc_main$p, a as _sfc_main$q, b as _sfc_main$r, c as _sfc_main$s, d as _sfc_main$t, e as _sfc_main$u } from './CommandList.vue2.mjs';
import { _ as _sfc_main$v } from './CommandSeparator.vue2.mjs';
import { _ as _sfc_main$x } from './DropdownMenuCheckboxItem.vue2.mjs';
import { _ as _sfc_main$z, a as _sfc_main$A, b as _sfc_main$B, c as _sfc_main$C, d as _sfc_main$D, e as _sfc_main$E } from './TableHeader.vue2.mjs';
import { _ as _sfc_main$f, a as _sfc_main$g, b as _sfc_main$h, c as _sfc_main$i, d as _sfc_main$j } from './SelectContent.vue2.mjs';
import 'node:crypto';
import 'radix-vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
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
import 'lucide-vue-next';
import 'vue-sonner';

const __default__ = {
  inheritAttrs: false
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "DataTableColumnHeader",
  __ssrInlineRender: true,
  props: {
    column: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenu = _sfc_main$8;
      const _component_DropdownMenuTrigger = _sfc_main$9;
      const _component_Button = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      const _component_DropdownMenuContent = _sfc_main$b;
      const _component_DropdownMenuItem = _sfc_main$c;
      const _component_DropdownMenuSeparator = _sfc_main$d;
      if (_ctx.column.getCanSort()) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: unref(cn)("flex items-center space-x-2", _ctx.$attrs.class ?? "")
        }, _attrs))}>`);
        _push(ssrRenderComponent(_component_DropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Button, {
                      variant: "ghost",
                      size: "sm",
                      class: "h-8 -ml-3 data-[state=open]:bg-accent"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(_ctx.title)}</span>`);
                          if (_ctx.column.getIsSorted() === "desc") {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "i-radix-icons-arrow-down",
                              class: "ml-2 h-4 w-4"
                            }, null, _parent4, _scopeId3));
                          } else if (_ctx.column.getIsSorted() === "asc") {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "i-radix-icons-arrow-up",
                              class: "ml-2 h-4 w-4"
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_Icon, {
                              name: "i-radix-icons-caret-sort",
                              class: "ml-2 h-4 w-4"
                            }, null, _parent4, _scopeId3));
                          }
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(_ctx.title), 1),
                            _ctx.column.getIsSorted() === "desc" ? (openBlock(), createBlock(_component_Icon, {
                              key: 0,
                              name: "i-radix-icons-arrow-down",
                              class: "ml-2 h-4 w-4"
                            })) : _ctx.column.getIsSorted() === "asc" ? (openBlock(), createBlock(_component_Icon, {
                              key: 1,
                              name: "i-radix-icons-arrow-up",
                              class: "ml-2 h-4 w-4"
                            })) : (openBlock(), createBlock(_component_Icon, {
                              key: 2,
                              name: "i-radix-icons-caret-sort",
                              class: "ml-2 h-4 w-4"
                            }))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Button, {
                        variant: "ghost",
                        size: "sm",
                        class: "h-8 -ml-3 data-[state=open]:bg-accent"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(_ctx.title), 1),
                          _ctx.column.getIsSorted() === "desc" ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            name: "i-radix-icons-arrow-down",
                            class: "ml-2 h-4 w-4"
                          })) : _ctx.column.getIsSorted() === "asc" ? (openBlock(), createBlock(_component_Icon, {
                            key: 1,
                            name: "i-radix-icons-arrow-up",
                            class: "ml-2 h-4 w-4"
                          })) : (openBlock(), createBlock(_component_Icon, {
                            key: 2,
                            name: "i-radix-icons-caret-sort",
                            class: "ml-2 h-4 w-4"
                          }))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_DropdownMenuContent, { align: "start" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                      onClick: ($event) => _ctx.column.toggleSorting(false)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-arrow-up",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }, null, _parent4, _scopeId3));
                          _push4(` Ascendente `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-arrow-up",
                              class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            }),
                            createTextVNode(" Ascendente ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                      onClick: ($event) => _ctx.column.toggleSorting(true)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-arrow-down",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }, null, _parent4, _scopeId3));
                          _push4(` Descendente `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-arrow-down",
                              class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            }),
                            createTextVNode(" Descendente ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_DropdownMenuItem, {
                      onClick: ($event) => _ctx.column.toggleVisibility(false)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "i-radix-icons-eye-none",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }, null, _parent4, _scopeId3));
                          _push4(` Ocultar `);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "i-radix-icons-eye-none",
                              class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            }),
                            createTextVNode(" Ocultar ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_DropdownMenuItem, {
                        onClick: ($event) => _ctx.column.toggleSorting(false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-arrow-up",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }),
                          createTextVNode(" Ascendente ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_DropdownMenuItem, {
                        onClick: ($event) => _ctx.column.toggleSorting(true)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-arrow-down",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }),
                          createTextVNode(" Descendente ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_DropdownMenuSeparator),
                      createVNode(_component_DropdownMenuItem, {
                        onClick: ($event) => _ctx.column.toggleVisibility(false)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-eye-none",
                            class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                          }),
                          createTextVNode(" Ocultar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      size: "sm",
                      class: "h-8 -ml-3 data-[state=open]:bg-accent"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, toDisplayString(_ctx.title), 1),
                        _ctx.column.getIsSorted() === "desc" ? (openBlock(), createBlock(_component_Icon, {
                          key: 0,
                          name: "i-radix-icons-arrow-down",
                          class: "ml-2 h-4 w-4"
                        })) : _ctx.column.getIsSorted() === "asc" ? (openBlock(), createBlock(_component_Icon, {
                          key: 1,
                          name: "i-radix-icons-arrow-up",
                          class: "ml-2 h-4 w-4"
                        })) : (openBlock(), createBlock(_component_Icon, {
                          key: 2,
                          name: "i-radix-icons-caret-sort",
                          class: "ml-2 h-4 w-4"
                        }))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_DropdownMenuContent, { align: "start" }, {
                  default: withCtx(() => [
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => _ctx.column.toggleSorting(false)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-arrow-up",
                          class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                        }),
                        createTextVNode(" Ascendente ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => _ctx.column.toggleSorting(true)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-arrow-down",
                          class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                        }),
                        createTextVNode(" Descendente ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuItem, {
                      onClick: ($event) => _ctx.column.toggleVisibility(false)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-eye-none",
                          class: "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                        }),
                        createTextVNode(" Ocultar ")
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
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: _ctx.$attrs.class
        }, _attrs))}>${ssrInterpolate(_ctx.title)}</div>`);
      }
    };
  }
});

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  meta_description: z.string().nullable(),
  slug: z.string(),
  status: z.string(),
  categories: z.string().nullable(),
  tags: z.string().nullable(),
  created_at: z.string().or(z.date()),
  updated_at: z.string().or(z.date())
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DataTableRowActions",
  __ssrInlineRender: true,
  props: {
    row: {}
  },
  setup(__props) {
    const props = __props;
    const article = computed(() => articleSchema.parse(props.row.original));
    const router = useRouter();
    function navigateToEdit() {
      router.push(`/articles/edit/${article.value.id}`);
    }
    function navigateToView() {
      router.push(`/articles/${article.value.id}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenu = _sfc_main$8;
      const _component_DropdownMenuTrigger = _sfc_main$9;
      const _component_Button = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      const _component_DropdownMenuContent = _sfc_main$b;
      const _component_DropdownMenuItem = _sfc_main$c;
      const _component_DropdownMenuSeparator = _sfc_main$d;
      _push(ssrRenderComponent(_component_DropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "ghost",
                    class: "h-8 w-8 flex p-0 data-[state=open]:bg-muted"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-dots-horizontal",
                          class: "h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="sr-only"${_scopeId3}>Abrir menu</span>`);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-dots-horizontal",
                            class: "h-4 w-4"
                          }),
                          createVNode("span", { class: "sr-only" }, "Abrir menu")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "ghost",
                      class: "h-8 w-8 flex p-0 data-[state=open]:bg-muted"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-dots-horizontal",
                          class: "h-4 w-4"
                        }),
                        createVNode("span", { class: "sr-only" }, "Abrir menu")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, {
              align: "end",
              class: "w-[160px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, { onClick: navigateToView }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "radix-icons:eye-open",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` Visualizar `);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "radix-icons:eye-open",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" Visualizar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, { onClick: navigateToEdit }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-pencil-1",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` Editar `);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-pencil-1",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" Editar ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuItem, { class: "text-destructive" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-trash",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` Excluir `);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-trash",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" Excluir ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DropdownMenuItem, { onClick: navigateToView }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "radix-icons:eye-open",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" Visualizar ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuItem, { onClick: navigateToEdit }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-pencil-1",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" Editar ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuSeparator),
                    createVNode(_component_DropdownMenuItem, { class: "text-destructive" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-trash",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" Excluir ")
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
              createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "ghost",
                    class: "h-8 w-8 flex p-0 data-[state=open]:bg-muted"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-dots-horizontal",
                        class: "h-4 w-4"
                      }),
                      createVNode("span", { class: "sr-only" }, "Abrir menu")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, {
                align: "end",
                class: "w-[160px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuItem, { onClick: navigateToView }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "radix-icons:eye-open",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" Visualizar ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuItem, { onClick: navigateToEdit }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-pencil-1",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" Editar ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuSeparator),
                  createVNode(_component_DropdownMenuItem, { class: "text-destructive" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-trash",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" Excluir ")
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

const columns = [
  {
    id: "select",
    header: ({ table }) => h(_sfc_main$e, {
      "checked": table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
      "onUpdate:checked": (value) => table.toggleAllPageRowsSelected(!!value),
      "ariaLabel": "Selecionar todos",
      "class": "translate-y-0.5"
    }),
    cell: ({ row }) => h(_sfc_main$e, { "checked": row.getIsSelected(), "onUpdate:checked": (value) => row.toggleSelected(!!value), "ariaLabel": "Selecionar linha", "class": "translate-y-0.5" }),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "id",
    header: ({ column }) => h(_sfc_main$7, { column, title: "ID" }),
    cell: ({ row }) => h("div", { class: "w-20" }, row.getValue("id")),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "title",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Título" }),
    cell: ({ row }) => h("span", { class: "max-w-[500px] truncate font-medium" }, row.getValue("title"))
  },
  {
    accessorKey: "slug",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Slug" }),
    cell: ({ row }) => h("span", { class: "max-w-[200px] truncate text-muted-foreground" }, row.getValue("slug"))
  },
  {
    accessorKey: "status",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Status" }),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      if (!status)
        return null;
      return h("div", { class: "flex w-[100px] items-center" }, [
        status.icon && h("i", { class: `${status.icon} mr-2 h-4 w-4 text-muted-foreground` }),
        h("span", status.label)
      ]);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => h(_sfc_main$7, { column, title: "Atualizado" }),
    cell: ({ row }) => {
      const date = new Date(row.getValue("updated_at"));
      const formatted = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(date);
      return h("span", { class: "text-muted-foreground" }, formatted);
    }
  },
  {
    id: "actions",
    cell: ({ row }) => h(_sfc_main$6, { row })
  }
];

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DataTablePagination",
  __ssrInlineRender: true,
  props: {
    table: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Select = _sfc_main$f;
      const _component_SelectTrigger = _sfc_main$g;
      const _component_SelectValue = _sfc_main$h;
      const _component_SelectContent = _sfc_main$i;
      const _component_SelectItem = _sfc_main$j;
      const _component_Button = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between px-2" }, _attrs))}><div class="flex-1 text-sm text-muted-foreground">${ssrInterpolate(_ctx.table.getFilteredSelectedRowModel().rows.length)} de ${ssrInterpolate(_ctx.table.getFilteredRowModel().rows.length)} linha(s) selecionada(s). </div><div class="flex items-center space-x-6 lg:space-x-8"><div class="flex items-center space-x-2"><p class="text-sm font-medium">Linhas por página</p>`);
      _push(ssrRenderComponent(_component_Select, {
        "model-value": _ctx.table.getState().pagination.pageSize.toString(),
        "onUpdate:modelValue": (value) => _ctx.table.setPageSize(Number(value)),
        "default-value": "10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SelectTrigger, { class: "h-8 w-[70px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SelectValue, { placeholder: "10" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SelectValue, { placeholder: "10" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList([10, 20, 30, 40, 50], (size) => {
                    _push3(ssrRenderComponent(_component_SelectItem, {
                      key: size,
                      value: size.toString()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(size)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(size), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList([10, 20, 30, 40, 50], (size) => {
                      return createVNode(_component_SelectItem, {
                        key: size,
                        value: size.toString()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(size), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SelectTrigger, { class: "h-8 w-[70px]" }, {
                default: withCtx(() => [
                  createVNode(_component_SelectValue, { placeholder: "10" })
                ]),
                _: 1
              }),
              createVNode(_component_SelectContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList([10, 20, 30, 40, 50], (size) => {
                    return createVNode(_component_SelectItem, {
                      key: size,
                      value: size.toString()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(size), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex w-[100px] items-center justify-center text-sm font-medium"> Página ${ssrInterpolate(_ctx.table.getState().pagination.pageIndex + 1)} de ${ssrInterpolate(_ctx.table.getPageCount())}</div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "hidden h-8 w-8 p-0 lg:flex",
        disabled: !_ctx.table.getCanPreviousPage(),
        onClick: ($event) => _ctx.table.setPageIndex(0)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Ir para a primeira página</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-double-arrow-left",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Ir para a primeira página"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-double-arrow-left",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "h-8 w-8 p-0",
        disabled: !_ctx.table.getCanPreviousPage(),
        onClick: ($event) => _ctx.table.previousPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Ir para a página anterior</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-chevron-left",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Ir para a página anterior"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-chevron-left",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "h-8 w-8 p-0",
        disabled: !_ctx.table.getCanNextPage(),
        onClick: ($event) => _ctx.table.nextPage()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Ir para a próxima página</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-chevron-right",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Ir para a próxima página"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-chevron-right",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "hidden h-8 w-8 p-0 lg:flex",
        disabled: !_ctx.table.getCanNextPage(),
        onClick: ($event) => _ctx.table.setPageIndex(_ctx.table.getPageCount() - 1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Ir para a última página</span>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-double-arrow-right",
              class: "h-4 w-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Ir para a última página"),
              createVNode(_component_Icon, {
                name: "i-radix-icons-double-arrow-right",
                class: "h-4 w-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DataTableFacetedFilter",
  __ssrInlineRender: true,
  props: {
    column: {},
    title: {},
    options: {}
  },
  setup(__props) {
    const props = __props;
    const facets = computed(() => {
      var _a;
      return (_a = props.column) == null ? void 0 : _a.getFacetedUniqueValues();
    });
    const selectedValues = computed(() => {
      var _a;
      return new Set((_a = props.column) == null ? void 0 : _a.getFilterValue());
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popover = _sfc_main$k;
      const _component_PopoverTrigger = _sfc_main$l;
      const _component_Button = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      const _component_Separator = _sfc_main$m;
      const _component_Badge = _sfc_main$n;
      const _component_PopoverContent = _sfc_main$o;
      const _component_Command = _sfc_main$p;
      const _component_CommandInput = _sfc_main$q;
      const _component_CommandList = _sfc_main$r;
      const _component_CommandEmpty = _sfc_main$s;
      const _component_CommandGroup = _sfc_main$t;
      const _component_CommandItem = _sfc_main$u;
      const _component_CommandSeparator = _sfc_main$v;
      _push(ssrRenderComponent(_component_Popover, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-plus-circled",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(_ctx.title)} `);
                        if (selectedValues.value.size > 0) {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(_component_Separator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_Badge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(selectedValues.value.size)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(selectedValues.value.size), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="hidden lg:flex space-x-1"${_scopeId3}>`);
                          if (selectedValues.value.size > 2) {
                            _push4(ssrRenderComponent(_component_Badge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(selectedValues.value.size)} selecionados `);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(selectedValues.value.size) + " selecionados ", 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!--[-->`);
                            ssrRenderList(_ctx.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                              _push4(ssrRenderComponent(_component_Badge, {
                                key: item.value,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item.label)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          }
                          _push4(`</div><!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-plus-circled",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_Separator, {
                              orientation: "vertical",
                              class: "mx-2 h-4"
                            }),
                            createVNode(_component_Badge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal lg:hidden"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedValues.value.size), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "hidden lg:flex space-x-1" }, [
                              selectedValues.value.size > 2 ? (openBlock(), createBlock(_component_Badge, {
                                key: 0,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedValues.value.size) + " selecionados ", 1)
                                ]),
                                _: 1
                              })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                                return openBlock(), createBlock(_component_Badge, {
                                  key: item.value,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 border-dashed"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-plus-circled",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
                        selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_Separator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }),
                          createVNode(_component_Badge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedValues.value.size), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "hidden lg:flex space-x-1" }, [
                            selectedValues.value.size > 2 ? (openBlock(), createBlock(_component_Badge, {
                              key: 0,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedValues.value.size) + " selecionados ", 1)
                              ]),
                              _: 1
                            })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                              return openBlock(), createBlock(_component_Badge, {
                                key: item.value,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_PopoverContent, {
              class: "w-[200px] p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Command, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_CommandInput, { placeholder: "Buscar..." }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_CommandList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_CommandEmpty, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nenhum resultado.`);
                                  } else {
                                    return [
                                      createTextVNode("Nenhum resultado.")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_CommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.options, (option) => {
                                      _push6(ssrRenderComponent(_component_CommandItem, {
                                        key: option.value,
                                        value: option.value,
                                        onClick: () => {
                                          var _a, _b;
                                          const filterValue = ((_a = _ctx.column) == null ? void 0 : _a.getFilterValue()) ?? [];
                                          const newFilterValue = filterValue.includes(option.value) ? filterValue.filter((value) => value !== option.value) : [...filterValue, option.value];
                                          (_b = _ctx.column) == null ? void 0 : _b.setFilterValue(newFilterValue.length ? newFilterValue : void 0);
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          var _a, _b;
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass([{
                                              "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                              "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                            }, "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary"])}"${_scopeId6}>`);
                                            if (selectedValues.value.has(option.value)) {
                                              _push7(ssrRenderComponent(_component_Icon, {
                                                name: "i-radix-icons-check",
                                                class: "h-4 w-4"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`</div><div class="flex items-center gap-2"${_scopeId6}>`);
                                            if (option.icon) {
                                              _push7(`<i class="${ssrRenderClass(`${option.icon} h-4 w-4 text-muted-foreground`)}"${_scopeId6}></i>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                            _push7(`<span${_scopeId6}>${ssrInterpolate(option.label)}</span></div>`);
                                            if ((_a = facets.value) == null ? void 0 : _a.get(option.value)) {
                                              _push7(`<div class="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"${_scopeId6}>${ssrInterpolate(facets.value.get(option.value))}</div>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: ["mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", {
                                                  "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                                  "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                                }]
                                              }, [
                                                selectedValues.value.has(option.value) ? (openBlock(), createBlock(_component_Icon, {
                                                  key: 0,
                                                  name: "i-radix-icons-check",
                                                  class: "h-4 w-4"
                                                })) : createCommentVNode("", true)
                                              ], 2),
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                option.icon ? (openBlock(), createBlock("i", {
                                                  key: 0,
                                                  class: `${option.icon} h-4 w-4 text-muted-foreground`
                                                }, null, 2)) : createCommentVNode("", true),
                                                createVNode("span", null, toDisplayString(option.label), 1)
                                              ]),
                                              ((_b = facets.value) == null ? void 0 : _b.get(option.value)) ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                              }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                        return openBlock(), createBlock(_component_CommandItem, {
                                          key: option.value,
                                          value: option.value,
                                          onClick: () => {
                                            var _a, _b;
                                            const filterValue = ((_a = _ctx.column) == null ? void 0 : _a.getFilterValue()) ?? [];
                                            const newFilterValue = filterValue.includes(option.value) ? filterValue.filter((value) => value !== option.value) : [...filterValue, option.value];
                                            (_b = _ctx.column) == null ? void 0 : _b.setFilterValue(newFilterValue.length ? newFilterValue : void 0);
                                          }
                                        }, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createVNode("div", {
                                                class: ["mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", {
                                                  "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                                  "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                                }]
                                              }, [
                                                selectedValues.value.has(option.value) ? (openBlock(), createBlock(_component_Icon, {
                                                  key: 0,
                                                  name: "i-radix-icons-check",
                                                  class: "h-4 w-4"
                                                })) : createCommentVNode("", true)
                                              ], 2),
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                option.icon ? (openBlock(), createBlock("i", {
                                                  key: 0,
                                                  class: `${option.icon} h-4 w-4 text-muted-foreground`
                                                }, null, 2)) : createCommentVNode("", true),
                                                createVNode("span", null, toDisplayString(option.label), 1)
                                              ]),
                                              ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                              }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                            ];
                                          }),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (selectedValues.value.size > 0) {
                                _push5(ssrRenderComponent(_component_CommandSeparator, null, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (selectedValues.value.size > 0) {
                                _push5(ssrRenderComponent(_component_CommandGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_CommandItem, {
                                        onClick: ($event) => {
                                          var _a;
                                          return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                        },
                                        class: "justify-center text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Limpar Filtros `);
                                          } else {
                                            return [
                                              createTextVNode(" Limpar Filtros ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_CommandItem, {
                                          onClick: ($event) => {
                                            var _a;
                                            return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                          },
                                          class: "justify-center text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Limpar Filtros ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_CommandEmpty, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nenhum resultado.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_CommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                      return openBlock(), createBlock(_component_CommandItem, {
                                        key: option.value,
                                        value: option.value,
                                        onClick: () => {
                                          var _a, _b;
                                          const filterValue = ((_a = _ctx.column) == null ? void 0 : _a.getFilterValue()) ?? [];
                                          const newFilterValue = filterValue.includes(option.value) ? filterValue.filter((value) => value !== option.value) : [...filterValue, option.value];
                                          (_b = _ctx.column) == null ? void 0 : _b.setFilterValue(newFilterValue.length ? newFilterValue : void 0);
                                        }
                                      }, {
                                        default: withCtx(() => {
                                          var _a;
                                          return [
                                            createVNode("div", {
                                              class: ["mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", {
                                                "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                                "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                              }]
                                            }, [
                                              selectedValues.value.has(option.value) ? (openBlock(), createBlock(_component_Icon, {
                                                key: 0,
                                                name: "i-radix-icons-check",
                                                class: "h-4 w-4"
                                              })) : createCommentVNode("", true)
                                            ], 2),
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              option.icon ? (openBlock(), createBlock("i", {
                                                key: 0,
                                                class: `${option.icon} h-4 w-4 text-muted-foreground`
                                              }, null, 2)) : createCommentVNode("", true),
                                              createVNode("span", null, toDisplayString(option.label), 1)
                                            ]),
                                            ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                            }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                          ];
                                        }),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandSeparator, { key: 0 })) : createCommentVNode("", true),
                                selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandGroup, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_CommandItem, {
                                      onClick: ($event) => {
                                        var _a;
                                        return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                      },
                                      class: "justify-center text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Limpar Filtros ")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_CommandInput, { placeholder: "Buscar..." }),
                          createVNode(_component_CommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_CommandEmpty, null, {
                                default: withCtx(() => [
                                  createTextVNode("Nenhum resultado.")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_CommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                    return openBlock(), createBlock(_component_CommandItem, {
                                      key: option.value,
                                      value: option.value,
                                      onClick: () => {
                                        var _a, _b;
                                        const filterValue = ((_a = _ctx.column) == null ? void 0 : _a.getFilterValue()) ?? [];
                                        const newFilterValue = filterValue.includes(option.value) ? filterValue.filter((value) => value !== option.value) : [...filterValue, option.value];
                                        (_b = _ctx.column) == null ? void 0 : _b.setFilterValue(newFilterValue.length ? newFilterValue : void 0);
                                      }
                                    }, {
                                      default: withCtx(() => {
                                        var _a;
                                        return [
                                          createVNode("div", {
                                            class: ["mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", {
                                              "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                              "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                            }]
                                          }, [
                                            selectedValues.value.has(option.value) ? (openBlock(), createBlock(_component_Icon, {
                                              key: 0,
                                              name: "i-radix-icons-check",
                                              class: "h-4 w-4"
                                            })) : createCommentVNode("", true)
                                          ], 2),
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            option.icon ? (openBlock(), createBlock("i", {
                                              key: 0,
                                              class: `${option.icon} h-4 w-4 text-muted-foreground`
                                            }, null, 2)) : createCommentVNode("", true),
                                            createVNode("span", null, toDisplayString(option.label), 1)
                                          ]),
                                          ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("div", {
                                            key: 0,
                                            class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                          }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                        ];
                                      }),
                                      _: 2
                                    }, 1032, ["value", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandSeparator, { key: 0 })) : createCommentVNode("", true),
                              selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandGroup, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_CommandItem, {
                                    onClick: ($event) => {
                                      var _a;
                                      return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                    },
                                    class: "justify-center text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Limpar Filtros ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
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
                    createVNode(_component_Command, null, {
                      default: withCtx(() => [
                        createVNode(_component_CommandInput, { placeholder: "Buscar..." }),
                        createVNode(_component_CommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_CommandEmpty, null, {
                              default: withCtx(() => [
                                createTextVNode("Nenhum resultado.")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                  return openBlock(), createBlock(_component_CommandItem, {
                                    key: option.value,
                                    value: option.value,
                                    onClick: () => {
                                      var _a, _b;
                                      const filterValue = ((_a = _ctx.column) == null ? void 0 : _a.getFilterValue()) ?? [];
                                      const newFilterValue = filterValue.includes(option.value) ? filterValue.filter((value) => value !== option.value) : [...filterValue, option.value];
                                      (_b = _ctx.column) == null ? void 0 : _b.setFilterValue(newFilterValue.length ? newFilterValue : void 0);
                                    }
                                  }, {
                                    default: withCtx(() => {
                                      var _a;
                                      return [
                                        createVNode("div", {
                                          class: ["mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", {
                                            "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                            "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                          }]
                                        }, [
                                          selectedValues.value.has(option.value) ? (openBlock(), createBlock(_component_Icon, {
                                            key: 0,
                                            name: "i-radix-icons-check",
                                            class: "h-4 w-4"
                                          })) : createCommentVNode("", true)
                                        ], 2),
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          option.icon ? (openBlock(), createBlock("i", {
                                            key: 0,
                                            class: `${option.icon} h-4 w-4 text-muted-foreground`
                                          }, null, 2)) : createCommentVNode("", true),
                                          createVNode("span", null, toDisplayString(option.label), 1)
                                        ]),
                                        ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                        }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 2
                                  }, 1032, ["value", "onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandSeparator, { key: 0 })) : createCommentVNode("", true),
                            selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandGroup, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_CommandItem, {
                                  onClick: ($event) => {
                                    var _a;
                                    return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                  },
                                  class: "justify-center text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Limpar Filtros ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
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
              createVNode(_component_PopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-plus-circled",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" " + toDisplayString(_ctx.title) + " ", 1),
                      selectedValues.value.size > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_Separator, {
                          orientation: "vertical",
                          class: "mx-2 h-4"
                        }),
                        createVNode(_component_Badge, {
                          variant: "secondary",
                          class: "rounded-sm px-1 font-normal lg:hidden"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(selectedValues.value.size), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "hidden lg:flex space-x-1" }, [
                          selectedValues.value.size > 2 ? (openBlock(), createBlock(_component_Badge, {
                            key: 0,
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedValues.value.size) + " selecionados ", 1)
                            ]),
                            _: 1
                          })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.options.filter((option) => selectedValues.value.has(option.value)), (item) => {
                            return openBlock(), createBlock(_component_Badge, {
                              key: item.value,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_PopoverContent, {
                class: "w-[200px] p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(_component_Command, null, {
                    default: withCtx(() => [
                      createVNode(_component_CommandInput, { placeholder: "Buscar..." }),
                      createVNode(_component_CommandList, null, {
                        default: withCtx(() => [
                          createVNode(_component_CommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("Nenhum resultado.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option) => {
                                return openBlock(), createBlock(_component_CommandItem, {
                                  key: option.value,
                                  value: option.value,
                                  onClick: () => {
                                    var _a, _b;
                                    const filterValue = ((_a = _ctx.column) == null ? void 0 : _a.getFilterValue()) ?? [];
                                    const newFilterValue = filterValue.includes(option.value) ? filterValue.filter((value) => value !== option.value) : [...filterValue, option.value];
                                    (_b = _ctx.column) == null ? void 0 : _b.setFilterValue(newFilterValue.length ? newFilterValue : void 0);
                                  }
                                }, {
                                  default: withCtx(() => {
                                    var _a;
                                    return [
                                      createVNode("div", {
                                        class: ["mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", {
                                          "bg-primary text-primary-foreground": selectedValues.value.has(option.value),
                                          "opacity-50": !selectedValues.value.has(option.value) && selectedValues.value.size > 0
                                        }]
                                      }, [
                                        selectedValues.value.has(option.value) ? (openBlock(), createBlock(_component_Icon, {
                                          key: 0,
                                          name: "i-radix-icons-check",
                                          class: "h-4 w-4"
                                        })) : createCommentVNode("", true)
                                      ], 2),
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        option.icon ? (openBlock(), createBlock("i", {
                                          key: 0,
                                          class: `${option.icon} h-4 w-4 text-muted-foreground`
                                        }, null, 2)) : createCommentVNode("", true),
                                        createVNode("span", null, toDisplayString(option.label), 1)
                                      ]),
                                      ((_a = facets.value) == null ? void 0 : _a.get(option.value)) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs"
                                      }, toDisplayString(facets.value.get(option.value)), 1)) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1032, ["value", "onClick"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandSeparator, { key: 0 })) : createCommentVNode("", true),
                          selectedValues.value.size > 0 ? (openBlock(), createBlock(_component_CommandGroup, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_CommandItem, {
                                onClick: ($event) => {
                                  var _a;
                                  return (_a = _ctx.column) == null ? void 0 : _a.setFilterValue(void 0);
                                },
                                class: "justify-center text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Limpar Filtros ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
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
      }, _parent));
    };
  }
});

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DataTableViewOptions",
  __ssrInlineRender: true,
  props: {
    table: {}
  },
  setup(__props) {
    const props = __props;
    const columns = computed(() => props.table.getAllColumns().filter(
      (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
    ));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownMenu = _sfc_main$8;
      const _component_DropdownMenuTrigger = _sfc_main$9;
      const _component_Button = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      const _component_DropdownMenuContent = _sfc_main$b;
      const _component_DropdownMenuLabel = _sfc_main$w;
      const _component_DropdownMenuSeparator = _sfc_main$d;
      const _component_DropdownMenuCheckboxItem = _sfc_main$x;
      _push(ssrRenderComponent(_component_DropdownMenu, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DropdownMenuTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "ml-auto hidden h-8 lg:flex"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "i-radix-icons-mixer-horizontal",
                          class: "mr-2 h-4 w-4"
                        }, null, _parent4, _scopeId3));
                        _push4(` Visualização `);
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "i-radix-icons-mixer-horizontal",
                            class: "mr-2 h-4 w-4"
                          }),
                          createTextVNode(" Visualização ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      variant: "outline",
                      size: "sm",
                      class: "ml-auto hidden h-8 lg:flex"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "i-radix-icons-mixer-horizontal",
                          class: "mr-2 h-4 w-4"
                        }),
                        createTextVNode(" Visualização ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DropdownMenuContent, {
              align: "end",
              class: "w-[180px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Alternar colunas`);
                      } else {
                        return [
                          createTextVNode("Alternar colunas")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(columns.value, (column) => {
                    _push3(ssrRenderComponent(_component_DropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(column.id)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(column.id), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_DropdownMenuLabel, null, {
                      default: withCtx(() => [
                        createTextVNode("Alternar colunas")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_DropdownMenuSeparator),
                    (openBlock(true), createBlock(Fragment, null, renderList(columns.value, (column) => {
                      return openBlock(), createBlock(_component_DropdownMenuCheckboxItem, {
                        key: column.id,
                        class: "capitalize",
                        checked: column.getIsVisible(),
                        "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(column.id), 1)
                        ]),
                        _: 2
                      }, 1032, ["checked", "onUpdate:checked"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_DropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    class: "ml-auto hidden h-8 lg:flex"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "i-radix-icons-mixer-horizontal",
                        class: "mr-2 h-4 w-4"
                      }),
                      createTextVNode(" Visualização ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_DropdownMenuContent, {
                align: "end",
                class: "w-[180px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_DropdownMenuLabel, null, {
                    default: withCtx(() => [
                      createTextVNode("Alternar colunas")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_DropdownMenuSeparator),
                  (openBlock(true), createBlock(Fragment, null, renderList(columns.value, (column) => {
                    return openBlock(), createBlock(_component_DropdownMenuCheckboxItem, {
                      key: column.id,
                      class: "capitalize",
                      checked: column.getIsVisible(),
                      "onUpdate:checked": (value) => column.toggleVisibility(!!value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(column.id), 1)
                      ]),
                      _: 2
                    }, 1032, ["checked", "onUpdate:checked"]);
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {}
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const isFiltered = computed(() => props.table.getState().columnFilters.length > 0);
    function navigateToCreate() {
      router.push("/articles/create");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Input = _sfc_main$y;
      const _component_Button = _sfc_main$a;
      const _component_Icon = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center justify-between gap-2" }, _attrs))}><div class="flex flex-1 items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Input, {
        placeholder: "Filtrar artigos...",
        "model-value": ((_a = _ctx.table.getColumn("title")) == null ? void 0 : _a.getFilterValue()) ?? "",
        class: "h-8 w-[150px] lg:w-[250px]",
        onInput: ($event) => {
          var _a2;
          return (_a2 = _ctx.table.getColumn("title")) == null ? void 0 : _a2.setFilterValue($event.target.value);
        }
      }, null, _parent));
      if (_ctx.table.getColumn("status")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          column: _ctx.table.getColumn("status"),
          title: "Status",
          options: unref(statuses)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isFiltered.value) {
        _push(ssrRenderComponent(_component_Button, {
          variant: "ghost",
          class: "h-8 px-2 lg:px-3",
          onClick: ($event) => _ctx.table.resetColumnFilters()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Redefinir `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-radix-icons-cross-2",
                class: "ml-2 h-4 w-4"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(" Redefinir "),
                createVNode(_component_Icon, {
                  name: "i-radix-icons-cross-2",
                  class: "ml-2 h-4 w-4"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: navigateToCreate,
        size: "sm",
        class: "h-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "i-radix-icons-plus",
              class: "mr-2 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` Novo Artigo `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "i-radix-icons-plus",
                class: "mr-2 h-4 w-4"
              }),
              createTextVNode(" Novo Artigo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, { table: _ctx.table }, null, _parent));
      _push(`</div></div>`);
    };
  }
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sorting = ref([]);
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const rowSelection = ref({});
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        },
        get rowSelection() {
          return rowSelection.value;
        }
      },
      enableRowSelection: true,
      onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelection),
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues()
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$z;
      const _component_TableHeader = _sfc_main$A;
      const _component_TableRow = _sfc_main$B;
      const _component_TableHead = _sfc_main$C;
      const _component_TableBody = _sfc_main$D;
      const _component_TableCell = _sfc_main$E;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, { table: unref(table) }, null, _parent));
      _push(`<div class="border rounded-md">`);
      _push(ssrRenderComponent(_component_Table, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    _push3(ssrRenderComponent(_component_TableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(headerGroup.headers, (header) => {
                            _push4(ssrRenderComponent(_component_TableHead, {
                              key: header.id
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!header.isPlaceholder) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                } else {
                                  return [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(_component_TableHead, {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: headerGroup.id
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                            return openBlock(), createBlock(_component_TableHead, {
                              key: header.id
                            }, {
                              default: withCtx(() => [
                                !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                  key: 0,
                                  render: header.column.columnDef.header,
                                  props: header.getContext()
                                }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(table).getRowModel().rows, (row) => {
                      _push3(ssrRenderComponent(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() && "selected"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(row.getVisibleCells(), (cell) => {
                              _push4(ssrRenderComponent(_component_TableCell, {
                                key: cell.id
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                return openBlock(), createBlock(_component_TableCell, {
                                  key: cell.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(FlexRender), {
                                      render: cell.column.columnDef.cell,
                                      props: cell.getContext()
                                    }, null, 8, ["render", "props"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, {
                            colspan: _ctx.columns.length,
                            class: "h-24 text-center"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Nenhum resultado. `);
                              } else {
                                return [
                                  createTextVNode(" Nenhum resultado. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_TableCell, {
                              colspan: _ctx.columns.length,
                              class: "h-24 text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Nenhum resultado. ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() && "selected"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_TableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]);
                    }), 128)) : (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colspan: _ctx.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Nenhum resultado. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TableHeader, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                    return openBlock(), createBlock(_component_TableRow, {
                      key: headerGroup.id
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                          return openBlock(), createBlock(_component_TableHead, {
                            key: header.id
                          }, {
                            default: withCtx(() => [
                              !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                key: 0,
                                render: header.column.columnDef.header,
                                props: header.getContext()
                              }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(table).getRowModel().rows, (row) => {
                      return openBlock(), createBlock(_component_TableRow, {
                        key: row.id,
                        "data-state": row.getIsSelected() && "selected"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                            return openBlock(), createBlock(_component_TableCell, {
                              key: cell.id
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(FlexRender), {
                                  render: cell.column.columnDef.cell,
                                  props: cell.getContext()
                                }, null, 8, ["render", "props"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["data-state"]);
                    }), 128)) : (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_TableCell, {
                          colspan: _ctx.columns.length,
                          class: "h-24 text-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Nenhum resultado. ")
                          ]),
                          _: 1
                        }, 8, ["colspan"])
                      ]),
                      _: 1
                    }))
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, { table: unref(table) }, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { getArticles } = useArticle();
    const { data, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("articles", getArticles)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Skeleton = _sfc_main$F;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col items-stretch gap-4" }, _attrs))}><div class="flex flex-wrap items-end justify-between gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Artigos </h2><p class="text-muted-foreground"> Gerencie todos os artigos do sistema </p></div></div>`);
      if (unref(pending)) {
        _push(`<div class="w-full p-8 flex justify-center">`);
        _push(ssrRenderComponent(_component_Skeleton, { class: "w-full h-[300px]" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_sfc_main$1, {
          data: unref(data) || [],
          columns: unref(columns)
        }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/articles/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
