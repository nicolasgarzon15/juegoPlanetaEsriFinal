const valores = window.location.search;

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var correoConnecto = urlParams.get('correo');


let respuestaConnecto = obtenerDatosConnecto(correoConnecto);


function obtnerJSON(datos){
    console.log(datos);
    let dataUsuario = parseJwt(datos);
    //  console.log(dataUsuario);
     registroUsuarioconnecto(dataUsuario);
}

function getCookie(c_name) { 
    if(document.cookie.length > 0) { 
      c_start = document.cookie.indexOf(c_name + "="); 
      if(c_start != -1) { 
        c_start = c_start + c_name.length + 1; 
        c_end = document.cookie.indexOf(";", c_start); 
        if(c_end == -1) 
          c_end = document.cookie.length; 
        return unescape(document.cookie.substring(c_start, c_end)); 
      } 
    } 
    return ""; 
  } 

function obtenerDatosConnecto(correo) {
    id_usuario = getCookie("id_usuario");
    if(correo == null &&  id_usuario == "" ){
        location.href = 'inicio.html';
    }
    
    
    var myHeaders = new Headers();
    myHeaders.append("Client", "esri");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "evento": 2,
        "email": correo
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
     try{
    fetch("https://api.connectovirtual.com/asistentes/autenticacion/automatica", requestOptions)
        .then(response => response.text())
        // .then(result => console.log(result))
        .then(result => {obtnerJSON(result);})
        .catch(error => {regreso();});
     }catch(error){
            regreso();
     }
}

function regreso(){
    location.href = 'inicio.html';
}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};



function registroUsuarioconnecto(datos) {
    


    validacionUsuarioC(datos);
    
    // console.log(existe);


}

function validacionUsuarioC(datos){
        let email = datos["email"];
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://geoapps.esri.co/APIRESTGame/validar-usuario", requestOptions)
        .then(response => response.json())
        .then(result => {agregar(result, datos);})
        .catch(error => console.log('error', error));
}

function agregar(result, datos){

    let url = 'https://geoapps.esri.co//APIRESTGame';
    let name = datos["unique_name"]; 
    let email = datos["email"];  
    let telefono = datos["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"];
    let password = 'PlanetaEsri2021*';

    if(result["message"] == 'Usuario no encontrado'){

        password= encriptar(password);
        let data = {name: name, 
            email: email, 
            telefono: telefono, 
            password: password};

            let urladd= url+'/add-usuario';
            fetch(urladd, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(result => {crearcokkies(result["data"]["_id"],result["data"]["name"]);})
            .catch(error => console.log('error', error));

    }else{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://geoapps.esri.co/APIRESTGame/consultar-usuario-id", requestOptions)
        .then(response => response.json())
        .then(result => {crearcokkies(result["id"], result["name"]);})
        .catch(error => console.log('error', error));
    }
}



 function encriptar(password){
        return btoa(password);
 }

 function desEncriptar(password){
         return atob(password);
 }

 function crearcokkies(id, name){

    document.cookie = "id_usuario" + "=" + id;
    document.cookie = "nombre" + "=" + name;
  
 }
