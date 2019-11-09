//const random = (max=1, min=0) => Math.random()*(max-min) + min;

const calcFPS = () => {
    let timeDiff = Date.now() - lastTimeCalled;
    lastTimeCalled = Date.now();
    fps.innerText = `fps: ${round(1000/timeDiff)}`;
};

const line = (x1, y1, x2, y2, color) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
};

const circle = (x, y, r, color) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*π);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
};

const map = (v, vmin, vmax, mvMin, mvMax) => {
    let a = (mvMax - mvMin) / (vmax - vmin);
    let b = v - vmin;
    return a * b + mvMin;
};
