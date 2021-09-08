const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.004;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x, y;

    for (let index = 0; index < 5; index++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * index;
        y = iy + (h + gap) * j;

        context.strokeStyle = 'blue';
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();
        if (Math.random() > 0.5) {
          context.strokeStyle = 'red';
          context.beginPath();
          context.rect(x + 8, y + 8, w - 16, h - 16);
          context.stroke();
        }
      }
    }

    const gravity = 9.81;
    let velocity = 0.0;
  };
};

canvasSketch(sketch, settings);
