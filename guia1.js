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