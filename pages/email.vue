<script setup lang="ts">
import { accounts, mails } from '@/components/mail/data/mails'

// Definição de que esta rota requer a role "admin" ou "funcionario"
definePageMeta({
  middleware: ['auth'],
  requiredRoles: ['admin', 'funcionario'],
})
</script>

<template>
  <div class="-m-4 lg:-m-6">
    <MailLayout
      :accounts="accounts"
      :mails="mails"
      :nav-collapsed-size="4"
    />
  </div>
</template>
