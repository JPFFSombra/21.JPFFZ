
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola,chao,traveEsquerda,traveDireita

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var bola_opcoes={
	isStatic:false,
	restitution: 0.3,
	friction:0,
	density:1.2
	}

	bola = Bodies.circle(260,100,20,bola_opcoes)
	World.add(world,bola)

	chao = new Chao(350, 450, 700, 10)
	traveEsquerda = new Chao(500,400,20,100)
	traveDireita = new Chao(600,400,20,100)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)

  background(0);

  ellipse(bola.position.x,bola.position.y,20,20)
  chao.display()
  traveEsquerda.display()
  traveDireita.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bola,bola.position,{x:35,y:-65})
	}
}



