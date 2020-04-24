class Cord {
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 0.004,
            length : 100
          }
          this.bodyA = bodyA;
          this.bodyB = bodyB; 
          this.string = Constraint.create(options);
          World.add(world,this.string);

    }

    display(){
  var pointA = this.string.bodyA.position;
var pointB = this.string.bodyB.position;
push();
strokeWeight(6);
stroke("skyblue");
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
    }
}