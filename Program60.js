// arrow funtion that take a single number as argument & returns if it is even or not.

let num = 12;

const isEven = (n) => {
    if(n%2 == 0)
        return "Even";
    else
        return "Not even";
}

//const isEven = num => num % 2 == 0;

console.log(isEven(num));