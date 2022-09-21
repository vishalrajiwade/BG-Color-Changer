let canvas = document.querySelector("#canvas");
let btn = document.querySelector("#button");
let hash = "#";
let text = "0123456789ABCDEF";

function randomHexGenerator(){
    for(let i=0; i< 6; i++){
        hash = hash + text[Math.round(Math.random() * 15)];
    }
}

btn.addEventListener("click", () => {
    randomHexGenerator();
    canvas.style.backgroundColor = hash;
    hash = "#";
})

