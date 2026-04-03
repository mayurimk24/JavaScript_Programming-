let primary = ["red", "yellow", "Green", "pink"];
let secondary = ["bmw", "toyota", "thar", "audi"];

console.log(primary.splice(0,1));

console.log(primary.splice(0,0,"Voilet"));    // reverse in original array

console.log(primary.splice(3,1,"black"));
console.log(primary);
console.log(primary.splice(2));


console.log(secondary.sort());   //easily sort String

let num = [23,54,124,7,986,9];
console.log(num.sort());    //Can't sort numbers because sort method is convert frist into string then sort so numbers can't sort 

console.log(secondary.reverse().indexOf("toyota"));
console.log(primary.length);