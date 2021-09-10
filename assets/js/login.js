let modalBtn = document.querySelector('.modalBtn');
let modalBg = document.querySelector('.modal-bg');
let modalCln = document.querySelector('.modal-close');

function modalActive(){  

    modalBg.classList.add('bg-active');

}

function modalClose() {

    modalBg.classList.remove('bg-active');

}



function inicioSesion () {

var myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");

let password;

password = document.getElementById('password').value;

password= encriptar(password);

var raw = JSON.stringify({

  "email": document.getElementById('usuario').value,

  "password": password

});

 

var requestOptions = {

  method: 'POST',

  headers: myHeaders,

  body: raw,

  redirect: 'follow'

};

fetch("https://geoapps.esri.co//APIRESTGame/login-usuario", requestOptions)

  .then(response => response.json())
  .then(result => {validacion(result["message"], result["id"], result["name"]);})
  .catch(error => console.log('error', error));



}

function setCookie(nombre, valor) {
  document.cookie = nombre + "=" + valor;
}

function getCookie(nombre) {
  var nom = nombre + "=";
  var array = document.cookie.split(";");
  for (var i = 0; i < array.length; i++) {
    var c = array[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(nombre) == 0) {
      return c.substring(nom.length, c.length);
    }
  }
  return "";
}

function validacion(message, id, name){
      console.log(message);
       setCookie("id_usuario",id)
       setCookie("nombre",name)

     if(message == "Usuario encontrado"){
       location.href = 'index.html';
     }else{
         alert('Usuario o contraseña incorrectos');
     }

}

function encriptar(password){
    return btoa(password);

}

