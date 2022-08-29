/* Documentación metodo "replace" https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace */



function tocript(){

    var textoencriptado={[]}

    var texto = document.getElementById("texto").value.toLowerCase();
    var textoCript = texto.replace(/e/img, "enter");
    var textoCript = textoCript.replace(/i/img, "imes");
    var textoCript = textoCript.replace(/a/img, "ai");
    var textoCript = textoCript.replace(/o/img, "ober");
    var textoCript = textoCript.replace(/u/img, "ufat");
    ocultotextarea();
    document.getElementById("textdecrypt").innerHTML = textoCript;
}

function todecript(){
    var texto = document.getElementById("texto").value.toLowerCase();
    var textoCript = texto.replace(/enter/img, "e");
    var textoCript = textoCript.replace(/imes/img, "i");
    var textoCript = textoCript.replace(/ai/img, "a");
    var textoCript = textoCript.replace(/ober/img, "o");
    var textoCript = textoCript.replace(/ufat/img, "u");
    ocultotextarea();
    document.getElementById("textdecrypt").innerHTML = textoCript;
}

/*Documentacion Copiar texto https://www.delftstack.com/es/howto/javascript/javascript-copy-to-clipboard/*/

function copiar(){
    var copiartexto = document.getElementById("textdecrypt");
    copiartexto.select();
    document.execCommand('copy');
    alert("Copiado!")

}
function ocultotextarea(){
    var ocultarm = document.getElementById("imagen");
    var mostrart = document.getElementById("textdecrypt");
    ocultarm.style.display = "none";
    mostrart.style.display = 'flex';

}
