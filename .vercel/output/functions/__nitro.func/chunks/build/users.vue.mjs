import { f as useToast, a as _sfc_main$1, b as __nuxt_component_9, g as _sfc_main$d, h as _sfc_main$e, i as _sfc_main$f, j as _sfc_main$g, k as _sfc_main$m, _ as _sfc_main$o } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$6 } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$5 } from './CardDescription.vue2.mjs';
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a, d as _sfc_main$b, e as _sfc_main$c } from './TableHeader.vue2.mjs';
import { _ as _sfc_main$h } from './Switch.vue2.mjs';
import { _ as _sfc_main$i, a as _sfc_main$j, b as _sfc_main$l } from './DialogTitle.vue2.mjs';
import { _ as _sfc_main$k } from './DialogHeader.vue2.mjs';
import { _ as _sfc_main$n } from './Input.vue2.mjs';
import { _ as _sfc_main$p } from './Textarea.vue2.mjs';
import { _ as _sfc_main$q } from './PasswordInput.vue2.mjs';
import { _ as _sfc_main$r } from './DialogFooter.vue2.mjs';
import { _ as _sfc_main$s, a as _sfc_main$t, b as _sfc_main$u, c as _sfc_main$v, d as _sfc_main$w, e as _sfc_main$x, f as _sfc_main$y, g as _sfc_main$z } from './AlertDialogTitle.vue2.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    const { toast } = useToast();
    const users = ref([]);
    const isLoading = ref(true);
    const isCreateDialogOpen = ref(false);
    const isEditDialogOpen = ref(false);
    const isDeleteAlertOpen = ref(false);
    const selectedUser = ref(null);
    const originalFormState = ref(null);
    const passwordStrength = ref({
      hasMinLength: false,
      hasUppercase: false,
      hasLowercase: false,
      hasNumbers: false,
      hasSpecialChars: false,
      isValid: false
    });
    const isUploading = ref(false);
    const avatarPreview = ref(null);
    const form = ref({
      name: "",
      email: "",
      password: "",
      bio: "",
      avatar: "",
      status: 1,
      role: "cliente"
    });
    function resetForm() {
      form.value = {
        name: "",
        email: "",
        password: "",
        bio: "",
        avatar: "",
        status: 1,
        role: "cliente"
      };
      avatarPreview.value = null;
      validatePassword(form.value.password);
    }
    function validatePassword(password) {
      passwordStrength.value = {
        hasMinLength: password.length >= 12,
        hasUppercase: /[A-Z]/.test(password),
        hasLowercase: /[a-z]/.test(password),
        hasNumbers: /\d/.test(password),
        hasSpecialChars: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
        isValid: false
      };
      passwordStrength.value.isValid = passwordStrength.value.hasMinLength && passwordStrength.value.hasUppercase && passwordStrength.value.hasLowercase && passwordStrength.value.hasNumbers && passwordStrength.value.hasSpecialChars;
    }
    function generateSecurePassword() {
      const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerChars = "abcdefghijklmnopqrstuvwxyz";
      const numbers = "0123456789";
      const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
      const allChars = upperChars + lowerChars + numbers + specialChars;
      let password = "";
      password += upperChars.charAt(Math.floor(Math.random() * upperChars.length));
      password += lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
      password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      for (let i = password.length; i < 12; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
      password = password.split("").sort(() => 0.5 - Math.random()).join("");
      form.value.password = password;
      validatePassword(password);
    }
    async function uploadAvatar(event) {
      var _a;
      const fileInput = event.target;
      if (!fileInput.files || fileInput.files.length === 0) return;
      const file = fileInput.files[0];
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Erro",
          description: "O arquivo deve ser uma imagem",
          variant: "destructive"
        });
        return;
      }
      try {
        isUploading.value = true;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
          var _a2;
          try {
            const imageData = reader.result;
            avatarPreview.value = imageData;
            const response = await $fetch("/api/upload/avatar", {
              method: "POST",
              body: { imageData }
            });
            form.value.avatar = response.avatarUrl;
            toast({
              title: "Sucesso",
              description: "Avatar enviado com sucesso"
            });
          } catch (error) {
            console.error("Erro ao processar imagem:", error);
            toast({
              title: "Erro",
              description: ((_a2 = error == null ? void 0 : error.data) == null ? void 0 : _a2.message) || "Não foi possível processar a imagem",
              variant: "destructive"
            });
          } finally {
            isUploading.value = false;
          }
        };
        reader.onerror = () => {
          toast({
            title: "Erro",
            description: "Erro ao ler o arquivo",
            variant: "destructive"
          });
          isUploading.value = false;
        };
      } catch (error) {
        console.error("Erro ao fazer upload do avatar:", error);
        toast({
          title: "Erro",
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || "Não foi possível fazer o upload da imagem",
          variant: "destructive"
        });
        isUploading.value = false;
      }
    }
    async function fetchUsers() {
      isLoading.value = true;
      try {
        const response = await $fetch("/api/users");
        users.value = response;
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        toast({
          title: "Erro",
          description: "Não foi possível carregar os usuários",
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    }
    async function createUser() {
      var _a;
      if (!passwordStrength.value.isValid) {
        toast({
          title: "Erro",
          description: "A senha não atende aos requisitos de segurança",
          variant: "destructive"
        });
        return;
      }
      try {
        await $fetch("/api/users/create", {
          method: "POST",
          body: form.value
        });
        toast({
          title: "Sucesso",
          description: "Usuário criado com sucesso"
        });
        isCreateDialogOpen.value = false;
        resetForm();
        await fetchUsers();
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
        let errorMessage = "Não foi possível criar o usuário";
        if ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) {
          errorMessage = error.data.message;
          if (errorMessage.includes("email já está em uso")) {
            errorMessage = "Este email já está cadastrado para outro usuário";
          } else if (errorMessage.includes("nome já está em uso")) {
            errorMessage = "Este nome já está cadastrado para outro usuário";
          }
        }
        toast({
          title: "Erro",
          description: errorMessage,
          variant: "destructive"
        });
      }
    }
    function getRoleIcon(role) {
      switch (role) {
        case "admin":
          return {
            icon: "lucide:shield",
            color: "text-purple-600",
            badge: "bg-purple-100 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800/60",
            label: "Administrador"
          };
        case "funcionario":
          return {
            icon: "lucide:briefcase",
            color: "text-blue-600",
            badge: "bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/60",
            label: "Funcionário"
          };
        default:
          return {
            icon: "lucide:user",
            color: "text-green-600",
            badge: "bg-green-100 dark:bg-green-950/30 border-green-200 dark:border-green-800/60",
            label: "Cliente"
          };
      }
    }
    function openEditDialog(user) {
      selectedUser.value = user;
      form.value = {
        name: user.name,
        email: user.email,
        password: "",
        bio: user.bio || "",
        avatar: user.avatar || "",
        status: user.status,
        role: user.role
      };
      originalFormState.value = { ...form.value };
      avatarPreview.value = user.avatar;
      validatePassword(form.value.password);
      isEditDialogOpen.value = true;
    }
    function hasFormChanges() {
      if (!selectedUser.value || !originalFormState.value) return false;
      if (form.value.password && !passwordStrength.value.isValid) {
        return false;
      }
      return form.value.name !== originalFormState.value.name || form.value.email !== originalFormState.value.email || form.value.bio !== originalFormState.value.bio || form.value.status !== originalFormState.value.status || form.value.avatar !== originalFormState.value.avatar || form.value.role !== originalFormState.value.role || form.value.password.length > 0;
    }
    async function updateUser() {
      var _a;
      if (!selectedUser.value) {
        return;
      }
      try {
        const userData = {
          name: form.value.name,
          email: form.value.email,
          bio: form.value.bio || null,
          avatar: form.value.avatar || null,
          status: form.value.status === 1 ? 1 : 0,
          // Garantir que seja sempre 1 ou 0
          role: form.value.role
        };
        if (form.value.password) {
          userData.password = form.value.password;
        }
        isLoading.value = true;
        const _response = await $fetch(`/api/users/${selectedUser.value.id}`, {
          method: "PATCH",
          body: userData
        });
        isEditDialogOpen.value = false;
        resetForm();
        await fetchUsers();
        toast({
          title: "Sucesso",
          description: "Usuário atualizado com sucesso"
        });
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        let errorMessage = "Não foi possível atualizar o usuário";
        if ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) {
          errorMessage = error.data.message;
          if (errorMessage.includes("email já está em uso")) {
            errorMessage = "Este email já está cadastrado para outro usuário";
          } else if (errorMessage.includes("nome já está em uso")) {
            errorMessage = "Este nome já está cadastrado para outro usuário";
          }
        }
        toast({
          title: "Erro",
          description: errorMessage,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    }
    function openDeleteAlert(user) {
      selectedUser.value = user;
      isDeleteAlertOpen.value = true;
    }
    async function deleteUser() {
      var _a;
      if (!selectedUser.value) {
        return;
      }
      try {
        await $fetch(`/api/users/${selectedUser.value.id}`, {
          method: "DELETE"
        });
        toast({
          title: "Sucesso",
          description: "Usuário excluído com sucesso"
        });
        isDeleteAlertOpen.value = false;
        selectedUser.value = null;
        await fetchUsers();
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        toast({
          title: "Erro",
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || "Não foi possível excluir o usuário",
          variant: "destructive"
        });
      }
    }
    function formatDate(dateString) {
      return new Date(dateString).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
    async function toggleUserStatus(user) {
      var _a;
      try {
        const userId = user.id;
        const newStatus = user.status === 1 ? 0 : 1;
        console.error("Status a ser enviado:", { userId, oldStatus: user.status, newStatus });
        const _response = await $fetch(`/api/users/${userId}`, {
          method: "PATCH",
          body: { status: newStatus }
        });
        users.value = users.value.map((u) => {
          if (u.id === userId) {
            return { ...u, status: newStatus };
          }
          return u;
        });
        toast({
          title: "Sucesso",
          description: `Status do usuário atualizado com sucesso`
        });
      } catch (error) {
        console.error("Erro ao alterar status do usuário:", error);
        toast({
          title: "Erro",
          description: ((_a = error == null ? void 0 : error.data) == null ? void 0 : _a.message) || "Não foi possível alterar o status do usuário",
          variant: "destructive"
        });
        await fetchUsers();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_Icon = __nuxt_component_9;
      const _component_Card = _sfc_main$2;
      const _component_CardHeader = _sfc_main$3;
      const _component_CardTitle = _sfc_main$4;
      const _component_CardDescription = _sfc_main$5;
      const _component_CardContent = _sfc_main$6;
      const _component_Table = _sfc_main$7;
      const _component_TableHeader = _sfc_main$8;
      const _component_TableRow = _sfc_main$9;
      const _component_TableHead = _sfc_main$a;
      const _component_TableBody = _sfc_main$b;
      const _component_TableCell = _sfc_main$c;
      const _component_Skeleton = _sfc_main$d;
      const _component_Avatar = _sfc_main$e;
      const _component_AvatarImage = _sfc_main$f;
      const _component_AvatarFallback = _sfc_main$g;
      const _component_Switch = _sfc_main$h;
      const _component_Dialog = _sfc_main$i;
      const _component_DialogContent = _sfc_main$j;
      const _component_DialogHeader = _sfc_main$k;
      const _component_DialogTitle = _sfc_main$l;
      const _component_DialogDescription = _sfc_main$m;
      const _component_Input = _sfc_main$n;
      const _component_Label = _sfc_main$o;
      const _component_Textarea = _sfc_main$p;
      const _component_PasswordInput = _sfc_main$q;
      const _component_DialogFooter = _sfc_main$r;
      const _component_AlertDialog = _sfc_main$s;
      const _component_AlertDialogContent = _sfc_main$t;
      const _component_AlertDialogHeader = _sfc_main$u;
      const _component_AlertDialogTitle = _sfc_main$v;
      const _component_AlertDialogDescription = _sfc_main$w;
      const _component_AlertDialogFooter = _sfc_main$x;
      const _component_AlertDialogCancel = _sfc_main$y;
      const _component_AlertDialogAction = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><div class="flex justify-between items-center mb-6"><h1 class="text-2xl font-bold">Gerenciamento de Usuários</h1>`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => {
          isCreateDialogOpen.value = true;
          resetForm();
        },
        class: "bg-primary hover:bg-primary/90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:plus-circle",
              class: "mr-2 h-4 w-4"
            }, null, _parent2, _scopeId));
            _push2(` Novo Usuário `);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:plus-circle",
                class: "mr-2 h-4 w-4"
              }),
              createTextVNode(" Novo Usuário ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Card, { class: "border shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "pb-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-xl" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Usuários`);
                      } else {
                        return [
                          createTextVNode("Usuários")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Visualize e gerencie todos os usuários do sistema`);
                      } else {
                        return [
                          createTextVNode("Visualize e gerencie todos os usuários do sistema")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-xl" }, {
                      default: withCtx(() => [
                        createTextVNode("Usuários")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("Visualize e gerencie todos os usuários do sistema")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Table, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, { class: "bg-muted/50" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "w-14" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Avatar`);
                                        } else {
                                          return [
                                            createTextVNode("Avatar")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Nome`);
                                        } else {
                                          return [
                                            createTextVNode("Nome")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Email`);
                                        } else {
                                          return [
                                            createTextVNode("Email")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Data de Criação`);
                                        } else {
                                          return [
                                            createTextVNode("Data de Criação")
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
                                          _push7(`Função`);
                                        } else {
                                          return [
                                            createTextVNode("Função")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_TableHead, { class: "text-right" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Ações`);
                                        } else {
                                          return [
                                            createTextVNode("Ações")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_TableHead, { class: "w-14" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Avatar")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Nome")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Email")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Data de Criação")
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
                                          createTextVNode("Função")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableHead, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Ações")
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
                                    createVNode(_component_TableHead, { class: "w-14" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Avatar")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Nome")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Email")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Data de Criação")
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
                                        createTextVNode("Função")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableHead, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ações")
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
                              if (unref(isLoading)) {
                                _push5(`<!--[-->`);
                                ssrRenderList(5, (i) => {
                                  _push5(ssrRenderComponent(_component_TableRow, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-10 rounded-full" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "h-10 w-10 rounded-full" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-[250px]" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "h-5 w-[250px]" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-[180px]" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "h-5 w-[180px]" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-[150px]" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "h-5 w-[150px]" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-[80px]" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "h-5 w-[80px]" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-5 w-[100px]" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "h-5 w-[100px]" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, { class: "text-right" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="flex justify-end gap-2"${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-8 w-8 rounded" }, null, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "h-8 w-8 rounded" }, null, _parent7, _scopeId6));
                                              _push7(`</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "flex justify-end gap-2" }, [
                                                  createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" }),
                                                  createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" })
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "h-10 w-10 rounded-full" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "h-5 w-[250px]" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "h-5 w-[180px]" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "h-5 w-[150px]" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "h-5 w-[80px]" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "h-5 w-[100px]" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex justify-end gap-2" }, [
                                                createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" }),
                                                createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else if (unref(users).length === 0) {
                                _push5(ssrRenderComponent(_component_TableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, {
                                        colspan: "7",
                                        class: "h-24 text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-center justify-center gap-2 text-muted-foreground"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_Icon, {
                                              name: "lucide:users-x",
                                              class: "h-8 w-8"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`<p${_scopeId6}>Nenhum usuário encontrado.</p></div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "flex flex-col items-center justify-center gap-2 text-muted-foreground" }, [
                                                createVNode(_component_Icon, {
                                                  name: "lucide:users-x",
                                                  class: "h-8 w-8"
                                                }),
                                                createVNode("p", null, "Nenhum usuário encontrado.")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, {
                                          colspan: "7",
                                          class: "h-24 text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex flex-col items-center justify-center gap-2 text-muted-foreground" }, [
                                              createVNode(_component_Icon, {
                                                name: "lucide:users-x",
                                                class: "h-8 w-8"
                                              }),
                                              createVNode("p", null, "Nenhum usuário encontrado.")
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(users), (user) => {
                                  _push5(ssrRenderComponent(_component_TableRow, {
                                    key: user.id,
                                    class: "hover:bg-muted/30 transition-colors"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_TableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Avatar, {
                                                size: "sm",
                                                shape: "circle",
                                                class: "border-2 border-muted mx-auto"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    if (user.avatar) {
                                                      _push8(ssrRenderComponent(_component_AvatarImage, {
                                                        src: user.avatar
                                                      }, null, _parent8, _scopeId7));
                                                    } else {
                                                      _push8(`<!---->`);
                                                    }
                                                    _push8(ssrRenderComponent(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(user.name.charAt(0).toUpperCase())}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                        key: 0,
                                                        src: user.avatar
                                                      }, null, 8, ["src"])) : createCommentVNode("", true),
                                                      createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Avatar, {
                                                  size: "sm",
                                                  shape: "circle",
                                                  class: "border-2 border-muted mx-auto"
                                                }, {
                                                  default: withCtx(() => [
                                                    user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                      key: 0,
                                                      src: user.avatar
                                                    }, null, 8, ["src"])) : createCommentVNode("", true),
                                                    createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="font-medium"${_scopeId6}>${ssrInterpolate(user.name)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, { class: "text-muted-foreground" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(user.email)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(user.email), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, { class: "text-muted-foreground text-sm" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(formatDate(user.createdAt))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(formatDate(user.createdAt)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="flex items-center gap-2"${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_Switch, {
                                                checked: user.status === 1,
                                                "onUpdate:checked": ($event) => toggleUserStatus(user),
                                                class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                              }, null, _parent7, _scopeId6));
                                              _push7(`<span class="${ssrRenderClass([user.status === 1 ? "text-green-600" : "text-red-600", "text-xs font-medium"])}"${_scopeId6}>${ssrInterpolate(user.status === 1 ? "Ativo" : "Inativo")}</span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "flex items-center gap-2" }, [
                                                  createVNode(_component_Switch, {
                                                    checked: user.status === 1,
                                                    "onUpdate:checked": ($event) => toggleUserStatus(user),
                                                    class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                                  createVNode("span", {
                                                    class: ["text-xs font-medium", user.status === 1 ? "text-green-600" : "text-red-600"]
                                                  }, toDisplayString(user.status === 1 ? "Ativo" : "Inativo"), 3)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass([[getRoleIcon(user.role).badge, getRoleIcon(user.role).color], "inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium"])}"${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_Icon, {
                                                name: getRoleIcon(user.role).icon,
                                                class: "h-3.5 w-3.5 mr-1"
                                              }, null, _parent7, _scopeId6));
                                              _push7(` ${ssrInterpolate(getRoleIcon(user.role).label)}</div>`);
                                            } else {
                                              return [
                                                createVNode("div", {
                                                  class: ["inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium", [getRoleIcon(user.role).badge, getRoleIcon(user.role).color]]
                                                }, [
                                                  createVNode(_component_Icon, {
                                                    name: getRoleIcon(user.role).icon,
                                                    class: "h-3.5 w-3.5 mr-1"
                                                  }, null, 8, ["name"]),
                                                  createTextVNode(" " + toDisplayString(getRoleIcon(user.role).label), 1)
                                                ], 2)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, { class: "text-right" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="flex justify-end gap-2"${_scopeId6}>`);
                                              _push7(ssrRenderComponent(_component_Button, {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: ($event) => openEditDialog(user),
                                                class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_Icon, {
                                                      name: "lucide:pencil",
                                                      class: "h-4 w-4"
                                                    }, null, _parent8, _scopeId7));
                                                    _push8(`<span class="sr-only"${_scopeId7}>Editar</span>`);
                                                  } else {
                                                    return [
                                                      createVNode(_component_Icon, {
                                                        name: "lucide:pencil",
                                                        class: "h-4 w-4"
                                                      }),
                                                      createVNode("span", { class: "sr-only" }, "Editar")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_Button, {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: ($event) => openDeleteAlert(user),
                                                class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_Icon, {
                                                      name: "lucide:trash-2",
                                                      class: "h-4 w-4"
                                                    }, null, _parent8, _scopeId7));
                                                    _push8(`<span class="sr-only"${_scopeId7}>Excluir</span>`);
                                                  } else {
                                                    return [
                                                      createVNode(_component_Icon, {
                                                        name: "lucide:trash-2",
                                                        class: "h-4 w-4"
                                                      }),
                                                      createVNode("span", { class: "sr-only" }, "Excluir")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`</div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "flex justify-end gap-2" }, [
                                                  createVNode(_component_Button, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: ($event) => openEditDialog(user),
                                                    class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_Icon, {
                                                        name: "lucide:pencil",
                                                        class: "h-4 w-4"
                                                      }),
                                                      createVNode("span", { class: "sr-only" }, "Editar")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]),
                                                  createVNode(_component_Button, {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: ($event) => openDeleteAlert(user),
                                                    class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_Icon, {
                                                        name: "lucide:trash-2",
                                                        class: "h-4 w-4"
                                                      }),
                                                      createVNode("span", { class: "sr-only" }, "Excluir")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_TableCell, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Avatar, {
                                                size: "sm",
                                                shape: "circle",
                                                class: "border-2 border-muted mx-auto"
                                              }, {
                                                default: withCtx(() => [
                                                  user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                    key: 0,
                                                    src: user.avatar
                                                  }, null, 8, ["src"])) : createCommentVNode("", true),
                                                  createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableCell, { class: "text-muted-foreground" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(user.email), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableCell, { class: "text-muted-foreground text-sm" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(formatDate(user.createdAt)), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                createVNode(_component_Switch, {
                                                  checked: user.status === 1,
                                                  "onUpdate:checked": ($event) => toggleUserStatus(user),
                                                  class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                                }, null, 8, ["checked", "onUpdate:checked"]),
                                                createVNode("span", {
                                                  class: ["text-xs font-medium", user.status === 1 ? "text-green-600" : "text-red-600"]
                                                }, toDisplayString(user.status === 1 ? "Ativo" : "Inativo"), 3)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: ["inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium", [getRoleIcon(user.role).badge, getRoleIcon(user.role).color]]
                                              }, [
                                                createVNode(_component_Icon, {
                                                  name: getRoleIcon(user.role).icon,
                                                  class: "h-3.5 w-3.5 mr-1"
                                                }, null, 8, ["name"]),
                                                createTextVNode(" " + toDisplayString(getRoleIcon(user.role).label), 1)
                                              ], 2)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_TableCell, { class: "text-right" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex justify-end gap-2" }, [
                                                createVNode(_component_Button, {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  onClick: ($event) => openEditDialog(user),
                                                  class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_Icon, {
                                                      name: "lucide:pencil",
                                                      class: "h-4 w-4"
                                                    }),
                                                    createVNode("span", { class: "sr-only" }, "Editar")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode(_component_Button, {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  onClick: ($event) => openDeleteAlert(user),
                                                  class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_Icon, {
                                                      name: "lucide:trash-2",
                                                      class: "h-4 w-4"
                                                    }),
                                                    createVNode("span", { class: "sr-only" }, "Excluir")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ])
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
                              }
                            } else {
                              return [
                                unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(5, (i) => {
                                  return createVNode(_component_TableRow, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "h-10 w-10 rounded-full" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "h-5 w-[250px]" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "h-5 w-[180px]" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "h-5 w-[150px]" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "h-5 w-[80px]" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "h-5 w-[100px]" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex justify-end gap-2" }, [
                                            createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" }),
                                            createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64)) : unref(users).length === 0 ? (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, {
                                      colspan: "7",
                                      class: "h-24 text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex flex-col items-center justify-center gap-2 text-muted-foreground" }, [
                                          createVNode(_component_Icon, {
                                            name: "lucide:users-x",
                                            class: "h-8 w-8"
                                          }),
                                          createVNode("p", null, "Nenhum usuário encontrado.")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(unref(users), (user) => {
                                  return openBlock(), createBlock(_component_TableRow, {
                                    key: user.id,
                                    class: "hover:bg-muted/30 transition-colors"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Avatar, {
                                            size: "sm",
                                            shape: "circle",
                                            class: "border-2 border-muted mx-auto"
                                          }, {
                                            default: withCtx(() => [
                                              user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                                key: 0,
                                                src: user.avatar
                                              }, null, 8, ["src"])) : createCommentVNode("", true),
                                              createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-muted-foreground" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(user.email), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-muted-foreground text-sm" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(formatDate(user.createdAt)), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode(_component_Switch, {
                                              checked: user.status === 1,
                                              "onUpdate:checked": ($event) => toggleUserStatus(user),
                                              class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                            }, null, 8, ["checked", "onUpdate:checked"]),
                                            createVNode("span", {
                                              class: ["text-xs font-medium", user.status === 1 ? "text-green-600" : "text-red-600"]
                                            }, toDisplayString(user.status === 1 ? "Ativo" : "Inativo"), 3)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: ["inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium", [getRoleIcon(user.role).badge, getRoleIcon(user.role).color]]
                                          }, [
                                            createVNode(_component_Icon, {
                                              name: getRoleIcon(user.role).icon,
                                              class: "h-3.5 w-3.5 mr-1"
                                            }, null, 8, ["name"]),
                                            createTextVNode(" " + toDisplayString(getRoleIcon(user.role).label), 1)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, { class: "text-right" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex justify-end gap-2" }, [
                                            createVNode(_component_Button, {
                                              variant: "ghost",
                                              size: "icon",
                                              onClick: ($event) => openEditDialog(user),
                                              class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, {
                                                  name: "lucide:pencil",
                                                  class: "h-4 w-4"
                                                }),
                                                createVNode("span", { class: "sr-only" }, "Editar")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(_component_Button, {
                                              variant: "ghost",
                                              size: "icon",
                                              onClick: ($event) => openDeleteAlert(user),
                                              class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, {
                                                  name: "lucide:trash-2",
                                                  class: "h-4 w-4"
                                                }),
                                                createVNode("span", { class: "sr-only" }, "Excluir")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHeader, { class: "bg-muted/50" }, {
                            default: withCtx(() => [
                              createVNode(_component_TableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_TableHead, { class: "w-14" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Avatar")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nome")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Email")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Data de Criação")
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
                                      createTextVNode("Função")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableHead, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Ações")
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
                              unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(5, (i) => {
                                return createVNode(_component_TableRow, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "h-10 w-10 rounded-full" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "h-5 w-[250px]" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "h-5 w-[180px]" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "h-5 w-[150px]" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "h-5 w-[80px]" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "h-5 w-[100px]" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex justify-end gap-2" }, [
                                          createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" }),
                                          createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64)) : unref(users).length === 0 ? (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(_component_TableCell, {
                                    colspan: "7",
                                    class: "h-24 text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-col items-center justify-center gap-2 text-muted-foreground" }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:users-x",
                                          class: "h-8 w-8"
                                        }),
                                        createVNode("p", null, "Nenhum usuário encontrado.")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(unref(users), (user) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  key: user.id,
                                  class: "hover:bg-muted/30 transition-colors"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Avatar, {
                                          size: "sm",
                                          shape: "circle",
                                          class: "border-2 border-muted mx-auto"
                                        }, {
                                          default: withCtx(() => [
                                            user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                              key: 0,
                                              src: user.avatar
                                            }, null, 8, ["src"])) : createCommentVNode("", true),
                                            createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-muted-foreground" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(user.email), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-muted-foreground text-sm" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(formatDate(user.createdAt)), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode(_component_Switch, {
                                            checked: user.status === 1,
                                            "onUpdate:checked": ($event) => toggleUserStatus(user),
                                            class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                          }, null, 8, ["checked", "onUpdate:checked"]),
                                          createVNode("span", {
                                            class: ["text-xs font-medium", user.status === 1 ? "text-green-600" : "text-red-600"]
                                          }, toDisplayString(user.status === 1 ? "Ativo" : "Inativo"), 3)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: ["inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium", [getRoleIcon(user.role).badge, getRoleIcon(user.role).color]]
                                        }, [
                                          createVNode(_component_Icon, {
                                            name: getRoleIcon(user.role).icon,
                                            class: "h-3.5 w-3.5 mr-1"
                                          }, null, 8, ["name"]),
                                          createTextVNode(" " + toDisplayString(getRoleIcon(user.role).label), 1)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, { class: "text-right" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex justify-end gap-2" }, [
                                          createVNode(_component_Button, {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ($event) => openEditDialog(user),
                                            class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, {
                                                name: "lucide:pencil",
                                                class: "h-4 w-4"
                                              }),
                                              createVNode("span", { class: "sr-only" }, "Editar")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_Button, {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ($event) => openDeleteAlert(user),
                                            class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, {
                                                name: "lucide:trash-2",
                                                class: "h-4 w-4"
                                              }),
                                              createVNode("span", { class: "sr-only" }, "Excluir")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
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
                    createVNode(_component_Table, null, {
                      default: withCtx(() => [
                        createVNode(_component_TableHeader, { class: "bg-muted/50" }, {
                          default: withCtx(() => [
                            createVNode(_component_TableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, { class: "w-14" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Avatar")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nome")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Email")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Data de Criação")
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
                                    createTextVNode("Função")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ações")
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
                            unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(5, (i) => {
                              return createVNode(_component_TableRow, { key: i }, {
                                default: withCtx(() => [
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Skeleton, { class: "h-10 w-10 rounded-full" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Skeleton, { class: "h-5 w-[250px]" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Skeleton, { class: "h-5 w-[180px]" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Skeleton, { class: "h-5 w-[150px]" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Skeleton, { class: "h-5 w-[80px]" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Skeleton, { class: "h-5 w-[100px]" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_TableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex justify-end gap-2" }, [
                                        createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" }),
                                        createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024);
                            }), 64)) : unref(users).length === 0 ? (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_TableCell, {
                                  colspan: "7",
                                  class: "h-24 text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col items-center justify-center gap-2 text-muted-foreground" }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:users-x",
                                        class: "h-8 w-8"
                                      }),
                                      createVNode("p", null, "Nenhum usuário encontrado.")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(unref(users), (user) => {
                              return openBlock(), createBlock(_component_TableRow, {
                                key: user.id,
                                class: "hover:bg-muted/30 transition-colors"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_TableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Avatar, {
                                        size: "sm",
                                        shape: "circle",
                                        class: "border-2 border-muted mx-auto"
                                      }, {
                                        default: withCtx(() => [
                                          user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                            key: 0,
                                            src: user.avatar
                                          }, null, 8, ["src"])) : createCommentVNode("", true),
                                          createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-muted-foreground" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(user.email), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-muted-foreground text-sm" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(formatDate(user.createdAt)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode(_component_Switch, {
                                          checked: user.status === 1,
                                          "onUpdate:checked": ($event) => toggleUserStatus(user),
                                          class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                        }, null, 8, ["checked", "onUpdate:checked"]),
                                        createVNode("span", {
                                          class: ["text-xs font-medium", user.status === 1 ? "text-green-600" : "text-red-600"]
                                        }, toDisplayString(user.status === 1 ? "Ativo" : "Inativo"), 3)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, null, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: ["inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium", [getRoleIcon(user.role).badge, getRoleIcon(user.role).color]]
                                      }, [
                                        createVNode(_component_Icon, {
                                          name: getRoleIcon(user.role).icon,
                                          class: "h-3.5 w-3.5 mr-1"
                                        }, null, 8, ["name"]),
                                        createTextVNode(" " + toDisplayString(getRoleIcon(user.role).label), 1)
                                      ], 2)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_TableCell, { class: "text-right" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex justify-end gap-2" }, [
                                        createVNode(_component_Button, {
                                          variant: "ghost",
                                          size: "icon",
                                          onClick: ($event) => openEditDialog(user),
                                          class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:pencil",
                                              class: "h-4 w-4"
                                            }),
                                            createVNode("span", { class: "sr-only" }, "Editar")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_Button, {
                                          variant: "ghost",
                                          size: "icon",
                                          onClick: ($event) => openDeleteAlert(user),
                                          class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:trash-2",
                                              class: "h-4 w-4"
                                            }),
                                            createVNode("span", { class: "sr-only" }, "Excluir")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
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
              createVNode(_component_CardHeader, { class: "pb-0" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-xl" }, {
                    default: withCtx(() => [
                      createTextVNode("Usuários")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("Visualize e gerencie todos os usuários do sistema")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode(_component_Table, null, {
                    default: withCtx(() => [
                      createVNode(_component_TableHeader, { class: "bg-muted/50" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, { class: "w-14" }, {
                                default: withCtx(() => [
                                  createTextVNode("Avatar")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Nome")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Data de Criação")
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
                                  createTextVNode("Função")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, { class: "text-right" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ações")
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
                          unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(5, (i) => {
                            return createVNode(_component_TableRow, { key: i }, {
                              default: withCtx(() => [
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Skeleton, { class: "h-10 w-10 rounded-full" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Skeleton, { class: "h-5 w-[250px]" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Skeleton, { class: "h-5 w-[180px]" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Skeleton, { class: "h-5 w-[150px]" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Skeleton, { class: "h-5 w-[80px]" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_Skeleton, { class: "h-5 w-[100px]" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex justify-end gap-2" }, [
                                      createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" }),
                                      createVNode(_component_Skeleton, { class: "h-8 w-8 rounded" })
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)) : unref(users).length === 0 ? (openBlock(), createBlock(_component_TableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_TableCell, {
                                colspan: "7",
                                class: "h-24 text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col items-center justify-center gap-2 text-muted-foreground" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:users-x",
                                      class: "h-8 w-8"
                                    }),
                                    createVNode("p", null, "Nenhum usuário encontrado.")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(unref(users), (user) => {
                            return openBlock(), createBlock(_component_TableRow, {
                              key: user.id,
                              class: "hover:bg-muted/30 transition-colors"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_TableCell, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Avatar, {
                                      size: "sm",
                                      shape: "circle",
                                      class: "border-2 border-muted mx-auto"
                                    }, {
                                      default: withCtx(() => [
                                        user.avatar ? (openBlock(), createBlock(_component_AvatarImage, {
                                          key: 0,
                                          src: user.avatar
                                        }, null, 8, ["src"])) : createCommentVNode("", true),
                                        createVNode(_component_AvatarFallback, { class: "bg-primary/10 text-primary" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(user.name.charAt(0).toUpperCase()), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "font-medium" }, toDisplayString(user.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableCell, { class: "text-muted-foreground" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(user.email), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableCell, { class: "text-muted-foreground text-sm" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatDate(user.createdAt)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode(_component_Switch, {
                                        checked: user.status === 1,
                                        "onUpdate:checked": ($event) => toggleUserStatus(user),
                                        class: "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
                                      }, null, 8, ["checked", "onUpdate:checked"]),
                                      createVNode("span", {
                                        class: ["text-xs font-medium", user.status === 1 ? "text-green-600" : "text-red-600"]
                                      }, toDisplayString(user.status === 1 ? "Ativo" : "Inativo"), 3)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableCell, null, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: ["inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-medium", [getRoleIcon(user.role).badge, getRoleIcon(user.role).color]]
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: getRoleIcon(user.role).icon,
                                        class: "h-3.5 w-3.5 mr-1"
                                      }, null, 8, ["name"]),
                                      createTextVNode(" " + toDisplayString(getRoleIcon(user.role).label), 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_TableCell, { class: "text-right" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex justify-end gap-2" }, [
                                      createVNode(_component_Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ($event) => openEditDialog(user),
                                        class: "h-8 w-8 text-muted-foreground hover:text-primary"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:pencil",
                                            class: "h-4 w-4"
                                          }),
                                          createVNode("span", { class: "sr-only" }, "Editar")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_Button, {
                                        variant: "ghost",
                                        size: "icon",
                                        onClick: ($event) => openDeleteAlert(user),
                                        class: "h-8 w-8 text-muted-foreground hover:text-destructive"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:trash-2",
                                            class: "h-4 w-4"
                                          }),
                                          createVNode("span", { class: "sr-only" }, "Excluir")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
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
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(isCreateDialogOpen),
        "onUpdate:open": ($event) => isCreateDialogOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[800px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Adicionar Novo Usuário`);
                            } else {
                              return [
                                createTextVNode("Adicionar Novo Usuário")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Preencha os campos abaixo para criar um novo usuário. `);
                            } else {
                              return [
                                createTextVNode(" Preencha os campos abaixo para criar um novo usuário. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Adicionar Novo Usuário")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Preencha os campos abaixo para criar um novo usuário. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4"${_scopeId2}><div class="flex flex-col items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Avatar, {
                    size: "lg",
                    class: "w-40 h-40 border-2 border-muted"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(avatarPreview)) {
                          _push4(ssrRenderComponent(_component_AvatarImage, { src: unref(avatarPreview) }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_AvatarFallback, { class: "text-4xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          unref(avatarPreview) ? (openBlock(), createBlock(_component_AvatarImage, {
                            key: 0,
                            src: unref(avatarPreview)
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode(_component_AvatarFallback, { class: "text-4xl" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col items-center gap-2 w-full"${_scopeId2}><label for="new-avatar-upload" class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"${_scopeId2}> Selecionar Imagem </label>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "new-avatar-upload",
                    type: "file",
                    accept: "image/*",
                    class: "hidden",
                    onChange: uploadAvatar,
                    disabled: unref(isUploading)
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-xs text-muted-foreground"${_scopeId2}>JPG, PNG ou GIF. Máximo 5MB.</p></div><div class="w-full mt-4"${_scopeId2}><div class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>STATUS</div><div class="w-full border rounded-md overflow-hidden grid grid-cols-2"${_scopeId2}><button type="button" class="${ssrRenderClass([unref(form).status === 1 ? "bg-green-500/20 text-green-700" : "bg-background hover:bg-muted/30 border-r", "py-2 px-4 text-center text-sm font-medium transition-colors"])}"${_scopeId2}><div class="flex items-center justify-center gap-2"${_scopeId2}><div class="w-2 h-2 rounded-full bg-green-500"${_scopeId2}></div> Ativo </div></button><button type="button" class="${ssrRenderClass([unref(form).status === 0 ? "bg-red-500/10 text-red-700" : "bg-background hover:bg-muted/30", "py-2 px-4 text-center text-sm font-medium transition-colors"])}"${_scopeId2}><div class="flex items-center justify-center gap-2"${_scopeId2}><div class="w-2 h-2 rounded-full bg-red-500"${_scopeId2}></div> Inativo </div></button></div></div><div class="w-full mt-4"${_scopeId2}><div class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>FUNÇÃO</div><div class="w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1"${_scopeId2}><button type="button" class="${ssrRenderClass([unref(form).role === "admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-background hover:bg-muted/30", "py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:shield",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Administrador </button><button type="button" class="${ssrRenderClass([unref(form).role === "funcionario" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-background hover:bg-muted/30", "py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:briefcase",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Funcionário </button><button type="button" class="${ssrRenderClass([unref(form).role === "cliente" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-background hover:bg-muted/30", "py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:user",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Cliente </button></div></div></div><div class="space-y-6"${_scopeId2}><div${_scopeId2}><h3 class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>INFORMAÇÕES PESSOAIS</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nome`);
                      } else {
                        return [
                          createTextVNode("Nome")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: "Nome completo"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    placeholder: "exemplo@email.com"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2 md:col-span-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "bio" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Biografia`);
                      } else {
                        return [
                          createTextVNode("Biografia")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Textarea, {
                    id: "bio",
                    modelValue: unref(form).bio,
                    "onUpdate:modelValue": ($event) => unref(form).bio = $event,
                    placeholder: "Uma breve descrição sobre o usuário",
                    rows: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div${_scopeId2}><h3 class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>CREDENCIAIS</h3><div class="grid gap-2"${_scopeId2}><div class="flex justify-between items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Senha`);
                      } else {
                        return [
                          createTextVNode("Senha")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    onClick: generateSecurePassword,
                    class: "px-2 py-1 h-7 text-xs"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Gerar Senha `);
                      } else {
                        return [
                          createTextVNode(" Gerar Senha ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_PasswordInput, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    placeholder: "********",
                    onInput: ($event) => validatePassword(unref(form).password)
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-2 bg-muted/50 p-3 rounded-md"${_scopeId2}><div class="text-sm font-medium mb-2"${_scopeId2}>Requisitos de senha:</div><div class="grid grid-cols-2 gap-x-6 gap-y-1"${_scopeId2}><div class="${ssrRenderClass([unref(passwordStrength).hasMinLength ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasMinLength ? "✓" : "✗")}</span> Mínimo de 12 caracteres </div><div class="${ssrRenderClass([unref(passwordStrength).hasUppercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasUppercase ? "✓" : "✗")}</span> Letra maiúscula </div><div class="${ssrRenderClass([unref(passwordStrength).hasLowercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasLowercase ? "✓" : "✗")}</span> Letra minúscula </div><div class="${ssrRenderClass([unref(passwordStrength).hasNumbers ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasNumbers ? "✓" : "✗")}</span> Número </div><div class="${ssrRenderClass([unref(passwordStrength).hasSpecialChars ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasSpecialChars ? "✓" : "✗")}</span> Caractere especial </div></div></div></div></div></div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, { class: "mt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "outline",
                          onClick: ($event) => isCreateDialogOpen.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancelar`);
                            } else {
                              return [
                                createTextVNode("Cancelar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: createUser,
                          disabled: !unref(passwordStrength).isValid,
                          class: "min-w-24"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Salvar `);
                            } else {
                              return [
                                createTextVNode(" Salvar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_Button, {
                              variant: "outline",
                              onClick: ($event) => isCreateDialogOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancelar")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_Button, {
                              onClick: createUser,
                              disabled: !unref(passwordStrength).isValid,
                              class: "min-w-24"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Salvar ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Adicionar Novo Usuário")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Preencha os campos abaixo para criar um novo usuário. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4" }, [
                      createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                        createVNode(_component_Avatar, {
                          size: "lg",
                          class: "w-40 h-40 border-2 border-muted"
                        }, {
                          default: withCtx(() => [
                            unref(avatarPreview) ? (openBlock(), createBlock(_component_AvatarImage, {
                              key: 0,
                              src: unref(avatarPreview)
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createVNode(_component_AvatarFallback, { class: "text-4xl" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col items-center gap-2 w-full" }, [
                          createVNode("label", {
                            for: "new-avatar-upload",
                            class: "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"
                          }, " Selecionar Imagem "),
                          createVNode(_component_Input, {
                            id: "new-avatar-upload",
                            type: "file",
                            accept: "image/*",
                            class: "hidden",
                            onChange: uploadAvatar,
                            disabled: unref(isUploading)
                          }, null, 8, ["disabled"]),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, "JPG, PNG ou GIF. Máximo 5MB.")
                        ]),
                        createVNode("div", { class: "w-full mt-4" }, [
                          createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "STATUS"),
                          createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-2" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 1 ? "bg-green-500/20 text-green-700" : "bg-background hover:bg-muted/30 border-r"],
                              onClick: ($event) => unref(form).status = 1
                            }, [
                              createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                createVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                                createTextVNode(" Ativo ")
                              ])
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 0 ? "bg-red-500/10 text-red-700" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).status = 0
                            }, [
                              createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                createVNode("div", { class: "w-2 h-2 rounded-full bg-red-500" }),
                                createTextVNode(" Inativo ")
                              ])
                            ], 10, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "w-full mt-4" }, [
                          createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "FUNÇÃO"),
                          createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).role = "admin"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:shield",
                                class: "h-4 w-4"
                              }),
                              createTextVNode(" Administrador ")
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "funcionario" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).role = "funcionario"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:briefcase",
                                class: "h-4 w-4"
                              }),
                              createTextVNode(" Funcionário ")
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "cliente" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).role = "cliente"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:user",
                                class: "h-4 w-4"
                              }),
                              createTextVNode(" Cliente ")
                            ], 10, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "INFORMAÇÕES PESSOAIS"),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(_component_Label, { for: "name" }, {
                                default: withCtx(() => [
                                  createTextVNode("Nome")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Nome completo"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(_component_Label, { for: "email" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                placeholder: "exemplo@email.com"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid gap-2 md:col-span-2" }, [
                              createVNode(_component_Label, { for: "bio" }, {
                                default: withCtx(() => [
                                  createTextVNode("Biografia")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Textarea, {
                                id: "bio",
                                modelValue: unref(form).bio,
                                "onUpdate:modelValue": ($event) => unref(form).bio = $event,
                                placeholder: "Uma breve descrição sobre o usuário",
                                rows: "3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "CREDENCIAIS"),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode(_component_Label, { for: "password" }, {
                                default: withCtx(() => [
                                  createTextVNode("Senha")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: generateSecurePassword,
                                class: "px-2 py-1 h-7 text-xs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gerar Senha ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_PasswordInput, {
                              id: "password",
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              placeholder: "********",
                              onInput: ($event) => validatePassword(unref(form).password)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                            createVNode("div", { class: "mt-2 bg-muted/50 p-3 rounded-md" }, [
                              createVNode("div", { class: "text-sm font-medium mb-2" }, "Requisitos de senha:"),
                              createVNode("div", { class: "grid grid-cols-2 gap-x-6 gap-y-1" }, [
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasMinLength ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasMinLength ? "✓" : "✗"), 1),
                                  createTextVNode(" Mínimo de 12 caracteres ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasUppercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasUppercase ? "✓" : "✗"), 1),
                                  createTextVNode(" Letra maiúscula ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasLowercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasLowercase ? "✓" : "✗"), 1),
                                  createTextVNode(" Letra minúscula ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasNumbers ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasNumbers ? "✓" : "✗"), 1),
                                  createTextVNode(" Número ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasSpecialChars ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasSpecialChars ? "✓" : "✗"), 1),
                                  createTextVNode(" Caractere especial ")
                                ], 2)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, { class: "mt-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_Button, {
                            variant: "outline",
                            onClick: ($event) => isCreateDialogOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancelar")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_Button, {
                            onClick: createUser,
                            disabled: !unref(passwordStrength).isValid,
                            class: "min-w-24"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Salvar ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
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
              createVNode(_component_DialogContent, { class: "sm:max-w-[800px]" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Adicionar Novo Usuário")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Preencha os campos abaixo para criar um novo usuário. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4" }, [
                    createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                      createVNode(_component_Avatar, {
                        size: "lg",
                        class: "w-40 h-40 border-2 border-muted"
                      }, {
                        default: withCtx(() => [
                          unref(avatarPreview) ? (openBlock(), createBlock(_component_AvatarImage, {
                            key: 0,
                            src: unref(avatarPreview)
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode(_component_AvatarFallback, { class: "text-4xl" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col items-center gap-2 w-full" }, [
                        createVNode("label", {
                          for: "new-avatar-upload",
                          class: "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"
                        }, " Selecionar Imagem "),
                        createVNode(_component_Input, {
                          id: "new-avatar-upload",
                          type: "file",
                          accept: "image/*",
                          class: "hidden",
                          onChange: uploadAvatar,
                          disabled: unref(isUploading)
                        }, null, 8, ["disabled"]),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, "JPG, PNG ou GIF. Máximo 5MB.")
                      ]),
                      createVNode("div", { class: "w-full mt-4" }, [
                        createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "STATUS"),
                        createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-2" }, [
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 1 ? "bg-green-500/20 text-green-700" : "bg-background hover:bg-muted/30 border-r"],
                            onClick: ($event) => unref(form).status = 1
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                              createTextVNode(" Ativo ")
                            ])
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 0 ? "bg-red-500/10 text-red-700" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).status = 0
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createVNode("div", { class: "w-2 h-2 rounded-full bg-red-500" }),
                              createTextVNode(" Inativo ")
                            ])
                          ], 10, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "w-full mt-4" }, [
                        createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "FUNÇÃO"),
                        createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1" }, [
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).role = "admin"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:shield",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Administrador ")
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "funcionario" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).role = "funcionario"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:briefcase",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Funcionário ")
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "cliente" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).role = "cliente"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:user",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Cliente ")
                          ], 10, ["onClick"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "INFORMAÇÕES PESSOAIS"),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(_component_Label, { for: "name" }, {
                              default: withCtx(() => [
                                createTextVNode("Nome")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "Nome completo"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(_component_Label, { for: "email" }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "email",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              placeholder: "exemplo@email.com"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "grid gap-2 md:col-span-2" }, [
                            createVNode(_component_Label, { for: "bio" }, {
                              default: withCtx(() => [
                                createTextVNode("Biografia")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Textarea, {
                              id: "bio",
                              modelValue: unref(form).bio,
                              "onUpdate:modelValue": ($event) => unref(form).bio = $event,
                              placeholder: "Uma breve descrição sobre o usuário",
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "CREDENCIAIS"),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode(_component_Label, { for: "password" }, {
                              default: withCtx(() => [
                                createTextVNode("Senha")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, {
                              variant: "outline",
                              size: "sm",
                              onClick: generateSecurePassword,
                              class: "px-2 py-1 h-7 text-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Gerar Senha ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_PasswordInput, {
                            id: "password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            placeholder: "********",
                            onInput: ($event) => validatePassword(unref(form).password)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          createVNode("div", { class: "mt-2 bg-muted/50 p-3 rounded-md" }, [
                            createVNode("div", { class: "text-sm font-medium mb-2" }, "Requisitos de senha:"),
                            createVNode("div", { class: "grid grid-cols-2 gap-x-6 gap-y-1" }, [
                              createVNode("div", {
                                class: [unref(passwordStrength).hasMinLength ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasMinLength ? "✓" : "✗"), 1),
                                createTextVNode(" Mínimo de 12 caracteres ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasUppercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasUppercase ? "✓" : "✗"), 1),
                                createTextVNode(" Letra maiúscula ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasLowercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasLowercase ? "✓" : "✗"), 1),
                                createTextVNode(" Letra minúscula ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasNumbers ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasNumbers ? "✓" : "✗"), 1),
                                createTextVNode(" Número ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasSpecialChars ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasSpecialChars ? "✓" : "✗"), 1),
                                createTextVNode(" Caractere especial ")
                              ], 2)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, { class: "mt-6" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_Button, {
                          variant: "outline",
                          onClick: ($event) => isCreateDialogOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancelar")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          onClick: createUser,
                          disabled: !unref(passwordStrength).isValid,
                          class: "min-w-24"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Salvar ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
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
      _push(ssrRenderComponent(_component_Dialog, {
        open: unref(isEditDialogOpen),
        "onUpdate:open": ($event) => isEditDialogOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_DialogContent, { class: "sm:max-w-[800px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Editar Usuário`);
                            } else {
                              return [
                                createTextVNode("Editar Usuário")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Altere os campos que deseja atualizar. `);
                            } else {
                              return [
                                createTextVNode(" Altere os campos que deseja atualizar. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Editar Usuário")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" Altere os campos que deseja atualizar. ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4"${_scopeId2}><div class="flex flex-col items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Avatar, {
                    size: "lg",
                    class: "w-40 h-40 border-2 border-muted"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(avatarPreview)) {
                          _push4(ssrRenderComponent(_component_AvatarImage, { src: unref(avatarPreview) }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_AvatarFallback, { class: "text-4xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          unref(avatarPreview) ? (openBlock(), createBlock(_component_AvatarImage, {
                            key: 0,
                            src: unref(avatarPreview)
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode(_component_AvatarFallback, { class: "text-4xl" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col items-center gap-2 w-full"${_scopeId2}><label for="avatar-upload" class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"${_scopeId2}> Alterar Imagem </label>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "avatar-upload",
                    type: "file",
                    accept: "image/*",
                    class: "hidden",
                    onChange: uploadAvatar,
                    disabled: unref(isUploading)
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-xs text-muted-foreground"${_scopeId2}>JPG, PNG ou GIF. Máximo 5MB.</p></div><div class="w-full mt-4"${_scopeId2}><div class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>STATUS</div><div class="w-full border rounded-md overflow-hidden grid grid-cols-2"${_scopeId2}><button type="button" class="${ssrRenderClass([unref(form).status === 1 ? "bg-green-500/20 text-green-700" : "bg-background hover:bg-muted/30 border-r", "py-2 px-4 text-center text-sm font-medium transition-colors"])}"${_scopeId2}><div class="flex items-center justify-center gap-2"${_scopeId2}><div class="w-2 h-2 rounded-full bg-green-500"${_scopeId2}></div> Ativo </div></button><button type="button" class="${ssrRenderClass([unref(form).status === 0 ? "bg-red-500/10 text-red-700" : "bg-background hover:bg-muted/30", "py-2 px-4 text-center text-sm font-medium transition-colors"])}"${_scopeId2}><div class="flex items-center justify-center gap-2"${_scopeId2}><div class="w-2 h-2 rounded-full bg-red-500"${_scopeId2}></div> Inativo </div></button></div></div><div class="w-full mt-4"${_scopeId2}><div class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>FUNÇÃO</div><div class="w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1"${_scopeId2}><button type="button" class="${ssrRenderClass([unref(form).role === "admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-background hover:bg-muted/30", "py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:shield",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Administrador </button><button type="button" class="${ssrRenderClass([unref(form).role === "funcionario" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-background hover:bg-muted/30", "py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:briefcase",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Funcionário </button><button type="button" class="${ssrRenderClass([unref(form).role === "cliente" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-background hover:bg-muted/30", "py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:user",
                    class: "h-4 w-4"
                  }, null, _parent3, _scopeId2));
                  _push3(` Cliente </button></div></div></div><div class="space-y-6"${_scopeId2}><div${_scopeId2}><h3 class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>INFORMAÇÕES PESSOAIS</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId2}><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "edit-name" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Nome`);
                      } else {
                        return [
                          createTextVNode("Nome")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "edit-name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    placeholder: "Nome completo"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "edit-email" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Email`);
                      } else {
                        return [
                          createTextVNode("Email")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "edit-email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    placeholder: "exemplo@email.com"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid gap-2 md:col-span-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "edit-bio" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Biografia`);
                      } else {
                        return [
                          createTextVNode("Biografia")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Textarea, {
                    id: "edit-bio",
                    modelValue: unref(form).bio,
                    "onUpdate:modelValue": ($event) => unref(form).bio = $event,
                    placeholder: "Uma breve descrição sobre o usuário",
                    rows: "3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div${_scopeId2}><h3 class="text-sm font-medium mb-3 text-muted-foreground"${_scopeId2}>CREDENCIAIS</h3><div class="grid gap-2"${_scopeId2}><div class="flex justify-between items-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, { for: "edit-password" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Senha (deixe em branco para manter)`);
                      } else {
                        return [
                          createTextVNode("Senha (deixe em branco para manter)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    variant: "outline",
                    size: "sm",
                    onClick: generateSecurePassword,
                    class: "px-2 py-1 h-7 text-xs"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Gerar Senha `);
                      } else {
                        return [
                          createTextVNode(" Gerar Senha ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_PasswordInput, {
                    id: "edit-password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    placeholder: "Nova senha",
                    onInput: ($event) => validatePassword(unref(form).password)
                  }, null, _parent3, _scopeId2));
                  if (unref(form).password) {
                    _push3(`<div class="mt-2 bg-muted/50 p-3 rounded-md"${_scopeId2}><div class="text-sm font-medium mb-2"${_scopeId2}>Requisitos de senha:</div><div class="grid grid-cols-2 gap-x-6 gap-y-1"${_scopeId2}><div class="${ssrRenderClass([unref(passwordStrength).hasMinLength ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasMinLength ? "✓" : "✗")}</span> Mínimo de 12 caracteres </div><div class="${ssrRenderClass([unref(passwordStrength).hasUppercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasUppercase ? "✓" : "✗")}</span> Letra maiúscula </div><div class="${ssrRenderClass([unref(passwordStrength).hasLowercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasLowercase ? "✓" : "✗")}</span> Letra minúscula </div><div class="${ssrRenderClass([unref(passwordStrength).hasNumbers ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasNumbers ? "✓" : "✗")}</span> Número </div><div class="${ssrRenderClass([unref(passwordStrength).hasSpecialChars ? "text-green-500" : "text-red-500", "text-sm flex items-center"])}"${_scopeId2}><span class="mr-1 text-xs"${_scopeId2}>${ssrInterpolate(unref(passwordStrength).hasSpecialChars ? "✓" : "✗")}</span> Caractere especial </div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div></div>`);
                  _push3(ssrRenderComponent(_component_DialogFooter, { class: "mt-6 flex items-center justify-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-xs text-muted-foreground"${_scopeId3}> Última atualização: ${ssrInterpolate(unref(selectedUser) ? formatDate(unref(selectedUser).updatedAt) : "")}</div><div class="flex gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, {
                          variant: "outline",
                          onClick: ($event) => isEditDialogOpen.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancelar`);
                            } else {
                              return [
                                createTextVNode("Cancelar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, {
                          onClick: updateUser,
                          disabled: !hasFormChanges(),
                          class: "min-w-24"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Atualizar `);
                            } else {
                              return [
                                createTextVNode(" Atualizar ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-xs text-muted-foreground" }, " Última atualização: " + toDisplayString(unref(selectedUser) ? formatDate(unref(selectedUser).updatedAt) : ""), 1),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_Button, {
                              variant: "outline",
                              onClick: ($event) => isEditDialogOpen.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cancelar")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_Button, {
                              onClick: updateUser,
                              disabled: !hasFormChanges(),
                              class: "min-w-24"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Atualizar ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_DialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Editar Usuário")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_DialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" Altere os campos que deseja atualizar. ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4" }, [
                      createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                        createVNode(_component_Avatar, {
                          size: "lg",
                          class: "w-40 h-40 border-2 border-muted"
                        }, {
                          default: withCtx(() => [
                            unref(avatarPreview) ? (openBlock(), createBlock(_component_AvatarImage, {
                              key: 0,
                              src: unref(avatarPreview)
                            }, null, 8, ["src"])) : createCommentVNode("", true),
                            createVNode(_component_AvatarFallback, { class: "text-4xl" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex flex-col items-center gap-2 w-full" }, [
                          createVNode("label", {
                            for: "avatar-upload",
                            class: "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"
                          }, " Alterar Imagem "),
                          createVNode(_component_Input, {
                            id: "avatar-upload",
                            type: "file",
                            accept: "image/*",
                            class: "hidden",
                            onChange: uploadAvatar,
                            disabled: unref(isUploading)
                          }, null, 8, ["disabled"]),
                          createVNode("p", { class: "text-xs text-muted-foreground" }, "JPG, PNG ou GIF. Máximo 5MB.")
                        ]),
                        createVNode("div", { class: "w-full mt-4" }, [
                          createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "STATUS"),
                          createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-2" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 1 ? "bg-green-500/20 text-green-700" : "bg-background hover:bg-muted/30 border-r"],
                              onClick: ($event) => unref(form).status = 1
                            }, [
                              createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                createVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                                createTextVNode(" Ativo ")
                              ])
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 0 ? "bg-red-500/10 text-red-700" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).status = 0
                            }, [
                              createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                                createVNode("div", { class: "w-2 h-2 rounded-full bg-red-500" }),
                                createTextVNode(" Inativo ")
                              ])
                            ], 10, ["onClick"])
                          ])
                        ]),
                        createVNode("div", { class: "w-full mt-4" }, [
                          createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "FUNÇÃO"),
                          createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).role = "admin"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:shield",
                                class: "h-4 w-4"
                              }),
                              createTextVNode(" Administrador ")
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "funcionario" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).role = "funcionario"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:briefcase",
                                class: "h-4 w-4"
                              }),
                              createTextVNode(" Funcionário ")
                            ], 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "cliente" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-background hover:bg-muted/30"],
                              onClick: ($event) => unref(form).role = "cliente"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:user",
                                class: "h-4 w-4"
                              }),
                              createTextVNode(" Cliente ")
                            ], 10, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "INFORMAÇÕES PESSOAIS"),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(_component_Label, { for: "edit-name" }, {
                                default: withCtx(() => [
                                  createTextVNode("Nome")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "edit-name",
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                placeholder: "Nome completo"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid gap-2" }, [
                              createVNode(_component_Label, { for: "edit-email" }, {
                                default: withCtx(() => [
                                  createTextVNode("Email")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Input, {
                                id: "edit-email",
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                placeholder: "exemplo@email.com"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "grid gap-2 md:col-span-2" }, [
                              createVNode(_component_Label, { for: "edit-bio" }, {
                                default: withCtx(() => [
                                  createTextVNode("Biografia")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Textarea, {
                                id: "edit-bio",
                                modelValue: unref(form).bio,
                                "onUpdate:modelValue": ($event) => unref(form).bio = $event,
                                placeholder: "Uma breve descrição sobre o usuário",
                                rows: "3"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "CREDENCIAIS"),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode(_component_Label, { for: "edit-password" }, {
                                default: withCtx(() => [
                                  createTextVNode("Senha (deixe em branco para manter)")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_Button, {
                                variant: "outline",
                                size: "sm",
                                onClick: generateSecurePassword,
                                class: "px-2 py-1 h-7 text-xs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gerar Senha ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_component_PasswordInput, {
                              id: "edit-password",
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              placeholder: "Nova senha",
                              onInput: ($event) => validatePassword(unref(form).password)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                            unref(form).password ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-2 bg-muted/50 p-3 rounded-md"
                            }, [
                              createVNode("div", { class: "text-sm font-medium mb-2" }, "Requisitos de senha:"),
                              createVNode("div", { class: "grid grid-cols-2 gap-x-6 gap-y-1" }, [
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasMinLength ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasMinLength ? "✓" : "✗"), 1),
                                  createTextVNode(" Mínimo de 12 caracteres ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasUppercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasUppercase ? "✓" : "✗"), 1),
                                  createTextVNode(" Letra maiúscula ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasLowercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasLowercase ? "✓" : "✗"), 1),
                                  createTextVNode(" Letra minúscula ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasNumbers ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasNumbers ? "✓" : "✗"), 1),
                                  createTextVNode(" Número ")
                                ], 2),
                                createVNode("div", {
                                  class: [unref(passwordStrength).hasSpecialChars ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                                }, [
                                  createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasSpecialChars ? "✓" : "✗"), 1),
                                  createTextVNode(" Caractere especial ")
                                ], 2)
                              ])
                            ])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    createVNode(_component_DialogFooter, { class: "mt-6 flex items-center justify-between" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-xs text-muted-foreground" }, " Última atualização: " + toDisplayString(unref(selectedUser) ? formatDate(unref(selectedUser).updatedAt) : ""), 1),
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_component_Button, {
                            variant: "outline",
                            onClick: ($event) => isEditDialogOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancelar")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_Button, {
                            onClick: updateUser,
                            disabled: !hasFormChanges(),
                            class: "min-w-24"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Atualizar ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
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
              createVNode(_component_DialogContent, { class: "sm:max-w-[800px]" }, {
                default: withCtx(() => [
                  createVNode(_component_DialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_DialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Editar Usuário")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_DialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" Altere os campos que deseja atualizar. ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 py-4" }, [
                    createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                      createVNode(_component_Avatar, {
                        size: "lg",
                        class: "w-40 h-40 border-2 border-muted"
                      }, {
                        default: withCtx(() => [
                          unref(avatarPreview) ? (openBlock(), createBlock(_component_AvatarImage, {
                            key: 0,
                            src: unref(avatarPreview)
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode(_component_AvatarFallback, { class: "text-4xl" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(form).name ? unref(form).name.charAt(0).toUpperCase() : "U"), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col items-center gap-2 w-full" }, [
                        createVNode("label", {
                          for: "avatar-upload",
                          class: "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium cursor-pointer w-full text-center"
                        }, " Alterar Imagem "),
                        createVNode(_component_Input, {
                          id: "avatar-upload",
                          type: "file",
                          accept: "image/*",
                          class: "hidden",
                          onChange: uploadAvatar,
                          disabled: unref(isUploading)
                        }, null, 8, ["disabled"]),
                        createVNode("p", { class: "text-xs text-muted-foreground" }, "JPG, PNG ou GIF. Máximo 5MB.")
                      ]),
                      createVNode("div", { class: "w-full mt-4" }, [
                        createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "STATUS"),
                        createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-2" }, [
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 1 ? "bg-green-500/20 text-green-700" : "bg-background hover:bg-muted/30 border-r"],
                            onClick: ($event) => unref(form).status = 1
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createVNode("div", { class: "w-2 h-2 rounded-full bg-green-500" }),
                              createTextVNode(" Ativo ")
                            ])
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-center text-sm font-medium transition-colors", unref(form).status === 0 ? "bg-red-500/10 text-red-700" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).status = 0
                          }, [
                            createVNode("div", { class: "flex items-center justify-center gap-2" }, [
                              createVNode("div", { class: "w-2 h-2 rounded-full bg-red-500" }),
                              createTextVNode(" Inativo ")
                            ])
                          ], 10, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "w-full mt-4" }, [
                        createVNode("div", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "FUNÇÃO"),
                        createVNode("div", { class: "w-full border rounded-md overflow-hidden grid grid-cols-1 gap-1 p-1" }, [
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "admin" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).role = "admin"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:shield",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Administrador ")
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "funcionario" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).role = "funcionario"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:briefcase",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Funcionário ")
                          ], 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["py-2 px-4 text-sm font-medium transition-colors rounded flex items-center gap-2", unref(form).role === "cliente" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-background hover:bg-muted/30"],
                            onClick: ($event) => unref(form).role = "cliente"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:user",
                              class: "h-4 w-4"
                            }),
                            createTextVNode(" Cliente ")
                          ], 10, ["onClick"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "INFORMAÇÕES PESSOAIS"),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(_component_Label, { for: "edit-name" }, {
                              default: withCtx(() => [
                                createTextVNode("Nome")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "edit-name",
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              placeholder: "Nome completo"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "grid gap-2" }, [
                            createVNode(_component_Label, { for: "edit-email" }, {
                              default: withCtx(() => [
                                createTextVNode("Email")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Input, {
                              id: "edit-email",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              placeholder: "exemplo@email.com"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "grid gap-2 md:col-span-2" }, [
                            createVNode(_component_Label, { for: "edit-bio" }, {
                              default: withCtx(() => [
                                createTextVNode("Biografia")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Textarea, {
                              id: "edit-bio",
                              modelValue: unref(form).bio,
                              "onUpdate:modelValue": ($event) => unref(form).bio = $event,
                              placeholder: "Uma breve descrição sobre o usuário",
                              rows: "3"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-sm font-medium mb-3 text-muted-foreground" }, "CREDENCIAIS"),
                        createVNode("div", { class: "grid gap-2" }, [
                          createVNode("div", { class: "flex justify-between items-center" }, [
                            createVNode(_component_Label, { for: "edit-password" }, {
                              default: withCtx(() => [
                                createTextVNode("Senha (deixe em branco para manter)")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, {
                              variant: "outline",
                              size: "sm",
                              onClick: generateSecurePassword,
                              class: "px-2 py-1 h-7 text-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Gerar Senha ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_PasswordInput, {
                            id: "edit-password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            placeholder: "Nova senha",
                            onInput: ($event) => validatePassword(unref(form).password)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                          unref(form).password ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-2 bg-muted/50 p-3 rounded-md"
                          }, [
                            createVNode("div", { class: "text-sm font-medium mb-2" }, "Requisitos de senha:"),
                            createVNode("div", { class: "grid grid-cols-2 gap-x-6 gap-y-1" }, [
                              createVNode("div", {
                                class: [unref(passwordStrength).hasMinLength ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasMinLength ? "✓" : "✗"), 1),
                                createTextVNode(" Mínimo de 12 caracteres ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasUppercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasUppercase ? "✓" : "✗"), 1),
                                createTextVNode(" Letra maiúscula ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasLowercase ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasLowercase ? "✓" : "✗"), 1),
                                createTextVNode(" Letra minúscula ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasNumbers ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasNumbers ? "✓" : "✗"), 1),
                                createTextVNode(" Número ")
                              ], 2),
                              createVNode("div", {
                                class: [unref(passwordStrength).hasSpecialChars ? "text-green-500" : "text-red-500", "text-sm flex items-center"]
                              }, [
                                createVNode("span", { class: "mr-1 text-xs" }, toDisplayString(unref(passwordStrength).hasSpecialChars ? "✓" : "✗"), 1),
                                createTextVNode(" Caractere especial ")
                              ], 2)
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]),
                  createVNode(_component_DialogFooter, { class: "mt-6 flex items-center justify-between" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-xs text-muted-foreground" }, " Última atualização: " + toDisplayString(unref(selectedUser) ? formatDate(unref(selectedUser).updatedAt) : ""), 1),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_component_Button, {
                          variant: "outline",
                          onClick: ($event) => isEditDialogOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancelar")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          onClick: updateUser,
                          disabled: !hasFormChanges(),
                          class: "min-w-24"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Atualizar ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
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
      _push(ssrRenderComponent(_component_AlertDialog, {
        open: unref(isDeleteAlertOpen),
        "onUpdate:open": ($event) => isDeleteAlertOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AlertDialogContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AlertDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AlertDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Tem certeza?`);
                            } else {
                              return [
                                createTextVNode("Tem certeza?")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AlertDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(` Esta ação não pode ser desfeita. Isso excluirá permanentemente o usuário ${ssrInterpolate((_a = unref(selectedUser)) == null ? void 0 : _a.name)} e removerá seus dados do sistema. `);
                            } else {
                              return [
                                createTextVNode(" Esta ação não pode ser desfeita. Isso excluirá permanentemente o usuário " + toDisplayString((_b = unref(selectedUser)) == null ? void 0 : _b.name) + " e removerá seus dados do sistema. ", 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AlertDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("Tem certeza?")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_AlertDialogDescription, null, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(" Esta ação não pode ser desfeita. Isso excluirá permanentemente o usuário " + toDisplayString((_a = unref(selectedUser)) == null ? void 0 : _a.name) + " e removerá seus dados do sistema. ", 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_AlertDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AlertDialogCancel, {
                          onClick: ($event) => isDeleteAlertOpen.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Cancelar`);
                            } else {
                              return [
                                createTextVNode("Cancelar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_AlertDialogAction, {
                          class: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                          onClick: deleteUser
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Excluir `);
                            } else {
                              return [
                                createTextVNode(" Excluir ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AlertDialogCancel, {
                            onClick: ($event) => isDeleteAlertOpen.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Cancelar")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_AlertDialogAction, {
                            class: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            onClick: deleteUser
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Excluir ")
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
                    createVNode(_component_AlertDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_AlertDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Tem certeza?")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_AlertDialogDescription, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(" Esta ação não pode ser desfeita. Isso excluirá permanentemente o usuário " + toDisplayString((_a = unref(selectedUser)) == null ? void 0 : _a.name) + " e removerá seus dados do sistema. ", 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AlertDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_AlertDialogCancel, {
                          onClick: ($event) => isDeleteAlertOpen.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cancelar")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_AlertDialogAction, {
                          class: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                          onClick: deleteUser
                        }, {
                          default: withCtx(() => [
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AlertDialogContent, null, {
                default: withCtx(() => [
                  createVNode(_component_AlertDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_AlertDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Tem certeza?")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AlertDialogDescription, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(" Esta ação não pode ser desfeita. Isso excluirá permanentemente o usuário " + toDisplayString((_a = unref(selectedUser)) == null ? void 0 : _a.name) + " e removerá seus dados do sistema. ", 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AlertDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_AlertDialogCancel, {
                        onClick: ($event) => isDeleteAlertOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Cancelar")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_AlertDialogAction, {
                        class: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                        onClick: deleteUser
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Excluir ")
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
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=users.vue.mjs.map
