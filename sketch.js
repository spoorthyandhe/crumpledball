
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,paperobject;
var boxBase,boxBottomBody,boxleftBody;
var boxleftSprite,boxRightBody,boxRightSprite;
var boxPosition;

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
paperobject= new Paper(100,500,50,100,500);
ground = new Ground(0,height,3200,55);

box.Position=200;
boxY=210;

boxleftSprite=createSprite(900,600,20,130);
boxleftSprite.shapeColor="white";

boxleftBody=Bodies.rectangle(900,600,20,100,{isStatic:true} );
World.add(world,boxleftBody);

boxBase=createSprite(800,660,200,20);
boxBase.shapeColor="white";

boxBottomBody=Bodies.rectangle(800,660,200,20,{isStatic:true} )
World.add(world,boxBottomBody);

boxRightSprite=createSprite(700,600,20,130);
boxRightSprite.shapeColor="white";

boxRightBody=Bodies.rectangle(700,600,0,0,{isStatic:true} );
World.add(world,boxRightBody)

	Engine.run(engine);
  
}

function draw() {
  background(0);

  drawSprites();
  paperobject.display();
  ground.display();
  boxleftSprite.display();
  boxRightSprite.display();
  boxBase.display();

}

function keyPressed() {
	
 if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paperobject.body, paperobject.body.position,{x:110,y:-110}) 
  }
}


