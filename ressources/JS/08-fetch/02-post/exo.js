"use script";

const joke = document.querySelector('.rjoke');
const contjoke = document.querySelector('.joke');
const url = "https://api.chucknorris.io/jokes/random"

joke.addEventListener('click', ()=>{
    fetch(url).then(res=>{
        if(res.ok)
        {
            res.json().then(data=>{
                console.log(data);
                contjoke.innerHTML = `<p>${data.value}</p>`
            })
            .catch(err=>console.log(err))
        }
    })
})