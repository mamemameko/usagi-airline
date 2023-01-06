<script setup lang="ts">
import { useTicketDataStore } from '@/stores/ticketData'
import { jsPDF } from "jspdf";
import "@/assets/font/Mplus1-Medium-normal-ESModule";
import PDFObject from "pdfobject";
import { onMounted } from 'vue';

const store = useTicketDataStore();

const doc = new jsPDF();
doc.setFont("Mplus1-Medium", "normal");
doc.text('名前: ' + store.name, 10, 10);
doc.text('住所: ' + store.address, 10, 20);
doc.text('目的地: ' + store.destination, 10, 30);
const pdf = doc.output('datauristring');

onMounted(() => {
    PDFObject.embed(pdf, "#pdf");
});
</script>

<template>
    <div id="pdf"></div>
</template>
