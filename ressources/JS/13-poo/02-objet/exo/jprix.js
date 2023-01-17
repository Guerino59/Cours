"use strict";

export const JustePrix = {

    playGame() {
        const main = document.querySelector('.appli')
        const title = document.createElement('h1');
      title.textContent = "Le juste prix"
      const cardContainer = document.createElement('div');
      const front = document.createElement('div');
      const back = document.createElement('div');
      cardContainer.classList.add('card-container');
      front.classList.add('front');
      back.classList.add('back', 'card');
      const interr = document.createElement('span');
      interr.textContent = "?";
      const restart = document.createElement('button');
      restart.textContent = "Recommencer";
      cardContainer.appendChild(front);
      cardContainer.appendChild(back);
      back.appendChild(interr);
      back.appendChild(restart);
      const indice = document.createElement('div');
      indice.classList.add('indice');
      const spanInd = document.createElement('span');
      spanInd.textContent = "Proposez un nombre entre 1 et 100, vous avez 7 essais"
      indice.appendChild(spanInd);
      const rep = document.createElement('div')
      rep.classList.add('rep');
      const input = document.createElement('input')
      input.type = "number"
      const prop = document.createElement('button')
      prop.textContent = "Proposer"
      rep.appendChild(input)
      rep.appendChild(prop)
      main.appendChild(title)
      main.appendChild(cardContainer)
      main.appendChild(indice)
      main.appendChild(rep)
      const css = document.createElement("style");
      css.innerHTML = 
      `*, ::before, ::after{
        margin:0;
        padding:0;
        box-sizing:border-box;
        }
        .appli{
            background-color: grey;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        .card-container{
            position: relative;
            height: 300px;
            aspect-ratio: 2/3;
            transform-style: preserve-3d;
            background-color: rgba(255, 0, 0, 0.541);
            box-shadow: 2px 0px 0px 2px rgba(0, 0, 0, 0.2);
            border: 2px solid black;
            border-radius: 20px;
            animation:  1s linear forwards;
        }
        @keyframes turn {
            100%{
                transform: rotateY(180deg);
            }
        }
        .back,.front{
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            display: flex;
            flex-direction:column;
            align-items: center;
            justify-content:flex-end;
            gap: 40px;
        }
        .front{
            background: url(./img/card.jpg);
            background-size: cover;
            border-radius: 20px;
        }
        .back{
            border-radius: 20px;
            transform: rotateY(180deg);
        }
        .back button{
            margin-bottom: 20px;
        }
        .back span{
            font-size: 5rem;
        }
        .rep{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .rep button{
            width: 40%;
        }
        input{
            width: 25%;
        }
        .indice span {
            font-size: 2rem;
        }`
        main.appendChild(css)
    // create = {

    // main : document.querySelector('.appli'),
    // title : { ch1 : document.createElement('h1'),
    //         th1: title.textContent = "Le juste prix"
    // },
    // cardContainer : { ccc : document.createElement('div'),
    //     cca : cardContainer.classList.add('card-container')
    // },
    // front : { fc : document.createElement('div'),
    //    fca : front.classList.add('front')
    // },
    // back : {bc : document.createElement('div'),
    //   bca : back.classList.add('back', 'card')
    // },   
    // interr : { ic: document.createElement('span'),
    //   it: interr.textContent = "?"
    // },
    // restart : { rc : document.createElement('button'),
    //   rt : restart.textContent = "Recommencer"
    // },
    // appendCard : {
    //   caf : cardContainer.appendChild(front),
    //   cab : cardContainer.appendChild(back),
    //   cbai : back.appendChild(interr),
    //   cbar : back.appendChild(restart)
    // },
    // indice : { ic : document.createElement('div'),
    //     ia : indice.classList.add('indice')
    // },
    // spanInd : {sic : document.createElement('span'),
    //     sit : spanInd.textContent = "Proposez un nombre entre 1 et 100, vous avez 7 essais",
    //     sia : indice.appendChild(spanInd)
    // },
    // rep : { repc : document.createElement('div'),
    //     repa :rep.classList.add('rep')
    // },
    // input : { inc : document.createElement('input'),
    //     int : input.type = "number"
    // },
    //  prop : { pc : document.createElement('button'),
    //   pt : prop.textContent = "Proposer"
    // },
    // ajouter : {
    //   rai : rep.appendChild(input),
    //   rap : rep.appendChild(prop),
    //   mat : main.appendChild(title),
    //   mac : main.appendChild(cardContainer),
    //   mai : main.appendChild(indice),
    //   mar : main.appendChild(rep)
    // },
    //     css : { styc : document.createElement("style"),
    //   styi : css.innerHTML = 
    //   `*, ::before, ::after{
    //     margin:0;
    //     padding:0;
    //     box-sizing:border-box;
    //     }
    //     .appli{
    //         background-color: grey;
    //         display: flex;
    //         flex-direction: column;
    //         align-items: center;
    //         justify-content: space-around;
    //     }
    //     .card-container{
    //         position: relative;
    //         height: 300px;
    //         aspect-ratio: 2/3;
    //         transform-style: preserve-3d;
    //         background-color: rgba(255, 0, 0, 0.541);
    //         box-shadow: 2px 0px 0px 2px rgba(0, 0, 0, 0.2);
    //         border: 2px solid black;
    //         border-radius: 20px;
    //         animation:  1s linear forwards;
    //     }
    //     @keyframes turn {
    //         100%{
    //             transform: rotateY(180deg);
    //         }
    //     }
    //     .back,.front{
    //         position: absolute;
    //         width: 100%;
    //         height: 100%;
    //         backface-visibility: hidden;
    //         -webkit-backface-visibility: hidden;
    //         display: flex;
    //         flex-direction:column;
    //         align-items: center;
    //         justify-content:flex-end;
    //         gap: 40px;
    //     }
    //     .front{
    //         background: url(./img/card.jpg);
    //         background-size: cover;
    //         border-radius: 20px;
    //     }
    //     .back{
    //         border-radius: 20px;
    //         transform: rotateY(180deg);
    //     }
    //     .back button{
    //         margin-bottom: 20px;
    //     }
    //     .back span{
    //         font-size: 5rem;
    //     }
    //     .rep{
    //         display: flex;
    //         flex-direction: column;
    //         align-items: center;
    //     }
    //     .rep button{
    //         width: 40%;
    //     }
    //     input{
    //         width: 25%;
    //     }
    //     .indice span {
    //         font-size: 2rem;
    //     }`,
    //     macss : main.appendChild(css)
    // }
    
    console.log(JustePrix.playGame.create);
        const propNb = document.querySelector('.rep input');
        console.log(propNb);
        const btnP = document.querySelector('.rep button');
        console.log(btnP);
        // const restart = document.querySelector('.back button');
        console.log(restart);
        const result = document.querySelector('.back span');
        console.log(result);
        // const indice = document.querySelector('.indice span');
        console.log(indice);
        const card = document.querySelector('.card-container')
        //  nombre random + nouveau nombre quand appuie sur recommencer
        let randomInt
        let nbMax = 8
        let nbTry = 0

        restart.addEventListener('click', start);

        function start(){
            randomInt = Math.floor(Math.random()*100);
            result.textContent = `${randomInt}`
            card.style.animation =""
            nbTry = 0
            indice.textContent = "Proposez un nombre entre 1 et 100, vous avez 7 essais"
            indice.style.color = "black"
        };

        btnP.addEventListener('click', adi);
        document.addEventListener("keypress",function(e){
            if (e.key === 'Enter') {
                adi()
            }
        });
        console.log(nbTry);

        function propo() {
            if(randomInt > propNb.value && propNb.value > 0){
                indice.textContent = `C'est plus grand que ${propNb.value}`
                indice.style.color = "blue"
                indice.style.fontSize = "1.5rem"
                propNb.value =""
            }
            else if(randomInt < propNb.value && propNb.value < 100){
                indice.textContent = `C'est plus petit que ${propNb.value}`
                indice.style.color = "blue"
                indice.style.fontSize = "1.5rem"
                propNb.value =""
            }
            else if(propNb.value < 0 || propNb.value > 100){
                indice.textContent = `${propNb.value} n'est pas un nombre compris entre 0 et 100 Attention !`
                indice.style.color = "red"
                indice.style.fontSize = "2rem"
                propNb.value =""
            }
            else{
                indice.textContent = `Bravo ${propNb.value} était bien le nombre recherché`
                indice.style.color = "green"
                indice.style.fontSize = "2rem"
                propNb.value =""
                card.style.animation ="turn 1s linear forwards"
            }
        }


        function adi (){
        
                if (nbTry < nbMax){
                    nbTry++
                    propo()
                    console.log(nbTry);
                }else{
                    indice.textContent = `Vous avez perdu ! le chiffre à trouver était ${randomInt}`
                    indice.style.color = "red"
                    card.style.animation ="turn 1s linear forwards"
                    propNb.value =""
                }
            
        }
        start();

    }
    
}