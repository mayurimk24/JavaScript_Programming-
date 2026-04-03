let btns = document.querySelectorAll("button");
 
for(let btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter = function (){
        console.log("Hi");
    }
}

function sayhello(){
    alert("Hello");
}