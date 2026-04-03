let arr = [1,2,3,4,5,6,7,8];

let newArr = arr.filter((el) => el%2 == 0);
console.log(newArr);

const student = [
    {
        name: "Ram",
        marks: 92
    },
    {
        name: "raj",
        marks: 95
    },
    {
        name: "rajat",
        marks: 90
        
    }
];

let gpa = student.filter((el) => el.marks > 90);
console.log(gpa);

let ret = arr.every((el) => el%2 == 0);
console.log(ret);

let  result = arr.some((el) => el%2==0);
console.log(result);

console.log([1,3,6,8].some((el) => el%2 != 0));