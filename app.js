// app.js

const canvas = document.getElementById(`jsCanvas`);

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    // offset - canvas와 관련있는 값
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}


if(canvas) {
    canvas.addEventListener(`mousemove`, onMouseMove);
    canvas.addEventListener(`mousedown`, onMouseDown);
    canvas.addEventListener(`mouseup`, onMouseUp);
    canvas.addEventListener(`mouseleave`, stopPainting);
}





function init() {

}

init();