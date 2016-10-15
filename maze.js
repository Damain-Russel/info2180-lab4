"use strict";
var loser = false;
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].addEventListener("mouseover", gameOver);
    }
    document.getElementById("end").addEventListener("mouseover",goal);
}

function gameOver(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = "boundary youlose";
    }
    loser = true;
}

function goal(){
    if(!loser){
        alert('You win!');
    }
}
