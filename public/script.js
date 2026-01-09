AOS.init();

var swiper = new Swiper(".blog_slider", {
    autoplay: {
        delay: 2000,
    },
    loop: true,
})

let bars = document.querySelector("#bars");
let menu = document.querySelector("#menu");

bars.addEventListener("click", () => {
    menu.classList.toggle("show_menu");
})

let image = document.querySelector("#main_service_image");
let changeBtn1 = document.querySelector(".changim1");
let changeBtn2 = document.querySelector(".changim2");
let changeBtn3 = document.querySelector(".changim3");
let changeBtn4 = document.querySelector(".changim4");

changeBtn1.addEventListener("click", () => {
    image.src = "images/Base_Datos.PNG"; //para que cambie la imagen
})

changeBtn2.addEventListener("click", () => {
    image.src = "images/lenguajes.PNG"; //para que cambie la imagen
})


changeBtn3.addEventListener("click", () => {
    image.src = "images/framework.PNG"; //para que cambie la imagen
})


changeBtn4.addEventListener("click", () => {
    image.src = "images/otros.PNG"; //para que cambie la imagen
})


// FUNCIONALIDADES DE LA PAGINA


let servicesOther = document.querySelector("#servicesOther");
servicesOther.addEventListener("click", () => {
    console.log('IR AL SERVICIO');
    let targetSection = document.querySelector("#portfolio");
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
})

let btnWas = document.querySelector("#btnWas");
btnWas.addEventListener("click", function() {
    let phoneNumber = "0987703493"; // Reemplaza con el número de teléfono
    let message = "Hola, me gustaria  ponerme en contacto con Kevin."; // Reemplaza con el mensaje
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

let btnCV = document.querySelector("#btnCV");
btnCV.addEventListener("click", function() {
    window.open('CV.pdf', '_blank');
});






