"use strict"
const right1 = document.querySelector(".web");
const left2 = document.querySelector(".name");
const left1 = document.querySelector(".dev");
const right2 = document.querySelector(".fam");
const rect = document.querySelector('.rect');
console.log(right1, right2, left1, left2);

async function anim(){
    const droite1 = [
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1,
            left: "0%"
        },
        {
            opacity: 0,
            left: "0%"
        }
    ];
    const droite2 = [
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1,
            left: "0%"
        },
        {
            opacity: 1,
            left: "0%"
        }
    ];
    const time = 
    {
        duration: 3500,
        fill: "forwards"
    }
    const time2 = 
    {
        duration: 1000,
        fill: "forwards"
    }
    

    const gauche1 = [
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1,
            right: "0%"
        },
        {
            opacity: 0,
            right: "0%"
        }
    ];
    const gauche2 = [
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1
        },
        {
            opacity: 1,
            right: "0%"
        },
        {
            opacity: 1,
            right: "0%"
        }
    ];

   let l1 = left1.animate(droite1, time)
   let r1 = right1.animate(gauche1, time)
rect.animate([{
        opacity: 1
    },
    {
        opacity: 1
    },
    {
        opacity: 1
    },
    {
        opacity: 1,
    
    },
    {
        opacity: 0,
        
    }], time);

   await r1.finished
   await l1.finished

  let barre = rect.animate([{
    opacity: 1
}], time2);

await barre.finished
   let l2 =  left2.animate(droite2, time)
   let r2 =  right2.animate(gauche2, time)

};
anim()