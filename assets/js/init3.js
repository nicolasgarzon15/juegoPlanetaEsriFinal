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


loader.add("pista", "assets/img/Escenario_3/fondosol.png")
loader.add("nubes", "assets/img/Escenario_3/nube.png")
  .add("medio", "assets/img/Escenario_3/medio.png")
  .add("frente", "assets/img/Escenario_3/Frente.png")
  .add("heroe", "assets/img/heroe.png")
  .add("SoundFondo", "assets/sound/fondo.mp3")
  .add("SoundExplosion", "assets/sound/choque.mp3")
  .add("SoundMoneda", "assets/sound/moneda.wav")
  .add("texturapiedra", "assets/img/imagenes/props/Obstaculonivel2_1.png")
  .add("texturaplaneta", "assets/img/imagenes/nivel1/planeta.png")
  .add("texturemoneda", "assets/img/imagenes/nivel1/moneda.png")
  .add("texturepajaro", "assets/img/imagenes/nivel1/pajaro.png")

loader.add("caminando0", "assets/img/imagenes/nivel3/caminado/Caminado_0.png")
loader.add("caminando1", "assets/img/imagenes/nivel3/caminado/Caminado_1.png")
loader.add("caminando2", "assets/img/imagenes/nivel3/caminado/Caminado_2.png")
loader.add("caminando3", "assets/img/imagenes/nivel3/caminado/Caminado_3.png")
loader.add("caminando4", "assets/img/imagenes/nivel3/caminado/Caminado_4.png")
loader.add("caminando5", "assets/img/imagenes/nivel3/caminado/Caminado_5.png")
loader.add("caminando6", "assets/img/imagenes/nivel3/caminado/Caminado_6.png")
loader.add("caminando7", "assets/img/imagenes/nivel3/caminado/Caminado_7.png")
loader.add("caminando8", "assets/img/imagenes/nivel3/caminado/Caminado_8.png")
loader.add("caminando9", "assets/img/imagenes/nivel3/caminado/Caminado_9.png")
loader.add("caminando10", "assets/img/imagenes/nivel3/caminado/Caminado_10.png")
loader.add("caminando11", "assets/img/imagenes/nivel3/caminado/Caminado_11.png")
loader.add("caminando12", "assets/img/imagenes/nivel3/caminado/Caminado_12.png")
loader.add("caminando13", "assets/img/imagenes/nivel3/caminado/Caminado_13.png")
loader.add("caminando14", "assets/img/imagenes/nivel3/caminado/Caminado_14.png")
loader.add("caminando15", "assets/img/imagenes/nivel3/caminado/Caminado_15.png")
loader.add("caminando16", "assets/img/imagenes/nivel3/caminado/Caminado_16.png")
loader.add("caminando17", "assets/img/imagenes/nivel3/caminado/Caminado_17.png")
loader.add("caminando18", "assets/img/imagenes/nivel3/caminado/Caminado_18.png")
loader.add("caminando19", "assets/img/imagenes/nivel3/caminado/Caminado_19.png")
loader.add("caminando20", "assets/img/imagenes/nivel3/caminado/Caminado_20.png")
loader.add("caminando21", "assets/img/imagenes/nivel3/caminado/Caminado_21.png")
loader.add("caminando22", "assets/img/imagenes/nivel3/caminado/Caminado_22.png")
loader.add("caminando23", "assets/img/imagenes/nivel3/caminado/Caminado_23.png")
loader.add("caminando24", "assets/img/imagenes/nivel3/caminado/Caminado_24.png")
loader.add("caminando25", "assets/img/imagenes/nivel3/caminado/Caminado_25.png")


loader.add("salto0", "assets/img/imagenes/nivel3/salto/Salto_0.png")
loader.add("salto1", "assets/img/imagenes/nivel3/salto/Salto_1.png")
loader.add("salto2", "assets/img/imagenes/nivel3/salto/Salto_2.png")
loader.add("salto3", "assets/img/imagenes/nivel3/salto/Salto_3.png")
loader.add("salto4", "assets/img/imagenes/nivel3/salto/Salto_4.png")
loader.add("salto5", "assets/img/imagenes/nivel3/salto/Salto_5.png")
loader.add("salto6", "assets/img/imagenes/nivel3/salto/Salto_6.png")
loader.add("salto7", "assets/img/imagenes/nivel3/salto/Salto_7.png")
loader.add("salto8", "assets/img/imagenes/nivel3/salto/Salto_8.png")
loader.add("salto9", "assets/img/imagenes/nivel3/salto/Salto_9.png")
loader.add("salto10", "assets/img/imagenes/nivel3/salto/Salto_10.png")
loader.add("salto11", "assets/img/imagenes/nivel3/salto/Salto_11.png")
loader.add("salto12", "assets/img/imagenes/nivel3/salto/Salto_12.png")
loader.add("salto13", "assets/img/imagenes/nivel3/salto/Salto_13.png")
loader.add("salto14", "assets/img/imagenes/nivel3/salto/Salto_14.png")
loader.add("salto15", "assets/img/imagenes/nivel3/salto/Salto_15.png")
loader.add("salto16", "assets/img/imagenes/nivel3/salto/Salto_16.png")
loader.add("salto17", "assets/img/imagenes/nivel3/salto/Salto_17.png")
loader.add("salto18", "assets/img/imagenes/nivel3/salto/Salto_18.png")
loader.add("salto19", "assets/img/imagenes/nivel3/salto/Salto_19.png")
loader.add("salto20", "assets/img/imagenes/nivel3/salto/Salto_20.png")
loader.add("salto21", "assets/img/imagenes/nivel3/salto/Salto_21.png")
loader.add("salto22", "assets/img/imagenes/nivel3/salto/Salto_22.png")
loader.add("salto23", "assets/img/imagenes/nivel3/salto/Salto_23.png")
loader.add("salto24", "assets/img/imagenes/nivel3/salto/Salto_24.png")
loader.add("salto25", "assets/img/imagenes/nivel3/salto/Salto_25.png");

loader.add("abajo0", "assets/img/imagenes/nivel3/agachar/Agacharse_0.png");
loader.add("abajo1", "assets/img/imagenes/nivel3/agachar/Agacharse_1.png");
loader.add("abajo2", "assets/img/imagenes/nivel3/agachar/Agacharse_2.png");
loader.add("abajo3", "assets/img/imagenes/nivel3/agachar/Agacharse_3.png");
loader.add("abajo4", "assets/img/imagenes/nivel3/agachar/Agacharse_4.png");
loader.add("abajo5", "assets/img/imagenes/nivel3/agachar/Agacharse_5.png");
loader.add("abajo6", "assets/img/imagenes/nivel3/agachar/Agacharse_6.png");
loader.add("abajo7", "assets/img/imagenes/nivel3/agachar/Agacharse_7.png");
loader.add("abajo8", "assets/img/imagenes/nivel3/agachar/Agacharse_8.png");
loader.add("abajo9", "assets/img/imagenes/nivel3/agachar/Agacharse_9.png");
loader.add("abajo10", "assets/img/imagenes/nivel3/agachar/Agacharse_10.png");
loader.add("abajo11", "assets/img/imagenes/nivel3/agachar/Agacharse_11.png");
loader.add("abajo12", "assets/img/imagenes/nivel3/agachar/Agacharse_12.png");
loader.add("abajo13", "assets/img/imagenes/nivel3/agachar/Agacharse_13.png");
loader.add("abajo14", "assets/img/imagenes/nivel3/agachar/Agacharse_14.png");
loader.add("abajo15", "assets/img/imagenes/nivel3/agachar/Agacharse_15.png");
loader.add("abajo16", "assets/img/imagenes/nivel3/agachar/Agacharse_16.png");
loader.add("abajo17", "assets/img/imagenes/nivel3/agachar/Agacharse_17.png");
loader.add("abajo18", "assets/img/imagenes/nivel3/agachar/Agacharse_18.png");
loader.add("abajo19", "assets/img/imagenes/nivel3/agachar/Agacharse_19.png");
loader.add("abajo20", "assets/img/imagenes/nivel3/agachar/Agacharse_20.png");
loader.add("abajo21", "assets/img/imagenes/nivel3/agachar/Agacharse_21.png");
loader.add("abajo22", "assets/img/imagenes/nivel3/agachar/Agacharse_22.png");
loader.add("abajo23", "assets/img/imagenes/nivel3/agachar/Agacharse_23.png");
loader.add("abajo24", "assets/img/imagenes/nivel3/agachar/Agacharse_24.png");
loader.add("abajo25", "assets/img/imagenes/nivel3/agachar/Agacharse_25.png");

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
      jugador1.position.x = 30;
      jugador1.position.y = 220;
      jugador1.height = 230;
      jugador1.width = 50;

      let texture2 = loader.resources.salto0.texture;
      jugador2 = new PIXI.Sprite(texture2)
      jugador2.position.x = 30;
      jugador2.position.y = 230;
      jugador2.height = 210;
      jugador2.width = 80;

      let texture3 = loader.resources.abajo0.texture;
      jugador3 = new PIXI.Sprite(texture3)
      jugador3.position.x = 30;
      jugador3.position.y = 230;
      jugador3.height = 210;
      jugador3.width = 80;
      game.stage.addChild(jugador1);
      // Imagen Piedra
      let texturepiedra = loader.resources.texturapiedra.texture;
      piedra = new PIXI.Sprite(texturepiedra)
      piedra.position.x = 1410;
      piedra.position.y = 340;
      piedra.height = 110;
      piedra.width = 100;
      game.stage.addChild(piedra);

      // Imagen Moneda
      let texturemoneda = loader.resources.texturemoneda.texture;
      moneda = new PIXI.Sprite(texturemoneda)
      moneda.position.x = 2100;
      moneda.position.y = 335;
      moneda.height = 70;
      moneda.width = 70;
      game.stage.addChild(moneda);

      // Imagen Pajaro
      let texturepajaro = loader.resources.texturepajaro.texture;
      pajaro = new PIXI.Sprite(texturepajaro)
      pajaro.position.x = 1810;
      pajaro.position.y = 80;
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
function traerPuntuacion(){
  
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
      let canvas = document.querySelector(".container")
      
      canvas.classList.add("invisible")

      game.stop();
      // SoundFondo.stop();

      if(puntos>700){
        let canvas = document.querySelector(".container")

        canvas.classList.add("invisible")
        game.stop();
        let video = document.querySelector(".video2")
        video.classList.remove("invisible")

        setTimeout(() => {
         location.href = 'PLANETA_ESRI_2021/podio3.html';
          cargarPuntuacion();
        }, 12000);

    }else{

        let canvas = document.querySelector(".container")
        canvas.classList.add("invisible")
        game.stop();
        let video = document.querySelector(".video3")

        video.classList.remove("invisible")
        setTimeout(() => {
          location.href = 'PLANETA_ESRI_2021/podio.html';

          cargarPuntuacion();
        }, 12000);
    }

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
        piedra.position.y = 335;
        // complejidad += 0.25;
        contado6r++;
        bandera1 = 1;
      } else if (aleatorio == 3) {
        piedra.position.x = 1310;
        piedra.position.y = 335;
        piedra.texture = loader.resources.texturemoneda.texture;
        // complejidad += 0.25;
        contado6r++;
        bandera1 = 2;
      } else {
        piedra.position.x = 1310;
        piedra.position.y = 115;
        piedra.texture = loader.resources.texturepajaro.texture;
        // complejidad += 0.25;
        contado6r++;
        bandera1 = 3;
      }
    }


  }

}

function keysDown(tecla) {
  keys[tecla.keyCode] = true
}

function keysUp(tecla) {
  keys[tecla.keyCode] = false
}
function correr2() {
 
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando1.texture;
  }, 50);

  setTimeout(() => {
    jugador1.texture = loader.resources.caminando3.texture;
  }, 150);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando5.texture;
  }, 250);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando7.texture;
  }, 350);

  setTimeout(() => {
    jugador1.texture = loader.resources.caminando9.texture;
  }, 450);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando11.texture;
  }, 550);

  setTimeout(() => {
    jugador1.texture = loader.resources.caminando13.texture;
  }, 650);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando15.texture;
  }, 750);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando17.texture;
  }, 850);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando19.texture;
  }, 950);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando21.texture;
  }, 1050);
  setTimeout(() => {
    jugador1.texture = loader.resources.caminando22.texture;
  }, 2200);


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
    jugador2.position.y = 90;
    jugador2.vy = 0;
  }, 250);

  setTimeout(() => {
    //img.x = 500;
    jugador2.position.y = 200;
    jugador2.vy = 0;
  }, 650);
 
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
    jugador1.position.y = 200;
    jugador1.vy = 0;
  }, 350);

  setTimeout(() => {
    jugador1.position.y = 200;
    jugador1.vy = 0;
  }, 450);

}

function gameLoop2() {
  //

  v = false;
  keysDiv.innerHTML = JSON.stringify(keys);
  if (keys["40"] && !keys["38"]) {
    validador = 3;
    game.stage.removeChild(jugador1);
    jugador1.position.y = 250;
    jugador2.position.x = 5000;
    jugador2.position.y = 5000;
    game.stage.addChild(jugador3);
    agachar();
    setTimeout(() => {
      jugador2.position.x = 30;
      jugador2.position.y = 220;
      jugador1.position.x = 30;
      jugador1.position.y = 220;
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
    jugador1.position.y = 100;
    game.stage.addChild(jugador2);
    saltar();
    setTimeout(() => {
      jugador1.position.x = 30;
      jugador1.position.y = 220;
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
  let divPreguntas = document.querySelector('.seccion-preguntas3');
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
  let divPreguntas = document.querySelector('.seccion-preguntas3');
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
        "pregunta": "¿Qué es QT?",
        "respuesta": "Un lenguaje de programación libre de Copyrigth",
        "incorrecta1": "Un creador de datos raster",
        "incorrecta2": "Un entorno para creación de Aplicaciones",
        "incorrecta3": "Procesador de datos"
      },
      {
        "name": "ArcGIS AppStudio: An Introduction ",
        "url_logo": "assets/img/charlas/app-studio.png",
        "pregunta": "¿Qué es AppStudio?",
        "respuesta": "Herramienta  para crear Aplicaciones utilizando pocas lineas de codigo",
        "incorrecta1": "Aplicación de mapeo web",
        "incorrecta2": "Ninguna de las anteriores",
        "incorrecta3": "Aplicación para crear mapas 3D"
      },
      {
        "name": "Survey 123:Personalización",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Como se llama la librería o API de Arcgis que necesitamos para diseñar un survey con desarrollo web?",
        "respuesta": "API Rest de ArcGIS para JavaScript ",
        "incorrecta1": "API de ArcGIS para Python",
        "incorrecta2": "API de ArcGIS para JavaScript",
        "incorrecta3": "API Rest de ArcGis para .NET"
      },
      {
        "name": "Survey 123:Personalización",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "Los objetos que son guardados en la constante FeatureToAdd que posteriormente son enviados a la capa, ¿se componen de?",
        "respuesta": "Atributos, referencia especial y coordenadas en X y Y",
        "incorrecta1": "Atributos y una referencia espacial",
        "incorrecta2": "Longitud y latitud",
        "incorrecta3": "Atributos y coordenadas en X"
      },

      {
        "name": "ArcPy : An Introduction",
        "url_logo": "assets/img/charlas/python.png",
        "pregunta": "¿Qué es ArcGIS notebook y que función cumple?",
        "respuesta": "Es un entorno de ejecución de ArcGIS que nos permite escribir, ejecutar y visualizar nuestro código al instante.",
        "incorrecta1": "Es una aplicación de ArcGIS que nos ayuda a realizar procesos de geocodificación.",
        "incorrecta2": "Es una herramienta de ArcGIS Desktop que nos permite escribir y ejecutar, más no visualizar los resultados de nuestro código.",
        "incorrecta3": "Es un modulo de acceso a datos"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál es nuevo producto de ArcGIS que permite un contenido de imágenes mejorado dentro de ArcGIS Online?",
        "respuesta": "ArcGIS Image",
        "incorrecta1": "ArcGIS Field Maps",
        "incorrecta2": "ArcGIS Velocity",
        "incorrecta3": "ArcGIS Storymaps"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál es la función de ArcGIS Velocity?",
        "respuesta": "Permitir una integración de datos en tiempo real par la toma de decisiones",
        "incorrecta1": "Permitir imáganes espaciales para un mejor entendimiento del terreno",
        "incorrecta2": "Permitir análisis pasados de un mapa específico",
        "incorrecta3": "Todas las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Qué programa de ArcGIS utiliza drones para generar las visualizaciones?",
        "respuesta": "Site Scan for GIS",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ArcGIS Enterprise",
        "incorrecta3": "ArcGIS Storymaps"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál es la función de ArcGIS survey 123?",
        "respuesta": "Captura de datos basada en formularios",
        "incorrecta1": "Utilización de drones para el levantamiento de terrenos",
        "incorrecta2": "Contenido de imágenes que ayudan al entendimiento del terreno",
        "incorrecta3": "Todas las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿ArcGIS Field Maps reune cuál/es aplicaciones de ArcGIS?",
        "respuesta": "Survey 123 y ArcGIS Quick Capture",
        "incorrecta1": "Survey 123",
        "incorrecta2": "ArcGIS Quick Capture",
        "incorrecta3": "Ninguna de las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuáles son las funcionalidades de ARcGIS Field Maps? (Capacidades de edición)",
        "respuesta": "Ninguna de las anteriores",
        "incorrecta1": "Collector",
        "incorrecta2": "Explore",
        "incorrecta3": "Tracker"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cómo funciona ArcGIS Field Maps?",
        "respuesta": "Recolección en tiempo real desde el campo",
        "incorrecta1": "Recolección previo a la visita de campo",
        "incorrecta2": "Recolección posterior a la visita de campo",
        "incorrecta3": "Recolección de datos de campo en un tiempo determinado (días, meses, años)"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cual programa de ArcGIS crea historias inspiradoras e inmersivas combinando texto, mapas interactivos y otros contenidos multimedia?",
        "respuesta": "ArcGIS Storymaps",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ARcGIS Field Maps",
        "incorrecta3": "ArcGIS Image"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Qué programa de ArcGIS permite integrar Autodesk con ArcGIS para generar contenido más preciso?",
        "respuesta": "ArcGIS GeoBIM",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ArcGIS Enterprise",
        "incorrecta3": "Ninguna de las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Qué aplicación se puede utilizar para recolectar datos en el campo?",
        "respuesta": "ArcGIS Field Maps",
        "incorrecta1": "ArcGIS Urban ",
        "incorrecta2": "ArcGIS Indoors",
        "incorrecta3": "ArcGIS Pro"
      },

      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cómo se pueden visualizar dos capas sin utilizar transparencias?",
        "respuesta": "Blending",
        "incorrecta1": "Clipping",
        "incorrecta2": "Buffer",
        "incorrecta3": "Erasing"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿En cuál centro deportivo se está utlizando ArcGIS Velocity para mejorar el uso de recursos? ",
        "respuesta": "Aspen",
        "incorrecta1": "Summit Mountain",
        "incorrecta2": "Vail",
        "incorrecta3": "Telluride"
      },

      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Qué le puede agregar a un StoryMap? ",
        "respuesta": "videos",
        "incorrecta1": "mapas",
        "incorrecta2": "imágenes",
        "incorrecta3": "todas las anteriores"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "La integración de GIS y BIM le permitirá crear mejores ",
        "respuesta": "modelos 3D",
        "incorrecta1": "bases de datos",
        "incorrecta2": "mapas base",
        "incorrecta3": "colaboraciones"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Para qué le sirven las colecciones en ArcGIS StoryMaps?",
        "respuesta": "como portafolio de proyectos",
        "incorrecta1": "para diseñar mapas",
        "incorrecta2": "para crear mapas",
        "incorrecta3": "para modificar mapas"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál es el número de esta Conferencia de Usuarios?",
        "respuesta": "41",
        "incorrecta1": "45",
        "incorrecta2": "38",
        "incorrecta3": "35"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál es el slogan o mensaje central de esta UC?",
        "respuesta": "Creando un futuro sostenible ",
        "incorrecta1": "Creando un futuro SIGnificativo",
        "incorrecta2": "Los mapas son el futuro",
        "incorrecta3": "Un mejor futuro con sostenibilidad"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál ciudad de Alemania aplico los SIG para mejorar sus servicios públicos?",
        "respuesta": "Munich",
        "incorrecta1": "Berlin",
        "incorrecta2": "Düsseldorf",
        "incorrecta3": "Colonia"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál de estas metodologías NO integra el Geographical Approach? ",
        "respuesta": "GeoMarketing",
        "incorrecta1": "GeoAnalytics",
        "incorrecta2": "GeoDesign",
        "incorrecta3": "GeoCollaboration"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál de las siguientes herramientas se destacó como una novedad de ArcGIS? ",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "Imagery and Remote Sensing",
        "incorrecta2": "Field Operations",
        "incorrecta3": "Real-Time GIS "
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Qué herramienta NO hace parte de ArcGIS?",
        "respuesta": "ArcGIS Timeline",
        "incorrecta1": "ArcGIS Velocity",
        "incorrecta2": "ArcGIS Urban",
        "incorrecta3": "ArcGIS Dashboards"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuáles fueron las mejoras para la Interactive Web Mapping?",
        "respuesta": "Rápido e intuitivo",
        "incorrecta1": "Poderoso y emocionante",
        "incorrecta2": "Herramientas mejoradas y flujos de trabajo",
        "incorrecta3": "Todas las anteriores"
      },

      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿A cuál de estos conceptos empezamos a llamar GeoAI?",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "Machine Learning",
        "incorrecta2": "Deep Learning",
        "incorrecta3": "AI ( Artificial Inteligence)"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Con qué herramienta podemos planificar, gestionar, recopilar y procesar imágenes?",
        "respuesta": "Drone Mapping",
        "incorrecta1": "Interactive Visual Analytics",
        "incorrecta2": "Spatial Analysis",
        "incorrecta3": "Reality Capture at scale"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Con cuál ArcGis podemos geodiseñar ciudades?",
        "respuesta": "ArcGIS Urban",
        "incorrecta1": "ArcGIS GeoPlanner",
        "incorrecta2": "ArcGIS Indoors",
        "incorrecta3": "ArcGIS Business Analyst"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿El ejemplo de realidad virtual y la modelación en 3D presentado en la plenaria los aplica en cual campo?",
        "respuesta": "Planeación urbana",
        "incorrecta1": "Defensa",
        "incorrecta2": "Agricultura",
        "incorrecta3": "Aviación"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "Utilizando datos LiDAR se pueden detectar",
        "respuesta": "Todas las anteriores",
        "incorrecta1": "Árboles individuales",
        "incorrecta2": "Huellas de edificios",
        "incorrecta3": "Topografía"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Para qué se usa el SIG en seguridad y defensa?",
        "respuesta": "Proteccion de la comunidad",
        "incorrecta1": "para mediciones en campo",
        "incorrecta2": "para control de vacunas",
        "incorrecta3": "para medicion de predios"
      },
      {
        "name": "ArcGIS",
        "url_logo": "assets/img/charlas/survey.png",
        "pregunta": "¿Cuál es la herramienta donde se puede hacer un repositorio de imágenes en Story Maps?",
        "respuesta": "Collection- Storymaps",
        "incorrecta1": "ArcGIS online",
        "incorrecta2": "Collector ",
        "incorrecta3": "Expirience Builder"
      },

      


    ]

  };

  /* Función que obtiene un valor aleatorio de una matriz */
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
        "pregunta": "¿Dónde se encuentra la Sagrada Familia?",
        "respuesta": "Barcelona",
        "incorrecta1": "Madrid",
        "incorrecta2": "Paris",
        "incorrecta3": "Londres"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Quién fue el padre del psicoanálisis?",
        "respuesta": "Sigmund Freud",
        "incorrecta1": "Jean Piaget",
        "incorrecta2": "William James",
        "incorrecta3": "Iván Pávlov"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuál es el disco más vendido de la historia?",
        "respuesta": "Thriller, de Michael Jackson",
        "incorrecta1": "The Dark Side of the Moon- Pink Floyd",
        "incorrecta2": "El guardaespaldas- Whitney Houston.",
        "incorrecta3": "Back in Black- AC/DC"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En qué lugar del cuerpo se produce la insulina?",
        "respuesta": "páncreas",
        "incorrecta1": "Estomago",
        "incorrecta2": "Higado",
        "incorrecta3": "Bazo"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿De qué estilo arquitectónico es la Catedral de Notre Dame en París?",
        "respuesta": "Gótico",
        "incorrecta1": "Moderno",
        "incorrecta2": "Minimalista",
        "incorrecta3": "Clasico"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuál fue el primer metal que empleó el hombre?",
        "respuesta": "cobre",
        "incorrecta1": "Aluminio",
        "incorrecta2": "Oro",
        "incorrecta3": "Plata"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Quién escribió Hamlet?",
        "respuesta": "William Shakespeare",
        "incorrecta1": "Charles Dickens",
        "incorrecta2": "Christopher Marlowe",
        "incorrecta3": "Edgar Allan Poe"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En qué país se usó la primera bomba atómica en combate?",
        "respuesta": "Japón",
        "incorrecta1": "Afganistán",
        "incorrecta2": "Iran",
        "incorrecta3": "Irak"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuántos años tiene un lustro?",
        "respuesta": "5 Años",
        "incorrecta1": "10 Años",
        "incorrecta2": "100 Años",
        "incorrecta3": " 500 Años"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En qué año apareció en el mercado el primer videojuego protagonizado por Super Mario?",
        "respuesta": "1985",
        "incorrecta1": "1981",
        "incorrecta2": "1990",
        "incorrecta3": "1982"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuál es el animal que tiene mayor facilidad para repetir las frases y palabras que escucha?",
        "respuesta": "Cuervo",
        "incorrecta1": "Loro",
        "incorrecta2": "Tucan",
        "incorrecta3": "Guacamaya"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuál es la lengua más antigua de las que sobreviven en Europa?",
        "respuesta": "Vasco",
        "incorrecta1": "Aleman",
        "incorrecta2": "Ingles",
        "incorrecta3": "Catalán"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuántos corazones tienen los pulpos?",
        "respuesta": "3",
        "incorrecta1": "4",
        "incorrecta2": "1",
        "incorrecta3": "2"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En qué año se produce la Revolución Francesa?",
        "respuesta": "1789",
        "incorrecta1": "1506",
        "incorrecta2": "1689",
        "incorrecta3": "1987"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿De qué país es originario el café?",
        "respuesta": "Etiopia",
        "incorrecta1": "Colombia",
        "incorrecta2": "Venezuela",
        "incorrecta3": "Ecuador"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuál es el órgano más grande del cuerpo humano?",
        "respuesta": "La piel",
        "incorrecta1": "El Corazón",
        "incorrecta2": "El intestino delgado",
        "incorrecta3": "Los pulmones"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuántas naciones conforman el Reino Unido?",
        "respuesta": "4",
        "incorrecta1": "3",
        "incorrecta2": "5",
        "incorrecta3": "6"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En que continente  se encuentra la Patagonia?",
        "respuesta": "America",
        "incorrecta1": "Africa",
        "incorrecta2": "Oceania",
        "incorrecta3": "Asia"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En qué año se derribo el muro de Berlín?    ",
        "respuesta": "1989",
        "incorrecta1": "1990",
        "incorrecta2": "1988",
        "incorrecta3": "1991"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿Cuál es el “País del Sol Naciente”?",
        "respuesta": "Japon",
        "incorrecta1": "Corea del Sur",
        "incorrecta2": "Argentina",
        "incorrecta3": "Uruguay"
      },
      {
        "name": "Cultura General",
        "url_logo": "assets/img/culturaGeneral.png",
        "pregunta": "¿En qué país se encuentra el rascacielos más alto del mundo?",
        "respuesta": "Emiratos Arabes Unidos",
        "incorrecta1": "Estados Unidos",
        "incorrecta2": "Qatar",
        "incorrecta3": "Arabia Saudi"
      },

    ]

  };

  /* Función que obtiene un valor aleatorio de una matriz */
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
      // alert('Respuesta correcta, ganaste 8 puntos');
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
      swal("No respondiste a tiempo, pierdes 5 puntos", {
        icon: "error",
        button: false,
        timer: 2000,
      });
      //  alert('No respondiste a tiempo, pierdes 5 puntos');
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
      // alert('Respuesta incorrecta, perdiste 5 puntos');
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
  let divPreguntas = document.querySelector('.seccion-preguntas3');
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
  
