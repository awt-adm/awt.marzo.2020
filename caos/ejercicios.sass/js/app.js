document.addEventListener("DOMContentLoaded", () => {


  pintaParrafo()


});

let numeros = [1,3,7,11,32];

const pintaParrafo = () => {

  let parrafoAccion = document.querySelector("#parrafoAccion");

  console.log("parrafo", parrafoAccion);

  console.log("parrafo", numeros[4]);

  parrafoAccion.addEventListener("click",(e) => {
    console.log("Parrafo Accion", e);
  });
}
