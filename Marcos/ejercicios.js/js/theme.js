document.addEventListener("DOMContentLoaded", () => {

    theming();

    console.log("Theming cargado!");
}); // fin ready

//TODO: Cambiar el fondo del body por medio de un Select desde html
const theming = () => {

    let seleccion = document.querySelector("#select-color");

    // se ejecuta al cambiar el select
    seleccion.addEventListener("change", (evento) => {

        cambiaColores(evento.target.value)

    });
    // Ejecuta theme por default
    cambiaColores(seleccion.value);

}

// Paramentros de una funcion: permiten acceder a los valores de ésta.
const cambiaColores = (tema) => {

    // variables de objetos
    let body = document.querySelector("body");
    let titulos = document.querySelectorAll('body h1');
    let links = document.querySelectorAll('body a');
    let span = document.querySelectorAll('body span');

    // Variables Color light
    let fondoLight = "#FFF"; //
    let tituloLight = "#012e32"; //
    let parrafoLight = "#000"; //
    let linkLight = "#aa7039"; //
    let linkHoverLight = "#842c00"; //
    // Variables Color dark
    let fondoDark = "#000";
    let tituloDark = "#69969c";
    let parrafoDark = "whitesmoke";
    let linkDark = "#aa8d32";
    let linkHoverDark = "#fffdf8";
    //
    // Variables Color navy
    let fondoNavy = "#00143d";
    let tituloNavy = "#b5426e";
    let parrafoNavy = "efb8ea";
    let linkNavy = "#30bfc9";
    let linkHoverNavy = "#4b5358";
    //
    switch (tema) {
        case "light":
            //codigo
            body.style.backgroundColor = fondoLight;
            body.style.color = parrafoLight;
            links.forEach((item) => { //Itera sobre un Array
                item.style.color = linkLight;
            });
            titulos.forEach((item) => {
                item.style.color = tituloLight;
            });
            span.forEach((item) => {
                item.classList.add("colorTextoLight");
                item.classList.remove("colorTextoDark");
                item.classList.remove("colorTextoNavy");
            });
            break;
        case "dark":
            //codigo
            body.style.backgroundColor = fondoDark;
            // titulos.style.color = tituloDark;
            body.style.color = parrafoDark;
            links.forEach((item) => {
                item.style.color = linkDark;
            });
            titulos.forEach((item) => {
                item.style.color = tituloDark;

            });
            span.forEach((item) => {
                item.classList.add("colorEspecialDark");
                item.classList.remove("colorEspecialLight");
                item.classList.remove("colorEspecialNavy");
            });
            break;
        case "navy":
            //codigo
            body.style.backgroundColor = fondoNavy;

            body.style.color = parrafoNavy;
            links.forEach((item) => {
                item.style.color = linkNavy;
            });
            titulos.forEach((item) => {
                item.style.color = tituloNavy;

            });
            span.forEach((item) => {
                item.classList.add("colorEspecialNavy");
                item.classList.remove("colorEspecialLight");
                item.classList.remove("colorEspecialDark");
            });
            break;
        default:
            //codigo si no se cumple el switch
            console.log("No existe el theme");
            break;
    }

}
