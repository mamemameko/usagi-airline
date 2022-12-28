<script setup lang="ts">
import { useTicketDataStore } from '@/stores/ticketData'
const store = useTicketDataStore();
</script>

<template>
  <h1>質問3: 目的地</h1>
  <img alt="Vue logo" class="logo" src="@/assets/img/chat_usagi.png" width="125" height="125" />
  <img alt="Vue logo" class="logo" src="@/assets/img/chat_user.png" width="125" height="125" />
  <input type="text" v-model="store.destination" />
  <RouterLink to="/ticket">すすむ</RouterLink>
</template>
