function rollDice(){
    let random = Math.floor( Math.random() * 6) +1;
    console.log(random);
}

rollDice();

function calcAvg(a, b, c){
    avg = (a+b+c)/3;
    return avg;
}

let ret = calcAvg(4,6,8);
console.log(ret);

function printTable(n){
    for(let i=1; i<=10; i++){
        console.log(i*n);
    }
}

printTable(10);