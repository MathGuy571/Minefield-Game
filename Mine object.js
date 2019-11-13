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
        circle(this.p.x, this.p.y, this.r, "rgb(255, 0, 0)", false);
    }
}
