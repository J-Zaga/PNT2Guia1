/* let  y const
a) Declara una variable usando 
let  para almacenar tu edad y otra usando  const  para tu nombre. Luego, 
intenta reasignar valores a ambas y explica qué sucede.
b) Crea un bucle que incremente una variable declarada con 
let . ¿Qué pasaría si la declaras con  const ?
c) Declara una constante que sea un objeto con tu información personal. 
Intenta modificar una propiedad del objeto. ¿Es esto posible? ¿Por qué?*/

let edad = 29;
const nombre = 'juan';

edad = 25;
//const nombre = 'julian'
//no se puede modificar el valor de una constante

for(i = 0; i < 5; i++){
    edad = edad + i;
}
const numero = 0;
/*for(i = 0; i < 5; i++){
    numeros = edad + i;
}No se puede modificar un valor constante*/
const yo = {
    nombre: 'juan',
    edad: 29
}
yo.nombre = 'pablo';
console.log(yo)
//Es posible, porque en javascript no pareciera haber restricciones de visibilidad y modificación de atributos




/*Arrays (operaciones básicas)
a) Crea un array con los nombres de cinco frutas. Añade una fruta al 
principio y otra al final usando métodos de array.
b) Dado un array de números del 1 al 5, crea otro array que contenga el 
doble de cada número usando un bucle 
for .
c) Crea un array con tres colores. Luego, crea otro array con dos colores 
más. Combina ambos arrays en uno solo usando el método 
concat() .*/

let frutas = ["banana", "manzana", "naranja", "pomelo", "mandarina"]
console.log(frutas)
frutas.push("kiwi")
frutas.unshift("pera")
console.log(frutas)

let numeros = [1, 2, 3, 4, 5,]
let dobles = numeros.map(elemento => elemento * 2)

//for(i = 0; i < numeros.length; i++){
//    dobles.push(numeros[i] * 2)

console.log(numeros)
console.log(dobles)

const colorestres = ["amarillo", "rojo", "azul"]
const coloresdos = ["verde", "negro"]
const colorescinco = colorestres.concat(coloresdos)
console.log(colorescinco)

/*Objetos y cómo acceder a las propiedades
a) Crea un objeto que represente un libro con propiedades como título, 
autor y año. Accede a cada propiedad e imprímelas.
b) Dado un objeto que representa una persona, añade una nueva propiedad 
"hobby" y modifica la propiedad "edad".
c) Crea un objeto que represente una calculadora con métodos para sumar, 
restar, multiplicar y dividir. Utiliza estos métodos con diferentes números.*/

const libro = {
    titulo: "El señor de los anillos",
    autor: "Tolkien",
    año: 1954
}

console.log(libro.titulo, libro.autor, libro.año)

const persona = {
    nombre: "juan",
    edad: 29
}

persona.hobby = "videojuegos"
persona.edad = 30

console.log(persona)

let calculadora = {
   //esta es la forma expresiva
    restar : function(num1, num2)
    {
        return num1 - num2
    },
    sumar : function(num1, num2){
        return num1 + num2
    },
    multiplicar : function(num1, num2){
        return num1 * num2
    },
    dividir : function(num1, num2){
        return num1 / num2
    }
}

console.log(calculadora.restar(5,2))
console.log(calculadora.sumar(10,8))
console.log(calculadora.multiplicar(5,6))
console.log(calculadora.dividir(21,3))

/*Template Literals
a) Usando template literals, crea una cadena que incluya variables para tu 
nombre, edad y profesión.
b) Crea una función que reciba un producto y su precio, y devuelva una 
frase usando template literals.
c) Utiliza template literals para crear un mensaje de error que incluya el 
nombre del error y su descripción.*/

const palabra = `mi nombre ${"juan"}, mi edad es ${29} y mi profesion es ${"programador"}`

console.log(palabra)

const producto = {
    nombreProducto : "Celular",
    precio : 100000
}

const escribirMensaje  =  function(nombrePro, precioPro){
  return `Producto ${nombrePro}, precio $${precioPro}`
}
console.log(escribirMensaje(producto.nombreProducto, producto.precio))

let error = "Clave incorrecta"
let descripcion = "La clave ingresada debe tener caracteres especiales"
console.log(`Error: ${error}. ${descripcion}`)


/*Arrow Functions
a) Convierte la siguiente función tradicional a una arrow function:
function saludar(nombre) {
  return "Hola, " + nombre + "!";
}
b) Crea una arrow function que reciba un número y devuelva su cuadrado.
c) Crea una arrow function que reciba dos números y devuelva el mayor de 
ellos.*/
const saludar = (nombre) => "Hola " + nombre + "!"

console.log(saludar("juan"))

const cuadrado = (numero) => numero*numero

console.log(cuadrado(4))

const numeroMayor = (num1, num2) => (num1 > num2) ? num1 : num2

console.log(numeroMayor(7,5))


/*Métodos de array
a) Dado un array de números, utiliza 
filter()  para obtener un nuevo array solo con los números pares.
b) Crea un array de objetos representando estudiantes con propiedades de 
nombre y calificación. Usa 
map()  para obtener un nuevo array solo con los nombres de los estudiantes.
c) Utiliza 
reduce()  para calcular la suma de todos los números en un array.*/

let todos = [1,2,3,4,5,6,7,8,9]

const pares = todos.filter(impares => impares % 2 === 0)

console.log(pares)

const estudiantes = [
{
    nombre : "martin",
    calificacion : 10
},
{
    nombre : "susana",
    calificacion : 8
},
{
    nombre : "juan",
    calificacion : 9
}
]
console.table(estudiantes)

const nombresEst = estudiantes.map(x => x.nombre)

console.log(nombresEst)

const numbers = [23,3,4,645,43,12,2,1]

const total = numbers.reduce((acumulador, valorActual) => acumulador + valorActual)
console.log(total)

/*Spread Operator
a) Crea una función que reciba un número indefinido de argumentos y 
devuelva la suma de todos ellos usando el spread operator.
b) Dado un array de números, usa el spread operator para encontrar el 
número máximo.
c) Combina dos objetos en uno solo utilizando el spread operator.*/

const indef = (...n) => {
    return n.reduce((acumulador, valorActual) => acumulador + valorActual)
   //return n.concat()
}
console.log(indef(1,3,4,5,12,3,2))

const mayornum = (m) => {
    return m.reduce((acumulador, valorActual) => {
        return valorActual > acumulador ? valorActual : acumulador
    })
};

console.log(mayornum(numbers))

let objeto1 ={
nombre : "juan",
edad : 25
}
let objeto2 = {
    nombre : "nico",
    edad : 33
}
const  juntarObjetos = function(...elem){
    return objetosJuntos = elem
}
console.log(juntarObjetos(objeto1,objeto2))
console.log(typeof(objetosJuntos))

/*a) Dado un objeto con propiedades de una persona, usa destructuring para 
extraer el nombre y la edad en variables separadas.
b) Utiliza destructuring en una función para extraer las propiedades de un 
objeto pasado como argumento.
c) Dado un array con información de una ciudad (nombre, país, población), 
usa destructuring para asignar cada elemento a una variable.*/

let persona1 = {
    nombrep: "Matias",
    edadp: 35
}
let {nombrep,edadp} = persona1

console.log(nombrep, edadp)

const extraer = function({nombrep, edadp}){
    console.log(nombrep)
    console.log(edadp)  
}
extraer(persona1)

const ciudad = ["Buenos Aires", "Argentina", 45000000]

let [ciudad1, pais1, poblacion1] = ciudad

console.log(ciudad1, pais1, poblacion1)

const extraerArray = function([ciudad1, pais1, poblacion1]){
    console.log(ciudad1)
    console.log(pais1)
    console.log(poblacion1)
}
extraerArray(ciudad)