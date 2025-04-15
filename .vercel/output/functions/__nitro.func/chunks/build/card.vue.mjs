import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { a as _sfc_main$1, _ as _sfc_main$7 } from './server.mjs';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$6 } from './CardDescription.vue2.mjs';
import { _ as _sfc_main$8 } from './Input.vue2.mjs';
import { _ as _sfc_main$9, a as _sfc_main$a, b as _sfc_main$b, c as _sfc_main$c, d as _sfc_main$d } from './SelectContent.vue2.mjs';
import { _ as _sfc_main$e } from './CardFooter.vue2.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Button = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_15;
  const _component_Card = _sfc_main$2;
  const _component_CardHeader = _sfc_main$3;
  const _component_CardTitle = _sfc_main$4;
  const _component_CardContent = _sfc_main$5;
  const _component_CardDescription = _sfc_main$6;
  const _component_Label = _sfc_main$7;
  const _component_Input = _sfc_main$8;
  const _component_Select = _sfc_main$9;
  const _component_SelectTrigger = _sfc_main$a;
  const _component_SelectValue = _sfc_main$b;
  const _component_SelectContent = _sfc_main$c;
  const _component_SelectItem = _sfc_main$d;
  const _component_CardFooter = _sfc_main$e;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><div class="grid gap-2"><div><h2 class="text-2xl font-bold tracking-tight"> Card </h2><p class="text-muted-foreground"> Displays a card with header, content, and footer. </p></div><div class="flex gap-2">`);
  _push(ssrRenderComponent(_component_Button, {
    size: "xs",
    variant: "outline",
    class: "text-xs",
    "as-child": ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.shadcn-vue.com/docs/components/card",
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
            to: "https://www.shadcn-vue.com/docs/components/card",
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
  _push(`</div></div><div class="flex flex-col gap-4 md:flex-row">`);
  _push(ssrRenderComponent(_component_Card, { class: "w-full md:w-1/2" }, {
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
              _push3(`<div class="w-full flex items-center justify-center gap-4 overflow-hidden"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Card, { class: "w-full md:w-[350px]" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_CardHeader, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_CardTitle, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Create project`);
                              } else {
                                return [
                                  createTextVNode("Create project")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_CardDescription, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Deploy your new project in one-click.`);
                              } else {
                                return [
                                  createTextVNode("Deploy your new project in one-click.")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_CardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Create project")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_CardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode("Deploy your new project in one-click.")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CardContent, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<form${_scopeId4}><div class="grid w-full items-center gap-4"${_scopeId4}><div class="flex flex-col space-y-1.5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Label, { for: "name" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Name`);
                              } else {
                                return [
                                  createTextVNode("Name")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Input, {
                            id: "name",
                            placeholder: "Name of your project"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div><div class="flex flex-col space-y-1.5"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Label, { for: "framework" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Framework`);
                              } else {
                                return [
                                  createTextVNode("Framework")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Select, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_SelectTrigger, { id: "framework" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_SelectValue, { placeholder: "Select" }, null, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_SelectValue, { placeholder: "Select" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(_component_SelectContent, { position: "popper" }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_SelectItem, { value: "nuxt" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` Nuxt.js `);
                                          } else {
                                            return [
                                              createTextVNode(" Nuxt.js ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_SelectItem, { value: "next" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` Next.js `);
                                          } else {
                                            return [
                                              createTextVNode(" Next.js ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_SelectItem, { value: "sveltekit" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` SvelteKit `);
                                          } else {
                                            return [
                                              createTextVNode(" SvelteKit ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_SelectItem, { value: "astro" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(` Astro `);
                                          } else {
                                            return [
                                              createTextVNode(" Astro ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_SelectItem, { value: "nuxt" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Nuxt.js ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "next" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next.js ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "sveltekit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" SvelteKit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "astro" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Astro ")
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
                                  createVNode(_component_SelectTrigger, { id: "framework" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectValue, { placeholder: "Select" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectContent, { position: "popper" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectItem, { value: "nuxt" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Nuxt.js ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "next" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Next.js ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "sveltekit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" SvelteKit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "astro" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Astro ")
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
                          _push5(`</div></div></form>`);
                        } else {
                          return [
                            createVNode("form", null, [
                              createVNode("div", { class: "grid w-full items-center gap-4" }, [
                                createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                  createVNode(_component_Label, { for: "name" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Name")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    id: "name",
                                    placeholder: "Name of your project"
                                  })
                                ]),
                                createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                  createVNode(_component_Label, { for: "framework" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Framework")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Select, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, { id: "framework" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Select" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, { position: "popper" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectItem, { value: "nuxt" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Nuxt.js ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "next" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Next.js ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "sveltekit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" SvelteKit ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectItem, { value: "astro" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Astro ")
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
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_CardFooter, { class: "flex justify-between px-6 pb-6" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Button, { variant: "outline" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Cancel `);
                              } else {
                                return [
                                  createTextVNode(" Cancel ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Button, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`Deploy`);
                              } else {
                                return [
                                  createTextVNode("Deploy")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_Button, { variant: "outline" }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, null, {
                              default: withCtx(() => [
                                createTextVNode("Deploy")
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
                      createVNode(_component_CardHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Create project")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Deploy your new project in one-click.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardContent, null, {
                        default: withCtx(() => [
                          createVNode("form", null, [
                            createVNode("div", { class: "grid w-full items-center gap-4" }, [
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(_component_Label, { for: "name" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "name",
                                  placeholder: "Name of your project"
                                })
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(_component_Label, { for: "framework" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Framework")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Select, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, { id: "framework" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Select" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, { position: "popper" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectItem, { value: "nuxt" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Nuxt.js ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "next" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next.js ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "sveltekit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" SvelteKit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "astro" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Astro ")
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
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardFooter, { class: "flex justify-between px-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, null, {
                            default: withCtx(() => [
                              createTextVNode("Deploy")
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
                createVNode("div", { class: "w-full flex items-center justify-center gap-4 overflow-hidden" }, [
                  createVNode(_component_Card, { class: "w-full md:w-[350px]" }, {
                    default: withCtx(() => [
                      createVNode(_component_CardHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_CardTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Create project")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_CardDescription, null, {
                            default: withCtx(() => [
                              createTextVNode("Deploy your new project in one-click.")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardContent, null, {
                        default: withCtx(() => [
                          createVNode("form", null, [
                            createVNode("div", { class: "grid w-full items-center gap-4" }, [
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(_component_Label, { for: "name" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Name")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  id: "name",
                                  placeholder: "Name of your project"
                                })
                              ]),
                              createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                                createVNode(_component_Label, { for: "framework" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Framework")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Select, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, { id: "framework" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Select" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, { position: "popper" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectItem, { value: "nuxt" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Nuxt.js ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "next" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next.js ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "sveltekit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" SvelteKit ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectItem, { value: "astro" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Astro ")
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
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CardFooter, { class: "flex justify-between px-6 pb-6" }, {
                        default: withCtx(() => [
                          createVNode(_component_Button, { variant: "outline" }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, null, {
                            default: withCtx(() => [
                              createTextVNode("Deploy")
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
              createVNode("div", { class: "w-full flex items-center justify-center gap-4 overflow-hidden" }, [
                createVNode(_component_Card, { class: "w-full md:w-[350px]" }, {
                  default: withCtx(() => [
                    createVNode(_component_CardHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_CardTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Create project")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_CardDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Deploy your new project in one-click.")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardContent, null, {
                      default: withCtx(() => [
                        createVNode("form", null, [
                          createVNode("div", { class: "grid w-full items-center gap-4" }, [
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(_component_Label, { for: "name" }, {
                                default: withCtx(() => [
                                  createTextVNode("Name")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "name",
                                placeholder: "Name of your project"
                              })
                            ]),
                            createVNode("div", { class: "flex flex-col space-y-1.5" }, [
                              createVNode(_component_Label, { for: "framework" }, {
                                default: withCtx(() => [
                                  createTextVNode("Framework")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Select, null, {
                                default: withCtx(() => [
                                  createVNode(_component_SelectTrigger, { id: "framework" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectValue, { placeholder: "Select" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_SelectContent, { position: "popper" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectItem, { value: "nuxt" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Nuxt.js ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "next" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Next.js ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "sveltekit" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" SvelteKit ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectItem, { value: "astro" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Astro ")
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
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardFooter, { class: "flex justify-between px-6 pb-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_Button, { variant: "outline" }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, null, {
                          default: withCtx(() => [
                            createTextVNode("Deploy")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/components/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const card = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { card as default };
//# sourceMappingURL=card.vue.mjs.map
