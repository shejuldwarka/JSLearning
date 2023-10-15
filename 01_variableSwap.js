var num1 = 100; // 200

var num2 = 200; // 100

console.log("Before Swap", "num1 - ", num1, " num2 - ", num2);

var temp = num1;

num1 = num2;

num2 = temp;

console.log(temp, num1, num2);

console.log("After Swap", "num1 - ", num1, " num2 - ", num2);


console.log('....................');
var num1 = 100; // 200
var num1 = 100; // 300
var num1 = 100; // 100



function vowelCount(str){
let count=0
for (let index = 0; index <str.length; index++) {
    let char=str.charAt(index);
if (char=="a"|| char=="e"|| char=="i"|| char=="o"|| char=="u"||
 char=="A"|| char=="E"|| char=="I"|| char=="O"|| char=="U")  {
    console.log(char);
count= count +1;
    }

}
console.log(`total no.of vowels is :${count}`);

}
vowelCount("I am very good UI Developer");


console.log(`_____________________06_loopAssigA.js___________________`);
//WAP SUM OF NUMBER FROM 1 TO 5
let sum= function(){
    let TotalSum=0;

 for (let index = 1; index <=20; index++) {
        TotalSum=TotalSum + (index);
        
    }
    console.log(`sum of first 20 number is :${TotalSum}`);
}
sum();
//1

let sumOfCube= function(){

    let TotalSumOfCube=1;
    for (let index = 1; index <=5; index++) {
        TotalSumOfCube=TotalSumOfCube + index*index*index
        
        
        
    }
    console.log(`cube of total number is  :${TotalSumOfCube}`);

}
sumOfCube();

console.log(`____________________________________________`);
//WAP ADDITION 1 TO 100

let add=function(){
    let totalAdd=0;
    for (let index = 1; index <=100; index++) {
         totalAdd=totalAdd+(index);
        
    }
    console.log(`Total Addition is ${totalAdd}`);
}
add();

console.log(`_______________________________________________________`);
    //WAP multiplication of number from 5 t0 8

    let cube = function(){

       let totalsum=0;
        for (let index = 5; index <=8; index++) {
             totalsum=totalsum+index*index*index;
            
        }
        console.log(` total cube some is ${totalsum}`);
    }
    cube();

    console.log(`___________________________________________________________`);


    let oddPositionedChars=function(str){
        let show= " "
for (let index = 0; index < str.length; index++) {
    const char=str.charAt(index);

    if (index%2!=0 && char!=' '){
        console.log(`${char}`);
        show=show.charAt(char)
    }

}
console.log(`${show}`);

    }

oddPositionedChars("Hard work always pays back");
console.log(`___________________________________________________`);
oddPositionedChars("Soon I will be Angular IT Champ");



console.log(`_______________________________________________`);
let oddP=function(string){
let str=" "
for (let index = 0; index < string.length; index++) {
    const char=string.charAt(index);
    if (index%2!=0 && char!=" ") {
       console.log(` Odd number position  is : ${char}`);
        str= str.concat(char)
    }
}
console.log(str);
}
oddP('Hey Virat Dude Good Morning');


console.log(`_____________________________________________`);

let reverString = function(str){

let reverse=" "
    for (let index =str.length-1 ; index >=0; index--) {
        const char=str.charAt(index);
        if (char!= " ") {
            reverse=reverse.concat(char);
        }
        

    }
    console.log(reverse);
}
reverString("Hard work always pays back");
reverString("Soon I will be Angular IT Champ");

function hello(){
    console.log("Hello");
    callback (100)

}
 let greet=function(num){
    console.log("Good Morning",num);

 }
 let sayBye=function(num1){
    console.log("Good Bye",num1);
 }
