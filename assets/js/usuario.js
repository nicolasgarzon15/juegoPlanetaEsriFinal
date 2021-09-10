let url = 'https://geoapps.esri.co//APIRESTGame';

function registroUsuario() {

    let name = document.getElementById("name").value; 
    let email = document.getElementById("email").value; 
    let identificacion = document.getElementById("identificacion").value; 
    let telefono = document.getElementById("telefono").value;
    let password='PlanetaEsri2021*';
    password= encriptar(password);

    let data = {name: name, 
                email: email, 
                identificacion: identificacion, 
                telefono: telefono, 
                password: password};
    validacionUsuario(data);
    // let urladd= url+'/add-usuario';
    // fetch(urladd, {
    //             method: 'POST', 
    //             body: JSON.stringify(data), 
    //             headers:{'Content-Type': 'application/json'
    //             }})
    // .then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response =>  console.log('Success:', response));

    // alert('El usuario ha sido registrado.');
    // modalCerrar();

}

function validacionUsuario(datos){
 
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



    if(result["message"] == 'Usuario no encontrado'){

        password= encriptar(password);
 

            let urladd= url+'/add-usuario';
            fetch(urladd, {
            method: 'POST', 
            body: JSON.stringify(datos), 
            headers:{'Content-Type': 'application/json'}})
            .then(response => response.json())
            .catch(error => console.log('error', error));
            alert("Usuario registrado");
            modalCerrar();

    }else{
        alert("Usuario ya registrado con este email");
    }
}
// function cargarPuntuacion(){
//     let puntaje = getCookie("nombre_puntos_cookie")
//     let data = {score: puntaje};
//     let id_final = getCookie("id_usuario")
// let urladd= url+'/upd-usuario/'+id_final;
// fetch(urladd, {
//         method: 'PUT', 
//         body: JSON.stringify(data), 
//         headers:{'Content-Type': 'application/json'}})
// .then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response =>  console.log('Success:', response));
// }

 function encriptar(password){
        return btoa(password);
 }

 function desEncriptar(password){
         return atob(password);
 }
