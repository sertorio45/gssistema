// Declaração de tipos para o TinyMCE
interface Window {
  tinymce: any;
}

// Módulos do TinyMCE
declare module 'tinymce/tinymce'
declare module 'tinymce/themes/silver/theme'
declare module 'tinymce/models/dom/model'

// Plugins
declare module 'tinymce/plugins/advlist'
declare module 'tinymce/plugins/autolink'
declare module 'tinymce/plugins/lists'
declare module 'tinymce/plugins/link'
declare module 'tinymce/plugins/image'
declare module 'tinymce/plugins/charmap'
declare module 'tinymce/plugins/preview'
declare module 'tinymce/plugins/anchor'
declare module 'tinymce/plugins/searchreplace'
declare module 'tinymce/plugins/visualblocks'
declare module 'tinymce/plugins/code'
declare module 'tinymce/plugins/fullscreen'
declare module 'tinymce/plugins/insertdatetime'
declare module 'tinymce/plugins/media'
declare module 'tinymce/plugins/table'
declare module 'tinymce/plugins/help'
declare module 'tinymce/plugins/wordcount'

declare module '@/components/ui/tiny-editor/TinyEditor.vue'; 