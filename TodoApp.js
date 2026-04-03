
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function (){
    let lis = document.createElement("li");
    lis.innerText = inp.value;

    ul.appendChild(lis);

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete");

    lis.appendChild(deletebtn);
    inp.value = "";
});

ul.addEventListener("click", function (event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
        console.log("deleted");
    }
});
