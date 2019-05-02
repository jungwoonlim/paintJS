// app.js

const canvas = document.getElementById(`jsCanvas`);
const ctx = canvas.getContext(`2d`);

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    // offset - canvas와 관련있는 값
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

// function onMouseUp(event) {
//     stopPainting();
// }


if(canvas) {
    canvas.addEventListener(`mousemove`, onMouseMove);
    canvas.addEventListener(`mousedown`, startPainting);
    canvas.addEventListener(`mouseup`, stopPainting);
    canvas.addEventListener(`mouseleave`, stopPainting);
}





function init() {

}

init();