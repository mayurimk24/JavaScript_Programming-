let str = "abcdabcdefgggh";

//Extract unique characters from string
function getUnique(str){
    let newStr = "";
    for(let i = 0; i< str.length; i++)
    {
        if(newStr.indexOf(str[i])== -1){
            newStr += str[i];
        }    
    }
    return newStr;
}

let Strin = getChar(str);
console.log(Strin);