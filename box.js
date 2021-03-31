class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
            
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill("white")
        rect(this.x, this.y, this.width, this.height);
        imageMode(CENTER)
        image(this.image,640,540,200,200)
      }
}