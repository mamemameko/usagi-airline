<script setup lang="ts">
import { useTicketDataStore } from '@/stores/ticketData'
const store = useTicketDataStore();
</script>

<template>
  <h1>質問1: 名前</h1>
  <img alt="Vue logo" class="logo" src="@/assets/img/chat_usagi.png" width="125" height="125" />
  <img alt="Vue logo" class="logo" src="@/assets/img/chat_user.png" width="125" height="125" />
  <input type="text" v-model="store.name" />
  <RouterLink to="/ask-address">すすむ</RouterLink>
</template>
