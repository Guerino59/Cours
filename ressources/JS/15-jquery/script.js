"use strict";

/*
    $() sert a la fois de querySelector et de crete element
    $("div") Avec un selecteur CSS, il ira selectionner les elements corresponant.
    $("<div>") Avec une balise, il creera l'element correspondant
*/
const btnSlide = $("#slide");
/*
    .on() remplace le addEvenetListener.
    (à noter qu'il esiste des versions encore plus raccourcis comme : .click(function);)
*/
btnSlide.on('click', slideTitle);
/*
    JE peux remplacer les deux lignes au dessus par : 
    $("#slide").click(slideTitle);
*/
function slideTitle()
{
    /*
        Certains effets classiques de CSS comme fade, hide, slide sont
        implémenté de base dans jquery, histoire de pouvoir les activer sans devoirs
        passer par des ".style.display" et autes

        Les differentes animations sont disponibles avec des versions "In", "Out" ou "Toggle"
        methodes auquels on indique en premier argument, la durée de l'animation
        et en second optionellement une fonction une fois l'animation terminé. 
    */
   $('h1').slideToggle(1000, ()=>
    {
        console.log("animation terminé");
        /*
            Pour acceder aux propriétés CSS d'un element, on peut utiliser la methode ".css()"
            Un seul argument permet de recuperer la valeur de l'element css
            deux argument, permet de changer la valuer : 
        */
       const color = btnSlide.css("background-color") == "rgb(255, 0, 0)"?"green":"red"
       btnSlide.css('background-color', color);
    })
};
$("#fade").on("click",fadeSpan)
function fadeSpan()
{
    /*
        Si on selectionne plusieurs elements d'un coup,
        cela ne pose aucun problème a jquery, il appliquera l'effet sur tous les éléments selectionnés.
    */
    $("h1 span").fadeToggle();
}
$("h1 span").on("mouseenter", callbackEnter);
$("h1 span").on("mouseleave", callbackLeave);

function callbackEnter()
{
    // Pour recuperer la cible d'un evenement, on utilisera $(this)
    $(this).css("font-size", "4rem")
}
function callbackLeave()
{
    $(this).css("font-size", "")
}
/*
    $("document").ready(function(){}) déprecié et remplacé par : $(function(){})
    cela permet d'attendre la fi du chargement de a page.
    Cela était très pratique avant l'extistence de l'attribut "defer"
*/
$(function()
{
    $("h1").on("dblclick", function()
    {
        $(this).hide();
    })
    $("#load").on("click", ()=>
    {
        $("ol").hide(200);
        /*
            .ajax est la methode qui remplace fetch()
            .done d'active si tout s'est bien passé
            .fail si il y a une erreur
            .alaways quoi qu'il arrive une fois terminé

            à la difference du fetch, .done donne directement les donéés qu'elles soit textuelle ou json.
        */
        $.ajax("liste.json")
            .done(data=>
                {
                    data.forEach(d=>                       
                        {
                            /*
                                En une seule ligne on crée une nouvelle balise, on change le texte puis on l'ajoute à une
                                autre balise.
                                .text equivaut à .textContent,
                                .appendTo à .append si ce n'est que le parent et l'enfant sont inversé
                            */
                            $("<li>").text(d).appendTo($('ol'))
                        })
                        $("ol").show(500);
                })
            .fail(err=>console.log(err))
            .always(()=>console.log("requete terminé"))

    })
    $("#anime").on("click", function()
    {
        $(this).css("position", "absolute");
        /*
            Jquery possede une methode animate qui est differente de celle de JS.
            Celle ci prendra en argument les proprietes a modifier sous la forme d'un objet
            Pouvant meme prendre des calculs sous forme de string.
        */
        $(this).animate({
            width: "50vw",
            height: "5rem",
            top: "+=50px",
            left: "-=50px"
        },1000)
    })
})