"use strict"
var loser = false;
var sessionStart = false;
window.onload = function(){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].addEventListener("mouseover", gameOver);
    }
    document.getElementById("end").addEventListener("mouseover",goal);
    document.getElementById("start").addEventListener("click",beginGame);
}

function gameOver(){
    if(sessionStart){
        setBoundaryCSS("boundary youlose");
        loser = true;
    }
}

function goal(){
    if(sessionStart){
        if(!loser){
            setStat("You Win!");
        }
        else{
            setStat("You Lose!");
        }
        sessionStart = false;
    }
}

function beginGame(){
    setBoundaryCSS("boundary");
    sessionStart = true;
    loser = false;
    setStat("Game In Session");
}

function setBoundaryCSS(cssName){
    var boundary = document.querySelectorAll(".boundary");
    for (var i = 0; i < boundary.length-1; i++) {
        boundary[i].className = cssName;
    }
}

function setStat(stat){
    document.getElementById("status").innerHTML = stat;
}
