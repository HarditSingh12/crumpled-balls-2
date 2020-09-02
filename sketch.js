
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,groundSprite;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	

	ground = Bodies.rectangle(400,630,800,20,{isStatic:true});
	World.add(world,ground);

	

	rectMode(CENTER);
	groundSprite = createSprite(400,670,800,20);

	ball = new Ball(70,350,30);

	bin1 = new Bin (690,545,190,220);
	
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball.display();

   bin1.display();
 
   

 groundSprite.x = ground.position.x;
 groundSprite.y = ground.position.y;
  
  drawSprites();
 
}


function keyPressed(){
	if(keyDown("space")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0.11,y:-0.15});
	  }
	

}
