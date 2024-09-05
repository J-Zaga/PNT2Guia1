//"https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/bebida?mock_delay=3000";
//"https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/hamburguesa?mock_delay=2000";
//"https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/ensalada?mock_delay=6000";

/* Preparando una comida 🥗 🍔 🍺
Se te pide desarrollar un programa en JavaScript que simule el proceso de 
preparación y entrega de un pedido en un local de comidas rápidas. El pedido 
consiste en una ensalada, una hamburguesa y una bebida. Cada uno de estos 
ítems requiere de un tiempo diferente de preparación.
El programa debe utilizar funciones asíncronas para simular el tiempo de 
preparación de cada ítem y una función principal que coordine la entrega del 
pedido completo. El tiempo de preparación de cada ítem es el siguiente:
Ensalada: 4 segundos
Hamburguesa: 8 segundos
Bebida: 2 segundos
Al finalizar la preparación de todos los ítems, el programa debe informar al 
usuario que su pedido está listo. Si ocurre algún error en el proceso, el 
programa debe informar que hubo un problema con el pedido. */

async function preparacionBebida() {
    try {
        let response = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/bebida?mock_delay=3000")
        let data = await response.json()
        return data.nombre
    } catch (error) {
        console.log("Hubo un problema con la bebida:", error)
    }
}

async function preparacionHamburguesa() {
    try {
        let response = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/hamburguesa?mock_delay=2000")
        let data = await response.json()
        return data.nombre
    } catch (error) {
        console.log("Hubo un problema con la hamburguesa:", error)
    }
}

async function preparacionEnsalada() {
    try {
        let response = await fetch("https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/ensalada?mock_delay=6000")
        let data = await response.json()
        return data.nombre
    } catch (error) {
        console.log("Hubo un problema con la ensalada:", error)
    }
}

async function prepararComida() {
    try {
        const [bebida, hamburguesa, ensalada] = await Promise.all([preparacionBebida(), preparacionHamburguesa(), preparacionEnsalada()])
        if(bebida != undefined && hamburguesa != undefined && ensalada !=undefined){
        console.log(`Tu ${bebida}, tu ${hamburguesa} y tu ${ensalada} estan listas`)
        }else{
            console.log("Hubo un error con algun item del pedido")
        }
    } catch (error) {
        console.log("Hubo un problema con el pedido:", error)
    }
}
prepararComida()