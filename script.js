"use strict";

function newElement(){
    let value = document.getElementById("input").value;

    let newLi = document.createElement("li");
    newLi.innerHTML = value;
    let ul = document.querySelector("ul");
    
    if (value === "") {
       return;
        
    } else{
    ul.appendChild(newLi);
    document.getElementById("input").value = "";
    
    }

}