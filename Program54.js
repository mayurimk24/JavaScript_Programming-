const sub = (a, b) => (a+b);  // Arrow function

const cube = n => n*n*n;  //nameless function

const pow = (a,b) => a**b;   //implicit return in arrow function if we return a singal value.

const hello = () => {
  console.log("Hello!");
}

console.log(cube(3));