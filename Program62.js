let arr = [1,2,3,4,5,6,7,8];

let newArr = arr.map((el) => el*2);
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

let gpa = student.map((el) => el.marks/10);
console.log(gpa);
