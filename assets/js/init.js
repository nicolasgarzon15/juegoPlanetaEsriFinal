let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas"
}

PIXI.utils.sayHello(type)

var heightWindow = 565;
var width = 800;

let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Text = PIXI.Text,
  TextStyle = PIXI.TextStyle,
  Graphics = PIXI.Graphics,
  renderer = PIXI.autoDetectRenderer(width, heightWindow);
let util = new SpriteUtilities(PIXI);
let util2 = new SpriteUtilities(PIXI);
let util3 = new SpriteUtilities(PIXI);
let util4 = new SpriteUtilities(PIXI);

let i = 0;
let i1 = 0;
let i2 = 0;
let validador;
let game;
let principal;
let enemigos = [];
let velocidaEstandarEnemigo = 1;
let velocidadEnemigo = 1;
let velocidadPrincipal = 50;
let Background, nubes, medio, frente, personaje;
let prueba = false;
let keys = {};
let complejidad = 0.01;
let piedra;
let keysDiv = {};
let Heroe;
let Fondo;
let Laterales = 137;
let PosicionFinalAncho = renderer.width - (Laterales + 40);
let PosicionFinal;
let consecutivoEnemigos = 0;
let activeVelocidad = false;
let totalPasaHeroe = 0;
let nivel = 0;
let puntos = 0;
let puntoAdicional = 0;

let SoundMoneda;
let SoundFondo;
let SoundExplosion;
let jugadorAgachadoIMG;
let jugadorSaltoIMG;
let jugadorCaminadoIMG;
const juegoTextureDatos = [];
const juegoTextureDatosSalto = [];
const juegoTextureCaminando = [];
//const texturapersonaje=[];

let jugador1;
let jugador2;
let jugador3;


loader.add("pista", "assets/img/Escenario_1/fondosol.png")
loader.add("nubes", "assets/img/Escenario_1/nubes.png")
  .add("medio", "assets/img/Escenario_1/medio.png")
  .add("frente", "assets/img/Escenario_1/Frente.png")
  .add("heroe", "assets/img/heroe.png")
  .add("SoundFondo", "assets/sound/fondo.mp3")
  .add("SoundExplosion", "assets/sound/choque.mp3")
  .add("SoundMoneda", "assets/sound/moneda.wav")
  .add("texturapiedra", "assets/img/imagenes/props/obstaculonivel1.png")
  .add("texturaplaneta", "assets/img/imagenes/nivel1/planeta.png")
  .add("texturemoneda", "assets/img/imagenes/nivel1/moneda.png")
  .add("texturepajaro", "assets/img/imagenes/nivel1/pajaro.png")
  
loader.add("caminando0", "assets/img/imagenes/nivel1/caminado/caminado_0.png")
loader.add("caminando1", "assets/img/imagenes/nivel1/caminado/caminado_1.png")
loader.add("caminando2", "assets/img/imagenes/nivel1/caminado/caminado_2.png")
loader.add("caminando3", "assets/img/imagenes/nivel1/caminado/caminado_3.png")
loader.add("caminando4", "assets/img/imagenes/nivel1/caminado/caminado_4.png")
loader.add("caminando5", "assets/img/imagenes/nivel1/caminado/caminado_5.png")
loader.add("caminando6", "assets/img/imagenes/nivel1/caminado/caminado_6.png")
loader.add("caminando7", "assets/img/imagenes/nivel1/caminado/caminado_7.png")
loader.add("caminando8", "assets/img/imagenes/nivel1/caminado/caminado_8.png")
loader.add("caminando9", "assets/img/imagenes/nivel1/caminado/caminado_9.png")
loader.add("caminando10", "assets/img/imagenes/nivel1/caminado/caminado_10.png")
loader.add("caminando11", "assets/img/imagenes/nivel1/caminado/caminado_11.png")
loader.add("caminando12", "assets/img/imagenes/nivel1/caminado/caminado_12.png")
loader.add("caminando13", "assets/img/imagenes/nivel1/caminado/caminado_13.png")
loader.add("caminando14", "assets/img/imagenes/nivel1/caminado/caminado_14.png")
loader.add("caminando15", "assets/img/imagenes/nivel1/caminado/caminado_15.png")
loader.add("caminando16", "assets/img/imagenes/nivel1/caminado/caminado_16.png")
loader.add("caminando17", "assets/img/imagenes/nivel1/caminado/caminado_17.png")
loader.add("caminando18", "assets/img/imagenes/nivel1/caminado/caminado_18.png")
loader.add("caminando19", "assets/img/imagenes/nivel1/caminado/caminado_19.png")
loader.add("caminando20", "assets/img/imagenes/nivel1/caminado/caminado_20.png")
loader.add("caminando21", "assets/img/imagenes/nivel1/caminado/caminado_21.png")
loader.add("caminando22", "assets/img/imagenes/nivel1/caminado/caminado_22.png")


loader.add("salto0", "assets/img/imagenes/nivel1/salto/salto_0.png")
loader.add("salto1", "assets/img/imagenes/nivel1/salto/salto_1.png")
loader.add("salto2", "assets/img/imagenes/nivel1/salto/salto_2.png")
loader.add("salto3", "assets/img/imagenes/nivel1/salto/salto_3.png")
loader.add("salto4", "assets/img/imagenes/nivel1/salto/salto_4.png")
loader.add("salto5", "assets/img/imagenes/nivel1/salto/salto_5.png")
loader.add("salto6", "assets/img/imagenes/nivel1/salto/salto_6.png")
loader.add("salto7", "assets/img/imagenes/nivel1/salto/salto_7.png")
loader.add("salto8", "assets/img/imagenes/nivel1/salto/salto_8.png")
loader.add("salto9", "assets/img/imagenes/nivel1/salto/salto_9.png")
loader.add("salto10", "assets/img/imagenes/nivel1/salto/salto_10.png")
loader.add("salto11", "assets/img/imagenes/nivel1/salto/salto_11.png")
loader.add("salto12", "assets/img/imagenes/nivel1/salto/salto_12.png")
loader.add("salto13", "assets/img/imagenes/nivel1/salto/salto_13.png")
loader.add("salto14", "assets/img/imagenes/nivel1/salto/salto_14.png")
loader.add("salto15", "assets/img/imagenes/nivel1/salto/salto_15.png")
loader.add("salto16", "assets/img/imagenes/nivel1/salto/salto_16.png")
loader.add("salto17", "assets/img/imagenes/nivel1/salto/salto_17.png")
loader.add("salto18", "assets/img/imagenes/nivel1/salto/salto_18.png")
loader.add("salto19", "assets/img/imagenes/nivel1/salto/salto_19.png")
loader.add("salto20", "assets/img/imagenes/nivel1/salto/salto_20.png")
loader.add("salto21", "assets/img/imagenes/nivel1/salto/salto_21.png")
loader.add("salto22", "assets/img/imagenes/nivel1/salto/salto_22.png")
loader.add("salto23", "assets/img/imagenes/nivel1/salto/salto_23.png")
loader.add("salto24", "assets/img/imagenes/nivel1/salto/salto_24.png")
loader.add("salto25", "assets/img/imagenes/nivel1/salto/salto_25.png");

loader.add("abajo0", "assets/img/imagenes/nivel1/agachar/agachado_0.png");
loader.add("abajo1", "assets/img/imagenes/nivel1/agachar/agachado_1.png");
loader.add("abajo2", "assets/img/imagenes/nivel1/agachar/agachado_2.png");
loader.add("abajo3", "assets/img/imagenes/nivel1/agachar/agachado_3.png");
loader.add("abajo4", "assets/img/imagenes/nivel1/agachar/agachado_4.png");
loader.add("abajo5", "assets/img/imagenes/nivel1/agachar/agachado_0.png");
loader.add("abajo6", "assets/img/imagenes/nivel1/agachar/agachado_6.png");
loader.add("abajo7", "assets/img/imagenes/nivel1/agachar/agachado_7.png");
loader.add("abajo8", "assets/img/imagenes/nivel1/agachar/agachado_8.png");
loader.add("abajo9", "assets/img/imagenes/nivel1/agachar/agachado_9.png");
loader.add("abajo10", "assets/img/imagenes/nivel1/agachar/agachado_10.png");
loader.add("abajo11", "assets/img/imagenes/nivel1/agachar/agachado_11.png");
loader.add("abajo12", "assets/img/imagenes/nivel1/agachar/agachado_12.png");
loader.add("abajo13", "assets/img/imagenes/nivel1/agachar/agachado_13.png");
loader.add("abajo14", "assets/img/imagenes/nivel1/agachar/agachado_14.png");
loader.add("abajo15", "assets/img/imagenes/nivel1/agachar/agachado_15.png");
loader.add("abajo16", "assets/img/imagenes/nivel1/agachar/agachado_16.png");
loader.add("abajo17", "assets/img/imagenes/nivel1/agachar/agachado_17.png");
loader.add("abajo18", "assets/img/imagenes/nivel1/agachar/agachado_18.png");
loader.add("abajo19", "assets/img/imagenes/nivel1/agachar/agachado_19.png");
loader.add("abajo20", "assets/img/imagenes/nivel1/agachar/agachado_20.png");
loader.add("abajo21", "assets/img/imagenes/nivel1/agachar/agachado_21.png");
loader.add("abajo22", "assets/img/imagenes/nivel1/agachar/agachado_22.png");
loader.add("abajo23", "assets/img/imagenes/nivel1/agachar/agachado_23.png");
loader.add("abajo24", "assets/img/imagenes/nivel1/agachar/agachado_24.png");
loader.add("abajo25", "assets/img/imagenes/nivel1/agachar/agachado_25.png");

loader.load();
loader.onError.add((e, d) => {
  console.log(e, d);
});

loader.onComplete.add((loader, resources) => {
  Background = resources["pista"].texture;
  nubes = resources["nubes"].texture;
  medio = resources["medio"].texture;
  frente = resources["frente"].texture;
  Heroe = resources["heroe"].texture;
  SoundExplosion = resources["SoundExplosion"].sound;
  SoundFondo = resources["SoundFondo"].sound;
  SoundMoneda = resources["SoundMoneda"].sound;
  console.log('Imagenes cargadas completamente')
})

function init() {
  enemigos = [];
  velocidaEstandarEnemigo = 1;
  velocidadEnemigo = 1;
  velocidadPrincipal = 4;
  consecutivoEnemigos = 0;
  activeVelocidad = false;
  totalPasaHeroe = 0;
  nivel = 0;
  puntos = puntos;
  puntoAdicional = 0;


  game = new Application({ width: width, height: heightWindow });
  game.renderer.backgroundColor = 0x061639;
  // game.renderer.autoRezise = true;
  document.getElementById("juego").appendChild(game.view);

  setup();
}


function setup(delta) {
  
    if (prueba == false) {
      Fondo = util.tilingSprite(Background, window.innerWidth, 570, 0, 0);
      nubes = util.tilingSprite(nubes, window.innerWidth, 570, 0, 0);
      medio = util.tilingSprite(medio, window.innerWidth, 570, 0, 0);
      frente = util.tilingSprite(frente, window.innerWidth, 570, 0, 0);

      game.stage.addChild(Fondo);
      game.stage.addChild(nubes);
      game.stage.addChild(medio);
      game.stage.addChild(frente);

      let texture1 = loader.resources.caminando0.texture;
      jugador1 = new PIXI.Sprite(texture1)
      jugador1.position.x = 0;
      jugador1.position.y = 350;
      jugador1.height = 200;
      jugador1.width = 200;
      //game.stage.addChild(jugador1);

      let texture2 = loader.resources.salto0.texture;
      jugador2 = new PIXI.Sprite(texture2)
      jugador2.position.x = 0;
      jugador2.position.y = 360;
      jugador2.height = 200;
      jugador2.width = 200;

      let texture3 = loader.resources.abajo0.texture;
      jugador3 = new PIXI.Sprite(texture3)
      jugador3.position.x = 0;
      jugador3.position.y = 360;
      jugador3.height = 200;
      jugador3.width = 200;
      game.stage.addChild(jugador1);
      // Imagen Piedra
      let texturepiedra = loader.resources.texturapiedra.texture;
      piedra = new PIXI.Sprite(texturepiedra)
      piedra.position.x = 1410;
      piedra.position.y = 450;
      piedra.height = 100;
      piedra.width = 100;
      game.stage.addChild(piedra);

      // Imagen Moneda
      let texturemoneda = loader.resources.texturemoneda.texture;
      moneda = new PIXI.Sprite(texturemoneda)
      moneda.position.x = 2100;
      moneda.position.y = 440;
      moneda.height = 70;
      moneda.width = 70;
      game.stage.addChild(moneda);

      // Imagen Pajaro
      let texturepajaro = loader.resources.texturepajaro.texture;
      pajaro = new PIXI.Sprite(texturepajaro)
      pajaro.position.x = 1810;
      pajaro.position.y = 250;
      pajaro.height = 70;
      pajaro.width = 70;
      game.stage.addChild(pajaro);

      principal = jugador();
      game.stage.addChild(principal);
      state = play;
      window.addEventListener("keydown", keysDown);
      window.addEventListener("keyup", keysUp);
      game.ticker.add(delta => gameLoop(delta));
      game.ticker.add(gameLoop2);
      game.ticker.add(piedras);


    } else {
      game.stage.addChild(Fondo);
      game.stage.addChild(nubes);
      game.stage.addChild(medio);
      game.stage.addChild(frente);
      game.stage.addChild(piedra);
      game.stage.addChild(moneda);
      game.stage.addChild(pajaro);
      game.stage.addChild(jugador1);

      principal = jugador();
      game.stage.addChild(principal);
      state = play;
      window.addEventListener("keydown", keysDown);
      window.addEventListener("keyup", keysUp);
      game.ticker.add(delta => gameLoop(delta));
      game.ticker.add(gameLoop2);
      game.ticker.add(piedras);

    }
}
let lvl;
let contado6r = 0;
let bandera1 = 1;
let url = 'https://geoapps.esri.co//APIRESTGame';



function cargarPuntuacion(){
  let id_final = getCookie("id_usuario")
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "score": puntos
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
let urlupd= "https://geoapps.esri.co/APIRESTGame/upd-usuario/"+id_final;

fetch(urlupd, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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
function piedras() {

  //
  
  // SoundFondo.play();
  piedra.position.x -= 8 + complejidad;

  if (contado6r == "10" || contado6r == "20" || contado6r == "30" || contado6r == "40" || contado6r == "50" || contado6r == "60") {
    
  // SoundFondo.stop();
  SoundMoneda.play();
    //preguntacharlas();
    piedra.texture = loader.resources.texturaplaneta.texture;
    piedra.position.x = 1310;
    piedra.position.y = 350;
    //piedra.height = 100;
    //piedra.width = 100;
    // complejidad += 0.25;
    contado6r++;
    bandera1 = 4;
  } else if (contado6r == "61") {
    contado6r++;
    puntos += 100;
    document.querySelector(".puntos").innerHTML = puntos;
    setTimeout(() => {
      let canvas = document.querySelector(".container")
      let portal = document.querySelector(".video3")
      canvas.classList.add("invisible")

      game.stop();
      // SoundFondo.stop();

      portal.classList.remove("invisible");

      setTimeout(() => {
        portal.classList.add("invisible")
      }, 4000);

      console.log(puntos);

      let video = document.querySelector(".video2")
      video.classList.remove("invisible")
      setTimeout(() => {
        cargarPuntuacion();
        setTimeout(() => {
          location.href = 'PLANETA_ESRI_2021/podio1.html';
        }, 10000);

      }, 32000);
      // alert("nivel terminado")
      //podio();

    }, 2000);

  } else {
    if (chocar(piedra, jugador1)) {
      if (bandera1 == 1) {
        // SoundFondo.stop();
        SoundExplosion.play();
        pregunta();
      }
      else if (bandera1 == 2) {
        puntos += randomInt(8, 15);
        document.querySelector(".puntos").innerHTML = puntos;
        piedra.position.x = -9;
        
  SoundMoneda.play();
      } else {
        puntos -= 16;
        document.querySelector(".puntos").innerHTML = puntos;
        piedra.position.x = -9;
        SoundExplosion.play();
      } if (bandera1 == 4) {
        preguntacharlas();

        piedra.position.x = -9;
        
  SoundMoneda.play();
      }

    }
    if (piedra.position.x < 10) {
      puntos += 10;
      document.querySelector(".puntos").innerHTML = puntos;
      let aleatorio = randomInt(1, 8);
      //let aleatorio = 3;
      //alert(aleatorio);
      if (aleatorio == 1 || aleatorio == 2) {
        piedra.texture = loader.resources.texturapiedra.texture;
        piedra.position.x = 1310;
        piedra.position.y = 450;
        // complejidad += 0.25;
        contado6r++;
        bandera1 = 1;
      } else if (aleatorio == 3) {
        piedra.position.x = 1310;
        piedra.position.y = 440;
        piedra.texture = loader.resources.texturemoneda.texture;
        // complejidad += 0.25;
        contado6r++;
        bandera1 = 2;
      } else {
        piedra.position.x = 1310;
        piedra.position.y = 270;
        piedra.texture = loader.resources.texturepajaro.texture;
        // complejidad += 0.25;
        contado6r++;
        bandera1 = 3;
      }
      // complejidad+=0.25;
    }
    // if(moneda.position.x <10){

    //   moneda.position.x = 2100;
    //   // complejidad+=0.25;
    // }
    // if(pajaro.position.x <5){

    //   pajaro.position.x = 1510;
    //   // complejidad+=0.25;
    // }

    // if (chocar(piedra, jugador1)) {
    //         pregunta();
    // }
    //   if (chocar(pajaro, jugador1) || chocar(pajaro, jugador2)) {
    //     //alert("choco")
    //      puntos-=5;
    //      document.querySelector(".puntos").innerHTML = puntos;
    //      pajaro.position.x = 1510;
    //     //puntos-=5;
    // }
    //   if (chocar(moneda, jugador1)) {
    //               //Sumar puntos
    //               puntos+=10;
    //               document.querySelector(".puntos").innerHTML = puntos;
    //               moneda.position.x = 2100;

    // }

  }
  //   if(validador==1){
  //   if (chocar(piedra, jugador1)) {
  //         pregunta();
  //   }
  // }else if(validador==2){
  //   if (chocar(piedra, jugador2)) {
  //     pregunta();
  // }
  // }else{
  //   if (chocar(piedra, jugador3)) {
  //     pregunta();
  // }
  // }
}
function keysDown(tecla) {
  keys[tecla.keyCode] = true
}

function keysUp(tecla) {
  keys[tecla.keyCode] = false
}
function correr2() {
  //game.stage.addChild(jugador1);
  /*for(let cont=0;cont<23;cont++){
      tet
       jugador1.texture = loader.resources.[variable].texture;
   }*/
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando1.texture;
  }, 50);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando2.texture;
  //   }, 200);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando3.texture;
  }, 150);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando4.texture;
  //   }, 400);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando5.texture;
  }, 250);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando6.texture;
  //   }, 600);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando7.texture;
  }, 350);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando8.texture;
  //   }, 800);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando9.texture;
  }, 450);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando10.texture;
  //   }, 1000);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando11.texture;
  }, 550);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando12.texture;
  //   }, 1200);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando13.texture;
  }, 650);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando14.texture;
  //   }, 1400);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando15.texture;
  }, 750);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando16.texture;
  //   }, 1600);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando17.texture;
  }, 850);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando18.texture;
  //   }, 1800);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando19.texture;
  }, 950);
  //   setTimeout(() => {
  //     jugador1.texture = loader.resources.caminando20.texture;
  //   }, 2000);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando21.texture;
  }, 1050);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando22.texture;
  }, 2200);
  // console.log("llegue1");
  // for (i2; i2 < 22; i2++){
  //     console.log("llegue2");
  //   //juego.stage.removeChild(jugador);

  //   const imgCaminar = `assets/img/imagenes/caminado/caminado_${i2}.png`;
  //   const juegoCaminando = PIXI.Texture.from(imgCaminar);
  //   juegoTextureCaminando.push(juegoCaminando);


  //     /*let textures = util.filmstrip(juegoTextureCaminando[i2], 320, 320);
  //     let anySprite = util.sprite(textures);
  //     game.stage.addChild(anySprite);*/

  //   console.log("llegue");
  //   jugadorCaminadoIMG = PIXI.AnimatedSprite(juegoTextureCaminando);
  //   jugadorCaminadoIMG.anchor.set(0.255,0.385);
  //   jugadorCaminadoIMG.height = 280;
  //   jugadorCaminadoIMG.width = 230;
  //   jugadorCaminadoIMG.x = 225;
  //   jugadorCaminadoIMG.y = 315;
  //   //console.log("llegue");


  //   /*jugadorCaminadoIMG = new PIXI.AnimatedSprite(juegoTextureCaminando);
  //   jugadorCaminadoIMG.anchor.set(0.5);
  //   jugadorCaminadoIMG.height = 2;
  //   jugadorCaminadoIMG.width = 1;
  //   jugadorCaminadoIMG.x = 0.05;
  //   jugadorCaminadoIMG.y = 0.05;
  //   console.log("llegue");*/
  //   }
  //   if(!jugadorCaminadoIMG.playing){
  //       game.stage.addChild(jugadorCaminadoIMG);
  //       jugadorCaminadoIMG.play();
  //   }

}

function saltar() {

  setTimeout(() => {
    jugador2.texture = loader.resources.salto1.texture;

  }, 50);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto2.texture;
  }, 75);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto3.texture;
  }, 100);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto4.texture;
  }, 125);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto5.texture;
  }, 150);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto6.texture;
  }, 175);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto7.texture;
  }, 200);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto8.texture;
  }, 225);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto9.texture;
  }, 250);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto10.texture;
  }, 275);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto11.texture;
  }, 300);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto12.texture;
  }, 325);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto13.texture;
  }, 350);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto14.texture;
  }, 375);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto15.texture;
  }, 400);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto16.texture;
  }, 425);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto17.texture;
  }, 450);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto18.texture;
  }, 475);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto19.texture;
  }, 500);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto20.texture;
  }, 525);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto21.texture;
  }, 550);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto22.texture;
  }, 575);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto23.texture;
  }, 600);
  setTimeout(() => {
    jugador1.texture = loader.resources.salto24.texture;
  }, 625);
  setTimeout(() => {
    jugador2.texture = loader.resources.salto25.texture;
  }, 650);
  setTimeout(() => {
    //img.x = 500;
    jugador2.position.y = 200;
    jugador2.vy = 0;
  }, 250);

  setTimeout(() => {
    //img.x = 500;
    jugador2.position.y = 340;
    jugador2.vy = 0;
  }, 650);
  // for (i1; i1 < 25; i1++){
  //   game.stage.removeChild(jugador);
  //    // Imagenes jugador
  //    const imgSalto = `assets/img/imagenes/Salto/salto_${i1+1}.png`;
  //    const juegoTextureSalto = PIXI.Texture.from(imgSalto);
  //    juegoTextureDatosSalto.push(juegoTextureSalto);

  //    jugadorSaltoIMG = new PIXI.AnimatedSprite(juegoTextureDatosSalto);
  //    jugadorSaltoIMG.height = 280;
  //    jugadorSaltoIMG.width = 230;
  //    jugadorSaltoIMG.x = 225;
  //    jugadorSaltoIMG.y = 160;
  //  }
  //  if(!jugadorSaltoIMG.playing){
  //      game.stage.addChild(jugadorSaltoIMG);
  //      jugadorSaltoIMG.play();
  //  }
}
function agachar() {
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo1.texture;
  }, 50);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo2.texture;
  }, 100);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo3.texture;
  }, 100);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo4.texture;
  }, 200);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo5.texture;
  }, 150);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo6.texture;
  }, 250);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo7.texture;
  }, 200);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo8.texture;
  }, 300);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo9.texture;
  }, 250);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo10.texture;
  }, 350);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo11.texture;
  }, 300);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo12.texture;
  }, 400);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo13.texture;
  }, 350);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo14.texture;
  }, 450);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo15.texture;
  }, 400);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo16.texture;
  }, 500);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo17.texture;
  }, 450);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo18.texture;
  }, 550);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo19.texture;
  }, 500);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo20.texture;
  }, 600);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo21.texture;
  }, 550);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo22.texture;
  }, 650);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo23.texture;
  }, 600);
  setTimeout(() => {
    jugador1.texture = loader.resources.abajo24.texture;
  }, 700);
  setTimeout(() => {
    jugador3.texture = loader.resources.abajo25.texture;
  }, 650);
  setTimeout(() => {
    //img.x = 500;
    jugador1.position.y = 350;
    jugador1.vy = 0;
  }, 350);

  setTimeout(() => {
    //img.x = 500;
    jugador1.position.y = 350;
    jugador1.vy = 0;
  }, 450);
  // for (i; i < 25; i++){
  //   game.stage.removeChild(jugador);

  //   // Imagenes jugador
  //   const img = `assets/img/imagenes/agachar/agacharse_${i+1}.png`;
  //   const juegoTexture = PIXI.Texture.from(img);
  //   juegoTextureDatos.push(juegoTexture);

  //   jugadorAgachadoIMG = new PIXI.AnimatedSprite(juegoTextureDatos);
  //   jugadorAgachadoIMG.height = 280;
  //   jugadorAgachadoIMG.width = 230;
  //   jugadorAgachadoIMG.x = 225;
  //   jugadorAgachadoIMG.y = 290;

  //   }
  //   if(!jugadorAgachadoIMG.playing){
  //       game.stage.addChild(jugadorAgachadoIMG);
  //       jugadorAgachadoIMG.play();
  //   }
}

function gameLoop2() {
  //

  v = false;
  keysDiv.innerHTML = JSON.stringify(keys);
  //game.stage.removeChild(jugador2);
  if (keys["40"] && !keys["38"]) {
    validador = 3;
    game.stage.removeChild(jugador1);
    jugador1.position.y = 400;
    // jugador1.position.y = 5000;
    jugador2.position.x = 5000;
    jugador2.position.y = 5000;
    game.stage.addChild(jugador3);
    agachar();
    setTimeout(() => {
      jugador2.position.x = 0;
      jugador2.position.y = 360;
      jugador1.position.x = 0;
      jugador1.position.y = 350;
      game.stage.addChild(jugador1);
      game.stage.removeChild(jugador3);
    }, 900);
    i2 = 0;
  } else {

    validador = 1;
    correr2();
    i = 0;
  }

  if (keys["38"] && !keys["40"]) {
    validador = 2;
    game.stage.removeChild(jugador1);
    jugador1.position.y = 250;
    // jugador1.position.y = 5000;
    game.stage.addChild(jugador2);
    saltar();
    setTimeout(() => {
      jugador1.position.x = 0;
      jugador1.position.y = 350;
      game.stage.addChild(jugador1);
      game.stage.removeChild(jugador2);
    }, 900);

    i2 = 0;
    v = true;
  }
  else {
    //correr2();
    game.stage.removeChild(jugadorSaltoIMG);

    i1 = 0;
  }


}
function gameLoop(delta) {
  game.stage.addChild(boots());
  for (let index = 1; index < enemigos.length; index++) {
    enemigos[index].vy = enemigos[index].vy + velocidadEnemigo;
    enemigos[index].y = enemigos[index].vy;
    if (enemigos[index].y > heightWindow && !enemigos[index].paso) {
      enemigos[index].paso = true;
      totalPasaHeroe++;
      puntos += 3;
      document.querySelector(".puntos").innerHTML = puntos;
      if (totalPasaHeroe == 5) {
        velocidaEstandarEnemigo += 0.5;
        totalPasaHeroe = 0;
      }
    }
  }
  // Fondo.tileX -= 0.158;
  nubes.tileX -= 0.2;
  medio.tileX -= 0.3;
  frente.tileX -= 0.4;

  state(delta);
}

function play(delta) {
  if (principal.x >= Laterales && principal.x <= PosicionFinalAncho) {
    principal.x += principal.vx;
    principal.y += principal.vy;
  } else {
    principal.x = PosicionFinal;
  }

  if (activeVelocidad) {
    puntoAdicional = 16;
    velocidadEnemigo = velocidaEstandarEnemigo + 10;
  } else {
    puntoAdicional = 0;
    velocidadEnemigo = velocidaEstandarEnemigo;
  }


  // for (let index = 1; index < enemigos.length; index++) {
  //     if (chocar(enemigos[index], principal)) {
  //         pregunta();
  //     }
  // }

  startReloj();
}

function iniciaGame() {

  let divName = document.querySelector('.nombre');
  divName.classList.remove('invisible')
  let divPuntos = document.querySelector('.puntos');
  divPuntos.classList.remove('invisible')
  let divPausa = document.querySelector('.pausa');
  divPausa.classList.remove('invisible')
  document.querySelector(".puntos").innerHTML = 0;
  document.querySelector(".pantalla").classList.add("active");
  setTimeout(() => {
  }, 1000);
  init();
}
function preguntacharlas() {
  let nombre_puntos_cookie = "puntaje"; 
  document.cookie = `${nombre_puntos_cookie}=${puntos}`;
  let divPreguntas = document.querySelector('.seccion-preguntas');
  divPreguntas.classList.remove('invisible');
  let divPausa = document.querySelector('.pausa');
  divPausa.classList.add('invisible');
  var contador = document.querySelector(".contador");
  contador.classList.remove('invisible')

  document.querySelector(".pregunta").classList.remove("active");
  // let contador=document.querySelector('.tiempo');
  // contador.classList.remove('invisible')
  setTimeout(() => {
    document.querySelector("canvas").remove();
  }, 1000);
  game.stop();
  //Llamar funcion para generar una pregunta aleatoria
  preguntaRandomdecharlas();
  contadorPregunta();
}
function pregunta() {
  let nombre_puntos_cookie = "puntaje"; document.cookie = `${nombre_puntos_cookie}=${puntos}`;
  let divPreguntas = document.querySelector('.seccion-preguntas');
  divPreguntas.classList.remove('invisible');
  let divPausa = document.querySelector('.pausa');
  divPausa.classList.add('invisible');
  var contador = document.querySelector(".contador");
  contador.classList.remove('invisible')

  document.querySelector(".pregunta").classList.remove("active");
  // let contador=document.querySelector('.tiempo');
  // contador.classList.remove('invisible')
  setTimeout(() => {
    document.querySelector("canvas").remove();
  }, 1000);
  game.stop();
  //Llamar funcion para generar una pregunta aleatoria
  preguntaRandom();
  contadorPregunta();
}
function preguntaRandomdecharlas() {
  let datos = {
    "preguntas": [
      {
        "name": "ArcGIS AppStudio: An Introduction ",
        "url_logo": "assets/img/charlas/app-studio.png",
        "pregunta": "??Qu?? es QT?",
        "respuesta": "Un lenguaje de programaci??n libre de Copyrigth",
        "incorrecta1": "Un creador de datos raster",
        "incorrecta2": "Un entorno para creaci??n de Aplicaciones",
        "incorrecta3": "Procesador de datos"
      },
      {
        "name": "ArcGIS AppStudio: An Introduction ",
        "url_logo": "assets/img/charlas/app-studio.png",
        "pregunta": "??Qu?? es AppStudio?",
        "respuesta": "Herramienta  para crear Aplicaciones utilizando pocas lineas de codigo",
        "incorrecta1": "Aplicaci??n de mapeo web",
        "incorrecta2": "Ninguna de las anteriores",
        "incorrecta3": "Aplicaci??n para crear mapas 3D"
      },
      {
        "name": "Survey 123:Personalizaci??n",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Como se llama la librer??a o API de Arcgis que necesitamos para dise??ar un survey con desarrollo web?",
        "respuesta": "API Rest de ArcGIS para JavaScript ",
        "incorrecta1": "API de ArcGIS para Python",
        "incorrecta2": "API de ArcGIS para JavaScript",
        "incorrecta3": "API Rest de ArcGis para .NET"
      },
      {
        "name": "Survey 123:Personalizaci??n",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "Los objetos que son guardados en la constante FeatureToAdd que posteriormente son enviados a la capa, ??se componen de?",
        "respuesta": "Atributos, referencia especial y coordenadas en X y Y",
        "incorrecta1": "Atributos y una referencia espacial",
        "incorrecta2": "Longitud y latitud",
        "incorrecta3": "Atributos y coordenadas en X"
      },

      {
        "name": "ArcPy : An Introduction",
        "url_logo": "assets/img/charlas/python.png",
        "pregunta": "??Qu?? es ArcGIS notebook y que funci??n cumple?",
        "respuesta": "Es un entorno de ejecuci??n de ArcGIS que nos permite escribir, ejecutar y visualizar nuestro c??digo al instante.",
        "incorrecta1": "Es una aplicaci??n de ArcGIS que nos ayuda a realizar procesos de geocodificaci??n.",
        "incorrecta2": "Es una herramienta de ArcGIS Desktop que nos permite escribir y ejecutar, m??s no visualizar los resultados de nuestro c??digo.",
        "incorrecta3": "Es un modulo de acceso a datos"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l es nuevo producto de ArcGIS que permite un contenido de im??genes mejorado dentro de ArcGIS Online?",
        "respuesta": "ArcGIS Image",
        "incorrecta1": "ArcGIS Field Maps",
        "incorrecta2": "ArcGIS Velocity",
        "incorrecta3": "ArcGIS Storymaps"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l es la funci??n de ArcGIS Velocity?",
        "respuesta": "Permitir una integraci??n de datos en tiempo real par la toma de decisiones",
        "incorrecta1": "Permitir im??ganes espaciales para un mejor entendimiento del terreno",
        "incorrecta2": "Permitir an??lisis pasados de un mapa espec??fico",
        "incorrecta3": "Todas las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Qu?? programa de ArcGIS utiliza drones para generar las visualizaciones?",
        "respuesta": "Site Scan for GIS",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ArcGIS Enterprise",
        "incorrecta3": "ArcGIS Storymaps"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l es la funci??n de ArcGIS survey 123?",
        "respuesta": "Captura de datos basada en formularios",
        "incorrecta1": "Utilizaci??n de drones para el levantamiento de terrenos",
        "incorrecta2": "Contenido de im??genes que ayudan al entendimiento del terreno",
        "incorrecta3": "Todas las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??ArcGIS Field Maps reune cu??l/es aplicaciones de ArcGIS?",
        "respuesta": "Survey 123 y ArcGIS Quick Capture",
        "incorrecta1": "Survey 123",
        "incorrecta2": "ArcGIS Quick Capture",
        "incorrecta3": "Ninguna de las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??les son las funcionalidades de ARcGIS Field Maps? (Capacidades de edici??n)",
        "respuesta": "Ninguna de las anteriores",
        "incorrecta1": "Collector",
        "incorrecta2": "Explore",
        "incorrecta3": "Tracker"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??C??mo funciona ArcGIS Field Maps?",
        "respuesta": "Recolecci??n en tiempo real desde el campo",
        "incorrecta1": "Recolecci??n previo a la visita de campo",
        "incorrecta2": "Recolecci??n posterior a la visita de campo",
        "incorrecta3": "Recolecci??n de datos de campo en un tiempo determinado (d??as, meses, a??os)"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cual programa de ArcGIS crea historias inspiradoras e inmersivas combinando texto, mapas interactivos y otros contenidos multimedia?",
        "respuesta": "ArcGIS Storymaps",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ARcGIS Field Maps",
        "incorrecta3": "ArcGIS Image"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Qu?? programa de ArcGIS permite integrar Autodesk con ArcGIS para generar contenido m??s preciso?",
        "respuesta": "ArcGIS GeoBIM",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ArcGIS Enterprise",
        "incorrecta3": "Ninguna de las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Qu?? aplicaci??n se puede utilizar para recolectar datos en el campo?",
        "respuesta": "ArcGIS Field Maps",
        "incorrecta1": "ArcGIS Urban ",
        "incorrecta2": "ArcGIS Indoors",
        "incorrecta3": "ArcGIS Pro"
      },

      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??C??mo se pueden visualizar dos capas sin utilizar transparencias?",
        "respuesta": "Blending",
        "incorrecta1": "Clipping",
        "incorrecta2": "Buffer",
        "incorrecta3": "Erasing"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??En cu??l centro deportivo se est?? utlizando ArcGIS Velocity para mejorar el uso de recursos? ",
        "respuesta": "Aspen",
        "incorrecta1": "Summit Mountain",
        "incorrecta2": "Vail",
        "incorrecta3": "Telluride"
      },

      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Qu?? le puede agregar a un StoryMap? ",
        "respuesta": "videos",
        "incorrecta1": "mapas",
        "incorrecta2": "im??genes",
        "incorrecta3": "todas las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "La integraci??n de GIS y BIM le permitir?? crear mejores ",
        "respuesta": "modelos 3D",
        "incorrecta1": "bases de datos",
        "incorrecta2": "mapas base",
        "incorrecta3": "colaboraciones"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Para qu?? le sirven las colecciones en ArcGIS StoryMaps?",
        "respuesta": "como portafolio de proyectos",
        "incorrecta1": "para dise??ar mapas",
        "incorrecta2": "para crear mapas",
        "incorrecta3": "para modificar mapas"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l es el n??mero de esta Conferencia de Usuarios?",
        "respuesta": "41",
        "incorrecta1": "45",
        "incorrecta2": "38",
        "incorrecta3": "35"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l es el slogan o mensaje central de esta UC?",
        "respuesta": "Creando un futuro sostenible ",
        "incorrecta1": "Creando un futuro SIGnificativo",
        "incorrecta2": "Los mapas son el futuro",
        "incorrecta3": "Un mejor futuro con sostenibilidad"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l ciudad de Alemania aplico los SIG para mejorar sus servicios p??blicos?",
        "respuesta": "Munich",
        "incorrecta1": "Berlin",
        "incorrecta2": "D??sseldorf",
        "incorrecta3": "Colonia"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l de estas metodolog??as NO integra el Geographical Approach? ",
        "respuesta": "GeoMarketing",
        "incorrecta1": "GeoAnalytics",
        "incorrecta2": "GeoDesign",
        "incorrecta3": "GeoCollaboration"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l de las siguientes herramientas se destac?? como una novedad de ArcGIS? ",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "Imagery and Remote Sensing",
        "incorrecta2": "Field Operations",
        "incorrecta3": "Real-Time GIS "
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Qu?? herramienta NO hace parte de ArcGIS?",
        "respuesta": "ArcGIS Timeline",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ArcGIS Urban",
        "incorrecta3": "ArcGIS Dashboards"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??les fueron las mejoras para la Interactive Web Mapping?",
        "respuesta": "R??pido e intuitivo",
        "incorrecta1": "Poderoso y emocionante",
        "incorrecta2": "Herramientas mejoradas y flujos de trabajo",
        "incorrecta3": "Todas las anteriores"
      },

      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??A cu??l de estos conceptos empezamos a llamar GeoAI?",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "Machine Learning",
        "incorrecta2": "Deep Learning",
        "incorrecta3": "AI ( Artificial Inteligence)"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Con qu?? herramienta podemos planificar, gestionar, recopilar y procesar im??genes?",
        "respuesta": "Drone Mapping",
        "incorrecta1": "Interactive Visual Analytics",
        "incorrecta2": "Spatial Analysis",
        "incorrecta3": "Reality Capture at scale"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Con cu??l ArcGis podemos geodise??ar ciudades?",
        "respuesta": "ArcGIS Urban",
        "incorrecta1": "ArcGIS GeoPlanner",
        "incorrecta2": "ArcGIS Indoors",
        "incorrecta3": "ArcGIS Business Analyst"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??El ejemplo de realidad virtual y la modelaci??n en 3D presentado en la plenaria los aplica en cual campo?",
        "respuesta": "Planeaci??n urbana",
        "incorrecta1": "Defensa",
        "incorrecta2": "Agricultura",
        "incorrecta3": "Aviaci??n"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "Utilizando datos LiDAR se pueden detectar",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "??rboles individuales",
        "incorrecta2": "Huellas de edificios",
        "incorrecta3": "Topograf??a"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Para qu?? se usa el SIG en seguridad y defensa?",
        "respuesta": "Proteccion de la comunidad",
        "incorrecta1": "para mediciones en campo",
        "incorrecta2": "para control de vacunas",
        "incorrecta3": "para medicion de predios"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "??Cu??l es la herramienta donde se puede hacer un repositorio de im??genes en Story Maps?",
        "respuesta": "Collection- Storymaps",
        "incorrecta1": "ArcGIS online",
        "incorrecta2": "Collector ",
        "incorrecta3": "Expirience Builder"
      },

      


    ]

  };

  /* Funci??n que obtiene un valor aleatorio de una matriz */
  let valor_aleatorio = elementos => elementos[Math.floor(Math.random() * elementos.length)];


  /* Mostramos un valor aleatorio de cada tipo */
  let seleccionarPregunta = valor_aleatorio(datos.preguntas);

  respuestaCorrecta = seleccionarPregunta.respuesta;
  posibles_respuestas = [
    seleccionarPregunta.respuesta,
    seleccionarPregunta.incorrecta1,
    seleccionarPregunta.incorrecta2,
    seleccionarPregunta.incorrecta3
  ]
  posibles_respuestas.sort(() => Math.random() - 0.5)

  document.querySelector("#charla").innerHTML = seleccionarPregunta.name
  document.querySelector("#pregunta").innerHTML = seleccionarPregunta.pregunta
  document.querySelector("#respuestaA").innerHTML = posibles_respuestas[0]
  document.querySelector("#respuestaB").innerHTML = posibles_respuestas[1]
  document.querySelector("#respuestaC").innerHTML = posibles_respuestas[2]
  document.querySelector("#respuestaD").innerHTML = posibles_respuestas[3]
  document.querySelector("#logoCharla").src = seleccionarPregunta.url_logo
}
function preguntaRandom() {
  let datos = {
    "preguntas": [

      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??D??nde se encuentra la Sagrada Familia?",
        "respuesta": "Barcelona",
        "incorrecta1": "Madrid",
        "incorrecta2": "Paris",
        "incorrecta3": "Londres"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Qui??n fue el padre del psicoan??lisis?",
        "respuesta": "Sigmund Freud",
        "incorrecta1": "Jean Piaget",
        "incorrecta2": "William James",
        "incorrecta3": "Iv??n P??vlov"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??l es el disco m??s vendido de la historia?",
        "respuesta": "Thriller, de Michael Jackson",
        "incorrecta1": "The Dark Side of the Moon- Pink Floyd",
        "incorrecta2": "El guardaespaldas- Whitney Houston.",
        "incorrecta3": "Back in Black- AC/DC"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En qu?? lugar del cuerpo se produce la insulina?",
        "respuesta": "p??ncreas",
        "incorrecta1": "Estomago",
        "incorrecta2": "Higado",
        "incorrecta3": "Bazo"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??De qu?? estilo arquitect??nico es la Catedral de Notre Dame en Par??s?",
        "respuesta": "G??tico",
        "incorrecta1": "Moderno",
        "incorrecta2": "Minimalista",
        "incorrecta3": "Clasico"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??l fue el primer metal que emple?? el hombre?",
        "respuesta": "cobre",
        "incorrecta1": "Aluminio",
        "incorrecta2": "Oro",
        "incorrecta3": "Plata"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Qui??n escribi?? Hamlet?",
        "respuesta": "William Shakespeare",
        "incorrecta1": "Charles Dickens",
        "incorrecta2": "Christopher Marlowe",
        "incorrecta3": "Edgar Allan Poe"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En qu?? pa??s se us?? la primera bomba at??mica en combate?",
        "respuesta": "Jap??n",
        "incorrecta1": "Afganist??n",
        "incorrecta2": "Iran",
        "incorrecta3": "Irak"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??ntos a??os tiene un lustro?",
        "respuesta": "5 A??os",
        "incorrecta1": "10 A??os",
        "incorrecta2": "100 A??os",
        "incorrecta3": " 500 A??os"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En qu?? a??o apareci?? en el mercado el primer videojuego protagonizado por Super Mario?",
        "respuesta": "1985",
        "incorrecta1": "1981",
        "incorrecta2": "1990",
        "incorrecta3": "1982"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??l es el animal que tiene mayor facilidad para repetir las frases y palabras que escucha?",
        "respuesta": "Cuervo",
        "incorrecta1": "Loro",
        "incorrecta2": "Tucan",
        "incorrecta3": "Guacamaya"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??l es la lengua m??s antigua de las que sobreviven en Europa?",
        "respuesta": "Vasco",
        "incorrecta1": "Aleman",
        "incorrecta2": "Ingles",
        "incorrecta3": "Catal??n"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??ntos corazones tienen los pulpos?",
        "respuesta": "3",
        "incorrecta1": "4",
        "incorrecta2": "1",
        "incorrecta3": "2"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En qu?? a??o se produce la Revoluci??n Francesa?",
        "respuesta": "1789",
        "incorrecta1": "1506",
        "incorrecta2": "1689",
        "incorrecta3": "1987"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??De qu?? pa??s es originario el caf???",
        "respuesta": "Etiopia",
        "incorrecta1": "Colombia",
        "incorrecta2": "Venezuela",
        "incorrecta3": "Ecuador"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??l es el ??rgano m??s grande del cuerpo humano?",
        "respuesta": "La piel",
        "incorrecta1": "El Coraz??n",
        "incorrecta2": "El intestino delgado",
        "incorrecta3": "Los pulmones"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??ntas naciones conforman el Reino Unido?",
        "respuesta": "4",
        "incorrecta1": "3",
        "incorrecta2": "5",
        "incorrecta3": "6"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En que continente  se encuentra la Patagonia?",
        "respuesta": "America",
        "incorrecta1": "Africa",
        "incorrecta2": "Oceania",
        "incorrecta3": "Asia"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En qu?? a??o se derribo el muro de Berl??n?    ",
        "respuesta": "1989",
        "incorrecta1": "1990",
        "incorrecta2": "1988",
        "incorrecta3": "1991"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??Cu??l es el ???Pa??s del Sol Naciente????",
        "respuesta": "Japon",
        "incorrecta1": "Corea del Sur",
        "incorrecta2": "Argentina",
        "incorrecta3": "Uruguay"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "??En qu?? pa??s se encuentra el rascacielos m??s alto del mundo?",
        "respuesta": "Emiratos Arabes Unidos",
        "incorrecta1": "Estados Unidos",
        "incorrecta2": "Qatar",
        "incorrecta3": "Arabia Saudi"
      },

    ]

  };

  /* Funci??n que obtiene un valor aleatorio de una matriz */
  let valor_aleatorio = elementos => elementos[Math.floor(Math.random() * elementos.length)];


  /* Mostramos un valor aleatorio de cada tipo */
  let seleccionarPregunta = valor_aleatorio(datos.preguntas);

  respuestaCorrecta = seleccionarPregunta.respuesta;
  posibles_respuestas = [
    seleccionarPregunta.respuesta,
    seleccionarPregunta.incorrecta1,
    seleccionarPregunta.incorrecta2,
    seleccionarPregunta.incorrecta3
  ]
  posibles_respuestas.sort(() => Math.random() - 0.5)

  document.querySelector("#charla").innerHTML = seleccionarPregunta.name
  document.querySelector("#pregunta").innerHTML = seleccionarPregunta.pregunta
  document.querySelector("#respuestaA").innerHTML = posibles_respuestas[0]
  document.querySelector("#respuestaB").innerHTML = posibles_respuestas[1]
  document.querySelector("#respuestaC").innerHTML = posibles_respuestas[2]
  document.querySelector("#respuestaD").innerHTML = posibles_respuestas[3]
  document.querySelector("#logoCharla").src = seleccionarPregunta.url_logo
}

function evaluarPregunta(opcion) {
  clearInterval(ejecutarContador);
  var contador = document.querySelector(".contador");
  contador.classList.add('invisible')
  if (opcion != null) {
    if (posibles_respuestas[opcion] === respuestaCorrecta) {
      swal("Respuesta correcta, ganaste 8 puntos", {
        icon: "success",
        button: false,
        timer: 2000,
      });
      // alert('Respuesta Correcta , Ganaste 8 puntos');
      puntos += 8;
      piedra.position.x = 1310;
      contado6r++;
      console.log(contado6r);
      setTimeout(() => {
        
        SoundExplosion.stop(); 
            continuarGame();
            // SoundFondo.play();
            }, 2000);
    } else if (opcion == 5) {
      swal("No respondiste a tiempo , pierdes 5 puntos", {
        icon: "error",
        button: false,
        timer: 2000,
      });
      //  alert('No respondiste a tiempo , pierdes 5 puntos');
      puntos -= 5;
      piedra.position.x = 1310;
      setTimeout(() => {
        SoundExplosion.stop(); 
            continuarGame();
            // SoundFondo.play();
      }, 2000);

    }
    else {
      swal("Respuesta incorrecta, perdiste 5 puntos", {
        icon: "error",
        button: false,
        timer: 2000,
      });
      // alert('Respuesta incorrecta , perdiste 5 puntos');
      puntos -= 5;
      if (puntos < 0) {
        puntos = 0;
      }
      piedra.position.x = 1310;
      contado6r++;
      console.log(contado6r);
      setTimeout(() => {
        SoundExplosion.stop(); 
            continuarGame();
            // SoundFondo.play();
      }, 2000);
    }
  }
  let divPreguntas = document.querySelector('.seccion-preguntas');
  divPreguntas.classList.add('invisible');
  let divPausa = document.querySelector('.pausa');
  divPausa.classList.remove('invisible');
}

function continuarGame() {
  document.querySelector(".puntos").innerHTML = puntos;
  // document.querySelector(".pantalla").classList.add("active");
  setTimeout(() => {
  }, 1000);
  prueba = true;
  init();

}

function pausar() {
  game.stop();
  // SoundFondo.stop();
  let divPausa = document.querySelector('.pausa');
  divPausa.classList.add('invisible');
  let divRea = document.querySelector('.reanudar');
  divRea.classList.remove('invisible');
}

function reanudar() {
  game.start();
  // SoundFondo.play();
  let divPausa = document.querySelector('.pausa');
  divPausa.classList.remove('invisible');
  let divRea = document.querySelector('.reanudar');
  divRea.classList.add('invisible');

}

function preguntaPorTeclado(event) {

  var codigo = event.which || event.keyCode;

  if (codigo === 97) {
    console.log("Opcion A")
    evaluarPregunta(0);
  }
  if (codigo === 98) {
    evaluarPregunta(1);
  }
  if (codigo === 99) {
    evaluarPregunta(2);
  }
  if (codigo === 100) {
    evaluarPregunta(3);
  }

}

document.addEventListener("keypress", preguntaPorTeclado);



function contadorPregunta() {
  var countdown = 21;
  var now = Date.parse(new Date());
  let sec;
  var contador = document.querySelector(".contador");
  contador.innerHTML = 20;

  ejecutarContador = setInterval(function () {
    var ready = Date.parse(new Date(now + countdown * 1000));
    sec = (ready - Date.parse(new Date())) / 1000;

    contador.innerHTML = sec;
    if (sec < 0) {
      clearInterval(ejecutarContador);
      evaluarPregunta(5);
    }
  }, 1000);


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
  
