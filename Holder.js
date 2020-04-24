class Holder{
    constructor(x, y, width, height) {
        var options={
            isStatic: true
          }
          this.width = width;
          this.height = height;
          this.holder = Bodies.rectangle(x,y,width.height,options);
           }

display(){
push();
    fill ("green");
    rectMode(CENTER);
    rect(this.holder.position.x,this.holder.position.y,this.width,this.height);

pop();
}

}