
var muneco = document.querySelector(".whitebox__muneco");
var userTitulo = document.querySelector('.whitebox__h3');
var btnCopy = document.querySelector(".boton--copy");


function asigneElementByText(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function getUserText(){
    let userText = document.querySelector('.userarea__textarea').value.toLowerCase();
    alert(userText);
    muneco.classList.add("ocultar");
    userTitulo.classList.add("ocultar");
    asigneElementByText(".whitebox__p", userText);
    btnCopy.classList.remove("ocultar");
    
}


