const day1Solution = () => {
    async function asyncReadFile(filename) {
      try {
        const contents = await fsPromises.readFile("./day1input.txt", 'utf-8');

        const arr = contents.split(/\r?\n/);

        console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

        return arr;
      } catch (err) {
        console.log(err);
      }
    }
}


// -------------------------------------------------------


const day1Sketch = (s) => {
    s.setup = () => {
        s.createCanvas(900, 900);
        s.pixelDensity(1); // for mac retina, 4px / px
    };

    s.draw = () => {
        s.ellipse(100, 100, 100, 100);
    }
}

const day1Canvas = new p5(day1Sketch, 'canvas');