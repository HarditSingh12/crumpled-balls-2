class Ball {
    constructor(x,y,radius){
        var options = {
            restitution:0.8,
            isStatic:false
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.body.radius = radius;
        this.image = loadImage("images/paper.png");
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
    }
}