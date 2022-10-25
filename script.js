//const btn = document.querySelector(".pixels");
//btn.addEventListener('click', getNewPixelCount);

let pixelCount = 16;

function drawCanvas(pixels) {
  const canvas = document.querySelector('.canvas');
  console.log(canvas);
  for (i = 0; i < pixels; i++) {
    let column = document.createElement('div');
    column.className = 'col';
    for (j = 0; j < pixels; j++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      column.appendChild(pixel);
    }
    canvas.appendChild(column);
  }
}

function wipeCanvas() {
  const rows = document.querySelectorAll('.col');
  const canvas = document.querySelector('.canvas');
  rows.forEach(row => {canvas.removeChild(row)});
}

drawCanvas(pixelCount);