<script setup>
import { ref, computed } from 'vue'

const invitados = ref([
{
  nombre: "Juan",
  edad: 30,
  confirmado: true,
  genero: "Masculino"
},
{
  nombre: "María",
  edad: 25,
  confirmado: false,
  genero: "Femenino"
},
{
  nombre: "Carlos",
  edad: 35,
  confirmado: true,
  genero: "Masculino"
},
{
  nombre: "Laura",
  edad: 28,
  confirmado: true,
  genero: "Femenino",
},
{
  nombre: "Pedro",
  edad: 40,
  confirmado: false,
  genero: "Masculino"
}
])

const tareasFiesta = ref([
  {
    nombre: "Hacer la lista de invitados",
    completada: false
  },
  {
    nombre: "Enviar invitaciones",
    completada: false
  },
  {
    nombre: "Planificar el menú",
    completada: false
  },
  {
    nombre: "Comprar decoraciones",
    completada: false
  },
  {
    nombre: "Configurar el espacio",
    completada: false
  }
]);

const nombre = ref('')
const edad = ref('')
const genero = ref('')
const filtroGenero = ref('')
const filtroEstado = ref('')
const ocultar = ref(true)

function agregarInvitado(){
  if (nombre.value && edad.value && genero.value){
    invitados.value.push({nombre: nombre.value, edad: Number(edad.value), confirmado: false, genero: genero.value})
    nombre.value = ''
    edad.value = ''
    genero.value = ''
  }
}
function confirmar(invitado){
  invitado.confirmado = true
}

function ocultarTareas(){
  ocultar.value = !ocultar.value
}

const filtrar = computed(() => {
  return invitados.value.filter(invitado => {
    const estadoCoincide = filtroEstado.value === '' || (filtroEstado.value === "Confirmado" ? invitado.confirmado : !invitado.confirmado)
    const generoCoincide = filtroGenero.value === '' || invitado.genero === filtroGenero.value
    return estadoCoincide && generoCoincide
  })
})

const contadorConfirmados = computed(()=>{
  return invitados.value.filter(invitado => invitado.confirmado === true).length
})

</script>

<template>

<h3 v-for="invitado in invitados" :key="invitado.nombre" v-bind:class="{ confirmado: invitado.confirmado, pendiente: !invitado.confirmado }" >
  {{ invitado.nombre }}  <span v-if="invitado.confirmado">
    ✓
  </span>
  <span v-else-if="!invitado.confirmado">✖</span>
  <br><button @click="confirmar(invitado)" v-show="!invitado.confirmado">Confirmar </button></br>
</h3>

<input type="text" v-model="nombre" placeholder="Nombre" required>
<input type="number" v-model="edad" placeholder="0" required>

<select v-model="genero" required>
  <option value="" disabled selected>Seleccione un genero</option>
  <option value="Masculino">Masculino</option>
  <option value="Femenino">Femenino</option>
  <option value="Otro">Otro</option>
</select>
<br>
<button @click="agregarInvitado">Agregar Invitado</button>


<br>
<br>
<select v-model="filtroGenero">
  <option value="" selected>Seleccione un filtro de genero</option>
  <option value="Masculino">Masculino</option>
  <option value="Femenino">Femenino</option>
  <option value="Otro">Otro</option>
</select>
<select v-model="filtroEstado">
  <option value="" selected>Seleccione un filtro de estado</option>
  <option value="Confirmado">Confirmado</option>
  <option value="No confirmado">No confirmado</option>
</select>
<h3 v-for="invitado in filtrar">{{ invitado.nombre }}</h3>
<h3>Invitados Confirmados: {{ contadorConfirmados }}</h3>

<h5 v-show="ocultar" v-for="tarea in tareasFiesta" :key="tarea.nombre" :class="{ pendiente: !tarea.completada }" >
  {{ tarea.nombre }}
</h5>
<button @click="ocultarTareas">Ocultar Tareas Pendientes</button>

</template>

<style>
input, select {
  display: block; 
  margin-bottom: 10px; 
}

.confirmado {
  color: green;
}

.pendiente {
  color: orange;
}
</style>
