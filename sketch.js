var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  
  car = createSprite(50, 200, 50, 50);
  car.VelocityX=speed;
  wall = createSprite(1500, 200, 60, height/2);
  
  speed=random(55, 90);
  weight=random(400, 1500);
  
}  

function draw() {
  background(220);
  
  if(wall.x-car.x < (car.width+wall.width)/2) {
    
    car.VelocityX=0;
     var deformation=(0.5*weight*speed*speed)/22500;
    
    if(deformation > 180) {
      car.ShapeColor=color(225, 0, 0);
    }
    
    if(deformation < 180 && deformation>100) {
      car.shapeColor=color(230, 230, 0);
    }
    if(deformation<100) {
      car.shapeColor=color(0, 255, 0);
    }
  }
  drawSprites();
}