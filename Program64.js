let arr = [1,3,6,8,9,24,8];

let max = arr.reduce((max, el) => {
    if(max > el)
        return max;
    else 
        return el;
})

console.log(max);