// NaN - Not a Number

var num1 = 0;

var num2 = 0;

var result = num1/num2;

console.log(result);

 

var num3 = "100";

console.log(`Type of num3 is: ${typeof num3}`);

var result = +num3;

console.log(`Type of result is: ${result}`);

console.log(`Type of result is: ${typeof result}`);

 

console.log(`---------------------`);

var num4 = "GK";

var resultNum4 = +num4; 

//  var resultNum4 = NaN;

console.log(`Type of resultNum4 is: ${resultNum4}`);

console.log(`Type of resultNum4 is: ${typeof resultNum4}`);

console.log(`______Implicit Conversion_______`);
var result= '5'+6;
console.log(result);

var result= 80+true;
console.log(result);
result='3'+true;
console.log(result);

// string convert to Number
 var num3  ='GK'+ '2';
 var result= +num3;
 console.log(` string convert into no. is :${result}`);

 console.log(typeof result);

 console.log(`____________________________________________________________`);

 var num1 = "100";
 console.log(` type of is :${typeof num1}`);
 var result = +num1;
 console.log(` type of ${result}`);
 console.log(` type of ${typeof result}`);



//Exponential values
num1=10;
num2=2;
var result= num1**num2;
console.log(` result is ${result}`);

var num1=10
var num2=21;
var result =num1%2==10
console.log(`${result}`);


var num2="GK";
console.log(`type of is :${typeof num2}`);
result = +num2
console.log(`${result}`);


console.log(`-------------------Implicit conversion-------------------`);
num1=20;
num2="20";
result=num1==num2;
console.log(`  ${result}`);
console.log(`${typeof result}`);


result=80+ true;
console.log(`why result is 80true because thier is implicit conversion from boolean value true to string that why got result 80true`);
console.log(`result is: ${result}`);
result= '3'+2;
console.log(`result is: ${result}`);
console.log(`why result is 32 because thier is implicit conversion from string to  no . their is concatination that's why result got 32`);

result= '3 '+ null;
console.log(`result is: ${result}`);

result= '4 '- '2';
console.log(`result is: ${result}`);


console.log(`------------NAN Invalid result eg______ `);
result= 4 + undefined;
console.log(`result is: ${result}`);


result= true+ undefined;
console.log(`result is: ${result}`);

result= null+ undefined;
console.log(`result is: ${result}`);

console.log(`____________Explicit Conversion___________________`);

 var num="33";
 var result = +num;
console.log(` result is :${result} and type is: ${typeof result}`);
console.log(`---------------------------------------------------------`);
num1= 10;
num2='10'
10=='10';
result=num1==num2

console.log(` result is :${result} `);


var result='80'-true;
console.log(` result is :${result} `);


console.log(`----- Implicit conversion -----`);

var result = '5' + 6;

console.log(result);

 

var result = '80' + true;

console.log(result);

console.log(`Why result is 80true because their is implicit conversion from boolean value true to string 'true'`);

 

var result = '80' - true;

console.log(result);

console.log(`Result is 79 bcz `);

 

console.log(`----- Explicit Conversion --------`);

var num = '22';

var result = +num;

console.log(`Result is ${result} and it's type is: ${typeof result}` );

 

console.log(`Second way of string to number explicit conversion`);

var result = Number(num);

console.log(`Result is ${result} and it's type is: ${typeof result}` );

 

var result = Number("Virat");

console.log(`Result is ${result} and it's type is: ${typeof result}` );

 

var num = 100;

console.log(`Value of num: ${num} and it's typeof ${typeof num}`);

var result = String(num);

console.log(`Result is ${result} and it's type is: ${typeof result}` );

 

var num = 100;

var result = Boolean(num);

console.log(`Result is ${result} and it's type is: ${typeof result}` );

 

console.log('------');

var num = "50";

var result = Boolean(num);

console.log(`Result is ${result} and it's type is: ${typeof result}` );

 

var isMarried = true;

var result = String(isMarried);

console.log(`Result is ${result} and it's type is: ${typeof result}` );
console.log(`_____________________________________`);
var num=200;
console.log(`value of  ${num} and it is type of :${typeof num}`);
var result = String (num);
console.log(`value of  ${result} and it is type of :${typeof result}`);
console.log(`_______________________________________________________`);

var num1=300;
console.log(`value of ${num1} and type of is : ${typeof num1}`);
var result = String(num1);
console.log(`value of ${result} and type of is : ${typeof result}`);
console.log(`____________________________________________________________`);
var num3=true;
console.log(`value of ${num3} and type of is : ${typeof num3}`);
var result =  Number(num3);

console.log(`value of ${result} and type of is : ${typeof result}`);

var isMarried=true;
var result= String(isMarried)
console.log(`value of ${result} and type of is : ${typeof result}`);
console.log(`   _______________________Assignement -C________________________________________________`);

console.log(0=='');
console.log(`__________________________`);
console.log(0=='0');
console.log(0=='false');
console.log(`__________________________`);

console.log(null==undefined);
console.log(`__________________________`);

console.log(1==[1]);
console.log(`__________________________`);

console.log(1==true);
console.log(`__________________________`);

console.log(1=='1');
console.log(`_________________________________Ternery operator  Assignment__________________________________`);

var interviewEligibility = function(gradScore, hscScore, sscScore, candidateName ){

    var result = gradScore>=70 || hscScore>= 80 || sscScore >=90 
 
     ? `Congrats ${candidateName} you are eligible for TCS interview.`
 
     :  `Unfortunately you are not eligible for interview`;
 
     console.log(result);
 
 }
 
  
 
 interviewEligibility(80, 86, 90, 'Mahi');
 
 interviewEligibility(70, 65, 55, 'Gill');
 
 interviewEligibility(60, 79, 88, 'Stew');
 
 

 var pin = " 202";
 var result= Number(pin);
 console.log(` value is ${result} and type of ${ typeof result}`);
 console.log(`___________________________________________________________________`);
 var pin = " 202";
 console.log(` value is ${pin} and type of ${ typeof pin}`);
 var result= +pin;
 console.log(` value is ${result} and type of ${ typeof result}`);


