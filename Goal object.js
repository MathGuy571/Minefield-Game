class Goal {
    constructor() {
        this.p = new Vector(random(W), random(H));
        this.r = 10;
        
        this.invgpdist = true;
        this.invgmdist = true;
        this.checkPosition();
    }
    
    checkPosition() {
        do {
            //check goal - player distance
            let v1 = new Vector(this.p.x, this.p.y);
            let v2 = new Vector(p.p.x, p.p.y);
            v1.subtract(v2);
            let gpdist = v1.magn();
            
            if(gpdist<(this.r + p.r)) {
                this.p.x = random(W);
                this.p.y = random(H);
            } else {
                this.invgpdist = false;
            }
            
            //check goal - mines distance
            let sum = 0;
            for(let i=0; i<mines.length; i++) {
                let v1 = new Vector(this.p.x, this.p.y);
                let v2 = new Vector(mines[i].p.x, mines[i].p.y);
                v1.subtract(v2);
                let gmdist = v1.magn();
                if(gmdist<(this.r + mines[i].r)) {
                    this.p.x = random(W);
                    this.p.y = random(H);
                } else {
                    sum++;
                }
            }
            
            if(sum == mines.length)
                this.invgmdist = false;
        } while(this.invgpdist || this.invgmdist);
    }
    
    relocate() {
        this.p.x = random(W);
        this.p.y = random(H);
        this.invgpdist = true;
        this.invgmdist = true;
        this.checkPosition();
    }

    draw() {
        circle(this.p.x, this.p.y, this.r, 0, 2*Math.PI, false);
    }
}
