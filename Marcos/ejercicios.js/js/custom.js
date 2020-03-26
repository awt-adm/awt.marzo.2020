// TODO: cambiar el color del body

document.addEventListener("DOMContentLoaded", ()=> {
    let body = document.querySelector("body");

    body.addEventListener('click', ()=> {
        console.log("le diste click al body")


    });

    console.log(body.style.backgroundColor);
    
    body.style.backgroundColor = "red";

    
    
});





