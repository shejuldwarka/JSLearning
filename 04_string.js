var greet = "Good Morning Virat Dude";
var lengthGreet= greet.length;
console.log(greet,'Length of String is:', lengthGreet);

console.log(`------------------------------------`);
var charAt0 = greet.charAt(0);
console.log(`${greet} - Char at 0th index is ${charAt0}`);

var charAtLastIndex = greet.charAt(lengthGreet-1);
console.log(` Last Char is ${charAtLastIndex} of Index is ${lengthGreet}`);
console.log(`------------------------------------`);

var firstName = "Gajanan";
var lastName = " Kharat";
var result = firstName + lastName;
console.log(`concatenation String is  ${result}`);
var result = firstName.concat(lastName);
console.log(`My Full name is ${result}`);

console.log(`------------------------------------`);
var result = greet.indexOf('M');
console.log(`Index of char 'M' ${result}`);
var result = greet.indexOf('Dude');
console.log(`Index of sub string 'Dude' is : ${result}`);

console.log(`------------------------------------`);
var result = greet.includes('Virat');
console.log(`Result is ${result}`);

console.log(`------------------------------------`);
var result = greet.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);

console.log(`------------------------------------`);
var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);

console.log(`------------------------------------`);
var greet = "      Good Morning      ";
var result = greet.trim();
console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);
var resultTrimEnd = greet.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = greet.length - trimEndLength;
console.log(` End Spaces is : ${endSpaces} `);

console.log("__________________________________");
var greet1 ="Hey How  Are  You";
var lengthGreet1=greet1.length;
console.log('Length of string is :',lengthGreet1);
console.log('__________________________________________');

greet.charAt(0);
var charAt0=greet.charAt(0);
console.log(` ${greet} -Char at 0th index is:${charAt0}`);

var charAtLastIndex=greet.charAt(lengthGreet1-1);
console.log(`Last Char is :${charAtLastIndex} of index is ${lengthGreet1}`);

console.log(`_________________________________________________________`);
var firstName="  Dwarka";
var lastName=" Shejul";

var result=firstName+lastName;
console.log(` concated string is : ${result}`);

var num1=100;
num2=200
var result=num1+num2
console.log(`concated number's; ${result}`);

var result=firstName.concat(lastName);
console.log(`My full Name is : ${result}`);
console.log(`__________________IndexOf method ===pass the char & sub string__________`);
var result =greet1.indexOf('u');
console.log(` index of char 'u is:${result}`);

var result=greet1.indexOf('A');
console.log(` index of char A is : ${result}`);
var result =greet1.indexOf('o');
console.log(` indexof char "o" is ${result}`);

var result= greet1.indexOf("Are");
console.log(`index of substring "Are" is ${result}`);
var result=greet1.includes("How");
console.log(`Find The Word is HOW: ${result}`);

var result=greet1.includes("Are");
console.log(`Find The Word is "Are" : ${result}`);

var result=greet1.includes("So");
console.log(`Find The Word is "so" : ${result}`);

console.log(`________________________string word Find_________________`);
var result=greet1.split(' ');


var words=result.length;

console.log(`Total No.of words are:${words}`);

console.log(`_____________________________`);
var greet1 ="      Hey How  Are  You   ";
var result=greet1.trim();
var len=result.length;
console.log(`Before trim string length is :${greet.length}, after trim string length ${greet.length}, and its length is ${result.length}`);

console.log(`_______________trimEnd method_________`);
var resultTrimEnd=greet.trimEnd();
var resultTrimEnd=resultTrimEnd.length
var endSpaces=greet.length-trimEndLength;

console.log(`end spaces is ${endSpaces}`);
var resultTrimstart=greet.trim();
var resultTrimstart=resultTrimstart.length;
var startSpaces=greet.length-resultTrimstart;
console.log(`start space count is ${startSpaces}`);
console.log(`_________________________________________`);
var greet ="dwarka Ganesh"
var result =greet.replace(' ','-');
console.log(` After replace with'-', string is ${result}`);
var result=greet.replace('a','A');
console.log(`replace the string is :${result}`);
console.log(`_______________________________________________`);
var greet =" Good Morning Dhoni Dude"
var result=greet.slice(0,5);
console.log(`starting index is :${result}`);

console.log(`_____________Assignment Is__________`);
function stringBasics(){
    var name1="my dream company name is : HCL " ;

console.log(name1);


}
stringBasics();
 
var hobbies='playing cricket, listening music,swimming,dancing';
console.log(`My Hobbies Is :${hobbies}`);
var lengthhobbies=hobbies.length;
console.log(` sum total of character is: ${lengthhobbies}`);



