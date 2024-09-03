/* Ahora los requisitos dependen de distintos miembros del grupo. Por ésto 
tenemos que modificar el codigo para que los preparativos nos lleguen 
desde una API(link debajo). Modificar la funcion  listoParaViajar  para que 
espere los preparativos. Tambien van a tener que modificar la forma de 
mostrar la informacion final. */


async function listoParaViajar() {
    try{
        let response = await fetch("https://www.mockachino.com/33754ea7-2586-48/preparativos");
        let data = await response.json()
        let dataLimpia = data.preparativos

        let dataFiltrada = dataLimpia.filter(function(x){
            return x.valor === false
        })

        let listoResultado = dataFiltrada.map((x) => `${x.requisito}`).join(", ")
        console.log("Requisitos faltantes: ", listoResultado)

        }catch(error){
            console.log(error)
        }
}

listoParaViajar()