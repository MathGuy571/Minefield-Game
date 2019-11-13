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
            //check player - goal distance
            let v1 = new Vector(p.p.x, p.p.y);
            let v2 = new Vector(this.p.x, this.p.y);
            v2.subtract(v1);
            let gpdist = v2.magn();
            
            if(gpdist<(this.r+p.r)) {
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
                let gmdist = v2.magn();
                if(gmdist<(this.r+mines[i].r)) {
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
        circle(this.p.x, this.p.y, this.r, "rgb(0, 255, 0)", false);
    }
}
