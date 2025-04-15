import { _ as __nuxt_component_15 } from './nuxt-link.mjs';
import { defineComponent, ref, withCtx, createBlock, createTextVNode, openBlock, createVNode, unref, isRef, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Loader2 } from 'lucide-vue-next';
import { u as useAuth, a as _sfc_main$1, c as _sfc_main$2, _ as _sfc_main$3 } from './server.mjs';
import { _ as _sfc_main$4 } from './Input.vue2.mjs';
import { _ as _sfc_main$5 } from './PasswordInput.vue2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SignIn",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuth();
    const email = ref("");
    const password = ref("");
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_Separator = _sfc_main$2;
      const _component_Label = _sfc_main$3;
      const _component_Input = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_15;
      _push(`<!--[--><form class="grid gap-6"><div class="flex flex-col gap-4">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "w-full gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4"${_scopeId}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor"${_scopeId}></path></svg> Login with Apple `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                class: "size-4"
              }, [
                createVNode("path", {
                  d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701",
                  fill: "currentColor"
                })
              ])),
              createTextVNode(" Login with Apple ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "w-full gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-4"${_scopeId}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor"${_scopeId}></path></svg> Login with Google `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                class: "size-4"
              }, [
                createVNode("path", {
                  d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
                  fill: "currentColor"
                })
              ])),
              createTextVNode(" Login with Google ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Separator, { label: "Or continue with" }, null, _parent));
      _push(`<div class="grid gap-2">`);
      _push(ssrRenderComponent(_component_Label, { for: "email" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Email `);
          } else {
            return [
              createTextVNode(" Email ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        id: "email",
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        type: "email",
        placeholder: "name@example.com",
        disabled: unref(auth).loading,
        "auto-capitalize": "none",
        "auto-complete": "email",
        "auto-correct": "off"
      }, null, _parent));
      _push(`</div><div class="grid gap-2"><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_Label, { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Password `);
          } else {
            return [
              createTextVNode(" Password ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/forgot-password",
        class: "ml-auto inline-block text-sm underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Forgot your password? `);
          } else {
            return [
              createTextVNode(" Forgot your password? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$5, {
        id: "password",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        disabled: unref(auth).loading
      }, null, _parent));
      _push(`</div>`);
      if (unref(error)) {
        _push(`<div class="text-sm text-red-500">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        class: "w-full",
        disabled: unref(auth).loading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(auth).loading) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "mr-2 h-4 w-4 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` Login `);
          } else {
            return [
              unref(auth).loading ? (openBlock(), createBlock(unref(Loader2), {
                key: 0,
                class: "mr-2 h-4 w-4 animate-spin"
              })) : createCommentVNode("", true),
              createTextVNode(" Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><div class="mt-4 text-center text-sm text-muted-foreground"> Don&#39;t have an account? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/register",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign up `);
          } else {
            return [
              createTextVNode(" Sign up ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=SignIn.vue2.mjs.map
