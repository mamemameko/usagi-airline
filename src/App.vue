<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useTicketDataStore } from '@/stores/ticketData'
const store = useTicketDataStore();
</script>

<template>
  <router-view />
</template>

<style>

</style>
