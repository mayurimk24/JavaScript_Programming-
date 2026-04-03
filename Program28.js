let num = [[2,1], [3,4], [5,6]];

console.log(num.length);
console.log(num[0][1]);
console.log(num[2][0]);

let game = [ ['X',null,'O'], [null,'X',null], ['O', null,'X'] ];
console.log(game);

let arr = [1,2,3,4,5,6,7];
//Que. 1
let n = 3;
console.log(arr.slice(0,n));

//Que. 2
console.log(arr.slice(arr.length-n));

//Que. 3 
let  str = prompt("Please enter a string");

if(str.length == 0)
{
    console.log("String is Empty");
}else{
    console.log("String is not empty");
}

//Que. 4
let str1 = "ILoveCoding";

let idx = 3;
if(str1[idx] == str[idx].toLowerCase())
{
    console.log("Character is lowercase");
}else {
    console.log("Character is not lowercase");
}

//Que.5

let str2 = prompt("Please enter a string");
console.log(`original string = ${str}`);
console.log(`string without spaces = ${str.trim()}`);

//Que. 6

let arr2 = ["Hello", 'a', 23,64,99,-3];
let item = 64;

if(arr.indexOf(item) != -1)
{
    console.log("element exist in array");
}else{
    console.log("element doesn't exits in array");
}