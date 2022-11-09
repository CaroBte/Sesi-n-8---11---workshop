//Carolina Bustamante Escobar y Jared Bolaños Chavarría 

//Verificar si está bien linkeado el js c: 
console.log("Hola profes 💜 uwu");

// Declaramos variables que necesitamos para manipular el DOM
let submit = document.querySelector("#btn-submit");
let value;
let span = document.querySelector("span");
let container1 = document.querySelector("#container");
let container2 = document.querySelector("#container2");
let selected = document.querySelectorAll(".select")

//Cambiamos display de Divs siempre y cuando se elija un botón de las opciones
submit.addEventListener("click", () => {
    if (value) {
        container1.style.display = "none";
        container2.style.display = "flex";
    }
})

// Damos valor al botón y mostramos el span
selected.forEach(element => {
    element.addEventListener("click", () => {
        value = element.getAttribute("value")
        span.replaceWith(`You selected ${value} out of 5`)
    })
})