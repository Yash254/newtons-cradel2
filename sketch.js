
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   ball1=new ball(150,500,50);
   ball2=new ball(200,500,50);
   ball3=new ball(250,500,50);
   ball4=new ball(300,500,50);
   ball5=new ball(350,500,50);
   roof1=new roof(400,50,800,150);
   rope1=new rope(ball1.body,roof1.body,-80,0);
   rope2=new rope(ball2.body,roof1.body,-40,0);
   rope3=new rope(ball3.body,roof1.body,-0,0);
   rope4=new rope(ball4.body,roof1.body,40,0);
   rope5=new rope(ball5.body,roof1.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function mouseDragged() {
  matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}