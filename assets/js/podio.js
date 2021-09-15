
function consultarPodio(){
    const API_URL='https://geoapps.esri.co/APIRESTGame/podio-usuario';

    const primer_lugar=document.querySelector('#primero');
    const primer_lugar_puntos=document.querySelector('#puntosP');
    const segundo_lugar=document.querySelector('#segundo');
    const segundo_lugar_puntos=document.querySelector('#puntosS');
    const tercer_lugar=document.querySelector('#tercero');
    const tercer_lugar_puntos=document.querySelector('#puntosT');
    
    
    integrantes=[];
    fetch(API_URL).
        then(response => response.json())
        .then(result =>{
            console.log(result);
            primer_lugar.innerHTML=`${result.data[0].name}` ;
            primer_lugar_puntos.innerHTML=`${result.data[0].score} puntos ` ;
            segundo_lugar.innerHTML=`${result.data[1].name} ` ;
            segundo_lugar_puntos.innerHTML=`${result.data[1].score}  puntos` ;
            tercer_lugar.innerHTML=`${result.data[2].name} ` ;
            tercer_lugar_puntos.innerHTML=`${result.data[2].score}  puntos` ;
        })
        .catch(error => console.log('error', error));
      
}
function inicioPuntaje(){
setTimeout(() => {
    document.getElementById("contenedor").style.visibility = "hidden";
    document.getElementById("loader-text").style.visibility = "hidden";
    document.getElementById("podio-loader").style.display = "flex";
    document.getElementById("podio-loader2").style.display = "flex";
    consultarPodio();
    setTimeout(() => {
        // location.href = 'PLANETA_ESRI_2021/juego3.html';
        location.href = '../juego2.html';
    }, 30000);
}, 3000);
}

function inicioPuntaje2(){
    setTimeout(() => {
        document.getElementById("contenedor").style.visibility = "hidden";
        document.getElementById("loader-text").style.visibility = "hidden";
        document.getElementById("podio-loader").style.display = "flex";
        document.getElementById("podio-loader2").style.display = "flex";
        consultarPodio();
        setTimeout(() => {
            // location.href = 'PLANETA_ESRI_2021/juego3.html';
            location.href = '../juego3.html';
        }, 30000);
    }, 30000);
    }

    function inicioPuntaje3(){
        setTimeout(() => {
            document.getElementById("contenedor").style.visibility = "hidden";
            document.getElementById("loader-text").style.visibility = "hidden";
            document.getElementById("podio-loader").style.display = "flex";
            document.getElementById("podio-loader2").style.display = "flex";
            consultarPodio();
        }, 30000);
        }
