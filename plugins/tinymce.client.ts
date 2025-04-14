// Plugin para carregar o TinyMCE no Nuxt
import 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'
import 'tinymce/icons/default/icons'
import 'tinymce/models/dom/model'

// Plugins essenciais
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/help'
import 'tinymce/plugins/wordcount'

export default defineNuxtPlugin(() => {
  // Plugin é carregado apenas no cliente (por causa da extensão .client.ts)
  // O TinyMCE fica disponível globalmente via window.tinymce

  // Configurar caminhos do TinyMCE globalmente
  if (typeof window !== 'undefined' && window.tinymce) {
    // Definir URL base para todos os plugins e recursos
    window.tinymce.baseURL = '/tinymce'
    window.tinymce.suffix = '.min'
  }
}) 