// TO DO: cambiar el color del <body>

document.addEventListener("DOMContentLoaded", () => {
  theming();

  console.log("Theming cargado!");
}); // fin ready

//TO DO: Cambiar el fondo del body por medio de un Select desde html
const theming = () => {
  let body = document.querySelector("body");
  let seleccion = document.querySelector("#select-color");

  seleccion.addEventListener("change", evento => {
    switch (evento.target.value) {
      case "light":
        //codigo
        body.style.backgroundColor = "whitesmoke";
        break;
      case "dark":
        //codigo
        body.style.backgroundColor = "black";
        break;

      default:
        //codigo si no se cumple el switch
        console.log("No existe el theme");

        break;
    }
    console.log("Ya cambieeee");
  });
};
