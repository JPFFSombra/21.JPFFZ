class Chao{
 constructor(x,y,largura,altura){
    let opcoes = {
     isStatic: true   
    }
    this.largura=largura
    this.altura=altura
  this.corpo = Bodies.rectangle(x,y,largura,altura,opcoes)
  World.add(world,this.corpo)  
 }
 display(){
  rect(this.corpo.position.x,this.corpo.position.y, this.largura, this.altura)  
 }   
}