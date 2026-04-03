// Rest

function sum(...args){
    return args.reduce((sum, el) => sum+el);
}

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) =>{
        if(min < el)
            return min;
        else
            return el;
    });
}

let ret = sum(3,4,6,8,1,3);
console.log(ret);

console.log(min("Hi!",1,3,5,9,4,-2));