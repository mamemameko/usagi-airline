import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTicketDataStore = defineStore('ticketData', () => {
  const name = ref('')
  const address = ref('')
  const destination = ref('')
  return { name, address, destination }
})
