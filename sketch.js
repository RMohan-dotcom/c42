var iss,issImg
var ship,s1,s2,s3,s4
var hasDocked=false

function preload(){
issImg=loadImage('iss.png')
s1=loadImage("Docking-undocking/spacecraft1.png")
s2=loadImage("Docking-undocking/spacecraft2.png")
s3=loadImage("Docking-undocking/spacecraft3.png")
s4=loadImage("Docking-undocking/spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 400, 50, 50);
  iss.addImage("station",issImg)
  ship=createSprite(40, 400, 50, 50);
  ship.addImage("ship",s1)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(keyDown(UP_ARROW)){
  ship.y=ship.y-5
  ship.changeImage("up",s2)
  }
  if(keyDown(DOWN_ARROW)){
    ship.y=ship.y+5
    ship.changeImage("up",s1)
    }
    if(keyDown(RIGHT_ARROW)){
      ship.x=ship.y+5
      ship.changeImage("up",s3)
      }
      if(keyDown(LEFT_ARROW)){
        ship.x=ship.x-5
        ship.changeImage("up",s)
        }
        if(ship.x===400&&ship.y===400){
           hasDocked=true
        }
        if(hasDocked===true){
          ship.isStatic=true;
          text ("You are now docked",200,200)
        }
        else{
         ship.isStatic=false;
          if(keyDown(UP_ARROW)){
            ship.y=ship.y-5
            ship.changeImage("up",s2)
            }
            if(keyDown(DOWN_ARROW)){
              ship.y=ship.y+5
              ship.changeImage("up",s1)
              }
              if(keyDown(RIGHT_ARROW)){
                ship.x=ship.y+5
                ship.changeImage("up",s3)
                }
                if(keyDown(LEFT_ARROW)){
                  ship.x=ship.x-5
                  ship.changeImage("up",s)
                  if(ship.x===400&&ship.y===400){
                    hasDocked=true
                 }
                  }





        }
}