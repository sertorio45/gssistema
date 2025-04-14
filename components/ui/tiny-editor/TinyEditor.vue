<script setup lang="ts">
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import Editor from '@tinymce/tinymce-vue'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Conteúdo',
  },
  placeholder: {
    type: String,
    default: 'Digite seu conteúdo aqui...',
  },
  editorId: {
    type: String,
    default: 'tiny-editor',
  },
  height: {
    type: [Number, String],
    default: 500,
  },
  error: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const editorInitialized = ref(false)
const content = ref(props.modelValue)
const editorInstance = ref<any>(null)
const isReloading = ref(false)
const currentTheme = ref('')

// Detectar o tema do sistema
const colorMode = useColorMode()
const isDarkMode = computed(() => {
  if (colorMode.preference === 'dark') {
    return true
  }
  if (colorMode.preference === 'light') {
    return false
  }
  return colorMode.value === 'dark'
})

// Valor estável do tema para evitar re-renders desnecessários
const theme = computed(() => isDarkMode.value ? 'dark' : 'light')

// Registrar o tema atual na montagem para evitar reinicializações desnecessárias
onMounted(() => {
  currentTheme.value = theme.value
})

// Configurações do TinyMCE
const editorConfig = computed(() => {
  // Cores de tema ShadCN para tema escuro usando CSS vars
  const darkColors = {
    background: 'hsl(240 10% 3.9%)', // --background
    foreground: 'hsl(0 0% 98%)', // --foreground
    cardBg: 'hsl(240 10% 3.9%)', // --card
    border: 'hsl(240 3.7% 15.9%)', // --border
    primary: 'hsl(0 0% 98%)', // --primary
    secondary: 'hsl(240 3.7% 15.9%)', // --secondary
    muted: 'hsl(240 3.7% 15.9%)', // --muted
    mutedForeground: 'hsl(240 5% 64.9%)', // --muted-foreground
    accent: 'hsl(240 3.7% 15.9%)', // --accent
    link: 'hsl(217.2 91.2% 59.8%)', // link color alinhado com tema escuro
  }

  // Cores de tema ShadCN para tema claro
  const lightColors = {
    background: 'hsl(0 0% 100%)', // --background
    foreground: 'hsl(240 10% 3.9%)', // --foreground
    cardBg: 'hsl(0 0% 100%)', // --card
    border: 'hsl(240 5.9% 90%)', // --border
    primary: 'hsl(240 5.9% 10%)', // --primary
    secondary: 'hsl(240 4.8% 95.9%)', // --secondary
    muted: 'hsl(240 4.8% 95.9%)', // --muted
    mutedForeground: 'hsl(240 3.8% 46.1%)', // --muted-foreground
    accent: 'hsl(240 4.8% 95.9%)', // --accent
    link: 'hsl(221.2 83.2% 53.3%)', // link color alinhado com tema claro
  }

  // Selecionar conjunto de cores com base no tema
  const c = isDarkMode.value ? darkColors : lightColors

  // Estilo de conteúdo personalizado
  const customStyle = `
    :root {
      color-scheme: ${isDarkMode.value ? 'dark' : 'light'};
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
      background: ${isDarkMode.value ? `${c.cardBg} !important` : ''};
    }

    .tox .tox-tbtn svg {
      fill: ${isDarkMode.value ? `${c.foreground} !important` : ''};
    }
  `

  // Estilo de UI personalizado (aplicado ao container pai do editor)
  const customUI = document.createElement('style')
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
    `
    // Adicionar o estilo ao documento se ainda não estiver presente
    if (!document.getElementById('tinymce-dark-theme-custom')) {
      customUI.id = 'tinymce-dark-theme-custom'
      document.head.appendChild(customUI)
    }
  }
  else {
    // Remover estilos customizados no modo claro
    const existingStyle = document.getElementById('tinymce-dark-theme-custom')
    if (existingStyle) {
      existingStyle.remove()
    }

    // Adicionar estilo para remover a borda no tema claro
    const lightThemeStyle = document.createElement('style')
    lightThemeStyle.id = 'tinymce-light-theme-custom'
    lightThemeStyle.innerHTML = `
      .tox.tox-tinymce {
        border: 0px solid transparent !important;
        border-radius: 10px !important;
        box-shadow: none !important;
      }
    `
    document.head.appendChild(lightThemeStyle)
  }

  return {
    height: props.height,
    menubar: true,
    plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
    toolbar: 'bold italic forecolor | alignleft aligncenter alignright | bullist numlist | link image table | code fullscreen',
    content_style: customStyle,
    skin: isDarkMode.value ? 'oxide-dark' : 'oxide',
    content_css: isDarkMode.value ? 'dark' : 'default',
    branding: false,
    promotion: false,
    elementpath: false,
    statusbar: true,
    resize: true,
    relative_urls: false,
    remove_script_host: false,
    placeholder: props.placeholder,
    setup: (editor: any) => {
      editorInstance.value = editor
      editor.on('init', () => {
        editorInitialized.value = true

        // Injetar estilos personalizados diretamente no iframe do editor
        if (isDarkMode.value) {
          try {
            const editorIframe = document.getElementById(`${props.editorId}_ifr`) as HTMLIFrameElement
            if (editorIframe && editorIframe.contentDocument) {
              const iframeHead = editorIframe.contentDocument.head
              const iframeStyle = document.createElement('style')
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
              `
              iframeHead.appendChild(iframeStyle)
            }
          }
          catch (error) {
            console.error('Erro ao injetar estilos no iframe:', error)
          }
        }
      })
    },
  }
})

// Manipuladores de eventos
function handleEditorInit(): void {
  editorInitialized.value = true
}

function handleEditorChange(e: string): void {
  content.value = e
  emit('update:modelValue', e)
}

// Observar mudanças no tema com proteção contra loop infinito
watch(theme, (newTheme) => {
  // Evitar múltiplas reinicializações
  if (newTheme === currentTheme.value || isReloading.value) {
    return
  }

  // Atualiza o tema atual
  currentTheme.value = newTheme

  // Apenas reinicializar se o editor estiver pronto
  if (editorInitialized.value && editorInstance.value) {
    isReloading.value = true

    // Salvar o conteúdo atual
    const currentContent = content.value

    // Remover editor antigo
    editorInstance.value.remove()
    editorInitialized.value = false

    // Programar a restauração
    setTimeout(() => {
      // Restaurar conteúdo
      content.value = currentContent
      // Permitir nova reinicialização
      isReloading.value = false
    }, 250)
  }
}, { flush: 'post' })

// Atualizar o editor quando o modelValue mudar externamente
watch(() => props.modelValue, (newValue) => {
  if (newValue !== content.value) {
    content.value = newValue
  }
})
</script>

<template>
  <FormItem :class="{ 'opacity-60': disabled }">
    <FormLabel v-if="label">{{ label }}</FormLabel>
    <FormControl>
      <div class="relative border border-input rounded-md bg-background">
        <div v-if="!editorInitialized" class="min-h-[200px] w-full grid place-items-center">
          <div class="flex flex-col items-center">
            <div class="animate-spin w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full mb-2"></div>
            <span class="text-sm text-muted-foreground">Carregando editor...</span>
          </div>
        </div>
        <Editor
          v-if="!isReloading"
          :id="editorId"
          :model-value="content"
          :init="editorConfig"
          :disabled="disabled"
          @onInit="handleEditorInit"
          @update:modelValue="handleEditorChange"
        />
      </div>
    </FormControl>
    <FormMessage v-if="error">{{ error }}</FormMessage>
  </FormItem>
</template>
