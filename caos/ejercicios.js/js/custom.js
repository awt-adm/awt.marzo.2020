// TODO: cambiar el color del <body>
document.addEventListener("DOMContentLoaded", () => { // callback

    let body = document.querySelector("body");

    //DEBUG:
    // console.log("QUE HAY EN ESTE OBJETO?::: ", body);

    // TODO: log cuando damos click en <body/>
    body.addEventListener('click', () => {

        // console.log("Le diste click al body");

    });
    // propiedades se escriben cameCase
    body.style.backgroundColor = "red";

    // console.log("Ya cargo el documento");
}); // fin ready

// TODO: Abre/Cierra una ventana modal
// variables globales
let botonAbreModal = document.querySelector("#mas-info button");
let botonCierraModal = document.querySelector("#modal .contenedorModal header")
let modal = document.querySelector("#modal");

botonAbreModal.addEventListener("click", () => {

    modal.style.display = "flex";

});
botonCierraModal.addEventListener("click", () => {

    modal.style.display = "none";

});