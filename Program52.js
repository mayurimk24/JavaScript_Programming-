//to generate a random number within a range(start, end)

function getRandomNo(start, end){
  let diff = end - start;
  let num = Math.floor(Math.random() *diff) + start;
  console.log(num);
}

getRandomNo(5,10);