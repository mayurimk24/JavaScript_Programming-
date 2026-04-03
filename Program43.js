// concat strings and returns it

let str= ["Hi", "Hello", "Bye"];

function concatString(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }

    return result;
}

let result = concatString(str);
console.log(result);