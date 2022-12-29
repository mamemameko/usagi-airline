<script setup lang="ts">
import { useTicketDataStore } from '@/stores/ticketData'
import { jsPDF } from "jspdf";
import PDFObject from "pdfobject";

const store = useTicketDataStore();

const doc = new jsPDF();
doc.addFont("/Mplus1-Medium.ttf", "Mplus1", "Medium");
doc.setFont("Mplus1", "Medium");
doc.text('名前', 10, 10);
doc.text('住所', 10, 20);
doc.text('目的地', 10, 30);
const pdf = doc.output('datauristring');

PDFObject.embed(pdf);
</script>

<template>
</template>
