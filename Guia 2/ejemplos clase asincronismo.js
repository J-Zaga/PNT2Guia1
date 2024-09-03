import axios from "axios";
//"https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/bebida?mock_delay=3000";
//"https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/hamburguesa?mock_delay=2000";
//"https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/ensalada?mock_delay=6000";

async function getBebida() {
  try {
    const url =
      "https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/bebida?mock_delay=2000";
    const resultado = await axios(url);
    console.log(resultado.data)
    return resultado.data;
  } catch (error) {
    console.log(error)
  }
}

async function getComida() {
  try {
    const url =
      "https://mockanapi.com/s/66d5b62f91c990f2f4ae8a67/nt2/api/hamburguesa?mock_delay=3000";
    const resultado = await axios(url);
    return resultado.data;
  } catch (error) {
    console.log(error)
  }
}

const [bebida,comida] = await Promise.all([getBebida(),getComida()])
console.log(comida)


