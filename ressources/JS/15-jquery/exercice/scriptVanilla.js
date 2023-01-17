"use strict";

let idInterval;
window.addEventListener("DOMContentLoaded", function ()
{
    document.querySelectorAll('#slider ul li:nth-child(odd)').forEach(d=>{
        d.style.backgroundColor = "#aaa"
    })
    const checkbox = document.querySelector('#checkbox')
    checkbox.addEventListener('change', ()=>
    {
        if(checkbox.checked)
        {
            idInterval = setInterval(moveRight, 1500);
        }
        else
        {
            clearInterval(idInterval)
        }
    });
    
    let slideCount = document.querySelectorAll('#slider ul li').length;
    let slideWidth = document.querySelector('#slider ul li').offsetWidth;
    let slideHeight = document.querySelector('#slider ul li').offsetHeight;
    let sliderUlWidth = slideCount * slideWidth;

    const slider = document.querySelector('#slider');
    slider.style.width = `${slideWidth}px`
    slider.style.height = `${slideHeight}px`

    const cslider = document.querySelector("#slider ul");
    cslider.style.width = `${sliderUlWidth}px`
    cslider.style.marginLeft = `-${slideWidth}px`

    cslider.prepend(document.querySelector('#slider ul li:last-child'))
    async function moveLeft()
    {
        const animateL = {
            left:`${slideWidth}px`
        }
        console.log(animateL);
        const options = {
            duration: 200
        }
        await cslider.animate(animateL, options).finished
        cslider.prepend(document.querySelector('#slider ul li:last-child'))
        cslider.style.left = ""

    }
    async function moveRight()
    {
        const animateR = {
            left:`-${slideWidth}px`
        }
        const options = {
            duration: 200
        }
        await cslider.animate(animateR, options).finished
        cslider.append(document.querySelector('#slider ul li:first-child'))
        cslider.style.left = ""
    }
    document.querySelector('a.control_prev').addEventListener('click',moveLeft)
    document.querySelector('a.control_next').addEventListener('click',moveRight)
})