
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,bin;


function setup() {
	createCanvas(1200, 500);
	
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(600,500,1200,25)
	ground.shapeColor="yellow"

	bin=new Wall(890,380)

	paper=new Paper(200,300,70)
	
	//paper.shapeColor="blue"
	//Create the Bodies Here.

	Engine.run(engine);
  }


function draw() {

  rectMode(CENTER);
  background("pink");
  
  paper.display();
  ground.display();
 
  bin.display();

  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-140});
	}
}