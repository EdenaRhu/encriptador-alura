
var muneco = document.querySelector(".whitebox__muneco");
var userTitulo = document.querySelector('.whitebox__h3');
var btnCopy = document.querySelector(".boton--copy");


function pressEncrypsButton(){
    
    let userText = getUserText();
    if (userText){
        modifyUI();
        userText = encryptUserText(userText);
        asigneElementByText(".whitebox__p", userText);
    }else{
        alert("No he recibido ningun texto para encriptar")
    }
    
}


function pressDecryptButton(){
    
    let userText = getUserText();
    let modifyUserText = decryptUserText(userText);
    if (modifyUserText != userText){
        asigneElementByText(".whitebox__p", modifyUserText);
        modifyUI();
    }else{
        alert("El texto no cumple los criterios de desencriptado")
    }
    
}

function pressCopyButton(){
    let paragraph = document.querySelector(".whitebox__p");
    if (paragraph) {

        // Extraer el texto del párrafo
        const textToCopy = paragraph.innerText || paragraph.textContent;
        navigator.clipboard.writeText(textToCopy)
    }


}



function asigneElementByText(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function getUserText(){
    //Obteniendo texto inicial usuario
    let userText = document.querySelector('.userarea__textarea').value.toLowerCase();
    return userText;
}


function modifyUI(){
    muneco.classList.add("ocultar");
    userTitulo.classList.add("ocultar");
    btnCopy.classList.remove("ocultar");
}


function encryptUserText(textUser){
    return textUser.replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
}

function decryptUserText(textUser){
    return textUser.replace(/enter/g, "e")
                    .replace(/imes/g, "i")
                    .replace(/ai/g, "a")
                    .replace(/ober/g, "o")
                    .replace(/ufat/g, "u");
}

