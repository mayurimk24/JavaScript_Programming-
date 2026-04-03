let btn = document.querySelector("button");

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click", function (){
    let h1 = document.querySelector("h1");
    let box = document.querySelector("div");

    let getRandom = getRandomColor();
    h1.innerText = getRandom;
    box.style.backgroundColor = getRandom;

    console.log("Color updated");
});

let box = document.querySelector(".box");

function changeColor(){
    let getRandom = getRandomColor();
    console.log(this.innerText);
    this.style.backgroundColor = getRandom;
}

box.addEventListener("mouseover", changeColor);
