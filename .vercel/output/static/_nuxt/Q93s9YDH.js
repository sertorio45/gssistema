import{_ as ve,a as xe,b as _e,c as he,u as ke,t as Se,F as Ee,d as $e}from"./BoBO-dhD.js";import{K as J,d as Q,L as Ce,r as B,x as W,M as we,N as Ae,O as Oe,P as de,Q as ue,R as Te,J as X,g as k,o as f,u as D,n as Ie,w as n,h as G,b as t,e as S,t as Y,a as z,c as F,S as ze,G as H,F as K,y as ce,T as me,f as De,i as Ue,z as Me}from"./xwqOR6O6.js";import{_ as Be}from"./BcUF11S_.js";import{_ as Le}from"./Dheb4U_G.js";import{c as Ve,b as Fe,_ as je,a as Ne}from"./FWDhT1Qz.js";import{_ as Pe,a as He,b as Ye,c as Re,d as qe}from"./DAVZSaiA.js";import{z as E}from"./BKTptsQI.js";import{u as Ge,s as Je}from"./C-GWNJw8.js";const Ke=E.object({id:E.string(),title:E.string().min(3,"O título deve ter pelo menos 3 caracteres"),content:E.string().min(10,"O conteúdo deve ter pelo menos 10 caracteres"),meta_description:E.string().optional(),slug:E.string(),status:E.enum(["draft","published","archived"]),categories:E.string().optional(),tags:E.string().optional(),created_at:E.date().or(E.string()),updated_at:E.date().or(E.string())}),Ze=Ke.omit({id:!0,created_at:!0,updated_at:!0}).extend({meta_description:E.string().optional(),categories:E.string().optional(),tags:E.string().optional()}),We={title:"",content:"",meta_description:"",slug:"",status:"draft",categories:"",tags:""};var Xe=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],Qe=function(e){return Xe.map(function(s){return s.toLowerCase()}).indexOf(e.toLowerCase())!==-1},et=function(e,s,r){Object.keys(s).filter(Qe).forEach(function(m){var i=s[m];typeof i=="function"&&(m==="onInit"?i(e,r):r.on(m.substring(2),function(d){return i(d,r)}))})},tt=function(e,s,r,m){var i=e.modelEvents?e.modelEvents:null,d=Array.isArray(i)?i.join(" "):i;J(m,function(l,g){r&&typeof l=="string"&&l!==g&&l!==r.getContent({format:e.outputFormat})&&r.setContent(l)}),r.on(d||"change input undo redo",function(){s.emit("update:modelValue",r.getContent({format:e.outputFormat}))})},ot=function(e,s,r,m,i,d){m.setContent(d()),r.attrs["onUpdate:modelValue"]&&tt(s,r,m,i),et(e,r.attrs,m)},fe=0,ye=function(e){var s=Date.now(),r=Math.floor(Math.random()*1e9);return fe++,e+"_"+r+fe+String(s)},nt=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},pe=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},at=function(e,s){return pe(e).concat(pe(s))},rt=function(e){return e==null},ge=function(){return{listeners:[],scriptId:ye("tiny-script"),scriptLoaded:!1}},it=function(){var e=ge(),s=function(i,d,l,g){var c=d.createElement("script");c.referrerPolicy="origin",c.type="application/javascript",c.id=i,c.src=l;var $=function(){c.removeEventListener("load",$),g()};c.addEventListener("load",$),d.head&&d.head.appendChild(c)},r=function(i,d,l){e.scriptLoaded?l():(e.listeners.push(l),i.getElementById(e.scriptId)||s(e.scriptId,i,d,function(){e.listeners.forEach(function(g){return g()}),e.scriptLoaded=!0}))},m=function(){e=ge()};return{load:r,reinitialize:m}},lt=it(),st=function(){return typeof window<"u"?window:global},V=function(){var e=st();return e&&e.tinymce?e.tinymce:null},dt={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},j=function(){return j=Object.assign||function(e){for(var s,r=1,m=arguments.length;r<m;r++){s=arguments[r];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e},j.apply(this,arguments)},ut=function(e,s,r,m){return e(m||"div",{id:s,ref:r})},ct=function(e,s,r){return e("textarea",{id:s,visibility:"hidden",ref:r})},mt=Q({props:dt,setup:function(e,s){var r=e.init?j({},e.init):{},m=Ce(e),i=m.disabled,d=m.modelValue,l=m.tagName,g=B(null),c=null,$=e.id||ye("tiny-vue"),u=e.init&&e.init.inline||e.inline,h=!!s.attrs["onUpdate:modelValue"],T=!0,I=e.initialValue?e.initialValue:"",U="",C=function(b){return h?function(){return d!=null&&d.value?d.value:""}:function(){return b?I:U}},O=function(){var b=C(T),a=j(j({},r),{readonly:e.disabled,selector:"#"+$,plugins:at(r.plugins,e.plugins),toolbar:e.toolbar||r.toolbar,inline:u,setup:function(p){c=p,p.on("init",function(v){return ot(v,e,s,p,d,b)}),typeof r.setup=="function"&&r.setup(p)}});nt(g.value)&&(g.value.style.visibility=""),V().init(a),T=!1};J(i,function(b){var a;c!==null&&(typeof((a=c.mode)===null||a===void 0?void 0:a.set)=="function"?c.mode.set(b?"readonly":"design"):c.setMode(b?"readonly":"design"))}),J(l,function(b){var a;h||(U=c.getContent()),(a=V())===null||a===void 0||a.remove(c),ue(function(){return O()})}),W(function(){if(V()!==null)O();else if(g.value&&g.value.ownerDocument){var b=e.cloudChannel?e.cloudChannel:"5",a=e.apiKey?e.apiKey:"no-api-key",p=rt(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+a+"/tinymce/"+b+"/tinymce.min.js":e.tinymceScriptSrc;lt.load(g.value.ownerDocument,p,O)}}),we(function(){V()!==null&&V().remove(c)}),u||(Ae(function(){T||O()}),Oe(function(){var b;h||(U=c.getContent()),(b=V())===null||b===void 0||b.remove(c)}));var o=function(b){var a;U=c.getContent(),(a=V())===null||a===void 0||a.remove(c),r=j(j({},r),b),ue(function(){return O()})};return s.expose({rerender:o}),function(){return u?ut(de,$,g,e.tagName):ct(de,$,g)}}});const ft={class:"relative border border-input rounded-md bg-background"},pt={key:0,class:"min-h-[200px] w-full grid place-items-center"},gt=Q({__name:"TinyEditor",props:{modelValue:{type:String,default:""},label:{type:String,default:"Conteúdo"},placeholder:{type:String,default:"Digite seu conteúdo aqui..."},editorId:{type:String,default:"tiny-editor"},height:{type:[Number,String],default:500},error:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const r=e,m=s,i=B(!1),d=B(r.modelValue),l=B(null),g=B(!1),c=B(""),$=Te(),u=X(()=>$.preference==="dark"?!0:$.preference==="light"?!1:$.value==="dark"),h=X(()=>u.value?"dark":"light");W(()=>{c.value=h.value});const T=X(()=>{const C={background:"hsl(240 10% 3.9%)",foreground:"hsl(0 0% 98%)",cardBg:"hsl(240 10% 3.9%)",border:"hsl(240 3.7% 15.9%)",primary:"hsl(0 0% 98%)",secondary:"hsl(240 3.7% 15.9%)",muted:"hsl(240 3.7% 15.9%)",mutedForeground:"hsl(240 5% 64.9%)",accent:"hsl(240 3.7% 15.9%)",link:"hsl(217.2 91.2% 59.8%)"},O={background:"hsl(0 0% 100%)",foreground:"hsl(240 10% 3.9%)",cardBg:"hsl(0 0% 100%)",border:"hsl(240 5.9% 90%)",primary:"hsl(240 5.9% 10%)",secondary:"hsl(240 4.8% 95.9%)",muted:"hsl(240 4.8% 95.9%)",mutedForeground:"hsl(240 3.8% 46.1%)",accent:"hsl(240 4.8% 95.9%)",link:"hsl(221.2 83.2% 53.3%)"},o=u.value?C:O,b=`
    :root {
      color-scheme: ${u.value?"dark":"light"};
    }

    body {
      font-family: system-ui, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      padding: 12px;
      background-color: ${o.background};
      color: ${o.foreground};
      border-radius: 0.375rem;
    }

    h1, h2, h3, h4, h5, h6 {
      color: ${o.foreground};
      font-weight: 600;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    a {
      color: ${o.link};
      text-decoration: underline;
    }

    code {
      background-color: ${o.muted};
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
      border: 1px solid ${o.border};
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    table th, table td {
      border: 1px solid ${o.border};
      padding: 0.5em;
    }

    table th {
      background-color: ${o.muted};
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
      border-left: 1px solid ${o.border};
      border-right: 1px solid ${o.border};
      padding: 0.75em;
      text-align: left;
      border-top: none;
      border-bottom: none;
    }
    
    table th {
      background-color: ${o.muted};
      font-weight: 600;
    }
    
    table tr:nth-child(even) {
      background-color: ${u.value?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.025)"};
    }
    
    table tr:hover {
      background-color: ${u.value?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
    }

    blockquote {
      border-left: 3px solid ${o.border};
      margin: 1em 0;
      padding-left: 1em;
      color: ${o.mutedForeground};
    }

    hr {
      border: none;
      border-top: 1px solid ${o.border};
      margin: 1em 0;
    }

    /* Melhorar exibição de listas */
    ul, ol {
      padding-left: 1.5em;
    }

    /* Estilizar botões de TinyMCE em tema escuro */
    .tox-tinymce {
      border-color: ${o.border} !important;
      border-radius: 0.375rem !important;
      border: 0px solid transparent !important;
    }

    .tox .tox-toolbar, .tox .tox-toolbar__primary, .tox .tox-toolbar__overflow {
      background: ${u.value?`${o.cardBg} !important`:""};
    }

    .tox .tox-tbtn svg {
      fill: ${u.value?`${o.foreground} !important`:""};
    }
  `,a=document.createElement("style");if(u.value)a.innerHTML=`
      .tox.tox-tinymce {
        border-color: ${o.border} !important;
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
        background-color: ${o.background} !important;
        color: ${o.foreground} !important;
        border-color: ${o.border} !important;
      }

      .tox .tox-tbtn,
      .tox .tox-tbtn:hover,
      .tox .tox-mbtn,
      .tox .tox-mbtn:hover,
      .tox .tox-mbtn--active,
      .tox .tox-mbtn:focus:not(:disabled),
      .tox .tox-split-button:hover,
      .tox .tox-split-button:focus {
        background-color: ${o.muted} !important;
        color: ${o.foreground} !important;
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
        color: ${o.foreground} !important;
        fill: ${o.foreground} !important;
      }

      .tox .tox-tbtn--enabled,
      .tox .tox-tbtn--enabled:hover,
      .tox .tox-mbtn--active,
      .tox .tox-mbtn--active:hover {
        background-color: ${o.accent} !important;
        color: ${o.foreground} !important;
      }

      .tox .tox-button,
      .tox .tox-button.tox-button--secondary {
        background-color: ${o.primary} !important;
        color: ${o.background} !important;
        border-color: ${o.primary} !important;
      }

      .tox .tox-button--secondary,
      .tox .tox-button.tox-button--secondary {
        background-color: ${o.secondary} !important;
        color: ${o.foreground} !important;
        border-color: ${o.border} !important;
      }

      .tox .tox-button--naked {
        background-color: transparent !important;
        color: ${o.mutedForeground} !important;
      }

      .tox .tox-collection--list .tox-collection__item--active,
      .tox .tox-collection--list .tox-collection__item--active:not(.tox-collection__item--state-disabled) {
        background-color: ${o.accent} !important;
      }

      .tox .tox-tbtn:hover,
      .tox .tox-mbtn:hover,
      .tox .tox-tbtn:focus,
      .tox .tox-mbtn:focus {
        background-color: ${o.muted} !important;
      }

      /* Elementos específicos que precisam de estilização para o tema escuro */
      .tox .tox-promotion {
        background-color: ${o.background} !important;
        color: ${o.foreground} !important;
        border-color: ${o.border} !important;
      }

      .tox:not(.tox-tinymce-inline) .tox-editor-header {
        background-color: ${o.background} !important;
        border-bottom: 1px solid ${o.border} !important;
      }

      .tox .tox-toolbar-overlord {
        background-color: ${o.background} !important;
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
        background-color: ${o.background} !important;
        border-color: ${o.border} !important;
      }

      /* Ajustar cores dos botões de menu */
      .tox .tox-collection__item {
        background-color: ${o.background} !important;
        color: ${o.foreground} !important;
      }

      .tox .tox-collection__item:hover {
        background-color: ${o.muted} !important;
      }

      /* Adicionar estilo de background para toolbar */
      .tox .tox-toolbar {
        background-image: repeating-linear-gradient(rgba(255, 255, 255, 0) 0 1px, transparent 1px 400px) !important;
      }
    `,document.getElementById("tinymce-dark-theme-custom")||(a.id="tinymce-dark-theme-custom",document.head.appendChild(a));else{const p=document.getElementById("tinymce-dark-theme-custom");p&&p.remove();const v=document.createElement("style");v.id="tinymce-light-theme-custom",v.innerHTML=`
      .tox.tox-tinymce {
        border: 0px solid transparent !important;
        border-radius: 10px !important;
        box-shadow: none !important;
      }
    `,document.head.appendChild(v)}return{height:r.height,menubar:!0,plugins:"advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",toolbar1:"undo redo | formatselect fontsizeselect | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ",toolbar2:"link image table media | removeformat code fullscreen",toolbar_mode:"wrap",toolbar_sticky:!0,content_style:b,font_size_formats:"8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",style_formats:[{title:"Título 1",format:"h1"},{title:"Título 2",format:"h2"},{title:"Título 3",format:"h3"},{title:"Título 4",format:"h4"},{title:"Título 5",format:"h5"},{title:"Título 6",format:"h6"},{title:"Parágrafo",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Código",format:"pre"},{title:"Negrito",format:"bold"},{title:"Itálico",format:"italic"},{title:"Sublinhado",format:"underline"}],skin:u.value?"oxide-dark":"oxide",content_css:u.value?"dark":"default",branding:!1,promotion:!1,elementpath:!1,statusbar:!0,resize:!0,relative_urls:!1,remove_script_host:!1,placeholder:r.placeholder,images_upload_url:"/api/upload/image",automatic_uploads:!0,images_reuse_filename:!0,file_picker_types:"image",image_title:!0,image_caption:!0,image_advtab:!0,images_file_types:"jpeg,jpg,png,gif,webp,svg",images_upload_handler:(p,v)=>new Promise((M,y)=>{const x=new XMLHttpRequest;x.withCredentials=!1,x.open("POST","/api/upload/image"),x.upload.onprogress=_=>{v(_.loaded/_.total*100)},x.onload=()=>{if(x.status===403){y(new Error("Acesso negado ao fazer upload"));return}if(x.status<200||x.status>=300){y(new Error("Erro no upload. Tente novamente."));return}try{const _=JSON.parse(x.responseText);if(!_||typeof _.location!="string"){y(new Error("Resposta inválida do servidor de upload"));return}M(_.location)}catch(_){console.error("Erro ao processar resposta:",_),y(new Error("Erro ao processar a resposta do servidor"))}},x.onerror=()=>{console.error("Erro na requisição de upload"),y(new Error("Erro na conexão com o servidor de upload"))};const w=new FormData;w.append("file",p.blob(),p.filename()),x.send(w)}),file_picker_callback:(p,v,M)=>{if(M.filetype==="image"){const y=document.createElement("input");y.setAttribute("type","file"),y.setAttribute("accept","image/*"),y.addEventListener("change",x=>{const w=x.target.files[0];if(!w)return;const _=new FileReader;_.addEventListener("load",()=>{const R=`blobid${new Date().getTime()}`;if(!l.value){console.error("Editor não inicializado corretamente");return}try{const N=l.value.editorUpload.blobCache,q=_.result.split(",")[1],P=N.create(R,w,q);N.add(P),p(P.blobUri(),{title:w.name})}catch(N){console.error("Erro ao processar arquivo para upload:",N)}}),_.readAsDataURL(w)}),y.click()}},setup:p=>{l.value=p,p.on("init",()=>{if(i.value=!0,u.value)try{const v=document.getElementById(`${r.editorId}_ifr`);if(v&&v.contentDocument){const M=v.contentDocument.head,y=document.createElement("style");y.innerHTML=`
                body {
                  background-color: ${o.background} !important;
                  color: ${o.foreground} !important;
                }

                /* Estilização do placeholder */
                .mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
                  color: ${o.mutedForeground} !important;
                  content: attr(data-mce-placeholder);
                  position: absolute;
                  opacity: 0.7;
                }
              `,M.appendChild(y)}}catch(v){console.error("Erro ao injetar estilos no iframe:",v)}})},table_appearance_options:!1,table_advtab:!0,table_cell_advtab:!0,table_row_advtab:!0,table_responsive_width:!0,table_default_styles:{width:"100%",borderCollapse:"collapse"},table_default_attributes:{border:"0"},table_class_list:[{title:"Tabela padrão",value:""},{title:"Sem bordas",value:"table-borderless"}]}});function I(){i.value=!0}function U(C){d.value=C,m("update:modelValue",C)}return J(h,C=>{if(!(C===c.value||g.value)&&(c.value=C,i.value&&l.value)){g.value=!0;const O=d.value;l.value.remove(),i.value=!1,setTimeout(()=>{d.value=O,g.value=!1},250)}},{flush:"post"}),J(()=>r.modelValue,C=>{C!==d.value&&l.value&&(d.value=C)}),W(()=>{window.onLoaded=!0}),(C,O)=>(f(),k(D(ve),{class:Ie({"opacity-60":e.disabled})},{default:n(()=>[e.label?(f(),k(D(xe),{key:0},{default:n(()=>[S(Y(e.label),1)]),_:1})):G("",!0),t(D(_e),null,{default:n(()=>[z("div",ft,[i.value?G("",!0):(f(),F("div",pt,O[0]||(O[0]=[z("div",{class:"flex flex-col items-center"},[z("div",{class:"animate-spin w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full mb-2"}),z("span",{class:"text-sm text-muted-foreground"},"Carregando editor...")],-1)]))),g.value?G("",!0):(f(),k(D(mt),{key:1,id:e.editorId,"model-value":d.value,init:T.value,disabled:e.disabled,onOnInit:I,"onUpdate:modelValue":U},null,8,["id","model-value","init","disabled"]))])]),_:1}),e.error?(f(),k(D(he),{key:1},{default:n(()=>[S(Y(e.error),1)]),_:1})):G("",!0)]),_:1},8,["class"]))}});var Z={exports:{}},bt=Z.exports,be;function vt(){return be||(be=1,function(e,s){(function(r,m,i){e.exports=i(),e.exports.default=i()})("slugify",bt,function(){var r=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),m=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function i(d,l){if(typeof d!="string")throw new Error("slugify: string argument expected");l=typeof l=="string"?{replacement:l}:l||{};var g=m[l.locale]||{},c=l.replacement===void 0?"-":l.replacement,$=l.trim===void 0?!0:l.trim,u=d.normalize().split("").reduce(function(h,T){var I=g[T];return I===void 0&&(I=r[T]),I===void 0&&(I=T),I===c&&(I=" "),h+I.replace(l.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return l.strict&&(u=u.replace(/[^A-Za-z0-9\s]/g,"")),$&&(u=u.trim()),u=u.replace(/\s+/g,c),l.lower&&(u=u.toLowerCase()),u}return i.extend=function(d){Object.assign(r,d)},i})}(Z)),Z.exports}vt();const xt={class:"grid gap-6 md:grid-cols-[2fr_1fr]"},_t={class:""},ht={class:"space-y-4"},yt={class:"flex items-center gap-2"},kt={key:1,class:"flex items-center"},St={class:"space-y-6"},Et={class:"space-y-4"},$t={class:"space-y-4"},Ct={class:"flex items-center justify-end space-x-4 pt-4"},Mt=Q({__name:"ArticleForm",props:{initialValues:{type:Object,default:()=>We},isEditing:{type:Boolean,default:!1},isSubmitting:{type:Boolean,default:!1}},emits:["submit","cancel"],setup(e,{emit:s}){const r=e,m=s,{generateSlug:i}=Ge(),d=Se(Ze),l=ke({validationSchema:d,initialValues:r.initialValues}),{handleSubmit:g,resetForm:c,setFieldValue:$,values:u}=l,h=B(!0),T=B(!1);W(()=>{setTimeout(()=>{h.value=!1},500)});function I(){!r.isEditing&&u.title&&(T.value=!0,setTimeout(()=>{$("slug",i(u.title)),T.value=!1},300))}const U=g(b=>{m("submit",b)});function C(){c(),m("cancel")}const O=[{id:"1",name:"Tecnologia"},{id:"2",name:"Negócios"},{id:"3",name:"Marketing"},{id:"4",name:"Design"}];function o(b){$("content",b)}return(b,a)=>{const p=xe,v=Me,M=Be,y=_e,x=he,w=ve,_=Ee,R=$e,N=Le,q=Fe,P=Ve,ee=Ne,te=je,oe=He,ne=Pe,ae=Re,re=Ye,ie=qe,le=De,se=Ue;return f(),F("form",{onSubmit:a[1]||(a[1]=ze((...A)=>D(U)&&D(U)(...A),["prevent"])),class:"space-y-6"},[z("div",xt,[z("div",_t,[t(P,null,{default:n(()=>[t(q,{class:"pt-6"},{default:n(()=>[z("div",ht,[t(_,{name:"title"},{default:n(({componentField:A})=>[t(w,null,{default:n(()=>[t(p,null,{default:n(()=>a[2]||(a[2]=[S("Título")])),_:1}),t(y,null,{default:n(()=>[h.value?(f(),k(v,{key:0,class:"h-10 w-full"})):(f(),k(M,H({key:1},A,{placeholder:"Título do artigo",onBlur:I}),null,16))]),_:2},1024),t(x)]),_:2},1024)]),_:1}),t(_,{name:"slug"},{default:n(({componentField:A})=>[t(w,{class:"mt-1"},{default:n(()=>[z("div",yt,[t(p,{class:"text-sm font-normal mb-0"},{default:n(()=>a[3]||(a[3]=[S("Slug:")])),_:1}),h.value||T.value?(f(),k(v,{key:0,class:"h-6 w-48"})):(f(),F("div",kt,[t(M,H(A,{placeholder:"url-do-artigo",class:"h-7 text-sm"}),null,16)]))]),e.isEditing?G("",!0):(f(),k(R,{key:0,class:"text-xs"},{default:n(()=>a[4]||(a[4]=[S(" Gerado automaticamente quando você terminar de escrever o título ")])),_:1})),t(x)]),_:2},1024)]),_:1}),t(_,{name:"meta_description"},{default:n(({componentField:A})=>[t(w,null,{default:n(()=>[t(p,null,{default:n(()=>a[5]||(a[5]=[S("Meta Descrição")])),_:1}),t(y,null,{default:n(()=>[h.value?(f(),k(v,{key:0,class:"h-[82px] w-full"})):(f(),k(N,H({key:1},A,{placeholder:"Breve descrição do artigo que aparecerá nos resultados de pesquisa",rows:3}),null,16))]),_:2},1024),t(R,null,{default:n(()=>a[6]||(a[6]=[S(" Máximo de 160 caracteres ")])),_:1}),t(x)]),_:2},1024)]),_:1}),t(_,{name:"content"},{default:n(()=>[t(w,null,{default:n(()=>[h.value?(f(),k(v,{key:0,class:"h-[500px] w-full"})):(f(),k(gt,{key:1,modelValue:D(u).content,"onUpdate:modelValue":[a[0]||(a[0]=A=>D(u).content=A),o],disabled:e.isSubmitting,placeholder:"Conteúdo do artigo em formato rico",height:500,"editor-id":"article-content-editor"},null,8,["modelValue","disabled"])),t(x)]),_:1})]),_:1})])]),_:1})]),_:1})]),z("div",St,[t(P,null,{default:n(()=>[t(te,{class:"pb-3"},{default:n(()=>[t(ee,{class:"text-lg"},{default:n(()=>a[7]||(a[7]=[S("Publicação")])),_:1})]),_:1}),t(q,null,{default:n(()=>[z("div",Et,[t(_,{name:"status"},{default:n(({componentField:A})=>[t(w,null,{default:n(()=>[t(p,null,{default:n(()=>a[8]||(a[8]=[S("Status")])),_:1}),t(y,null,{default:n(()=>[h.value?(f(),k(v,{key:0,class:"h-10 w-full"})):(f(),k(ie,me(H({key:1},A)),{default:n(()=>[t(ne,null,{default:n(()=>[t(oe,{placeholder:"Selecione um status"})]),_:1}),t(re,null,{default:n(()=>[(f(!0),F(K,null,ce(D(Je),L=>(f(),k(ae,{key:L.value,value:L.value},{default:n(()=>[S(Y(L.label),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:2},1040))]),_:2},1024),t(x)]),_:2},1024)]),_:1})])]),_:1})]),_:1}),t(P,null,{default:n(()=>[t(te,{class:"pb-3"},{default:n(()=>[t(ee,{class:"text-lg"},{default:n(()=>a[9]||(a[9]=[S("Categorização")])),_:1})]),_:1}),t(q,null,{default:n(()=>[z("div",$t,[t(_,{name:"category"},{default:n(({componentField:A})=>[t(w,null,{default:n(()=>[t(p,null,{default:n(()=>a[10]||(a[10]=[S("Categoria")])),_:1}),t(y,null,{default:n(()=>[h.value?(f(),k(v,{key:0,class:"h-10 w-full"})):(f(),k(ie,me(H({key:1},A)),{default:n(()=>[t(ne,null,{default:n(()=>[t(oe,{placeholder:"Selecione uma categoria"})]),_:1}),t(re,null,{default:n(()=>[(f(),F(K,null,ce(O,L=>t(ae,{key:L.id,value:L.id},{default:n(()=>[S(Y(L.name),1)]),_:2},1032,["value"])),64))]),_:1})]),_:2},1040))]),_:2},1024),t(x)]),_:2},1024)]),_:1}),t(_,{name:"tags"},{default:n(({componentField:A})=>[t(w,null,{default:n(()=>[t(p,null,{default:n(()=>a[11]||(a[11]=[S("Tags")])),_:1}),t(y,null,{default:n(()=>[h.value?(f(),k(v,{key:0,class:"h-10 w-full"})):(f(),k(M,H({key:1},A,{placeholder:"vue, nuxt, web"}),null,16))]),_:2},1024),t(R,null,{default:n(()=>a[12]||(a[12]=[S(" Separadas por vírgula (ex: vue, nuxt, web) ")])),_:1}),t(x)]),_:2},1024)]),_:1})])]),_:1})]),_:1}),z("div",Ct,[t(le,{type:"button",variant:"outline",onClick:C,disabled:e.isSubmitting||h.value},{default:n(()=>a[13]||(a[13]=[S(" Cancelar ")])),_:1},8,["disabled"]),t(le,{type:"submit",disabled:e.isSubmitting||h.value,class:"min-w-[120px]"},{default:n(()=>[e.isSubmitting?(f(),F(K,{key:0},[t(se,{name:"i-radix-icons-spinner",class:"mr-2 h-4 w-4 animate-spin"}),S(" "+Y(e.isEditing?"Salvando...":"Criando..."),1)],64)):(f(),F(K,{key:1},[t(se,{name:e.isEditing?"i-radix-icons-check":"i-radix-icons-plus",class:"mr-2 h-4 w-4"},null,8,["name"]),S(" "+Y(e.isEditing?"Salvar Alterações":"Criar Artigo"),1)],64))]),_:1},8,["disabled"])])])])],32)}}});export{Mt as _,We as a};
