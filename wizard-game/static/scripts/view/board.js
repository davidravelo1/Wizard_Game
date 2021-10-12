import Mago from "../models/Mago.js";
import Laser from "../models/Laser.js";
import Complexity from '../controllers/complexity.js';

export default class Board{ 
  constructor(ctx){
    this.ctx = ctx;
    this.mago = new Mago();
    this.arrLaser = [new Laser()];
    this.complex = new Complexity();

    this.colision = false;
    this.score = 0;
    this.teclaPause = true;
    this.fps = 60;
    this.aumento = this.fps/1000;
  }


  drawScore(puntaje){
      this.ctx.font = '1em monospace';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('score: '+parseInt(puntaje),215,15);
      this.ctx.font = '20px serif';
  }

  drawPause(){
      this.ctx.font = '1em monospace';
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('PAUSE',10,15);
      this.ctx.font = '20px serif';
  }

  drawElements(tecla, teclaPause){
    var imgBack = new Image();   // Create new img element
    imgBack.addEventListener('load', ()=>{

      this.ctx.drawImage(imgBack,0,0,300,150); //width height
      this.drawScore(this.score);
      if(teclaPause){
        this.drawPause();
        this.mago.draw(this.ctx);
        this.arrLaser.map((e)=>e.draw(this.ctx));
      }
      else {  
        this.score+=this.aumento;
        this.colision = this.mago.colision(this.arrLaser);    
        this.arrLaser.map((e)=>{ e.update( this.ctx, this.colision)});
        //complejidad del juego------------
        this.complex.increaseVelocity(this.arrLaser, parseInt(this.score));
        this.complex.increaseLasers(this.arrLaser, parseInt(this.score));
        this.complex.modifyComplex(parseInt(this.score));
        //-----------------------------
        this.mago.update(this.ctx, tecla);
      }
    }, false);
    imgBack.src = 'static/assets/background-game.jpg'; // Set source path
    return this.colision;
  }
}


