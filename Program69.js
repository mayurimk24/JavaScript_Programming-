let btn = document.createElement("button");
let input = document.createElement("input");
btn.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);


btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");


let btn1 = document.querySelector("#btn");
btn1.classList.add("btnstyle");


let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
document.querySelector("body").append(h1);


let p = document.createElement("p");
p.innerHTML = "This is <b>first</b> paragraph";
document.querySelector("body").append(p);
