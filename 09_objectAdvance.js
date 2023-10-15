/*
let student={

    rollNumber:3566,
    state:"MH",
    city:"pune",
    collage:"VNMKVP",
}
student.city="mumbai"
console.log(student);

const student = {

    rollNumber: 2233,

    state: "MH",

    city: "Pune",

    college: "COEP Pune"

}

student.city = "Mumbai";

console.log(student);

 

let person = {

    name: "abc",

    adhar: "XXXXXX"

}

 

// student = person; // Not allwed

 

const employee = {

    empNo: 2233,

    state: "MH",

    city: "Pune",

    company: "Infosys",

    designation: "Software Engineer"

}

Object.freeze(employee);

employee.empNo = 2345;

employee.company = "TCS";

console.log(employee);*/

//using object literal 

let student={
    rollNumber:3456,
    state:"MH",
    city:"Pune",
    College: "COEP"

}
let keysStudent=Object.keys(student);
console.log(keysStudent);

let valuesStudent=Object.values(student);
console.log(valuesStudent);

console.log(`__________________traversing an objecy________`);
// key store in object and values store in elements
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(` key : ${key} , value: ${element}`  );
    }
}
let isAvailable= "College" in student;
console.log(isAvailable);

let isAvailableCity= "city" in  student;
console.log(isAvailableCity);
console.log(`__________________`);


// constant object
const person={
    name: "dwarka",
    college: "VNMKP",
    age: 32,

}
Object.freeze(person);
person.age=34.
console.log(person);

Object.freeze

let prof={
name:"sunil mane ",
age: 45,
sub: "soil",
}
student = person;// not allowed reference object is also const