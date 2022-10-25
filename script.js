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

function newCanvas(e) {
  let newPixels = +prompt("Please enter the new size of the grid (<=100)");
  if (typeof newPixels !== 'number' || newPixels <= 0 || newPixels > 100) {
    alert("Bad input");
    return;
  } else {
    pixelCount = newPixels;
    wipeCanvas();
    drawCanvas(pixelCount);
  }
}

let pixelCount = 16;
drawCanvas(pixelCount);

const btn = document.querySelector(".size");
btn.addEventListener('click', newCanvas);