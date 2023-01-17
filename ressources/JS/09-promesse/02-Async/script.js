"use strict";

/*
    pour eviter ces enfers de callback.
    On a les mots clefs async et await
    async ne sert qu'a declarer qu'on va utiliser des await dans la fonction.
    await ne peut etre utilisé que dans une fonction "async"
    async se place devant la declaration de la fonction
    await se place devant une promesse, et indique au script qu'il devra attendre le resultat de la promesse pour continuer.
*/
async function exemple()
{
    let data;
    // J'attend le resultat de mon fetch pour continuer
    let resp = await fetch("tab.json");
    // La variable se retrouve avec le parametre habituellement donnée au .then() alors que sans le await , fetche nous retourne l'objet promise
    console.log(resp);
    if(resp.ok)
    {
        try{
            /*
                avec assync await, on ne recupere que le .then()
                donc si on a besoin de catch et de finally, on pourra utiliser la structure try catch finally ;
            */
           data = await resp.json()
           let message = await tri(data)
           console.log(message, data);
        }catch(err){
            console.log(err);
        }
    }
}
exemple()
async function burger()
{
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("mon burger est terminé");
}
burger()

// Fonction du cours et exercice precedent


// 2. avec promesse :

function burger2()
{
    pain2().then(pain=>{
        console.log(pain);
        sauce2().then(sauce=>{
            console.log(sauce);
            viande2().then(viande=>{
                console.log(viande);
                salade2().then(salade=>{
                    console.log(salade);
                    console.log("Le burger est terminé")
                })
            })
        })
    })
}
function pain2()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Le pain est grillé")
        }, 1000)
    })
}
function sauce2()
{
    return new Promise(resolve=>{
        resolve("La sauce est versé")
    })
}
function viande2()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("La viande est cuite et placé")
        }, 3000)
    })
}
function salade2()
{
    return new Promise(resolve=>{
        resolve("La salade est placé")
    })
}

function tri(tab){
    return new Promise((resolve, reject)=>{
        tab.sort((a,b)=>{
            if(typeof(a) !== typeof(b)){
                reject("Tous les éléments du tableau ne sont pas de même type.");
            }
            return a-b;
        })
        resolve("Le tableau a été correctement trié");
    });
}
/*
    Je me retrouve avec une fonction dans une fonction, dans une fonction à coté deux autres fonctions appelé pour gerer les erreurs
    c'est ce qu'on va appeler un callback hell
*/

fetch("tab.json").then(res=>{
    if (res.ok){
        res.json().then(data =>{
            tri(data).then(message =>{
                console.log(message, data);
            })
            .catch(err=>{console.log(err)})
        })
        .catch(err=>{console.log(err)})
    }
})

