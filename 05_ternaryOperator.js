var JennySsc=97;
var JennyHsc=67;
var result=( JennySsc>=60 && JennyHsc>=60) ? "Please go inside all the best": "Chal Nikal";
console.log(result);

var num= 50 ;
var result=num%2 ==0 ? "EVEN"  : "ODD";
console.log(result);

var num1=21;

var result= num1%2==0 ? "EVEN" : "ODD";
console.log( result);

var num2=15;
result=num2%3==0 ? "EVEN":"ODD"

console.log(`____________________Control Flow If Block___________________________________`);
var num=23;

if (num>10) {
    console.log(num);
}
console.log(` After if block`);

console.log(`__________________If else_____________`);
var num =23;

if (num%2==0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is odd`);

}



console.log(`_____________________________________________________`);
var num = 23;

if (num>30) {

    console.log(num);

}

console.log(`After if block`);

 

var num = 23;

if (num%2==0) {

    console.log(`${num} is even`);

} else {

    console.log(`${num} is odd`);

}

 

function voteEligibility(age, name){

    // if block to handle all invalid scenarios

    var ageValue = +age;

    if (age<=0 || isNaN(ageValue)) {

        console.log(`${name} your age ${age} is invalid`); 

    } else {

        // if block to handle all valid scenarios

        if (age>=18) {

            console.log(`${name} you are eligible for vote`);

        } else {

            console.log(`${name} you are not eligible for vote`);

        }

    }

}

voteEligibility(23, "Jenny");

voteEligibility(-20, "Jenny");

voteEligibility("UK", "Jenny");

voteEligibility("30", "Jenny");

voteEligibility(null, "Jenny");

voteEligibility(undefined, "Jenny");

voteEligibility(150, "Jenny");

console.log(`_______________________Grade calculation__________________________________`);

function gradeCalculation(marks){

    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) { //undefined ,null
        console.log(`invalid marks:${marks}`);
    } else {
        console.log(`Valid Marks:${marks}`);
        if (marks>=90) {
            console.log(`Fantasstic marks : ${marks} your grade is A+`);
        } else {
            if (marks>=75 && marks<90) {
                console.log(`Excellent marks : ${marks} your grade is A`);

            } else {
if (marks>=50 && marks<75) {
    console.log(`Good marks is :${marks}Your grade is B`);
} else {

}
            }
            }
        }
//handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);
gradeCalculation("dwarka");
gradeCalculation(-10);
gradeCalculation(120);

//valid Inputs
//gradeCalculation("20");
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);







console.log(`_______________________________________`);

function voteEligibility(age){
    var ageValue=+age
    if (age<=0 || isNaN(ageValue) || age<200 ) { //null,undefined
        console.log(` ${age} Invalid age is `);
return;
    } else {
        // 0, >120
        if (age>=18) {
            console.log(`${age}eligible for vote`);

        } else {
            console.log(`${age} not eligible for vote`);

        }
    }

    }
}

voteEligibility(0);
voteEligibility(19);
voteEligibility(-10);
voteEligibility(150);
console.log(`___________Array Assignment 18__________`);
const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
arrayFruitsLength=arrayFruits.length;
console.log(arrayFruitsLength);
firstElement=arrayFruits[0];
lastElement=arrayFruits[arrayFruitsLength-1];
console.log(`${firstElement} & ${lastElement}`);
console.log(`_______________________________`);
arrayFruits.unshift("papaya")
console.log(arrayFruits);
console.log(`____________________________________________`);
var removedE=arrayFruits.splice(4, 1);
console.log(arrayFruits);
console.log(removedE);
console.log(`______________________________________`);
arrayFruits.push('Pineapple')
console.log(arrayFruits);
console.log(`____________________________________`);

arrayFruits.splice(4, 0, "Dragon Fruit")
console.log(arrayFruits);

console.log(`______________________________Replace element orange or Kiwi________________`);
arrayFruits.splice( 2, 0,"Kiwi")
console.log(arrayFruits);

console.log(`___________________________________________`);
arrayFruits.splice(1, 4);
console.log(arrayFruits);
console.log();


console.log(`________________Array Concatination______________________`);
let array1=[1,2,3,4,5];
let array2=[9,8,7,0,6];
array3=array1.concat(array2);
console.log(array3);
console.log(`__________Join method we can join with ,,A etc depend on u`);

 result =array1.join("|");
console.log(result);

console.log(`_____________________For OF loop_______________________`);

for (const element of array3) {
    console.log(element);

}

console.log(`______Resize Array____--`);
let array4=[4,5,6,7,8,9];
array4.length=3
console.log(array4);

console.log(`_________________spread operator...(rest parameter)__________`);
let array5=[4,5,6,7,8,9];
console.log(array5);
console.log(...array5);

console.log(`________SET.JS_____________________`);

const person={
    name:" dwarka",
    age: 32,
    college: "VNMKVP",
    city : "pune",


}
Object.freeze(person)
person.city=" pune"
console.log(person);
person.name="suni;"

console.log(person);

 