// calculate sum of n numbers return it

function calcSum(n){
    let i=0, sum = 0;
    for(i=1; i<=n; i++){
        sum += i;
    }

    return sum;
}

let ret = calcSum(4);
console.log(ret);