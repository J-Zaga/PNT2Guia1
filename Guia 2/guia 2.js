
/* Creá una función llamada  listoParaViajar  que tome como argumento el 
array  preparativos  y devuelva un mensaje indicando si están listos para 
viajar o cuáles son los requisitos faltantes. Usá los métodos de array 
filter ,  map  y  join  para realizar esta tarea. */

const preparativos = [
{requisitos: "documentos al día", valor: true},
{requisitos: "reservas de hotel", valor: false},
{requisitos: "transporte confirmado", valor: true},
{requisitos: "seguro de viaje", valor: true},
{requisitos: "dinero", valor: false}
]


function listoParaViajar(preparativos){
let listo = preparativos.filter(function(x){
return x.valor === false
})
let listoResultado = listo.map((x) => `${x.requisitos}`).join(" , ")
if (listoResultado.length < 1){
    return "Listo para viajar"
}else{
    return listoResultado
}
}

/* Luego, agregá un nuevo requisito al array  preparativos  utilizando el método 
push . El requisito debe ser "vacunas necesarias" y su valor debe ser  true . */

preparativos.push({requisitos: "vacunas necesarias", valor: true})

console.log(listoParaViajar(preparativos))

console.table(preparativos)



/* Después, eliminá el requisito "seguro de viaje" del array  preparativos . Usá 
los métodos  findIndex  y  splice  para lograrlo.  */

const encontrar = preparativos.findIndex((x) =>
x.requisitos === "seguro de viaje")

preparativos.splice(encontrar, 1)

console.table(preparativos)



/* 
Por último, actualizá el valor del requisito "transporte confirmado" a  false . 
Usá el método  find  para encontrar el requisito correcto en el array 
preparativos . */

preparativos.find((x) => x.requisitos === "transporte confirmado").valor = false
console.table(preparativos)


/* 
Volvé a ejecutar la función  listoParaViajar  con el array  preparativos  
modificado y verificá que el resultado muestre los requisitos faltantes 
correctamente. */

console.log(listoParaViajar(preparativos))
