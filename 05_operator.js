//+addition
//- substraction
//* multiplication
//% modulus

console.log(`--------- Comparison Operators -------------`);

var num1 = 20;

var num2 = "20";

var result = num1 == num2;

console.log(`Result is : ${result}`);

console.log(`== Comparison ${47 == "47"}`);

console.log(`== Comparison ${89 == 98}`);

var result = num1 === num2;

console.log(`Result is : ${result}`);

console.log(`=== Comparison ${47 === "47"}`);

console.log(`=== Comparison ${"47" === "47"}`);

var result = num1 != num2;

console.log(`Using != Result is : ${result}`);

var result = num1 !== num2;

console.log(`Using != Result is : ${result}`);

var num3 = 30;

var num4 = 29;

var result = num3 < num4;

console.log(`Using < operator Result is : ${result}`);

var result = num3 > num4;

console.log(`Using > operator Result is : ${result}`);

var num5 = 30;

var result = num3 < num5;

console.log(`Using < operator Result is : ${result}`);

var result = num3 <= num5;

console.log(`Using <= operator Result is : ${result}`);

var result = num3 > num5;

console.log(`Using > operator Result is : ${result}`);

var result = num3 >= num5;

console.log(`Using >= operator Result is : ${result}`);

console.log(
  `____________________________practice assignment____________________________`
);
//exponentiation operator
var num1 = 10;
var num2 = 2;
result = num1 ** num2;
console.log(` result is: ${result}`);

num1 = 10;
num2 = 4;
result = num1 ** num2;
console.log(`${result}`);

console.log(`-------Practice------`);
//compound addition
num1 = 10;
num1 += 5; //num1+5; num1=15
console.log(`result is :${num1}`);

//coumpound subtraction
num1 = 15;
num1 -= 5; // num1-5; num1=10;
console.log(`result is :${num1}`);
// compund multiplication
num1 = 20;
num1 *= 10; // num1*20; num2
console.log(`result is :${num1}`);
//copound division
num1 = 20;
num1 /= 10; // num1/20; num2

console.log(`result is :${num1}`);

num1 = 15;
num1 %= 5; // num1 % 5; num1=15
console.log(`result is :${num1}`);

console.log(` _____Comparison_______`);
var num1 = 20;
var num2 = "20";
var result = num1 == num2;
console.log(`result is :${result}`);

num1 = 15;
num1 %= 5;
console.log(`${num1}`);

console.log(` ______Assignment switchcaseMonth.js_ done_____________`);
function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month is : Jan as month number is ${monthNumber}`);
      break;

    case 2:
      console.log(`Month is : Feb as month number is ${monthNumber}`);
      break;
    case 3:
      console.log(`Month is : March as month number is ${monthNumber}`);
      break;

    case 4:
      console.log(`Month is : Apri as month number is ${monthNumber}`);
      break;
    case 5:
      console.log(`Month is : May as month number is ${monthNumber}`);
      break;
    case 6:
      console.log(`Month is : Jun as month number is ${monthNumber}`);
      break;
    case 7:
      console.log(`Month is : July as month number is ${monthNumber}`);
      break;
    case 8:
      console.log(`Month is : August as month number is ${monthNumber}`);
      break;
    case 9:
      console.log(`Month is : Sep as month number is ${monthNumber}`);
      break;
    case 10:
      console.log(`Month is : Oct as month number is ${monthNumber}`);
      break;
    case 11:
      console.log(`Month is : Nov as month number is ${monthNumber}`);
      break;
    case 12:
      console.log(`Month is : Dec as month number is ${monthNumber}`);
      break;

    default:
      console.log(` Invalid Input ${monthNumber}`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);






console.log(`____________________ Loop IPM 08 for loop___________`);
//index=11
for (let index = 0; index <= 10; index= index+2) {// index = index +1  
    console.log(index);//0  2 3----print...10
    
}
console.log("After loop");
0
2
3
4
5

10
//start/Initialization=0;
//Update Expression =1;
//condition<=10;
console.log(`_____________________________________________________`);
for (let index = 0; index <=50; index= index+5 ) {// index= index +1
  console.log(index); //0
  
}
//Initialization =0
//update experession=1
//condition <=10

// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50

for (let index = 5; index <=50; index=index+5) { // index = 11

    console.log(index); // 0 1  2 ... 10 

}

console.log("After loop");
//wap to get the table of 100 in reverse order by decrementing 1

//100 99 98 97---80
for (let index = 100; index >=80;index--) {
  console.log(index);;
  
}

for (let index = 17; index <=170; index=index+17) {
  console.log(index);;
  
}
//wap to get the table of 190 in reverse order

//190 171 1**  19

for (let index = 190; index >=19;index =index-19) {
  console.log(index);
  
}

for (let index = 8; index <=80; index=index+8) {
  console.log(index);;
  
}



// wap to reverse the string --> JavaScript-->tpircsavaj
//using length property 
var str="JavaScript";//9
for (let index = 0; index < str.length; index++) {
 var char=str.charAt(index) ;//J a v a S ...end of loop
console.log(char);
  console.log(`______________________________________`);
}
// JavaScript = J a v a S c r  i  p  t

var str = "JavaScript"; // 9

for (let index = 0; index < str.length; index++) { // 0  1   2

     var char = str.charAt(index); // J  a v

     console.log(char); 

}

//WAP to reverse the string --> Javascript--> tr


// WAP to reverse the string --> JavaScript --> tpircSavaJ

// JavaScript -->

// initialization = 9

// condition index>=0

// update expression index--

var str = "JavaScript";

var reverseString = "";

for (let index = 9; index >= 0; index--) { // index = 9  8 

    var char = str.charAt(index);

    reverseString = reverseString.concat(char); 

}

console.log(reverseString);

console.log(`_______________________________________`);
function reverseWord(word){

  var reverseString = "";

  var wordLength = word.length - 1;

  for (let index = wordLength; index >= 0; index--) { // index = 9  8 

      var char = word.charAt(index);

      reverseString = reverseString.concat(char);    

  }

console.log(reverseString);

}

reverseWord("JavaScript");
reverseWord("Google Chrome");

reverseWord("Developer");




console.log(`_______________________________`);
// var string ="how are you doing"
//output doing you how hello


function wordCount(word){
var str ="How are you doing";


}


for (let index = 80; index >=8; index=index-8) {
  console.log(index);
  
}

//String JAVASCRIPT
var str="Javascript";//9
for (let index = 0; index < str.length; index++) {
  var char=str.charAt(index)// J
 // console.log(char);
}

//string  reverse order print string



//DwarkaShejul
var str="DwarkaShejul";
var reverseString=""
for (let index = 11; index >=0; index--) {
  var char=str.charAt(index);
  reverseString=reverseString.concat(char)

}
console.log(reverseString);

// WAP to reverse the string --> JavaScript --> tpircSavaJ

// JavaScript -->

// initialization = 9

// condition index>=0

// update expression index--

var str = "JavaScript";

var reverseString = "";

for (let index = 9; index >= 0; index--) { // index = 9  8 

    var char = str.charAt(index);

    reverseString = reverseString.concat(char); 

}

//console.log(reverseString);


console.log(`__________________________________________________________________________________________`);
var str= "HEY DUDE HOW ARE YOU";
var reverseString=""
for (let index = 20; index >=0; index--) {
 var char= str.charAt(index)
  reverseString=reverseString.concat(char);
}
console.log(reverseString);

console.log('_________________Shot method use with function_______________________');
function reverseWord(word){
  var reverseString="";
  var wordLength=word.length-1
  for (let index = wordLength; index >= 0; index--) { // index = 9  8 

    var char = str.charAt(index);

    reverseString = reverseString.concat(char); 


  }
  console.log(reverseString);

}
reverseWord("Javascript");
reverseWord("Google Chrome");


console.log(`_________________________________________________________`);



function wordCount(words){

  var str="Hello how are you doing"
var str=str.split(" ");
var wordCount=str.length;
console.log(`${wordCount}`);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
 



}
wordCount();

reverseWord("Hello how are you doing")
