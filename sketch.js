const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var objectOptions={
    isStatic:true
  }
  object=Bodies.rectangle(200,380,20,20,objectOptions);
  World.add(world,object);
  console.log(object);
  
  var ballOptions={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,50,ballOptions);
  World.add(world,ball);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect (object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  
  drawSprites();
}