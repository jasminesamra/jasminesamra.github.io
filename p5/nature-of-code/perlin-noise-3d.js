const threeDPelinNoiseGraph = (s) => {
    // the third dimension is time
    let perlinIncrement = 0.02;
    let perlinStart = 0; 
    let tOffset = 0;
    let color1 = s.color("#ff62bb")
    let color5 = s.color("#df9be8")
    let color2 = s.color("#7781ff")
    let color6 = s.color("#3f72d2")
    let color3 = s.color("#45d071")
    let color8 = s.color("#6cf778")
    let color4 = s.color("#ffd84e")
    let color7 = s.color("#fcb673")

    s.setup = () => {
        s.createCanvas(900, 900);
        s.pixelDensity(1); // for mac retina, 4px / px
        s.noiseDetail(2);
    };

    s.draw = () => {
        s.loadPixels();

        let yOffset = perlinStart;

        for(let y = 0; y <= s.height; y ++) {
            let xOffset = perlinStart;
            for (let x = 0; x < s.width; x++) {
                let i = (x + y * s.width) * 4;
                const perlinValue = s.noise(xOffset, yOffset, tOffset);
                const r = s.map(perlinValue, 0, 1, 0, 100);
                const color = r < 25 ?
                      color1 : r < 32 ?
                      color2 : r < 45 ?
                      color3 : r < 50 ?
                      color4 : r < 55 ?
                      color5 : r < 65 ?
                      color6 : r < 69 ?
                      color7 : color8;
                
                
                s.pixels[i] = color.levels[0];
                s.pixels[i + 1] = color.levels[1];
                s.pixels[i + 2] = color.levels[2];
                s.pixels[i + 3] = color.levels[3];
                
                xOffset += perlinIncrement;
            }
            yOffset += perlinIncrement;
        }        
        s.updatePixels();
        tOffset += perlinIncrement;
    };
}

const threeDPelinNoiseGraphCanvas = new p5(threeDPelinNoiseGraph, 'threeDPelinNoiseGraph');