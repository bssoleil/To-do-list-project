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


// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);