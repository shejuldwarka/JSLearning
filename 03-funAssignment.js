const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`;---------------First and last element log----------------`);

console.log(arrayFruits[0]);
let length=arrayFruits.length;
console.log(arrayFruits[length-1]);
console.log(`-----------------Add element Papaya before element Banana----------------`);
let a=arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`---------------------Remove 'Mango' from the array------------------`);
let removedElement = arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`--------------Add element or insert an element "pineapple" At the last position-------------`);
arrayFruits.push("pineapple");
console.log(arrayFruits);
console.log(`-------------Insert an element "Dragon Fruit"before "water Melon----------------`);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(arrayFruits);
console.log(`---------------Replace an element "orange" with "Kiwi"------------------------------`);
arrayFruits.splice(2,0,"Kiwi")
console.log(arrayFruits);

console.log(`------------Log elements starting from index 1 to 4---------------------------`);
for (let index = 0; index < 4; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}

console.log(`-------------------only select last 3 element-----------------------------------------`);
console.log(arrayFruits);
let elementLast = arrayFruits.slice(length)
console.log(`Last  3 element is : ${elementLast}`);


console.log(`::::::::::::::::::::::::::::::::::::::::::: :::::::REVISION ::::::::: ::::::::::::::::::::::::::::::::::::::::::::::`);

 var greet='Good Morning Dude';
  var lengthGreet=greet.length;

console.log('Length of string is ',lengthGreet);
var charAt0=greet.charAt(0);
console.log(` ${greet}char at o th index is${charAt0}`);

var charAtLastIndex=greet.charAt(lengthGreet-1);
console.log(` char at ${charAtLastIndex} index of ${lengthGreet}`);


console.log(`----------Concatination---------------`);
var firstName= " dwarka";
var lastName= " Shejul";
var result=firstName.concat(lastName)
console.log(` My full Name is ${result}`);

var result=greet.indexOf('e');
console.log(` index of e is ${result}`);
 var result=greet.indexOf('o')
 console.log( ` index of is ${result}`);

 var result=greet.indexOf("Dude");
 console.log(`  index of dude is ${result}`);

 var result=greet.includes('Morning');
 console.log( ` Find Morning word is ${result}`);
console.log(`________________________________________`);

 var result=greet.split(' '); 
 var words=result.length;
console.log(`Total No. of words are:${words}`);

console.log(`=======================`);
var greet='    Good Morning     ';
var result=greet.trim();
length.greet;

console.log(` Before trim string length is:${greet.length}, after trim string is ${result}, and it is ${result.length} `);

var resultTrimEnd=greet.trimEnd();
resultTrimEnd=resultTrimEnd.length;
var endSpaces= greet.length -resultTrimEnd
console.log(` endspaces is : ${endSpaces}`);

console.log(`__________________________________`);

resultTrimstart=greet.trim();
resultTrimstart=resultTrimstart.length;
startSpaces=greet.length-resultTrimstart;
console.log(` start speaces is ${startSpaces}`);

console.log(`______________________`);

var greet= "Good Morning " ;
var result=greet.replace(' ',' -');
console.log(`after result is :${result} `);

var result=greet.replace('o','O');
console.log(result);
console.log(`-----------------------------`);

