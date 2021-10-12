export default function Laser(){
  this.posX = 240;
  this.posY = Math.floor(Math.random()*(145)); //(max - min) + min;
  this.img = document.getElementById('laserGreen'); 
  this.velocidad = 5;


  this.draw = function(ctx){
    ctx.drawImage(this.img,this.posX,this.posY,50,5);
  }

  this.modifyVelocidad = function(velocidad){
    this.velocidad+= velocidad;
  }

  this.reset = function(){
      this.velocidad = 5;
      this.cambioVelocidad = 5;
  }

  this.update = function(ctx, colision){
    this.draw(ctx);
    if(this.posX < -50 || colision){
      this.posY =  Math.floor(Math.random()*(145));// max 145
      this.posX = 240 ;
      if(colision)
        this.reset();
    }
    else{
      this.posX = this.posX-this.velocidad;
    } 
  }
}
