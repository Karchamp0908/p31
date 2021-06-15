var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 170; k <=170; k = k + 170) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 260; k <=260; k = k + 260) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 350; k <=350; k = k + 350) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 440; k <=440; k = k + 440) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 530; k <=530; k = k + 530) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 620; k <=620; k = k + 620) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 710; k <=710; k = k + 710) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 800; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,230));
  }
  
  //create 4th row of plinko objects
  for (var j = 80; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,280));
  }
  

  //create particle objects
  
    
}
 


function draw() {
  rectMode(CENTER)
  background(0);
 drawSprites()
  
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
if (frameCount %60 === 0){
  particles.push(new Particle(random(width/2-30, width/2+30),10,10));
}
  //display the paricles 
for (var p = 0; p < particle.length; p++){
    particle[p].display();
}


Engine.update(engine);
  ground.display();
  
}