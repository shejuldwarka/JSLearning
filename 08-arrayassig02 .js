console.log( `----------Find Total No. Element Vailable--------`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`Type of array is: ${typeof array}`);
console.log(arrayNumbers);

let arrayNumbersLength = arrayNumbers.length;

console.log(` Total Length Array Is :${arrayNumbersLength}`);


let firstElement=arrayNumbers[0];
console.log(`Given First Element is : ${firstElement}`);

let LastNumberElementLength=arrayNumbers.length;
arrayNumbersLength=arrayNumbers[arrayNumbersLength-1];
console.log(`Given Last Element is:${LastNumberElementLength}`);


let thirdLastElement=arrayNumbers.splice


console.log(`__________________________________________________________`);
const arrayFruits=["Orange","Apple","Mango","WaterMelon"];
var firstE1=["Orange","waterMelon"];

console.log(`${firstE1}`);



console.log(`________________________08 array.js____________________________`);

var arrayN = [10, 20, 30, 50, 10, 80, 20];
console.log(arrayN);
console.log(`type of array is :${ typeof arrayN}`);
console.log(`total number of element in array is: ${arrayN.length}`);

let element2=arrayN[2];
console.log(` index store is 2 : ${element2}`);
let index0=arrayN[0];
console.log(`index is ${index0}`);

let arrayNlength=arrayN.length
let lastElement=arrayN[arrayNlength-1];
console.log(`last of element in array is: ${lastElement}`);
let thirdLastElement1=arrayN[arrayNlength-3]
console.log(`Third Last elements find in this array: ${thirdLastElement1}`);

console.log(`____________________Updated values from array___________________________`);

arrayN[1]=100;
console.log(arrayN);

console.log(`______________________values check in array_______________________`);

let isAvailable=arrayN.includes(10);
console.log(isAvailable);

console.log(`_________i want to find of  index--------------`);

let indexOfElement=arrayN.indexOf(50);
console.log(` index of 50 is : ${indexOfElement}`);

console.log(`________________________________`);
//traversing array 

for (let index = 0; index < arrayN.length; index++) {
    const element = arrayN[index];
    console.log(element);
    
}
//traversing array IN Reverse order 
console.log(`_____________________________________________`); 
for (let index = arrayN.length-1; index >= 0 ; index--) {
    const element = arrayN[index];
    console.log(element);
}


//even index array values first method
let array2=0;
for (let index = 0; index < arrayN.length;index = index+2) {
    const element = arrayN[index];
    console.log(element);
}

console.log(`_____________log Even indexed element_ second method_________`);

for (let index = 0; index < arrayN.length; index++) {
    if (index%2==0) {
    const element = arrayN[index];
    console.log(element);
        
    }
    
}

console.log(`::::::::::::add last element::::::::::::::::::::`);
arrayN.push(90);
console.log(arrayN);
console.log(`__________________add element in beggining_____________`);

arrayN.unshift(120);
console.log(arrayN);
console.log(`_______________Remove last element in arraya_____________`);
arrayN.pop(90);
console.log(arrayN);

console.log(`_______________Remove First element in arraya_____________`);

arrayN.shift();
console.log(arrayN);
//all method u can add/pass multiple value
 arrayN.push(30,40);
 arrayN.unshift(10,20);
 console.log(arrayN);
 console.log(`_____________Getting the slice from array_______________________`);

 var arrayN = [10, 20, 30, 50, 10, 80, 20];

console.log( arrayN.slice(3));
console.log( arrayN.slice(1, 4));


console.log(`________PERFORMING INSERT OR  REMOVE OPERATION IN ARRAY `);


cconsole.log( `----------Find Total No. Element Vailable--------`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`Type of array is: ${typeof array}`);
console.log(arrayNumbers);

let arrayNumbersLength = arrayNumbers.length;

console.log(` Total Length Array Is :${arrayNumbersLength}`);


let firstElement=arrayNumbers[0];
console.log(`Given First Element is : ${firstElement}`);

let LastNumberElementLength=arrayNumbers.length;
arrayNumbersLength=arrayNumbers[arrayNumbersLength-1];
console.log(`Given Last Element is:${LastNumberElementLength}`);


let thirdLastElement=arrayNumbers.splice


console.log(`__________________________________________________________`);
const arrayFruits=["Orange","Apple","Mango","WaterMelon"];
var firstE1=["Orange","waterMelon"];

console.log(`${firstE1}`);



console.log(`________________________08 array.js____________________________`);

var arrayN = [10, 20, 30, 50, 10, 80, 20];
console.log(arrayN);
console.log(`type of array is :${ typeof arrayN}`);
console.log(`total number of element in array is: ${arrayN.length}`);

let element2=arrayN[2];
console.log(` index store is 2 : ${element2}`);
let index0=arrayN[0];
console.log(`index is ${index0}`);

let arrayNlength=arrayN.length
let lastElement=arrayN[arrayNlength-1];
console.log(`last of element in array is: ${lastElement}`);
let thirdLastElement1=arrayN[arrayNlength-3]
console.log(`Third Last elements find in this array: ${thirdLastElement1}`);

console.log(`____________________Updated values from array___________________________`);

arrayN[1]=100;
console.log(arrayN);

console.log(`______________________values check in array_______________________`);

let isAvailable=arrayN.includes(10);
console.log(isAvailable);

console.log(`_________i want to find of  index--------------`);

let indexOfElement=arrayN.indexOf(50);
console.log(` index of 50 is : ${indexOfElement}`);

console.log(`________________________________`);
//traversing array 

for (let index = 0; index < arrayN.length; index++) {
    const element = arrayN[index];
    console.log(element);
    
}
//traversing array IN Reverse order 
console.log(`_____________________________________________`); 
for (let index = arrayN.length-1; index >= 0 ; index--) {
    const element = arrayN[index];
    console.log(element);
}


//even index array values first method
let array2=0;
for (let index = 0; index < arrayN.length;index = index+2) {
    const element = arrayN[index];
    console.log(element);
}

console.log(`_____________log Even indexed element_ second method_________`);

for (let index = 0; index < arrayN.length; index++) {
    if (index%2==0) {
    const element = arrayN[index];
    console.log(element);
        
    }
    
}

console.log(`::::::::::::add last element::::::::::::::::::::`);
arrayN.push(90);
console.log(arrayN);
console.log(`__________________add element in beggining_____________`);

arrayN.unshift(120);
console.log(arrayN);
console.log(`_______________Remove last element in arraya_____________`);
arrayN.pop(90);
console.log(arrayN);

console.log(`_______________Remove First element in arraya_____________`);

arrayN.shift();
console.log(arrayN);
//all method u can add/pass multiple value
 arrayN.push(30,40);
 arrayN.unshift(10,20);
 console.log(arrayN);
 console.log(`_____________Getting the slice from array_______________________`);

 var arrayN = [10, 20, 30, 50, 10, 80, 20];

console.log( arrayN.slice(3));
console.log( arrayN.slice(1, 4));


console.log(`________PERFORMING INSERT OR  REMOVE OPERATION IN ARRAY `);


cconsole.log( `----------Find Total No. Element Vailable--------`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`Type of array is: ${typeof array}`);
console.log(arrayNumbers);

let arrayNumbersLength = arrayNumbers.length;

console.log(` Total Length Array Is :${arrayNumbersLength}`);


let firstElement=arrayNumbers[0];
console.log(`Given First Element is : ${firstElement}`);

let LastNumberElementLength=arrayNumbers.length;
arrayNumbersLength=arrayNumbers[arrayNumbersLength-1];
console.log(`Given Last Element is:${LastNumberElementLength}`);


let thirdLastElement=arrayNumbers.splice


console.log(`__________________________________________________________`);
const arrayFruits=["Orange","Apple","Mango","WaterMelon"];
var firstE1=["Orange","waterMelon"];

console.log(`${firstE1}`);



console.log(`________________________08 array.js____________________________`);

var arrayN = [10, 20, 30, 50, 10, 80, 20];
console.log(arrayN);
console.log(`type of array is :${ typeof arrayN}`);
console.log(`total number of element in array is: ${arrayN.length}`);

let element2=arrayN[2];
console.log(` index store is 2 : ${element2}`);
let index0=arrayN[0];
console.log(`index is ${index0}`);

let arrayNlength=arrayN.length
let lastElement=arrayN[arrayNlength-1];
console.log(`last of element in array is: ${lastElement}`);
let thirdLastElement1=arrayN[arrayNlength-3]
console.log(`Third Last elements find in this array: ${thirdLastElement1}`);

console.log(`____________________Updated values from array___________________________`);

arrayN[1]=100;
console.log(arrayN);

console.log(`______________________values check in array_______________________`);

let isAvailable=arrayN.includes(10);
console.log(isAvailable);

console.log(`_________i want to find of  index--------------`);

let indexOfElement=arrayN.indexOf(50);
console.log(` index of 50 is : ${indexOfElement}`);

console.log(`________________________________`);
//traversing array 

for (let index = 0; index < arrayN.length; index++) {
    const element = arrayN[index];
    console.log(element);
    
}
//traversing array IN Reverse order 
console.log(`_____________________________________________`); 
for (let index = arrayN.length-1; index >= 0 ; index--) {
    const element = arrayN[index];
    console.log(element);
}


//even index array values first method
let array2=0;
for (let index = 0; index < arrayN.length;index = index+2) {
    const element = arrayN[index];
    console.log(element);
}

console.log(`_____________log Even indexed element_ second method_________`);

for (let index = 0; index < arrayN.length; index++) {
    if (index%2==0) {
    const element = arrayN[index];
    console.log(element);
        
    }
    
}

console.log(`::::::::::::add last element::::::::::::::::::::`);
arrayN.push(90);
console.log(arrayN);
console.log(`__________________add element in beggining_____________`);

arrayN.unshift(120);
console.log(arrayN);
console.log(`_______________Remove last element in arraya_____________`);
arrayN.pop(90);
console.log(arrayN);

console.log(`_______________Remove First element in arraya_____________`);

arrayN.shift();
console.log(arrayN);
//all method u can add/pass multiple value
 arrayN.push(30,40);
 arrayN.unshift(10,20);
 console.log(arrayN);
 console.log(`_____________Getting the slice from array_______________________`);

 var arrayN = [10, 20, 30, 50, 10, 80, 20];

console.log( arrayN.slice(3));
console.log( arrayN.slice(1, 4));


console.log(`________PERFORMING INSERT OR  REMOVE OPERATION IN ARRAY `);


console.log( `----------Find Total No. Element Vailable--------`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`Type of array is: ${typeof array}`);
console.log(arrayNumbers);

let arrayNumbersLength = arrayNumbers.length;

console.log(` Total Length Array Is :${arrayNumbersLength}`);


let firstElementW=arrayNumbers[0];
console.log(`Given First Element is : ${firstElementW}`);

let LastNumberElementLength1=arrayNumbers.length;
arrayNumbersLength=arrayNumbers[arrayNumbersLength-1];
console.log(`Given Last Element is:${LastNumberElementLength1}`);


let thirdLastElementA=arrayNumbers.splice


console.log(`__________________________________________________________`);
const arrayFruits1=["Orange","Apple","Mango","WaterMelon"];
var firstE1=["Orange","waterMelon"];

console.log(`${firstE1}`);



console.log(`________________________08 array.js____________________________`);

var arrayN = [10, 20, 30, 50, 10, 80, 20];
console.log(arrayN);
console.log(`type of array is :${ typeof arrayN}`);
console.log(`total number of element in array is: ${arrayN.length}`);

let element=arrayN[2];
console.log(` index store is 2 : ${element}`);
let index=arrayN[0];
console.log(`index is ${index}`);

let arrayNlength1=arrayN.length
let lastElementB=arrayN[arrayNlength1-1];
console.log(`last of element in array is: ${lastElementB}`);
let thirdLastElementO=arrayN[arrayNlength-3]
console.log(`Third Last elements find in this array: ${thirdLastElementO}`);

console.log(`____________________Updated values from array___________________________`);

arrayN[1]=100;
console.log(arrayN);

console.log(`______________________values check in array_______________________`);

let isAvailableX=arrayN.includes(10);
console.log(isAvailableX);

console.log(`_________i want to find of  index--------------`);

let indexOfElementN=arrayN.indexOf(50);
console.log(` index of 50 is : ${indexOfElementN}`);

console.log(`________________________________`);
//traversing array 

for (let index = 0; index < arrayN.length; index++) {
    const element = arrayN[index];
    console.log(element);
    
}
//traversing array IN Reverse order 
console.log(`_____________________________________________`); 
for (let index = arrayN.length-1; index >= 0 ; index--) {
    const element = arrayN[index];
    console.log(element);
}


//even index array values first method
let arrayM=0;
for (let index = 0; index < arrayN.length;index = index+2) {
    const element = arrayN[index];
    console.log(element);
}

console.log(`_____________log Even indexed element_ second method_________`);

for (let index = 0; index < arrayN.length; index++) {
    if (index%2==0) {
    const element = arrayN[index];
    console.log(element);
        
    }
    
}

console.log(`::::::::::::add last element::::::::::::::::::::`);
arrayN.push(90);
console.log(arrayN);
console.log(`__________________add element in beggining_____________`);

arrayN.unshift(120);
console.log(arrayN);
console.log(`_______________Remove last element in arraya_____________`);
arrayN.pop(90);
console.log(arrayN);

console.log(`_______________Remove First element in arraya_____________`);

arrayN.shift();
console.log(arrayN);
//all method u can add/pass multiple value
 arrayN.push(30,40);
 arrayN.unshift(10,20);
 console.log(arrayN);
 console.log(`_____________Getting the slice from array_______________________`);

 var arrayN = [10, 20, 30, 50, 10, 80, 20];

console.log( arrayN.slice(3));
console.log( arrayN.slice(1, 4));


console.log(`________PERFORMING INSERT OR  REMOVE OPERATION IN ARRAY `);

