let jenny = {

    fullName: "Elon Musk",

    age: 22,

    city: "Pune",

    college: "COEP Pune",

    marks: {

        physics: 100,

        science: 99,

        math: 92

    } 

}

 

let maria = JSON.parse(JSON.stringify(jenny)); // Deep clone 

maria.marks.math = 100;

console.log(`Jenny Details: ${jenny.marks.math}`);

console.log(`Maria Details: ${maria.marks.math}`);



dwarka={

    fullName: "Dwarka Shejul",

    age: 25,

    city: "Pune",

    college: "VNMKVP",

    marks:{

        physics: 100,

        science: 99,

        math: 92


    }


}
console.log(`___________________________________________`);
let manju=JSON.parse(JSON.stringify(dwarka));
manju.marks.math=90;
console.log(`Dwarka Details ${dwarka.marks.math}`);
console.log(`Manju Details ${manju.marks.math}`);

console.log(`____________________`);
const milk=1;
console.log(Number.isInteger(milk));


class student{

}

console.log(`________________________________________________________`);
let bill = {

 fullName: "BILL Gate",
 age: 22,
city: "Pune",
college: "COEP Pune",


}
marks= {
physics:100,
science:99,
math: 92
} 
let mergeOb=Object.assign({}, bill,marks);
console.table(mergeOb);



