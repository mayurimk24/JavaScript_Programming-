//spread with array & object literals

let arr = [1,2,3,4];
console.log(...arr);
console.log(Math.max(...arr));

console.log(..."MayuriMhaske");

let charArr = [..."Hello World"];
console.log(charArr);

let odd = [1,3,5,7];
let even = [2,4,6,8];

let newArr = [...even, ...odd];
console.log(newArr);

const data = {
    email: "mayurimhaske@gmail.com",
    password: "abcd",
};

const datacopy = { ...data, id: 123};
console.log(datacopy);

let obj = {...arr};
console.log(obj);

let obj1 = {..."hello"};
console.log(obj1);