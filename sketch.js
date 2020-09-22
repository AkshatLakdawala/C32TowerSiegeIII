
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon;
var slingShot;
var ground3;
var score = 0;
var gameState = "onSling";


function preload()
{

}

function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground1 = new Ground(570,530,240,10);
	ground2 = new Ground(1000,400,180,10);
	ground3 = new Ground(800,690,3200,10);

	//level one
	block1 = new Box(480,505,30,40);
	block2 = new Box(510,505,30,40);
	block3 = new Box(540,505,30,40);
	block4 = new Box(570,505,30,40);
	block5 = new Box(600,505,30,40);
	block6 = new Box(630,505,30,40);
	block7 = new Box(660,505,30,40);
	
	
	
	
	//level two

	block8 = new Box2(510,465,30,40);
	block9 = new Box2(540,465,30,40);
	block10 = new Box2(570,465,30,40);
	block11 = new Box2(600,465,30,40);
	block12 = new Box2(630,465,30,40);
	//level three

	block13 = new Box3(540,425,30,40);
	block14 = new Box3(570,425,30,40);
	block15 = new Box3(600,425,30,40);
	//top

	block16 = new Box4(570,385,30,40);

	//level one

	block17 = new Box(940,375,30,40);
	block18 = new Box(970,375,30,40);
	block19 = new Box(1000,375,30,40);
	block20 = new Box(1030,375,30,40);
	block21 = new Box(1060,375,30,40);
	//level two

	block22 = new Box2(970,335,30,40);
	block23 = new Box2(1000,335,30,40);
	block24 = new Box2(1030,335,30,40);
	//top

	block25 = new Box3(1000,295,30,40);

	var options = {
		isStatic : false,
		density : 1.2,
		
	}

	polygon = Bodies.circle(250,350,20,options);
	World.add(world,polygon);

	slingShot = new SlingShot(this.polygon,{x:200 , y:350});


	



	

	


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground3.display();

  text("Press space to get a second chance to play!" , 1300,670);
  textSize(20);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  ground2.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  text("SCORE : "+score,100,100);
  textSize(35);
  

  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20);
  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  
  

  

  


  

  
 
 
  drawSprites();

 
}

function mouseDragged(){
	
	Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
	
}


function mouseReleased(){
	slingShot.fly();
	
}

function keyPressed() {
    if(keyCode === 32) {
		World.remove(world,this.polygon);
		var options = {
			isStatic : false,
			density : 1.2,
			
		}
        polygon = Bodies.circle(250,350,20,options);
	    World.add(world,polygon);
        slingShot.attach(this.polygon);
    }
}





