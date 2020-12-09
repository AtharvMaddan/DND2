
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin3,dustbin1,dustbin2;
var wallBody,wall1Body,wall2Body
var paper,dustbin,ground ;
var dustbinImg,paperImg;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
	paperImg = loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);

	
	

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  ground = new Ground(800,670,1600,20)
  paper = new trash(150,450,70)
  dustbin = new Dustbin(500,450,40,50)
  dustbin1 = new Dustbin(1280,650,200,20)
dustbin2 = new Dustbin(1190,600,20,100)
dustbin3 = new Dustbin(1350,607,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display()
 dustbin.display()
 paper.display()
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-105})
		}
}

