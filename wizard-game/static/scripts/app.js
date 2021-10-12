import Board from "../scripts/view/board.js";


var ctx = document.getElementById("myCanvas").getContext("2d");
var tecla;
var teclaPause = true;
var puntaje_contenedor =  document.getElementById("puntaje");
var canvas =  document.getElementById("canvas_container");
var puntaje = document.getElementById("punt");
document.addEventListener("keydown", handleKey);
  

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

var colision = false;
var board = new Board(ctx);
const drawScenary = () =>{
  
  if(colision){
    puntaje_contenedor.style.display = "block";
    canvas.style.display = "none";
    puntaje.value=parseInt(board.score);
    document.removeEventListener("keydown", handleKey)
  }
  else if(canvas.style.display!="none"){
    colision = board.drawElements(tecla, teclaPause);
    tecla = '';
  }
  
}
setInterval(drawScenary, board.fps); // 300en ms

drawScenary();
