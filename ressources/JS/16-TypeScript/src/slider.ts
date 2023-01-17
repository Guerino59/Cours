"use script";



export default function createSlider() {
    // tableau contenant les liens pour mes images dans le slider
    const img: string[] = ["./img/mountain.jpg", "./img/sea.jpg", "./img/snow.jpg"];
    // creation de mon slider container
    const slider: HTMLDivElement = document.createElement("div");
    slider.classList.add("slider-container")
    document.body.append(slider);
    // creation du bouton gauche
    const left: HTMLElement = document.createElement("i")
    left.classList.add("fa-solid");
    left.classList.add("fa-play");
    left.classList.add("fa-3x");
    slider.append(left);
    // creation du bouton droite
    const right: HTMLElement = document.createElement("i")
    right.classList.add("fa-solid");
    right.classList.add("fa-play");
    right.classList.add("fa-3x");
    right.classList.add("right");
    slider.append(right);
    // creation du container de point
    const containerDot: HTMLDivElement = document.createElement("div");
    containerDot.classList.add("container-dot")
    slider.append(containerDot);

    var numero: number = 0;
    var nbPoint: HTMLElement[] = []
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



    const image:HTMLImageElement = document.createElement('img');
    image.style.borderRadius ="10px"
    image.src = img[0]
    slider.append(image)
    
     function ChangeSlide(sens: number) {
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
    
    window.removeEventListener('click', createSlider)
}



