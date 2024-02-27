
var muneco = document.querySelector(".whitebox__muneco");
var userTitulo = document.querySelector('.whitebox__h3');
var btnCopy = document.querySelector(".boton--copy");


function asigneElementByText(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function getUserText(){
    let userText = document.querySelector('.userarea__textarea').value.toLowerCase();
    muneco.classList.add("ocultar");
    userTitulo.classList.add("ocultar");
    btnCopy.classList.remove("ocultar");
    asigneElementByText(".whitebox__p", encryptUserText(userText));
}


function encryptUserText(textUser){
    return textUser.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
}

function decryptUserText(textUser){
    return text.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

