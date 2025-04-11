import { defineNuxtPlugin } from '#app'
import UserAvatar from '~/components/user/UserAvatar.vue'
import UserCard from '~/components/user/UserCard.vue'
import UserInfo from '~/components/user/UserInfo.vue'

// Plugin para registrar os componentes de usuário globalmente
export default defineNuxtPlugin((nuxtApp) => {
  // Registra os componentes
  nuxtApp.vueApp.component('UserAvatar', UserAvatar)
  nuxtApp.vueApp.component('UserInfo', UserInfo)
  nuxtApp.vueApp.component('UserCard', UserCard)
}) 