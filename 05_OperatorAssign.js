console.log(`-----------------------------`);
function squareOfWordLength() {
  var word = "JavaScript";
  var wordLength = word.length;
  var result = 10 * 10;
  console.log(
    `find the length of words  is   :${wordLength} and it's Length square is :${result}`
  );
}
var result = squareOfWordLength("JavaScript");
console.log(`${result}`);
console.log(`--------------------------------------------------------------`);

function squareOfWordLength() {
  var word = "Google Chrome";
  var wordLength = word.length;
  var result = 13 * 13;
  console.log(
    `find the length of words  is   :${wordLength} and it's Length square is :${result}`
  );
}

var result = squareOfWordLength("Google Chrome");

console.log(
  `------------------------------------------------------------------`
);

var show = function () {
  var string = "I am Angular Developer";
  var stringLength = string.length;
  console.log(` string Length is :${stringLength}`);

  var word = string.split(" ");
  var result = word.length;
  console.log(` word Count is :${result}`);
  var result = 22 / 4;
  console.log(` divided by total words is :${result}`);

  var result = 22 * 4;
  console.log(` multiple by total words is :${result}`);
};
show();

console.log(
  `_______________________________________________________________________________________`
);
var greaterNumber = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(` greates number between 10 and -10 is : ${result}`);
};
greaterNumber(10, -10);

var greaterNumber = function (num1, num2) {
  var result = num1 > num2 ? num1 : num2;
  console.log(` greates number between 800 and 899 is : ${result}`);
};
greaterNumber(800, 899);

console.log(`___________________________________________________________________`);
var isEvenOrOddNum=function(num1){

    var num1= 29;
var result=num1%2==0

console.log(` the Given Number is ${result}`);


}
isEvenOrOddNum();


var isEvenOrOddNum=function(num1){

    var num1= 44;
var result=num1%2==0

console.log(` the Given Number is : ${result}`);


}
isEvenOrOddNum();
var isEvenOrOddNum=function(num1){

    var num1=0;
var result=num1%2==0

console.log(` the Given Number is : ${result}`);


}
isEvenOrOddNum();
var isEvenOrOddNum=function(num1){

    var num1= 101;
var result=num1%2==0

console.log(` the Given Number is : ${result}`);


}
isEvenOrOddNum();

console.log(`________________________________________________________`);


var wordLength=function(value1){
var string ="JavaScript";
var stringLength= string.length;
 var value1=10;
 result=value1%2==0 ? "EVEN" :"odd";
 console.log(` given  word  length  is 10 : and  ${stringLength}  this is  ${result}`);


}
wordLength();

var wordLength=function(value1){
    var string ="Developer Smart";
    var stringLength= string.length;
     var value1=15;
     result=value1%2==0 ? "EVEN" :"odd";
     console.log(` given  word  length  is 15 : and  ${stringLength}  this is  ${result}`);
    
    
    }
    wordLength();
    var wordLength=function(value1){
        var string =" Google Chrome" ;
        var stringLength= string.length;
         var value1=14;
         result=value1%2==0 ? "EVEN" :"odd";
         console.log(` given  word  length  is 14 : and  ${stringLength}  this is  ${result}`);
        
        
        }
        wordLength();
        
    



