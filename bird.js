class Bird{

    constructor(x, y) {

        var options = {

            restitution : 0.3,
            friction : 1,
            density: 0.5

        }

        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.width = 60;
        this.height = 60;

        World.add(world, this.body)
    }


    display(){

        var pos = this.body.position;
        pos.x = mouseX
        pos.y = mouseY
        var angle = this. body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red")
        rect(0, 0, this.width, this.height);
        pop();

    }

}
