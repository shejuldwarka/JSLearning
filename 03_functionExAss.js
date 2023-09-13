var square = function (num1) {
  var result = num1 * num1;
  console.log(`  Given Square of the 5th is:  ${result}`);
};
square(5);
console.log(`___________________________________________________`);
var square = function (num2) {
  var result = num2 * num2;
  console.log(`  Given Square of the 6th is:  ${result}`);
};
square(6);
console.log(`____________________________________________________`);
var square = function (num3) {
  var result = num3 * num3;
  console.log(`  Given Square of the 25th is:  ${result}`);
};
square(25);
console.log(`_______________________________________________________________`);
var square = function (num4) {
  var result = num4 * num4;
  console.log(`  Given Square of the 100th is:  ${result}`);
};
square(100);

var square = function (num5) {
  var result = num5 * num5;
  console.log(`  Given Square of the 67.89 th is:  ${result}`);
};
square(67.89);

var square = function (num6) {
  var result = num6 * num6;
  console.log(`  Given Square of the 59th is:  ${result}`);
};
square(59);
console.log(`__________________________________________`);

console.log(`type of square is :`, typeof square);
console.log(`___________________________________________________`);

var rectangular=function(lenght,width){
    var recArea=lenght*width;
    var result=499*917;
    console.log(` Recatangular length & width is: ${result}`);


}
rectangular();
console.log(`_______________________________________________________`);

var mahi="mahi";
var raina="raina";

var swapValues=function(mahi,raina){
console.log(`Before Swap is :`,mahi,raina);

var temp=mahi;
mahi=raina;
raina=temp;
console.log(`Before Swap is :`,mahi,raina);



}
swapValues(mahi,raina);
swapValues(55,77);
console.log(`_____________________________________________`);
var strOperation=function(){
    var string="JS the most popular langauge of internet"
    var result=string.length;
    console.log(`Char Available in this string is:${result}`);

    console.log(`_______________________________`);

    var charAt=string.charAt(6);
    console.log(` Character at indext 6 is: ${charAt}`);
    var charAt11=string.charAt(11);
    console.log(` Character at indext 6 is: ${charAt11}`);


var charAtLast=string.charAt(string.length-1);
console.log(` Last property of char is :${charAtLast}`);


var charFirst=string.charAt(0);
console.log(`Find First CharAt in This String is: ${charFirst}`);
var charThirdlast=string.charAt(string.length-3)
console.log(`Third last char is :${charThirdlast}`);

console.log(`-----------------------------------------------------`);

var word=string.split(" ");
var wordCount=word.length;
console.log(`in given string wordCount  is :${wordCount}`);

var square = 7*7;
console.log(`Square of string is : ${square}`);

var word=string.split(" ");
result=string.lenght
console.log(` Total No. of words is :${result}`);

}

strOperation();



console.log(`_________________________________________`);
var square=function (num1){
   var result=num1*num1;
   console.log(`${result}`);
}
square(6)
console.log(typeof square);

var rectangular=function(length,width){
  rectArea=length*width;
  result=499*917;
  console.log(` rectangular is: ${result} `);
}
rectangular();

console.log(`__________Swap Vlaues_____________`);
swapValues2=function(mahi,raina){

  console.log('Before Swapping is :',mahi,raina);

  var temp=mahi

var mahi=raina;

 var raina=temp;
 console.log('After Swapping  is :',mahi,raina);

}
swapValues2(mahi,raina);
swapValues2(55,77);
swapValues2(11,33);
console.log(`__________________________________`);


var strOperation=function(){
 var string ="Js the most popular language of internet";
 var result=string.length;
console.log( `string length is : ${result}`);

var charAt=string.charAt(7)
console.log(`Character at index 7th is : ${charAt}`);

var charAt12=string.charAt(12);
console.log(`find char 12 from string is =${charAt12}`);
var charAtLast=string.charAt(string.length-1)
console.log(` Last index property is : ${charAtLast}`);
var charAtFirst=string.charAt(0);
console.log(`firs tChart at index is : ${charAtFirst}`);
var charThirdlast=string.charAt(string.length-3);
console.log(` third last cha index is :${charThirdlast}`);
var words=string.split(' ');
wordCount=words.length
console.log(` find total no. of word is :${wordCount}`);
var result=7*7;
console.log(`sqaure of word is 7 is square :${result}`);

}
strOperation("Js the most popular language of internet");










