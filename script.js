

// Inicializamos las variables constantes de los elementos necesarios
const body = document.getElementsByTagName('body');
const contenedor = document.getElementsByClassName('contenedor');
const textoHexaDecimal = document.getElementsByClassName('texto-hexadecimal');


// Creamos la funcion que genera el color random para cambiar de color el body
function getRandomColor() {

    return  ('#' + Math.floor((Math.random() * 16777215)).toString(16));
}

// Creamos la función para que al clicar el boton se cambie el bolor del background y genere el codigo del color

function clickRandomColor() {

    body[0].style.backgroundColor = getRandomColor();
    contenedor[0].style.backgroundColor = 'white';

    textoHexaDecimal[0].innerText = getRandomColor();

}

