let  Fruits = ["Apple", "Banana", "Pineapple"];

console.log(Fruits);
Fruits[1] = "Mango";
console.log(Fruits);     //arrays are mutable 

console.log(Fruits.indexOf("Mango"));    //if banana is exits from the list then its returns thats index
console.log(Fruits.indexOf("jerry"));     //if does not exits jerry then its returns -1

console.log(Fruits.includes("Pineapple"));     //return  true if exits
console.log(Fruits.includes("Stwaberry"));     //return false if does not exits

