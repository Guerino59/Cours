"use script";
export const Sliderrrr = {

 createSlider() {
    const main = document.querySelector('.appli')
    const css3 = document.createElement("style");
        css3.innerHTML = 
        `*, ::before, ::after{
            margin:0;
            padding:0;
            box-sizing:border-box;
            }
            .appli{
                overflow: hidden;
                
            }
            .slider-container{
                position: relative;
                display: block;
                width: 100%;
                margin: auto;
                height: 40vh;
                margin-top: 100px;
            }
            @media screen and (min-width:700px) {
                .slider-container{
                    width: 80%;
                    height: 60vh;
                }
            }
            @media screen and (min-width:1100px) {
                .slider-container{
                    width: 50%;
                    height: 60vh;
                }
            }
            .container-dot{
                z-index: 2;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .fa-circle{
                cursor: pointer;
                margin: 0px 5px;
            }
            .slider-container > i:nth-child(1){
                z-index: 2;
                cursor: pointer;
                position: absolute;
                left: 0;
                top: 50%;
                color: rgba(66, 66, 61);
                transform: rotate(180deg);
                padding: 10px;
                transition: all 0.2s ease;
                margin-left: 10px;
                opacity: 0.7;
            }
            .right{
                z-index: 2;
                cursor: pointer;
                position: absolute;
                top: 50%;
                right: 0;
                color: rgb(66, 61, 61);
                opacity: 0.7;
                margin-right: 10px;
                padding: 10px;
                transition: all 0.2s ease;
            }
            .right:hover{
                right: -1%;
                opacity: 1;
            }
            .slider-container > i:nth-child(1):hover{
                left: -1%;
                opacity: 1;
            }
            img{
                position: absolute;
                background-size: cover;
                display: block;
                margin: auto;
                width: 100%;
                height: 100%;
            }
            
            
            .container-dot i:hover{
                transform: scale(1.2);
            }
            .container-dot i{
                color: white;
                transition: all 0.2s ease;
            }
            .container-dot {
               padding: 10px;
               background-color: rgba(0, 0, 0, 0.178);
               border-radius: 50px;
            }
        `
        main.appendChild(css3);
    // tableau contenant les liens pour mes images dans le slider
    const img = ["./img/mountain.jpg", "./img/sea.jpg", "./img/snow.jpg"];
    // creation de mon slider container
    const slider = document.createElement("div");
    slider.classList.add("slider-container")
    main.append(slider);
    // creation du bouton gauche
    const left = document.createElement("i")
    left.classList.add("fa-solid");
    left.classList.add("fa-play");
    left.classList.add("fa-3x");
    slider.append(left);
    // creation du bouton droite
    const right = document.createElement("i")
    right.classList.add("fa-solid");
    right.classList.add("fa-play");
    right.classList.add("fa-3x");
    right.classList.add("right");
    slider.append(right);
    // creation du container de point
    const containerDot = document.createElement("div");
    containerDot.classList.add("container-dot")
    slider.append(containerDot);

    var numero = 0;
    var nbPoint = []
    // slider avec fleche droite et gauche

    // animation
    const fadImg = [
        {opacity: "0.3"},
        {opacity: "1"}
    ]
    const fadImgR = [
        {opacity: "0.3", left: "-50%"},
        {left: "10%"},
        {opacity: "1", left: "0%"}
    ]
    const fadImgL = [
        {opacity: "0.3", right: "-50%"},
        {right: "10%"},
        {opacity: "1", right: "0%"}
    ]
    const timeAnim = {
        duration: 2000,
        fillMode: "forwards",
    }



    const image = document.createElement('img');
    image.style.borderRadius ="10px"
    image.src = img[0]
    slider.append(image)
    
     function ChangeSlide(sens) {
        nbPoint[numero].style.opacity = "0.5"
        numero = numero + sens;
        if (numero < 0){
            numero = img.length - 1;
            
        }
        if (numero > img.length - 1){
            numero = 0; 
            
        }
        image.src = img[numero];
        nbPoint[numero].style.opacity = "1"
        
    }

    // creation de point + faire en sorte que l'on ai autant de point que d'image 
    img.forEach((a, i) => {
        const dot = document.createElement('i');
        dot.classList.add("fa-solid");
        dot.classList.add("fa-circle");
        dot.style.opacity ="0.5"
        containerDot.appendChild(dot);
        nbPoint.push(dot)
        
        dot.addEventListener('click', ()=>{
            image.animate(fadImg, timeAnim)
            image.src = img[i]
            nbPoint.forEach(p=>{
                p.style.opacity = "0.5"
            })
            dot.style.opacity = "1"
        })
    });
    nbPoint[0].style.opacity = "1";
    left.addEventListener('click', ()=>ChangeSlide(-1))
    right.addEventListener('click', ()=>ChangeSlide(1))
    left.addEventListener('click', ()=>{
        image.animate(fadImgL, timeAnim)
    })
    right.addEventListener('click', ()=>{
        image.animate(fadImgR, timeAnim)
    })
    
    
}

}

