
const lampAccesa = document.getElementById("accesa");
const lampSpenta = document.getElementById("spenta");
const bottoneAcceso = document.querySelector(".bottone-acceso");
const bottoneSpento = document.querySelector(".bottone-spento");



bottoneAcceso.addEventListener("click", function() {
    lampAccesa.classList.toggle("invisibile");
    lampSpenta.classList.toggle("invisibile");
    bottoneAcceso.classList.toggle("invisibile");
    bottoneSpento.classList.toggle("invisibile");
});

bottoneSpento.addEventListener("click", function() {
    lampAccesa.classList.toggle("invisibile");
    lampSpenta.classList.toggle("invisibile");
    bottoneAcceso.classList.toggle("invisibile");
    bottoneSpento.classList.toggle("invisibile");
});







