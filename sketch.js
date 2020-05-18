var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  //speed and weight variables for checking the deformation later
  speed = random(55,90);
  weight = random(400,1500);

  //sprites for the car and wall
  wall = createSprite(1500,200,60,800);
  car = createSprite(50,200,50,50);
  car.shapeColor = color(255,255,255);
}

function draw() {
  background(0); 
  
  //sets the cars velocityX to speed
  car.velocityX = speed;

  //checks for collision
  if (car.width/2 + wall.width/2 >= wall.x - car.x){
      //stops the car
      car.velocityX = 0;
      //checkes the deformation by creating a deformation variable
      var deformation = weight*speed*speed/45000;

      //deformation is good
      if (deformation<80){
        //indicates that the deformation is good by changing the color of the car to green
        car.shapeColor = "green";
      }
      //deformation is average
      if (deformation>=80 && deformation<180){
        //indicates that the deformation is average by changing the color of the car to yellow
        car.shapeColor = "yellow";
      }
      //deformation is lethal
      if (deformation>=180){
        //indicates that the deformation is lethal by changing the color of the car to red
        car.shapeColor = "red";

      }
    }

  drawSprites();
}