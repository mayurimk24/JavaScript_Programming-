let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i=0; i<arr.length; i++)
{
    if(arr[i] == num)
    {
        arr.splice(i, 1);
    }
}

console.log(arr);

let no = 7;
let fact = 1;
for(i=1; i<=no; i++)
{
   fact = fact * i;
}

console.log(`factorial of ${no} is ${fact}`);


let Arr = [2,4,67,8,5,35,6,90];
let largest = 0;
for(i = 0; i< Arr.length; i++)
{
    if(largest < Arr[i])
    {
        largest= Arr[i];
    }
}

console.log(`The largest number in an array is ${largest}`);

