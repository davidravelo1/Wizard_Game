import Mago from "../scripts/models/Mago.js";
import Laser from "../scripts/models/Laser.js";
import Complexity from '../scripts/controllers/complexity.js';

document.addEventListener("keydown", handleKey);
var ctx = document.getElementById("myCanvas").getContext("2d");
var puntaje = document.getElementById('puntaje');
var canvas = document.getElementById('myCanvas');

const mago = new Mago();
const arrLaser = [new Laser()];
const complex = new Complexity();

var colision = false;
var score = 0;
var tecla;
var teclaPause = true;
var fps = 60;
var aumento = fps/1000;

function handleKey(e){
  switch (e.keyCode){
    case 87:
      tecla = 'arriba';
      break;
    case 83:
      tecla = 'abajo';
      break;
    case 80:
      teclaPause = !teclaPause;
      break;
  }
  e.preventDefault();
}

function drawScore(puntaje){
    ctx.font = '1em monospace';
    ctx.fillStyle = 'white';
    ctx.fillText('score: '+parseInt(puntaje),215,15);
    ctx.font = '20px serif';
}

const drawElements = () =>{
  var imgBack = new Image();   // Create new img element
  imgBack.addEventListener('load', ()=>{

    ctx.drawImage(imgBack,0,0,300,150); //width height
    drawScore(score);
    if(teclaPause){
      mago.draw(ctx);
      arrLaser.map((e)=>e.draw(ctx));
      tecla = '';
    }
    else {  
      score+=aumento;
      colision = mago.colision(arrLaser);    
      console.log(colision);
      arrLaser.map((e)=>{ e.update( ctx, colision)});
      //complejidad del juego------------
      complex.increaseVelocity(arrLaser, parseInt(score));
      complex.increaseLasers(arrLaser, parseInt(score));
      complex.modifyComplex(parseInt(score));
      //-----------------------------
      mago.update(ctx, tecla);
      tecla = '';
    }
  }, false);
  imgBack.src = 'static/assets/background-game.jpg'; // Set source path
}
const drawScenary = () =>{
  ctx.beginPath();
  //if(mago.colision(laser.getX(),laser.getY(), laser.getWidth())){
    //console.log('perdió');
    //puntaje.style.display = "block";
    //canvas.style.display = "none";
  //}else{
    drawElements();
  //}
  ctx.closePath();
}
setInterval(drawScenary,fps); // 300en ms

drawScenary();
