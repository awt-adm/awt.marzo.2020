document.addEventListener("DOMContentLoaded", {

    theming();


    console.log("Theming cargado!")
});

//TODO: Cambiar el fondo del body por medio de un select desde html
const theming =()=> {

    let body = document.querySelector("body");
    let seleccion = document.querySelector("#select-color");

    console.log(seecccion, "????");

    seleccion.addEventListener("change", (evento) =>{

        switch (evento. target. value) {
            case "light":
                body.style.backgroundColor = "whitesmoke";
                break;

            case "dark":
                body.style.backgroundColor = "black";
                
                    break;
        
            default:
                break;
        }


        console.log("Ya cambieeee", );
    });


    
    
}