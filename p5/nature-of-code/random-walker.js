"use strict";

const randomWalker = (s) => {
    function Walker(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.g = g;
        this.b = b;
        this.tx = s.random(0, 10000);
        this.ty = s.random(0, 10000);

        this.walk = () => {
            // move w/ perlin noise, biased toward center of canvas
            this.x += s.map(s.noise(this.tx), 0, 1, -5, 5.35) + ((s.width / 2 - this.x) * .005);
            this.y += s.map(s.noise(this.ty), 0, 1, -5, 5.35) + ((s.height / 2 - this.y) * .005);
            this.tx += 0.01;
            this.ty += 0.01;

            s.fill(r, g, b);
            s.stroke(0);
            s.ellipse(this.x, this.y, 20, 20);
        }
    }

    let blueWalker;
    let orangeWalker;

    s.setup = () => {
        s.createCanvas(700, 700);
        s.background(35);
        blueWalker = new Walker(s.width / 2, s.height / 2, 0, 162, 255);
        orangeWalker = new Walker(s.width / 2, s.height / 2, 255, 93, 0);
    }

    s.draw = () => {
        blueWalker.walk();
        orangeWalker.walk();
    }

}

const randomWalkerCanvas = new p5(randomWalker, 'randomWalkerCanvas');
