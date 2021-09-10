
function abrirMenu() {
    location.href = 'index.html';
}

function modalCerrar() {

    setTimeout(() => {
        location.href = 'inicio.html';
    }, 1000);
}

// function salirInicio() {
//     location.href = 'inicio.html';
// }

function abrirJuego() {
    var video=document.getElementById("video1");
    video.style.display = "block";
    console.log(video);
    setTimeout(() => {
      video.setAttribute("muted",true);
        document.getElementById("video1").style.visibility = "hidden";
        iniciaGame();
        var nombre = getCookie("nombre");
        document.querySelector(".nombre").innerHTML = nombre; 

    }, 42000);
}

function podio() {
    location.href = 'podio.html';
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



