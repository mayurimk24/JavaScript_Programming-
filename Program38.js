let student = {
    name : "Mayuri",
    rollNo : 24,
    cgpa : 8.3,
};

console.log(student);  
console.log(student["name"]);     //Get values
console.log(student.cgpa);

student.city = "Pune";    //add new pair
student.gender = "Female";
student.rollNo = 20;     //Update values

console.log(student);




// const classInfo = {
//     Ram: {
//         Grade: "A+",
//         City:  "Dilhi"
//     },

//     Sita: {
//         Grade: "O",
//         City: "Pune"
//     }
// };


// console.log(classInfo);
// console.log(classInfo.Sita.City);

const classInfo = [
    {
        name: "Sita",
        Grade: "O",
        City: "Delhi"
    },
    {
        name: "Karan",
        Grade: "A+",
        City: "Pune"
    },
    {
        name: "Ram",
        Grade: "O",
        City: "Mumbai"
    }
];


console.log(classInfo);
console.log(classInfo[1]);
console.log(classInfo[0]);
console.log(classInfo[2].name);

classInfo[2].City ="Pune";
console.log(classInfo[2].City);


console.log(Math);

let random = Math.floor( Math.random() * 10) +1 ;   // which is give me 1 to 10 between random number.
console.log(random);