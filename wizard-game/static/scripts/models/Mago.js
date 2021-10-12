export default function Mago(){
  this.posX = 0;
  this.posY = 80;
  this.score = 0;
  this.img = document.getElementById('mago'); 


  this.colision = function(listLaser){
    let res = false;
    listLaser.map((laser,i )=>{
      var distanciaInline = Math.sqrt( Math.pow(laser.posX - (this.posX - 10),2) ); 
      if(distanciaInline < 40 && laser.posY > this.posY+5 && laser.posY < this.posY + 45){
        res = true; 
      }
    });
    return res;
  }

  this.draw = function(ctx){
    ctx.drawImage(this.img,this.posX,this.posY,40,50);
  }

  this.update = function(ctx, orden){
    this.draw(ctx);
    this.move(orden);
  }

  this.move = function(orden){
    if(orden == 'arriba' && this.posY != 0)
      this.posY = this.posY - 5;
    if(orden == 'abajo' && this.posY != 100)
      this.posY = this.posY + 5;
  }
}

