//const btn = document.querySelector(".pixels");
//btn.addEventListener('click', getNewPixelCount);

let pixelCount = 16;

function drawCanvas(pixels) {
  const canvas = document.querySelector(".canvas");
  console.log(canvas);
  for (i = 0; i < pixels; i++) {
    let column = document.createElement("col");
    for (j = 0; j < pixels; j++) {
      let pixel = document.createElement("pixel");
      column.appendChild(pixel);
    }
    canvas.appendChild(column);
  }
  console.log("complete");
}

drawCanvas(pixelCount);