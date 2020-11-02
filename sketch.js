
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImg , boy
function preload()
{
	boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,600,800,20)
mango1 = new Mango(750,400)
mango2 = new Mango(700,300)
mango3 = new Mango(600,200)
mango4 = new Mango(600,400)
mango5 = new Mango(500,300)
tree = new Tree(600,400,500,500)
stone = new Stone(100,510,10,10)
boy = new Boy(200,510,200,300)

chain = new Chain(stone.body , {x:130,y:450} , 100 ,0.4)





	Engine.run(engine);
  
}


function draw(detectCollision) {
  rectMode(CENTER);
  background("white");
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  stone.display();
  boy.display();
chain.display();
  drawSprites();

  detectollision(stone , mango1)
  detectollision(stone , mango2)
  detectollision(stone , mango3)
  detectollision(stone , mango4)
  detectollision(stone , mango5)

 
}
 function mouseDragged(){
Matter.Body.setPosition(stone.body , {x:mouseX , y:mouseY})

 }

function mouseReleased(){
chain.fly();
mouseDragged = false

}

function detectollision(Lstone , Lmago){
  mangoBodyPosition = 1mango.body.position
stoneBodyPosition = 1stone.body.position

var distance=dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
if(distance<=1mango.r+1stone.r){

Matter.Body.setStatic(1mango.body , false);
}

}
