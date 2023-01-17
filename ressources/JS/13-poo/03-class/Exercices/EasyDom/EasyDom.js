"use strict";


export default class EasyDom {
/**
 * 
 * @param {string} b nom de la balise
 * @param {string|number} id id de la balise créee
 * @param {string} clas classe de la balise créee
 * @param {string} tt textContent
 */
    
tag(b, {clas, id, tt})
    {
        const elem = document.createElement(b)
        if(id === undefined && clas === undefined && tt === undefined){   
            return elem
        }
        else if(id === undefined)
        {
            elem.classList.add(`${clas}`)
            elem.textContent = `${tt}`
            return elem
        }
        else if(clas === undefined)
        {
            elem.setAttribute("id", `${id}`)
            elem.textContent = `${tt}`
            return elem
        }
        else if(tt === undefined)
        {
            elem.classList.add(`${clas}`)
            elem.setAttribute("id", `${id}`)
            return elem
        }
        else
        {
            elem.classList.add(`${clas}`)
            elem.setAttribute("id", `${id}`)
            elem.textContent = `${tt}`
            return elem
        }
     }
     
select(sel)

{
    sel=[]
    console.log(Array.isArray(sel));
    
    
    
    
}
}