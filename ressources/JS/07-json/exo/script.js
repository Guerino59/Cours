"use strict";

const add = document.querySelector("#add");
const input = document.querySelector("#todo");
const main = document.querySelector("main");
add.onclick = function(e){
    e.preventDefault();
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        main.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                    X
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var barre = document.querySelectorAll("#taskname");
        for(var i=0; i<barre.length; i++){
            barre[i].onclick = function(){
                this.parentNode.classList.toggle("barre");
            }
        }
        
    }
}



