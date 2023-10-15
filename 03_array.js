var array = [10, 20, 30, 50, 10, 80, 20];

console.log(array);

console.log(`Type of array is: ${typeof array}`);

 

console.log(`Total number of elements in array is: ${array.length}`);

let element2 = array[2];

console.log(`Element stored at index 2 is: ${element2}`);

 

let element1 = array[0];

console.log(`Element stored at index 1 is: ${element1}`);

let arrayLength = array.length;

let elementLast = array[arrayLength-1];

console.log(`Last element is : ${elementLast}`);

 

console.log(`---------------------------`);

array[1] = 100;

console.log(array);

 

let isAvailable = array.includes(80);

console.log(`Is 80 available : ${isAvailable}`);

 

let indexOfElement = array.indexOf(50);

console.log(`Index of 50 is : ${indexOfElement}`);

 

console.log(`----------- Array traversing -----------`);

for (let index = 0; index < array.length; index++) {

    const element = array[index];

    console.log(element);

}

console.log(`----------- Array traversing in reverse order -----------`);

 

for (let index = array.length-1; index >= 0; index--) {

    const element = array[index];

    console.log(element);

}

 

console.log(`----------- Log even indexed element -----------`);

for (let index = 0; index < array.length; index++) {

    if (index%2==0) {

        const element = array[index];

        console.log(element); 

    }

}

 

console.log(`Inserting element in the first and last position`);

var array = [10, 20, 30, 50, 10, 80, 20];

array.push(70);

array.push(300, 500);

array.unshift(60);

array.unshift(21, 41, 69);

console.log(array);

 

console.log(`Remove element in the oth index and last index`);

var array = [10, 20, 30, 50, 10, 80, 20];

array.pop();

array.shift();

console.log(array);

 

console.log(`Getting the slice from array`);

var array = [10, 20, 30, 50, 10, 80, 20];

console.log(array.slice(3));

console.log(array.slice(1, 4));

 

console.log(` Removing the array element using splice()`);

var array = [10, 20, 30, 50, 10, 80, 20];

let removedElement = array.splice(4);

console.log(array);

console.log(removedElement);

 

var array = [10, 20, 30, 50, 10, 80, 20];

let elementRemoved = array.splice(4, 2)

console.log(array);

console.log(elementRemoved);

 

console.log(` Inserting the array element using splice()`);

var array = [10, 20, 30, 50, 10, 80, 20];

array.splice(3, 0, 100, 200, 300, 600)

console.log(array);

 

var array = [10, 20, 30, 50, 10, 80, 20];

array.splice(4, 2, 33, 55, 66, 77 );

console.log(array);

console.log(`-----------------------`);



console.log(`____________________________________________________________________`);
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
let lastElement=arrayN[arrayNlength1-1];
console.log(`last of element in array is: ${lastElement}`);
let thirdLastElementO=arrayN[arrayN.length-3]
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

var arrayN = [10, 20, 30, 50, 10, 80, 20];
var arrayNLength=arrayN.Length;
console.log(arrayNLength);
var removeElement =arrayN.splice(4);
console.log(arrayN);

console.log(removeElement);
var arrayN = [10, 20, 30, 50, 10, 80, 20];
let elementRemoved2 =arrayN.splice(4,2)
console.log(arrayN);
console.log(elementRemoved2);

console.log(`__________Inserting the array element using splice__________________`);

var arrayN = [10, 20, 30, 50, 10, 80, 20];
arrayN.splice(3, 0, 100, 200);
console.log(arrayN);
console.log(`_______________Replace Element =replce the 10 or 80 element__________`);
var arrayN = [10, 20, 30, 50, 10, 80, 20];
arrayN.splice(4, 2, 33, 55, 66, 77);

console.log(arrayN);

console.log(`____________________________________`);
