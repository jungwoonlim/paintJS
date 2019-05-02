// app.js
// canvas에 대해서 이해를 하고 싶다면 CanvasRenderingContext2D, Canvas API 참고


const canvas = document.getElementById(`jsCanvas`);
const ctx = canvas.getContext(`2d`);
const colors = document.getElementsByClassName(`jsColor`);

canvas.width = 500;
canvas.height = 500;

// ctx.strokeStyle = "#2c2c2c";
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
}


if(canvas) {
    canvas.addEventListener(`mousemove`, onMouseMove);
    canvas.addEventListener(`mousedown`, startPainting);
    canvas.addEventListener(`mouseup`, stopPainting);
    canvas.addEventListener(`mouseleave`, stopPainting);
}


// console.log(colors);
// console.log(Array.from(colors));
if (colors) {
    Array.from(colors).forEach(color => 
        color.addEventListener(`click`, handleColorClick)
    );    
}

