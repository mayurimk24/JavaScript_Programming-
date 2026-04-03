// arrow function that accepts an array of numbers & returns the average of those numbers

let arr = [12,45,7,34,65,3];

const arrayAverage = arr => {
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return Math.floor(sum / arr.length);
}

console.log(arrayAverage(arr));