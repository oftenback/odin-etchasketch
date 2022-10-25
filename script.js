//const btn = document.querySelector(".size");
//btn.addEventListener('click', getNewPixelCount);

let pixelCount = 16;

function colorsIn(e) {
  this.classList.add('colored');
}

function drawCanvas(size) {
  const canvas = document.querySelector('.canvas');
  for (i = 0; i < size; i++) {
    let column = document.createElement('div');
    column.className = 'col';
    for (j = 0; j < size; j++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      column.appendChild(pixel);
    }
    canvas.appendChild(column);
  }
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => pixel.addEventListener('mouseover', colorsIn));
}

function wipeCanvas() {
  const rows = document.querySelectorAll('.col');
  const canvas = document.querySelector('.canvas');
  rows.forEach((row) => {canvas.removeChild(row)});
}

drawCanvas(pixelCount);