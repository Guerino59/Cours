"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false
let action = []
let derAction
function resize()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
resize();
window.addEventListener("resize", resize);
canvas.addEventListener("mousedown", ()=>{isDrawing = true})
canvas.addEventListener("mouseup", ()=>{isDrawing = false})

let mx = 0
let my = 0
let previousMousePos = {x:null, y:null}
let linewidth = 5

function draw(){
        canvas.addEventListener("mousemove", (e)=>
        {
            if(isDrawing)
            {
                mx = e.clientX
                my = e.clientY
                ctx.beginPath()
                if (previousMousePos.x != null)
                {
                    ctx.moveTo(previousMousePos.x, previousMousePos.y)
                }
                ctx.lineTo(mx, my)
                ctx.lineWidth = linewidth;
                ctx.lineCap = "round";
                previousMousePos.x = mx
                previousMousePos.y = my
                ctx.stroke()
                ctx.closePath()
                action.push({
                    x: mx,
                    y: my,
                })
            }else{
                previousMousePos = {x:null, y:null}
            }
        })
    
}
draw()


window.addEventListener("keypress", (e) => {
    if(e.key == "d")
    {
        ctx.clearRect(0,0, canvas.width, canvas.height);
    }
})

const color = document.querySelector('input');

color.addEventListener("change", ()=>{
    ctx.strokeStyle = `${color.value}`
})
const plusLine = document.querySelector('.plus');
const moinsLine = document.querySelector('.moins');
plusLine.addEventListener('click', ()=>{
    linewidth++
    console.log(linewidth);
})
moinsLine.addEventListener('click', ()=>{
    
    if(linewidth <= 1)
    {
        linewidth = 1
    }
    else
    {
        linewidth--
    }
    console.log(linewidth);
})
canvas.addEventListener("mouseup", addAction)
function addAction(){
    console.log(action);
}
window.addEventListener("keypress", (e) => {
    if(e.key == "z")
    {
       action.pop()
       
    }
})
