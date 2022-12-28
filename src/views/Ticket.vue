<script setup lang="ts">
import { useTicketDataStore } from '@/stores/ticketData'
const store = useTicketDataStore();
</script>

<template>
  <h1>チケット表示</h1>
  <p>名前：{{ store.name }}</p>
  <p>住所：{{ store.address }}</p>
  <p>目的地：{{ store.destination }}</p>
</template>
