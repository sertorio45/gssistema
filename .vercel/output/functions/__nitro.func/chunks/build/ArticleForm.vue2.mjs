import { useForm, Field } from 'vee-validate';
import { D as useColorMode, g as _sfc_main$8, a as _sfc_main$j, b as __nuxt_component_9 } from './server.mjs';
import { defineComponent, ref, computed, watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';
import { u as useArticle, s as statuses } from './data.mjs';
import { _ as _sfc_main$6, c as _sfc_main$7, a as _sfc_main$c, b as _sfc_main$d } from './CardTitle.vue2.mjs';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$a } from './FormMessage.vue2.mjs';
import { _ as _sfc_main$9 } from './Input.vue2.mjs';
import { _ as _sfc_main$b } from './Textarea.vue2.mjs';
import Editor from '@tinymce/tinymce-vue';
import { _ as _sfc_main$e, a as _sfc_main$f, b as _sfc_main$g, c as _sfc_main$h, d as _sfc_main$i } from './SelectContent.vue2.mjs';

const articleSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
  content: z.string().min(10, "O conteúdo deve ter pelo menos 10 caracteres"),
  meta_description: z.string().optional(),
  slug: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  categories: z.string().optional(),
  tags: z.string().optional(),
  created_at: z.date().or(z.string()),
  updated_at: z.date().or(z.string())
});
const articleFormSchema = articleSchema.omit({
  id: true,
  created_at: true,
  updated_at: true
}).extend({
  meta_description: z.string().optional(),
  categories: z.string().optional(),
  tags: z.string().optional()
});
const articleDefaultValues = {
  title: "",
  content: "",
  meta_description: "",
  slug: "",
  status: "draft",
  categories: "",
  tags: ""
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TinyEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Conteúdo"
    },
    placeholder: {
      type: String,
      default: "Digite seu conteúdo aqui..."
    },
    editorId: {
      type: String,
      default: "tiny-editor"
    },
    height: {
      type: [Number, String],
      default: 500
    },
    error: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editorInitialized = ref(false);
    const content = ref(props.modelValue);
    const editorInstance = ref(null);
    const isReloading = ref(false);
    const currentTheme = ref("");
    const colorMode = useColorMode();
    const isDarkMode = computed(() => {
      if (colorMode.preference === "dark") {
        return true;
      }
      if (colorMode.preference === "light") {
        return false;
      }
      return colorMode.value === "dark";
    });
    const theme = computed(() => isDarkMode.value ? "dark" : "light");
    const editorConfig = computed(() => {
      const darkColors = {
        background: "hsl(240 10% 3.9%)",
        // --background
        foreground: "hsl(0 0% 98%)",
        // --foreground
        cardBg: "hsl(240 10% 3.9%)",
        // --card
        border: "hsl(240 3.7% 15.9%)",
        // --border
        primary: "hsl(0 0% 98%)",
        // --primary
        secondary: "hsl(240 3.7% 15.9%)",
        // --secondary
        muted: "hsl(240 3.7% 15.9%)",
        // --muted
        mutedForeground: "hsl(240 5% 64.9%)",
        // --muted-foreground
        accent: "hsl(240 3.7% 15.9%)",
        // --accen
        link: "hsl(217.2 91.2% 59.8%)"
        // link color alinhado com tema escuro
      };
      const lightColors = {
        background: "hsl(0 0% 100%)",
        // --background
        foreground: "hsl(240 10% 3.9%)",
        // --foreground
        cardBg: "hsl(0 0% 100%)",
        // --card
        border: "hsl(240 5.9% 90%)",
        // --border
        primary: "hsl(240 5.9% 10%)",
        // --primary
        secondary: "hsl(240 4.8% 95.9%)",
        // --secondary
        muted: "hsl(240 4.8% 95.9%)",
        // --muted
        mutedForeground: "hsl(240 3.8% 46.1%)",
        // --muted-foreground
        accent: "hsl(240 4.8% 95.9%)",
        // --accen
        link: "hsl(221.2 83.2% 53.3%)"
        // link color alinhado com tema claro
      };
      const c = isDarkMode.value ? darkColors : lightColors;
      const customStyle = `
    :root {
      color-scheme: ${isDarkMode.value ? "dark" : "light"};
    }

    body {
      font-family: system-ui, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      padding: 12px;
      background-color: ${c.background};
      color: ${c.foreground};
      border-radius: 0.375rem;
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${c.foreground};
      font-weight: 600;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    a {
      color: ${c.link};
      text-decoration: underline;
    }

    code {
      background-color: ${c.muted};
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
      border: 1px solid ${c.border};
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    table th, table td {
      border: 1px solid ${c.border};
      padding: 0.5em;
    }

    table th {
      background-color: ${c.muted};
      font-weight: 600;
    }

    /* Melhorar aparência das tabelas - apenas bordas verticais */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
      border-top: none;
      border-bottom: none;
    }
    
    table th, table td {
      border-left: 1px solid ${c.border};
      border-right: 1px solid ${c.border};
      padding: 0.75em;
      text-align: left;
      border-top: none;
      border-bottom: none;
    }
    
    table th {
      background-color: ${c.muted};
      font-weight: 600;
    }
    
    table tr:nth-child(even) {
      background-color: ${isDarkMode.value ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.025)"};
    }
    
    table tr:hover {
      background-color: ${isDarkMode.value ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"};
    }

    blockquote {
      border-left: 3px solid ${c.border};
      margin: 1em 0;
      padding-left: 1em;
      color: ${c.mutedForeground};
    }

    hr {
      border: none;
      border-top: 1px solid ${c.border};
      margin: 1em 0;
    }

    /* Melhorar exibição de listas */
    ul, ol {
      padding-left: 1.5em;
    }

    /* Estilizar botões de TinyMCE em tema escuro */
    .tox-tinymce {
      border-color: ${c.border} !important;
      border-radius: 0.375rem !important;
      border: 0px solid transparent !important;
    }

    .tox .tox-toolbar, .tox .tox-toolbar__primary, .tox .tox-toolbar__overflow {
      background: ${isDarkMode.value ? `${c.cardBg} !important` : ""};
    }

    .tox .tox-tbtn svg {
      fill: ${isDarkMode.value ? `${c.foreground} !important` : ""};
    }
  `;
      const customUI = (void 0).createElement("style");
      if (isDarkMode.value) {
        customUI.innerHTML = `
      .tox.tox-tinymce {
        border-color: ${c.border} !important;
        border: 0px solid transparent !important;
        border-radius: 10px !important;
        box-shadow: none !important;
      }
      .tox .tox-menubar,
      .tox .tox-toolbar,
      .tox .tox-toolbar__overflow,
      .tox .tox-toolbar__primary,
      .tox .tox-statusbar,
      .tox .tox-dialog,
      .tox .tox-dialog__header,
      .tox .tox-dialog__body,
      .tox .tox-dialog__footer,
      .tox .tox-dialog__body-content,
      .tox .tox-collection--list,
      .tox .tox-collection--toolbar,
      .tox .tox-form,
      .tox .tox-form__group,
      .tox .tox-selectfield select,
      .tox .tox-textarea,
      .tox .tox-textfield,
      .tox .tox-dropzone {
        background-color: ${c.background} !important;
        color: ${c.foreground} !important;
        border-color: ${c.border} !important;
      }

      .tox .tox-tbtn,
      .tox .tox-tbtn:hover,
      .tox .tox-mbtn,
      .tox .tox-mbtn:hover,
      .tox .tox-mbtn--active,
      .tox .tox-mbtn:focus:not(:disabled),
      .tox .tox-split-button:hover,
      .tox .tox-split-button:focus {
        background-color: ${c.muted} !important;
        color: ${c.foreground} !important;
      }

      .tox .tox-tbtn svg,
      .tox .tox-mbtn__select-chevron,
      .tox .tox-mbtn__select-label,
      .tox .tox-statusbar__wordcount,
      .tox .tox-statusbar__path-item,
      .tox .tox-dialog__title,
      .tox .tox-button--icon,
      .tox .tox-collection__item-label,
      .tox .tox-collection__item-accessory,
      .tox .tox-label,
      .tox .tox-toolbar-label {
        color: ${c.foreground} !important;
        fill: ${c.foreground} !important;
      }

      .tox .tox-tbtn--enabled,
      .tox .tox-tbtn--enabled:hover,
      .tox .tox-mbtn--active,
      .tox .tox-mbtn--active:hover {
        background-color: ${c.accent} !important;
        color: ${c.foreground} !important;
      }

      .tox .tox-button,
      .tox .tox-button.tox-button--secondary {
        background-color: ${c.primary} !important;
        color: ${c.background} !important;
        border-color: ${c.primary} !important;
      }

      .tox .tox-button--secondary,
      .tox .tox-button.tox-button--secondary {
        background-color: ${c.secondary} !important;
        color: ${c.foreground} !important;
        border-color: ${c.border} !important;
      }

      .tox .tox-button--naked {
        background-color: transparent !important;
        color: ${c.mutedForeground} !important;
      }

      .tox .tox-collection--list .tox-collection__item--active,
      .tox .tox-collection--list .tox-collection__item--active:not(.tox-collection__item--state-disabled) {
        background-color: ${c.accent} !important;
      }

      .tox .tox-tbtn:hover,
      .tox .tox-mbtn:hover,
      .tox .tox-tbtn:focus,
      .tox .tox-mbtn:focus {
        background-color: ${c.muted} !important;
      }

      /* Elementos específicos que precisam de estilização para o tema escuro */
      .tox .tox-promotion {
        background-color: ${c.background} !important;
        color: ${c.foreground} !important;
        border-color: ${c.border} !important;
      }

      .tox:not(.tox-tinymce-inline) .tox-editor-header {
        background-color: ${c.background} !important;
        border-bottom: 1px solid ${c.border} !important;
      }

      .tox .tox-toolbar-overlord {
        background-color: ${c.background} !important;
      }

      /* Ajustes adicionais para garantir consistência no tema escuro */
      .tox .tox-menu,
      .tox .tox-dialog__header,
      .tox .tox-dialog,
      .tox .tox-dialog__footer,
      .tox .tox-pop__dialog,
      .tox .tox-tbtn--bespoke,
      .tox .tox-toolbar,
      .tox .tox-toolbar__group,
      .tox .tox-edit-area__iframe {
        background-color: ${c.background} !important;
        border-color: ${c.border} !important;
      }

      /* Ajustar cores dos botões de menu */
      .tox .tox-collection__item {
        background-color: ${c.background} !important;
        color: ${c.foreground} !important;
      }

      .tox .tox-collection__item:hover {
        background-color: ${c.muted} !important;
      }

      /* Adicionar estilo de background para toolbar */
      .tox .tox-toolbar {
        background-image: repeating-linear-gradient(rgba(255, 255, 255, 0) 0 1px, transparent 1px 400px) !important;
      }
    `;
        if (!(void 0).getElementById("tinymce-dark-theme-custom")) {
          customUI.id = "tinymce-dark-theme-custom";
          (void 0).head.appendChild(customUI);
        }
      } else {
        const existingStyle = (void 0).getElementById("tinymce-dark-theme-custom");
        if (existingStyle) {
          existingStyle.remove();
        }
        const lightThemeStyle = (void 0).createElement("style");
        lightThemeStyle.id = "tinymce-light-theme-custom";
        lightThemeStyle.innerHTML = `
      .tox.tox-tinymce {
        border: 0px solid transparent !important;
        border-radius: 10px !important;
        box-shadow: none !important;
      }
    `;
        (void 0).head.appendChild(lightThemeStyle);
      }
      return {
        height: props.height,
        menubar: true,
        plugins: "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
        toolbar1: "undo redo | formatselect fontsizeselect | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ",
        toolbar2: "link image table media | removeformat code fullscreen",
        toolbar_mode: "wrap",
        toolbar_sticky: true,
        content_style: customStyle,
        font_size_formats: "8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",
        style_formats: [
          { title: "Título 1", format: "h1" },
          { title: "Título 2", format: "h2" },
          { title: "Título 3", format: "h3" },
          { title: "Título 4", format: "h4" },
          { title: "Título 5", format: "h5" },
          { title: "Título 6", format: "h6" },
          { title: "Parágrafo", format: "p" },
          { title: "Blockquote", format: "blockquote" },
          { title: "Código", format: "pre" },
          { title: "Negrito", format: "bold" },
          { title: "Itálico", format: "italic" },
          { title: "Sublinhado", format: "underline" }
        ],
        skin: isDarkMode.value ? "oxide-dark" : "oxide",
        content_css: isDarkMode.value ? "dark" : "default",
        branding: false,
        promotion: false,
        elementpath: false,
        statusbar: true,
        resize: true,
        relative_urls: false,
        remove_script_host: false,
        placeholder: props.placeholder,
        // Configurações para upload de imagens
        images_upload_url: "/api/upload/image",
        // Endpoint para upload de imagens
        automatic_uploads: true,
        images_reuse_filename: true,
        file_picker_types: "image",
        // Configuração do seletor de imagens
        image_title: true,
        image_caption: true,
        image_advtab: true,
        // Aba avançada de configuração de imagem
        // Configuração de tipos de arquivos permitidos
        images_file_types: "jpeg,jpg,png,gif,webp,svg",
        // Função para customizar o callback de upload
        images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {
          const xhr = new (void 0)();
          xhr.withCredentials = false;
          xhr.open("POST", "/api/upload/image");
          xhr.upload.onprogress = (e) => {
            progress(e.loaded / e.total * 100);
          };
          xhr.onload = () => {
            if (xhr.status === 403) {
              reject(new Error("Acesso negado ao fazer upload"));
              return;
            }
            if (xhr.status < 200 || xhr.status >= 300) {
              reject(new Error("Erro no upload. Tente novamente."));
              return;
            }
            try {
              const json = JSON.parse(xhr.responseText);
              if (!json || typeof json.location !== "string") {
                reject(new Error("Resposta inválida do servidor de upload"));
                return;
              }
              resolve(json.location);
            } catch (error) {
              console.error("Erro ao processar resposta:", error);
              reject(new Error("Erro ao processar a resposta do servidor"));
            }
          };
          xhr.onerror = () => {
            console.error("Erro na requisição de upload");
            reject(new Error("Erro na conexão com o servidor de upload"));
          };
          const formData = new FormData();
          formData.append("file", blobInfo.blob(), blobInfo.filename());
          xhr.send(formData);
        }),
        // Função para customizar o seletor de arquivos
        file_picker_callback: (callback, value, meta) => {
          if (meta.filetype === "image") {
            const input = (void 0).createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.addEventListener("change", (e) => {
              const file = e.target.files[0];
              if (!file) {
                return;
              }
              const reader = new FileReader();
              reader.addEventListener("load", () => {
                const id = `blobid${(/* @__PURE__ */ new Date()).getTime()}`;
                if (!editorInstance.value) {
                  console.error("Editor não inicializado corretamente");
                  return;
                }
                try {
                  const blobCache = editorInstance.value.editorUpload.blobCache;
                  const base64 = reader.result.split(",")[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
                  callback(blobInfo.blobUri(), { title: file.name });
                } catch (error) {
                  console.error("Erro ao processar arquivo para upload:", error);
                }
              });
              reader.readAsDataURL(file);
            });
            input.click();
          }
        },
        setup: (editor) => {
          editorInstance.value = editor;
          editor.on("init", () => {
            editorInitialized.value = true;
            if (isDarkMode.value) {
              try {
                const editorIframe = (void 0).getElementById(`${props.editorId}_ifr`);
                if (editorIframe && editorIframe.contentDocument) {
                  const iframeHead = editorIframe.contentDocument.head;
                  const iframeStyle = (void 0).createElement("style");
                  iframeStyle.innerHTML = `
                body {
                  background-color: ${c.background} !important;
                  color: ${c.foreground} !important;
                }

                /* Estilização do placeholder */
                .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
                  color: ${c.mutedForeground} !important;
                  content: attr(data-mce-placeholder);
                  position: absolute;
                  opacity: 0.7;
                }
              `;
                  iframeHead.appendChild(iframeStyle);
                }
              } catch (error) {
                console.error("Erro ao injetar estilos no iframe:", error);
              }
            }
          });
        },
        // Configurações específicas para tabelas
        table_appearance_options: false,
        table_advtab: true,
        table_cell_advtab: true,
        table_row_advtab: true,
        table_responsive_width: true,
        table_default_styles: {
          width: "100%",
          borderCollapse: "collapse"
        },
        table_default_attributes: {
          border: "0"
        },
        table_class_list: [
          { title: "Tabela padrão", value: "" },
          { title: "Sem bordas", value: "table-borderless" }
        ]
      };
    });
    function handleEditorInit() {
      editorInitialized.value = true;
    }
    function handleEditorChange(e) {
      content.value = e;
      emit("update:modelValue", e);
    }
    watch(theme, (newTheme) => {
      if (newTheme === currentTheme.value || isReloading.value) {
        return;
      }
      currentTheme.value = newTheme;
      if (editorInitialized.value && editorInstance.value) {
        isReloading.value = true;
        const currentContent = content.value;
        editorInstance.value.remove();
        editorInitialized.value = false;
        setTimeout(() => {
          content.value = currentContent;
          isReloading.value = false;
        }, 250);
      }
    }, { flush: "post" });
    watch(() => props.modelValue, (newVal) => {
      if (newVal !== content.value && editorInstance.value) {
        content.value = newVal;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$2), mergeProps({
        class: { "opacity-60": __props.disabled }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.label) {
              _push2(ssrRenderComponent(unref(_sfc_main$3), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.label), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative border border-input rounded-md bg-background"${_scopeId2}>`);
                  if (!editorInitialized.value) {
                    _push3(`<div class="min-h-[200px] w-full grid place-items-center"${_scopeId2}><div class="flex flex-col items-center"${_scopeId2}><div class="animate-spin w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full mb-2"${_scopeId2}></div><span class="text-sm text-muted-foreground"${_scopeId2}>Carregando editor...</span></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!isReloading.value) {
                    _push3(ssrRenderComponent(unref(Editor), {
                      id: __props.editorId,
                      "model-value": content.value,
                      init: editorConfig.value,
                      disabled: __props.disabled,
                      onOnInit: handleEditorInit,
                      "onUpdate:modelValue": handleEditorChange
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative border border-input rounded-md bg-background" }, [
                      !editorInitialized.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "min-h-[200px] w-full grid place-items-center"
                      }, [
                        createVNode("div", { class: "flex flex-col items-center" }, [
                          createVNode("div", { class: "animate-spin w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full mb-2" }),
                          createVNode("span", { class: "text-sm text-muted-foreground" }, "Carregando editor...")
                        ])
                      ])) : createCommentVNode("", true),
                      !isReloading.value ? (openBlock(), createBlock(unref(Editor), {
                        key: 1,
                        id: __props.editorId,
                        "model-value": content.value,
                        init: editorConfig.value,
                        disabled: __props.disabled,
                        onOnInit: handleEditorInit,
                        "onUpdate:modelValue": handleEditorChange
                      }, null, 8, ["id", "model-value", "init", "disabled"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.error) {
              _push2(ssrRenderComponent(unref(_sfc_main$5), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(__props.error)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(__props.error), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.label ? (openBlock(), createBlock(unref(_sfc_main$3), { key: 0 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.label), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative border border-input rounded-md bg-background" }, [
                    !editorInitialized.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-h-[200px] w-full grid place-items-center"
                    }, [
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        createVNode("div", { class: "animate-spin w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full mb-2" }),
                        createVNode("span", { class: "text-sm text-muted-foreground" }, "Carregando editor...")
                      ])
                    ])) : createCommentVNode("", true),
                    !isReloading.value ? (openBlock(), createBlock(unref(Editor), {
                      key: 1,
                      id: __props.editorId,
                      "model-value": content.value,
                      init: editorConfig.value,
                      disabled: __props.disabled,
                      onOnInit: handleEditorInit,
                      "onUpdate:modelValue": handleEditorChange
                    }, null, 8, ["id", "model-value", "init", "disabled"])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              __props.error ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 1 }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.error), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArticleForm",
  __ssrInlineRender: true,
  props: {
    initialValues: {
      type: Object,
      default: () => articleDefaultValues
    },
    isEditing: {
      type: Boolean,
      default: false
    },
    isSubmitting: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit", "cancel"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { generateSlug } = useArticle();
    const validationSchema = toTypedSchema(articleFormSchema);
    const form = useForm({
      validationSchema,
      initialValues: props.initialValues
    });
    const { handleSubmit, resetForm, setFieldValue, values } = form;
    const isLoading = ref(true);
    const isSlugGenerating = ref(false);
    function handleTitleBlur() {
      if (!props.isEditing && values.title) {
        isSlugGenerating.value = true;
        setTimeout(() => {
          setFieldValue("slug", generateSlug(values.title));
          isSlugGenerating.value = false;
        }, 300);
      }
    }
    handleSubmit((values2) => {
      emit("submit", values2);
    });
    function onCancel() {
      resetForm();
      emit("cancel");
    }
    const categories = [
      { id: "1", name: "Tecnologia" },
      { id: "2", name: "Negócios" },
      { id: "3", name: "Marketing" },
      { id: "4", name: "Design" }
    ];
    function updateContent(content) {
      setFieldValue("content", content);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$6;
      const _component_CardContent = _sfc_main$7;
      const _component_FormField = Field;
      const _component_FormItem = _sfc_main$2;
      const _component_FormLabel = _sfc_main$3;
      const _component_FormControl = _sfc_main$4;
      const _component_Skeleton = _sfc_main$8;
      const _component_Input = _sfc_main$9;
      const _component_FormMessage = _sfc_main$5;
      const _component_FormDescription = _sfc_main$a;
      const _component_Textarea = _sfc_main$b;
      const _component_CardHeader = _sfc_main$c;
      const _component_CardTitle = _sfc_main$d;
      const _component_Select = _sfc_main$e;
      const _component_SelectTrigger = _sfc_main$f;
      const _component_SelectValue = _sfc_main$g;
      const _component_SelectContent = _sfc_main$h;
      const _component_SelectItem = _sfc_main$i;
      const _component_Button = _sfc_main$j;
      const _component_Icon = __nuxt_component_9;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="grid gap-6 md:grid-cols-[2fr_1fr]"><div class="">`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardContent, { class: "pt-6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "title" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Título`);
                                  } else {
                                    return [
                                      createTextVNode("Título")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (isLoading.value) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-full" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(_component_Input, mergeProps(componentField, {
                                        placeholder: "Título do artigo",
                                        onBlur: handleTitleBlur
                                      }), null, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [
                                      isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-10 w-full"
                                      })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, {
                                        placeholder: "Título do artigo",
                                        onBlur: handleTitleBlur
                                      }), null, 16))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Título")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-10 w-full"
                                    })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, {
                                      placeholder: "Título do artigo",
                                      onBlur: handleTitleBlur
                                    }), null, 16))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Título")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, {
                                    placeholder: "Título do artigo",
                                    onBlur: handleTitleBlur
                                  }), null, 16))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "slug" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, { class: "mt-1" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex items-center gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_FormLabel, { class: "text-sm font-normal mb-0" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Slug:`);
                                  } else {
                                    return [
                                      createTextVNode("Slug:")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              if (isLoading.value || isSlugGenerating.value) {
                                _push5(ssrRenderComponent(_component_Skeleton, { class: "h-6 w-48" }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<div class="flex items-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Input, mergeProps(componentField, {
                                  placeholder: "url-do-artigo",
                                  class: "h-7 text-sm"
                                }), null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              }
                              _push5(`</div>`);
                              if (!__props.isEditing) {
                                _push5(ssrRenderComponent(_component_FormDescription, { class: "text-xs" }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` Gerado automaticamente quando você terminar de escrever o título `);
                                    } else {
                                      return [
                                        createTextVNode(" Gerado automaticamente quando você terminar de escrever o título ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode(_component_FormLabel, { class: "text-sm font-normal mb-0" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Slug:")
                                    ]),
                                    _: 1
                                  }),
                                  isLoading.value || isSlugGenerating.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-6 w-48"
                                  })) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center"
                                  }, [
                                    createVNode(_component_Input, mergeProps(componentField, {
                                      placeholder: "url-do-artigo",
                                      class: "h-7 text-sm"
                                    }), null, 16)
                                  ]))
                                ]),
                                !__props.isEditing ? (openBlock(), createBlock(_component_FormDescription, {
                                  key: 0,
                                  class: "text-xs"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Gerado automaticamente quando você terminar de escrever o título ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, { class: "mt-1" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_FormLabel, { class: "text-sm font-normal mb-0" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Slug:")
                                  ]),
                                  _: 1
                                }),
                                isLoading.value || isSlugGenerating.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-6 w-48"
                                })) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center"
                                }, [
                                  createVNode(_component_Input, mergeProps(componentField, {
                                    placeholder: "url-do-artigo",
                                    class: "h-7 text-sm"
                                  }), null, 16)
                                ]))
                              ]),
                              !__props.isEditing ? (openBlock(), createBlock(_component_FormDescription, {
                                key: 0,
                                class: "text-xs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gerado automaticamente quando você terminar de escrever o título ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "meta_description" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Meta Descrição`);
                                  } else {
                                    return [
                                      createTextVNode("Meta Descrição")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (isLoading.value) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-[82px] w-full" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(_component_Textarea, mergeProps(componentField, {
                                        placeholder: "Breve descrição do artigo que aparecerá nos resultados de pesquisa",
                                        rows: 3
                                      }), null, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [
                                      isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-[82px] w-full"
                                      })) : (openBlock(), createBlock(_component_Textarea, mergeProps({ key: 1 }, componentField, {
                                        placeholder: "Breve descrição do artigo que aparecerá nos resultados de pesquisa",
                                        rows: 3
                                      }), null, 16))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormDescription, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Máximo de 160 caracteres `);
                                  } else {
                                    return [
                                      createTextVNode(" Máximo de 160 caracteres ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Meta Descrição")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-[82px] w-full"
                                    })) : (openBlock(), createBlock(_component_Textarea, mergeProps({ key: 1 }, componentField, {
                                      placeholder: "Breve descrição do artigo que aparecerá nos resultados de pesquisa",
                                      rows: 3
                                    }), null, 16))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Máximo de 160 caracteres ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Meta Descrição")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-[82px] w-full"
                                  })) : (openBlock(), createBlock(_component_Textarea, mergeProps({ key: 1 }, componentField, {
                                    placeholder: "Breve descrição do artigo que aparecerá nos resultados de pesquisa",
                                    rows: 3
                                  }), null, 16))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Máximo de 160 caracteres ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "content" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (isLoading.value) {
                                _push5(ssrRenderComponent(_component_Skeleton, { class: "h-[500px] w-full" }, null, _parent5, _scopeId4));
                              } else {
                                _push5(ssrRenderComponent(_sfc_main$1, {
                                  modelValue: unref(values).content,
                                  "onUpdate:modelValue": [($event) => unref(values).content = $event, updateContent],
                                  disabled: __props.isSubmitting,
                                  placeholder: "Conteúdo do artigo em formato rico",
                                  height: 500,
                                  "editor-id": "article-content-editor"
                                }, null, _parent5, _scopeId4));
                              }
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-[500px] w-full"
                                })) : (openBlock(), createBlock(_sfc_main$1, {
                                  key: 1,
                                  modelValue: unref(values).content,
                                  "onUpdate:modelValue": [($event) => unref(values).content = $event, updateContent],
                                  disabled: __props.isSubmitting,
                                  placeholder: "Conteúdo do artigo em formato rico",
                                  height: 500,
                                  "editor-id": "article-content-editor"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                key: 0,
                                class: "h-[500px] w-full"
                              })) : (openBlock(), createBlock(_sfc_main$1, {
                                key: 1,
                                modelValue: unref(values).content,
                                "onUpdate:modelValue": [($event) => unref(values).content = $event, updateContent],
                                disabled: __props.isSubmitting,
                                placeholder: "Conteúdo do artigo em formato rico",
                                height: 500,
                                "editor-id": "article-content-editor"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])),
                              createVNode(_component_FormMessage)
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
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_FormField, { name: "title" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Título")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, {
                                    placeholder: "Título do artigo",
                                    onBlur: handleTitleBlur
                                  }), null, 16))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormField, { name: "slug" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, { class: "mt-1" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_FormLabel, { class: "text-sm font-normal mb-0" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Slug:")
                                  ]),
                                  _: 1
                                }),
                                isLoading.value || isSlugGenerating.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-6 w-48"
                                })) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center"
                                }, [
                                  createVNode(_component_Input, mergeProps(componentField, {
                                    placeholder: "url-do-artigo",
                                    class: "h-7 text-sm"
                                  }), null, 16)
                                ]))
                              ]),
                              !__props.isEditing ? (openBlock(), createBlock(_component_FormDescription, {
                                key: 0,
                                class: "text-xs"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Gerado automaticamente quando você terminar de escrever o título ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormField, { name: "meta_description" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Meta Descrição")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-[82px] w-full"
                                  })) : (openBlock(), createBlock(_component_Textarea, mergeProps({ key: 1 }, componentField, {
                                    placeholder: "Breve descrição do artigo que aparecerá nos resultados de pesquisa",
                                    rows: 3
                                  }), null, 16))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Máximo de 160 caracteres ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormField, { name: "content" }, {
                        default: withCtx(() => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                key: 0,
                                class: "h-[500px] w-full"
                              })) : (openBlock(), createBlock(_sfc_main$1, {
                                key: 1,
                                modelValue: unref(values).content,
                                "onUpdate:modelValue": [($event) => unref(values).content = $event, updateContent],
                                disabled: __props.isSubmitting,
                                placeholder: "Conteúdo do artigo em formato rico",
                                height: 500,
                                "editor-id": "article-content-editor"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])),
                              createVNode(_component_FormMessage)
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
              createVNode(_component_CardContent, { class: "pt-6" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode(_component_FormField, { name: "title" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Título")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-10 w-full"
                                })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, {
                                  placeholder: "Título do artigo",
                                  onBlur: handleTitleBlur
                                }), null, 16))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, { name: "slug" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, { class: "mt-1" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_FormLabel, { class: "text-sm font-normal mb-0" }, {
                                default: withCtx(() => [
                                  createTextVNode("Slug:")
                                ]),
                                _: 1
                              }),
                              isLoading.value || isSlugGenerating.value ? (openBlock(), createBlock(_component_Skeleton, {
                                key: 0,
                                class: "h-6 w-48"
                              })) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center"
                              }, [
                                createVNode(_component_Input, mergeProps(componentField, {
                                  placeholder: "url-do-artigo",
                                  class: "h-7 text-sm"
                                }), null, 16)
                              ]))
                            ]),
                            !__props.isEditing ? (openBlock(), createBlock(_component_FormDescription, {
                              key: 0,
                              class: "text-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Gerado automaticamente quando você terminar de escrever o título ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, { name: "meta_description" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Meta Descrição")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-[82px] w-full"
                                })) : (openBlock(), createBlock(_component_Textarea, mergeProps({ key: 1 }, componentField, {
                                  placeholder: "Breve descrição do artigo que aparecerá nos resultados de pesquisa",
                                  rows: 3
                                }), null, 16))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(" Máximo de 160 caracteres ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, { name: "content" }, {
                      default: withCtx(() => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                              key: 0,
                              class: "h-[500px] w-full"
                            })) : (openBlock(), createBlock(_sfc_main$1, {
                              key: 1,
                              modelValue: unref(values).content,
                              "onUpdate:modelValue": [($event) => unref(values).content = $event, updateContent],
                              disabled: __props.isSubmitting,
                              placeholder: "Conteúdo do artigo em formato rico",
                              height: 500,
                              "editor-id": "article-content-editor"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])),
                            createVNode(_component_FormMessage)
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
      _push(`</div><div class="space-y-6">`);
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "pb-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-lg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Publicação`);
                      } else {
                        return [
                          createTextVNode("Publicação")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-lg" }, {
                      default: withCtx(() => [
                        createTextVNode("Publicação")
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
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "status" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Status`);
                                  } else {
                                    return [
                                      createTextVNode("Status")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (isLoading.value) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-full" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(_component_Select, componentField, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_SelectTrigger, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_SelectValue, { placeholder: "Selecione um status" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_SelectContent, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(unref(statuses), (status) => {
                                                    _push8(ssrRenderComponent(_component_SelectItem, {
                                                      key: status.value,
                                                      value: status.value
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(status.label)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(status.label), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                                      return openBlock(), createBlock(_component_SelectItem, {
                                                        key: status.value,
                                                        value: status.value
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(status.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 128))
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_SelectTrigger, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectContent, null, {
                                                default: withCtx(() => [
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                                    return openBlock(), createBlock(_component_SelectItem, {
                                                      key: status.value,
                                                      value: status.value
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(status.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 128))
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [
                                      isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-10 w-full"
                                      })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectContent, null, {
                                            default: withCtx(() => [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                                return openBlock(), createBlock(_component_SelectItem, {
                                                  key: status.value,
                                                  value: status.value
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(status.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 128))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Status")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-10 w-full"
                                    })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                              return openBlock(), createBlock(_component_SelectItem, {
                                                key: status.value,
                                                value: status.value
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(status.label), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                            return openBlock(), createBlock(_component_SelectItem, {
                                              key: status.value,
                                              value: status.value
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(status.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_FormField, { name: "status" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Status")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                            return openBlock(), createBlock(_component_SelectItem, {
                                              key: status.value,
                                              value: status.value
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(status.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
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
              createVNode(_component_CardHeader, { class: "pb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-lg" }, {
                    default: withCtx(() => [
                      createTextVNode("Publicação")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode(_component_FormField, { name: "status" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Status")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-10 w-full"
                                })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Selecione um status" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(statuses), (status) => {
                                          return openBlock(), createBlock(_component_SelectItem, {
                                            key: status.value,
                                            value: status.value
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(status.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1040))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
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
      _push(ssrRenderComponent(_component_Card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, { class: "pb-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, { class: "text-lg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Categorização`);
                      } else {
                        return [
                          createTextVNode("Categorização")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, { class: "text-lg" }, {
                      default: withCtx(() => [
                        createTextVNode("Categorização")
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
                  _push3(`<div class="space-y-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormField, { name: "category" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Categoria`);
                                  } else {
                                    return [
                                      createTextVNode("Categoria")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (isLoading.value) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-full" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(_component_Select, componentField, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_SelectTrigger, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_SelectValue, { placeholder: "Selecione uma categoria" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(_component_SelectContent, null, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<!--[-->`);
                                                  ssrRenderList(categories, (category) => {
                                                    _push8(ssrRenderComponent(_component_SelectItem, {
                                                      key: category.id,
                                                      value: category.id
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(category.name)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(category.name), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  });
                                                  _push8(`<!--]-->`);
                                                } else {
                                                  return [
                                                    (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                      return createVNode(_component_SelectItem, {
                                                        key: category.id,
                                                        value: category.id
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(category.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 64))
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_SelectTrigger, null, {
                                                default: withCtx(() => [
                                                  createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_SelectContent, null, {
                                                default: withCtx(() => [
                                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                    return createVNode(_component_SelectItem, {
                                                      key: category.id,
                                                      value: category.id
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(category.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 64))
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [
                                      isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-10 w-full"
                                      })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_SelectContent, null, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                                return createVNode(_component_SelectItem, {
                                                  key: category.id,
                                                  value: category.id
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(category.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1040))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Categoria")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-10 w-full"
                                    })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_SelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                              return createVNode(_component_SelectItem, {
                                                key: category.id,
                                                value: category.id
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(category.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1040))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Categoria")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                            return createVNode(_component_SelectItem, {
                                              key: category.id,
                                              value: category.id
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(category.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FormField, { name: "tags" }, {
                    default: withCtx(({ componentField }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_FormItem, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_FormLabel, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tags`);
                                  } else {
                                    return [
                                      createTextVNode("Tags")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormControl, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    if (isLoading.value) {
                                      _push6(ssrRenderComponent(_component_Skeleton, { class: "h-10 w-full" }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(_component_Input, mergeProps(componentField, { placeholder: "vue, nuxt, web" }), null, _parent6, _scopeId5));
                                    }
                                  } else {
                                    return [
                                      isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                        key: 0,
                                        class: "h-10 w-full"
                                      })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, { placeholder: "vue, nuxt, web" }), null, 16))
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormDescription, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Separadas por vírgula (ex: vue, nuxt, web) `);
                                  } else {
                                    return [
                                      createTextVNode(" Separadas por vírgula (ex: vue, nuxt, web) ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_FormMessage, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_FormLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tags")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormControl, null, {
                                  default: withCtx(() => [
                                    isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                      key: 0,
                                      class: "h-10 w-full"
                                    })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, { placeholder: "vue, nuxt, web" }), null, 16))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_FormDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Separadas por vírgula (ex: vue, nuxt, web) ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_FormMessage)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tags")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, { placeholder: "vue, nuxt, web" }), null, 16))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Separadas por vírgula (ex: vue, nuxt, web) ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode(_component_FormField, { name: "category" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Categoria")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                    default: withCtx(() => [
                                      createVNode(_component_SelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_SelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                            return createVNode(_component_SelectItem, {
                                              key: category.id,
                                              value: category.id
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(category.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1040))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_FormField, { name: "tags" }, {
                        default: withCtx(({ componentField }) => [
                          createVNode(_component_FormItem, null, {
                            default: withCtx(() => [
                              createVNode(_component_FormLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tags")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormControl, null, {
                                default: withCtx(() => [
                                  isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                    key: 0,
                                    class: "h-10 w-full"
                                  })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, { placeholder: "vue, nuxt, web" }), null, 16))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_FormDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Separadas por vírgula (ex: vue, nuxt, web) ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_FormMessage)
                            ]),
                            _: 2
                          }, 1024)
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
              createVNode(_component_CardHeader, { class: "pb-3" }, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, { class: "text-lg" }, {
                    default: withCtx(() => [
                      createTextVNode("Categorização")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode(_component_FormField, { name: "category" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Categoria")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-10 w-full"
                                })) : (openBlock(), createBlock(_component_Select, mergeProps({ key: 1 }, componentField), {
                                  default: withCtx(() => [
                                    createVNode(_component_SelectTrigger, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_SelectValue, { placeholder: "Selecione uma categoria" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_SelectContent, null, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                                          return createVNode(_component_SelectItem, {
                                            key: category.id,
                                            value: category.id
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(category.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1040))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_FormField, { name: "tags" }, {
                      default: withCtx(({ componentField }) => [
                        createVNode(_component_FormItem, null, {
                          default: withCtx(() => [
                            createVNode(_component_FormLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("Tags")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormControl, null, {
                              default: withCtx(() => [
                                isLoading.value ? (openBlock(), createBlock(_component_Skeleton, {
                                  key: 0,
                                  class: "h-10 w-full"
                                })) : (openBlock(), createBlock(_component_Input, mergeProps({ key: 1 }, componentField, { placeholder: "vue, nuxt, web" }), null, 16))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_FormDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(" Separadas por vírgula (ex: vue, nuxt, web) ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_FormMessage)
                          ]),
                          _: 2
                        }, 1024)
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
      _push(`<div class="flex items-center justify-end space-x-4 pt-4">`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        variant: "outline",
        onClick: onCancel,
        disabled: __props.isSubmitting || isLoading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Cancelar `);
          } else {
            return [
              createTextVNode(" Cancelar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        disabled: __props.isSubmitting || isLoading.value,
        class: "min-w-[120px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.isSubmitting) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "i-radix-icons-spinner",
                class: "mr-2 h-4 w-4 animate-spin"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(__props.isEditing ? "Salvando..." : "Criando...")}<!--]-->`);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: __props.isEditing ? "i-radix-icons-check" : "i-radix-icons-plus",
                class: "mr-2 h-4 w-4"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(__props.isEditing ? "Salvar Alterações" : "Criar Artigo")}<!--]-->`);
            }
          } else {
            return [
              __props.isSubmitting ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_component_Icon, {
                  name: "i-radix-icons-spinner",
                  class: "mr-2 h-4 w-4 animate-spin"
                }),
                createTextVNode(" " + toDisplayString(__props.isEditing ? "Salvando..." : "Criando..."), 1)
              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_component_Icon, {
                  name: __props.isEditing ? "i-radix-icons-check" : "i-radix-icons-plus",
                  class: "mr-2 h-4 w-4"
                }, null, 8, ["name"]),
                createTextVNode(" " + toDisplayString(__props.isEditing ? "Salvar Alterações" : "Criar Artigo"), 1)
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></form>`);
    };
  }
});

export { _sfc_main as _, articleDefaultValues as a };
//# sourceMappingURL=ArticleForm.vue2.mjs.map
