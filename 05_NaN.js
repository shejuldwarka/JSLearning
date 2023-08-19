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

console.log(`______Imlicit Conversion_______`);

var result='5'+'6'
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
