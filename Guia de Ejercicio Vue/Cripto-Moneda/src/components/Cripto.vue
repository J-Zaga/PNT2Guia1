<script setup>
import { ref, computed, onMounted } from 'vue'

const CriptoMonedas = ref([])

async function fetchMonedas(){
    const response = await fetch("https://api.coincap.io/v2/assets?limit=10")
    const data = await response.json()
    CriptoMonedas.value = data.data
}

function ordenarPorNombre(){
CriptoMonedas.value.sort((a, b) => a.name.localeCompare(b.name))
}

function ordenarPorRanking(){
    CriptoMonedas.value.sort((a,b)=> a.rank - b.rank)
}

onMounted(fetchMonedas)
</script>

<template>
<button @click="ordenarPorNombre">Ordenar por Nombre</button><span>
<button @click="ordenarPorRanking">Ordenar por Ranking</button></span>
<h2 v-for="moneda in CriptoMonedas" :key="moneda.id" :class="{ 'high-rank': moneda.rank <= 3 }" >
{{ moneda.name }} 
<span v-if="moneda.changePercent24Hr > 0" class="arrow-up"></span>
<span v-else-if="moneda.changePercent24Hr < 0" class="arrow-down"></span>
</h2>

</template>

<style scoped>

.high-rank {
    color: rgb(4, 122, 20);
    font-weight: bold; 
    text-shadow: 0 0 5px rgba(0, 255, 98, 0.5), 0 0 10px rgba(0, 17, 255, 0.3); 
}

.high-rank:hover{
    text-shadow: 0 0 5px rgba(0, 255, 34, 0.5), 0 0 10px rgba(0, 255, 34, 0.3)
}

.arrow-up {
    display: inline-block;
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid rgb(0, 255, 34); /* Color verde */
    margin-left: 5px; /* Espacio entre el nombre y la flecha */
}

.arrow-down {
    display: inline-block;
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid rgb(255, 0, 0); /* Color rojo */
    margin-left: 5px; /* Espacio entre el nombre y la flecha */
}

</style> 
