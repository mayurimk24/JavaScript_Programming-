const calculater = {
    sum(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b; 
    },
    mul(a,b){
        return a*b;
    }
};

let ret = calculater.sum(2,3);
console.log(ret);