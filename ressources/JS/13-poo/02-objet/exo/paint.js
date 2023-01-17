"use strict";

export const Paints = {

    paint (){
        const main = document.querySelector('.appli')
        const canvas = document.createElement('canvas')
        const bcolor = document.createElement('input')
        // const color = document.querySelector('input');
        bcolor.type = "color"
        const plus = document.createElement('button')
        plus.classList.add('plus')
        plus.textContent = "+"
        const moins = document.createElement('button')
        moins.classList.add('moins')
        moins.textContent = "-"
        main.appendChild(canvas)
        main.appendChild(bcolor)
        main.appendChild(plus)
        main.appendChild(moins)
        const css2 = document.createElement("style");
        css2.innerHTML = 
      `*, ::before, ::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
        }
        canvas{
            border: 1px solid black;
        }
      `
      main.appendChild(css2)
        
        const ctx = canvas.getContext("2d");
        let isDrawing = false
        let action = []
        let derAction
        function resize()
        {
            canvas.width =document.querySelector('.appli').getBoundingClientRect().width
            canvas.height =document.querySelector('.appli').getBoundingClientRect().height
        }
        resize();
        window.addEventListener("resize", resize);
        canvas.addEventListener("mousedown", ()=>{isDrawing = true})
        canvas.addEventListener("mouseup", ()=>{isDrawing = false})

        let mx = 0 - document.querySelector('.appli').getBoundingClientRect().x
        let my = 0 - document.querySelector('.appli').getBoundingClientRect().y
        let previousMousePos = {x:null, y:null}
        let linewidth = 5

        function draw(){
                canvas.addEventListener("mousemove", (e)=>
                {
                    if(isDrawing)
                    {
                        
                        ctx.beginPath()
                        if (previousMousePos.x != null)
                        {
                            ctx.moveTo(previousMousePos.x, previousMousePos.y)
                        }
                        ctx.lineTo(e.clientX - document.querySelector('.appli').getBoundingClientRect().x, e.clientY - document.querySelector('.appli').getBoundingClientRect().y)
                        ctx.lineWidth = linewidth;
                        ctx.lineCap = "round";
                        previousMousePos.x = e.clientX - document.querySelector('.appli').getBoundingClientRect().x
                        previousMousePos.y = e.clientY - document.querySelector('.appli').getBoundingClientRect().y
                        ctx.stroke()
                        ctx.closePath()
                        action.push({
                            x: e.clientX,
                            y: e.clientY
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

       

        bcolor.addEventListener("change", ()=>{
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
    }

}