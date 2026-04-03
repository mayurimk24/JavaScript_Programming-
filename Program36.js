let ret =0, num = 2457;

let copy = num;

while(copy > 0)
{
    let temp = copy % 10;
    ret += temp;
    copy = Math.floor(copy/10);
}

console.log(ret);

let sumDigit = 0;

while(num >0)
{
    sumDigit++;
    num = Math.floor(num /10);
}

console.log(sumDigit);