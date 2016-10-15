"use strict";
window.onload = function(){
    document.getElementById("boundary1").addEventListener("mouseover", gameOver);
}

function gameOver(){
    document.getElementById("boundary1").className = "boundary youlose";
}
