class Log{
    constructor(x,y,width,height){
        var options = {
            "density":1,
            "friction":0.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
      }
}