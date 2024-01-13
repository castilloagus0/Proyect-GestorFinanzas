/*Funcion para desplegar algo a partir de tocar en un boton */ 
function accion(){
    var ancla = document.getElementsByClassName("container-button");
    for (var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle("desaparece");
    } 
} 

function accion_a(){
    var ancla = document.getElementsByClassName("container-button-a");
    for (var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle("desaparece");
    } 
} 

function validarLogin() {
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('password').value;

    if (usuario == 'agustin' && contraseña == '123') {
        window.location = "bienvenida.html";
    } else {
        
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}

function saveLocalStorage(){
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('password').value;
   localStorage.setItem("nombre", usuario,"contraseña",contraseña);
}
