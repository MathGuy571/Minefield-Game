class Mine {
    constructor() {
        this.p = new Vector(random(W), random(H));
        this.r = random(30, 15);
        
        this.invmpdist = true;
        this.checkPosition();
    }
    
    checkPosition() {
        do {
            //mine - player distance
            let v1 = new Vector(this.p.x, this.p.y);
            let v2 = new Vector(p.p.x, p.p.y);
            v1.subtract(v2);
            let mpdist = v1.magn();
            
            if(mpdist<(this.r + p.r)) {
                this.p.x = random(W);
                this.p.y = random(H);
            } else {
                this.invmpdist = false;
            }
        } while(this.invmpdist);
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.p.x, this.p.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fill();
        ctx.closePath();
    }
}
