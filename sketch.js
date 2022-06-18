const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var parede;




function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.97,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }


  

  ball = Bodies.circle(210,10,25,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  parede = Bodies.rectangle(300,130,200,25,ground_options);
  World.add(world,parede);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,25);
 rect(ground.position.x,ground.position.y,400,20);
 rect(parede.position.x,parede.position.y,200,25);
  
}

