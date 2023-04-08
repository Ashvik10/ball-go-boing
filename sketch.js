
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundobg =new ground(400,680,800,10)
    left=new ground(600,620,20,120)
	right=new ground(700,620,20,120)
	var ballOption={
		isStatic:false,restitution:0.3,friction:0,density:1.2
	}
	ball=Bodies.circle(100,10,10,ballOption)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobg.display()
 left.display()
right.display()
ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:5,y:-5})
	}
}

