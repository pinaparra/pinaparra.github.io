import cipher from './cipher.js';

var texto1 = "";
var texto2 = "";
var offset = "";
var cifrar = document.getElementById("cifrar");
var descifrar = document.getElementById("descifrar");

cifrar.addEventListener("click", () => {


    texto1 = document.getElementById("texto1").value;
    texto2 = document.getElementById("texto2");
    texto2.value = "";
    offset = document.getElementById("rango").value;




    cipher.encode(texto1, offset);


});

descifrar.addEventListener("click", () => {

    texto1 = document.getElementById("texto1").value;

    offset = document.getElementById("rango").value;
    texto2 = document.getElementById("texto2");
    texto2.value = "";

    cipher.decode(texto1, offset);


});