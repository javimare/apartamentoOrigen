// =============================
// ANIMACIONES AL HACER SCROLL
// =============================

const elementosReveal = document.querySelectorAll(".reveal");


function mostrarElementos() {

    const alturaVentana = window.innerHeight;
    const puntoVisible = 100;


    elementosReveal.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;


        if (posicion < alturaVentana - puntoVisible) {

            elemento.classList.add("active");

        }

    });

}


// Ejecutar al cargar la página
window.addEventListener("load", mostrarElementos);

// Ejecutar mientras se hace scroll
window.addEventListener("scroll", mostrarElementos);




// =============================
// MENÚ MÓVIL
// =============================

const botonMenu = document.querySelector(".menu-mobile");
const menu = document.querySelector(".menu");


botonMenu.addEventListener("click", () => {

    menu.classList.toggle("menu-abierto");

});


// Cerrar menú al pulsar un enlace

const enlacesMenu = document.querySelectorAll(".menu a");


enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("menu-abierto");

    });

});




// =============================
// CAMBIO DE ESTILO DEL HEADER
// AL HACER SCROLL
// =============================

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {


    if (window.scrollY > 80) {


        header.style.background = "rgba(18, 34, 56, 0.95)";


    } else {


        header.style.background = "rgba(20, 30, 40, 0.25)";


    }


});
