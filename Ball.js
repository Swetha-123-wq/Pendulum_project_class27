class Ball{
    constructor(x, y, width) {
        var options = {
            restitution : 1.0,
            density : 1.0
          }
          this.ball  = Bodies.circle(x,y,width,options);
          World.add(world,this.ball);
      }
      display(){
         
         fill("blue");
         ellipseMode(RADIUS);
         ellipse(this.ball.position.x,this.ball.position.y,40);
      }
}