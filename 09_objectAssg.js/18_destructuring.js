// 1.Object Destructuring

let student={
    rollNumber:2345,
    state:"MH",
    city:"pune",
    collage:"COEP pune",
}

//let state= student.state;
//let collage= student.collage;
//let city= student.city;

let {state,collage,city,pin=432566}=student;
console.log(state,city,collage,pin);


// 2.Array Destructuring
let array =[4,5,6,7,8,9]
let [num1,num2,num3, num4=0]=array;
console.log(num1,num2,num3,num4);