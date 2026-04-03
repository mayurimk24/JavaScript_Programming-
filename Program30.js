let n = prompt("write your number");
n = parseInt(n);

let i = 0, j = 0;
for(i = n; i <= n*10; i += n)
{
    console.log(i);
}

for(i = 1; i <= 10; i++)
{
    console.log(i*n);
}

console.log();

for(i = 0; i < 3; i++)
{
    for(j = 0; j < 3; j++)
    {
        console.log(i);
    }
}

let c = 1;
while(c <= 20)
{
    console.log(c);
    c += 2;
}