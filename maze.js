"use strict"
var loser = false;
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].addEventListener("mouseover", gameOver);
    }
    document.getElementById("end").addEventListener("mouseover",goal);
    document.getElementById("start").addEventListener("click",beginGame);
}

function gameOver(){
    setBoundaryCSS("boundary youlose");
    loser = true;
}

function goal(){
    if(!loser){
        alert('You win!');
    }
}

function beginGame(){
    setBoundaryCSS("boundary");
    loser = false;
}

function setBoundaryCSS(cssName){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = cssName;
    }
}
