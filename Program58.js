//print hello world 5 times after every 2 seconds

let id = setInterval(()=>{
    console.log("Hello world!");
},2000);

setTimeout(() =>{
    clearInterval(id);
},11000);