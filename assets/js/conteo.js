function iniciarConteo(){
    //
    //document.cookie="publico=1"
    
    document.getElementById("wrapper").style.visibility = "hidden";
    document.getElementById("segundos").style.display = "block"
    //
    // temporizador
    let segundos = 5;
cargarSegundo();
function cargarSegundo(){
    let txtSegundos;
    if(segundos<0){
        segundos=5;
    }
    if(segundos<10){
        txtSegundos=`0${segundos}`;

    }else{
        txtSegundos=segundos;
    }
    document.getElementById('segundos').innerHTML=txtSegundos;
    segundos --;
}
setInterval(cargarSegundo,1000);
    // temporizador
    setTimeout(function() {
        //select_id("bienvenida1").innerHTML = "Bienvenido, es tu momento de jugar"
        //select_id("bienvenidanombre1").innerHTML = "Nicolas Garzon"
        //document.getElementById("ventana2").style.display="block";
        document.getElementById("segundos").style.visibility = "hidden";
        
        document.getElementById("pantalla").style.display = "block"
        //document.getElementById("pantalla").style.display = "block"
        //location.reload();
        console.log("hola")
        setTimeout(() => {
            location.href ='juego.html';
            
        }, 4000);
    }, 1000 *5)
    
    function select_id(id) {
        //return document.getElementById(id)
      }
}