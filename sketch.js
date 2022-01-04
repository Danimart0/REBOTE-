
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
//crear engine
engine = Engine.create();
world = engine.world;

  //Agregar world a engine
  

  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
   }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo

//agregarlo a world
  ball = Bodies.circle(100,10,20,ball_options);
   World.add(world,ball);
  
  suelo = Bodies.rectangle(150,300,200,30,ground_options);
  World.add(world,suelo);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
 ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 rect(suelo.position.x,suelo.position.y,200,30);


  
  
}

