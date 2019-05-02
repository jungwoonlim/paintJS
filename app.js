// app.js
// canvas에 대해서 이해를 하고 싶다면 CanvasRenderingContext2D, Canvas API 참고


const canvas = document.getElementById(`jsCanvas`);
const ctx = canvas.getContext(`2d`);
const colors = document.getElementsByClassName(`jsColor`);
const range = document.getElementById(`jsRange`);
const mode = document.getElementById(`jsMode`);

const INITIAL_COLOR = "#2c2c2c2";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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
        // console.log(`creating line in ${x,y}`);
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        // console.log(`creating line in ${x,y}`);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

// function onMouseDown(event) {
//     painting = true;
// }

// function onMouseUp(event) {
//     stopPainting();
// }

function handleColorClick(event) {
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    // console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
    // console.log(event.target.value);
}

function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerHTML = `Fill`;
    } else {
        filling = true;
        mode.innerHTML = `Paint`;
        // ctx.fillRect(50,20,100,49);
    }
}

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

if(canvas) {
    canvas.addEventListener(`mousemove`, onMouseMove);
    canvas.addEventListener(`mousedown`, startPainting);
    canvas.addEventListener(`mouseup`, stopPainting);
    canvas.addEventListener(`mouseleave`, stopPainting);
    canvas.addEventListener(`click`, handleCanvasClick);
}


// console.log(colors);
// console.log(Array.from(colors));
if (colors) {
    Array.from(colors).forEach(color => 
        color.addEventListener(`click`, handleColorClick)
    );    
}

if (range) {
    range.addEventListener(`input`, handleRangeChange);
}

if (mode) {
    mode.addEventListener(`click`, handleModeClick);
}