"use strict";
// Asynchronus JavaScript And Xml
// Cela se resume au fait d'envoyer des requetes au serveur via javascript


// Chemin vers mon fichier
const url = './hero.json'
/*
    On va voir deux façon de gerer les requetes.
    La plus vieille : XMLHttpRequest
    La plus moderne : fetch
*/
// On crée un nouvel objet XMLHttpRequest
const xmlhttp = new XMLHttpRequest()
// On donne a notre objet, un ecouteur d'evenement qui sera lançé a chaque changement d'etat de notre requete
xmlhttp.onreadystatechange = handleRequest;
function handleRequest()
{
    // console.log(xmlhttp.readyState, xmlhttp.status);
    /*
        readyState indique à quel moment de la requete on se trouve (4 étant la derniere etape)
        status indique le status de la requete : 
        1xx indique une simple information
        2xx tous s'est bien passé
        3xx il ya eu une redirection
        4xx erreur coté client
        5xx erreur coté serveur
    */
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        let sucess, data;
        /*
            Try catch permet de placer une partie ou tout notre code dans les accolades du try. 
            si une erreur est provoqué dans notre code, elle sera capturé et non affiché, ce qui ne bloquera pas notre script.
            Si une erreur est provoqué, alors elle sera capturé et placé dans l'argument de catch et alors ce qui se trouve dans les accolades de catch sera effctué

            On peut ainsi creer un script qui ne plante pas en cas d'erreur et avoir des erreurs personnalisés.
            
            il existe aussi finally{} qui sera effectué une fois le try catch terminé, qu'il y ai une erreur ou non.

            *trycatch n'est pas lié aux requetes AJAX et peut etre utilisé n'importe ou.
        */
        try
        {
            data= JSON.parse(xmlhttp.responseText)
            sucess = true;
        }catch(e)
        {
            console.log(e.message + "DANS -> " + xmlhttp.responseText);
            sucess = false;
        }
        if(sucess)
        {
            // console.log(data);
            // document.body.innerHTML = `<h1>${data.squadName}</h1>`
        }
    }
}
/*
    On ouvre la requete
        en premier argument, on lui donne la methode sous forme de string
        en second on lui donne l'url à laquelle on souhaite faire une requete
        en troisieme, on lui indique si la reqete doit etre Asynchrone ou non
            *De façon synchrone, le script pourra bloquer jusqu'a obtenir le resutltat de la requete.
            *De façon asynchrone, le script contiunuera sans attendre le resultat de la requete qui se fera en parallele.
*/
xmlhttp.open("get", url, true);
// On envoie la requete
xmlhttp.send();

//-------------------- Fetch ---------------------//
/*
    fetch est toujours en asynchrone et par defaut utilise la methode "get", donc on peut se contenter de lui donné l'url.
    Ensuite on utilisera la methode .then() qui prendra une fonction callback qui sera lançé une fois la requete terminé.
*/
fetch(url).then(handleFetch);
function handleFetch(responseText) 
{
    console.log(responseText);    
    if(responseText.ok)
    {
        /*
            sur la reponse donné par fetch, je peux utiliser la methode "json()" pour traiter
            les donées json comme le ferait "JSON.parse()".
            Si ce n'est que le resultat du traitement sera envoyée dans le .then() suivant si tout s'est bien passé, ou dans le .catch() si il y a une erreur.
        */
        responseText.json()
            .then(showResult)
            .catch(error=>console.log(error))
    }
    else{
        console.log(responseText.statusText);
    }
}

function showResult(data){
    console.log(data);
    const main = document.querySelector('main') 
    console.log(main);
    main.innerHTML += `<h2>${data.homeTown}</h2>`
    main.innerHTML += `<select id = heroChoice>
                                <option value = molecule>${data.members[0].name}</option>
                                <option value = uppercut>${data.members[1].name}</option>
                                <option value = flame>${data.members[2].name}</option> 
                                </select>                              
                                `    
    main.innerHTML += '<ul></ul>' 
    const card = document.querySelector("ul"); 
    console.log(card);                  
    const choix = document.querySelector("#heroChoice");
    choix.addEventListener('change', showMore)
    function showMore() 
    {
        
        switch(choix.value)
        {
            case "molecule":
                card.innerHTML = `
                                    <li>Name : ${data.members[0].name} </li>
                                    <li>Age : ${data.members[0].age} years</li>
                                    <li>Secret Identity : ${data.members[0].secretIdentity}</li>                                              
                                    <li>Powers : ${data.members[0].powers[0]}, ${data.members[0].powers[1]} and ${data.members[0].powers[2]}</li>
                                `
                break;
            case "uppercut":
                card.innerHTML = `
                                    <li>Name : ${data.members[1].name} </li>
                                    <li>Age : ${data.members[1].age} years</li>
                                    <li>Secret Identity : ${data.members[1].secretIdentity}</li>                                              
                                    <li>Powers : ${data.members[1].powers[0]}, ${data.members[1].powers[1]} and ${data.members[1].powers[2]}</li>
                                `
                console.log(card);
                break;
            case "flame":
                card.innerHTML = `
                                    <li>Name : ${data.members[2].name} </li>
                                    <li>Age : ${data.members[2].age} years</li>
                                    <li>Secret Identity : ${data.members[2].secretIdentity}</li>                                              
                                    <li>Powers : ${data.members[2].powers[0]}, ${data.members[2].powers[1]}, ${data.members[2].powers[2]}, ${data.members[2].powers[3]} and ${data.members[2].powers[4]}</li>
                                `
                break;
            default:
                return;
        }
        
    }
}

const urll = "./language.json"

fetch(urll).then(haFetch);
function haFetch(responseText)
{
    if(responseText.ok)
    {
        responseText.json()
            .then(showLanguage)
            .catch(error=>console.log(error))
    }
    else{
        console.log(responseText.statusText);
    }
}

function showLanguage(data) {
    const langue = document.querySelector('.langue') 
    console.log(langue);
    langue.innerHTML += `<select id = language>
                                <option value = fr>Français</option>
                                <option value = eng>English</option>
                                <option value = esp>Español</option> 
                                </select>                              
                                `    
    langue.innerHTML += '<h3></h3>'  
    langue.innerHTML += '<p></p>'
    const pick = document.querySelector('#language')
    const titre = document.querySelector('h3')
    const desc = document.querySelector('p') 
    pick.addEventListener('change', clanguage)

    function clanguage() {
        switch(pick.value)
        {
            case "fr":
                titre.innerHTML = `${data.language[0].titre}`
                desc.innerHTML = `${data.language[0].desc}`
                break;

            case "eng":
                titre.innerHTML = `${data.language[1].titre}`
                desc.innerHTML = `${data.language[1].desc}`                
                break;

            case "esp":
                titre.innerHTML = `${data.language[2].titre}`
                desc.innerHTML = `${data.language[2].desc}`               
                break;
            default:
                return;
        }
        localStorage.setItem("langue", pick.value)
    
    }
    function loadlangue()
    {
        let t = localStorage.getItem("langue");
        if(t)
        {
        let option = pick.querySelector(`[value="${t}"]`);
            if(option)
            {
            option.selected = true;
            clanguage();
            return;
            }
        }
   
    }
    loadlangue();
}

