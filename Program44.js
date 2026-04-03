let str = "Hello";    //global scope

function changeStr(){
    str = "namaste";     //function scope
    console.log(str);
    function innerStr(){
        console.log(str);      //lexical scope
    }

    innerStr();
}

console.log(str);
changeStr();