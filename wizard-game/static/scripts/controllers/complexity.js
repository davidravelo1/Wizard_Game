import Laser from '../models/Laser.js';
export default class Complexity {
  constructor(){
    this.cambio = 8;
  }

  increaseVelocity(listLaser, timeScore){
    if(timeScore > this.cambio && this.cambio <= 30){
      listLaser.map((laser)=>{
          laser.modifyVelocidad(2);
      });
    }
  }

  increaseLasers(listLaser, timeScore){
    if(timeScore > this.cambio && this.cambio <= 30)
      listLaser.push(new Laser());
  }

  modifyComplex(timeScore){
    if(timeScore > this.cambio && this.cambio <= 30)
      this.cambio+=6;
  }

}




