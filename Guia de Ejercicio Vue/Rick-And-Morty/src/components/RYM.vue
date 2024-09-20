<script setup>

import { ref, onMounted, computed } from 'vue'

const personajes = ref([])
const filtro = ref('')

async function fetchCharacters () {
    personajes.value = []
    const idsVistos = new Set()
    while (personajes.value.length < 50) { 
        const randomId = Math.floor(Math.random() * 826) + 1
        if (!idsVistos.has(randomId)) { 
            const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
            const data = await response.json()
            personajes.value.push(data)
            idsVistos.add(randomId)
        }
    }
}

const listaFiltrada = computed(() => {
    if (filtro.value.trim() === '') {
        return personajes.value 
    } else {
        return personajes.value.filter((elemento) =>
            elemento.name.toLowerCase().includes(filtro.value.toLowerCase()) 
        )
    }
})

onMounted(fetchCharacters)

</script>


<template>
<div>
<input type="text" v-model="filtro" placeholder="Busqueda" required style="width: 300px; height: 40px; font-size: 24px; text-align: center; border-radius: 10px;"></input>
<br>
<br>
<button @click="fetchCharacters()">Nueva lista de 50 personajes</button>
<h5 v-for="personaje in listaFiltrada" :key="personaje.id">
<img v-bind:src="personaje.image" alt="Imagen de {{ personaje.name }}" style="width: 100px; height: auto;"/>
<br>
 {{ personaje.name }}
</h5>
</div>
</template>


<style scoped>

</style>
