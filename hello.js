
let array =[10,20,30,50,,10,80,20];
console.log(array);
console.log(`tyope of array is : ${typeof array}`);
console.log(`Total No.of elements in array is: ${array.length}`);
let element3 =array[3];
console.log(`Element stored at index 3 is:${element3}`);

let arrayLength=array.length;
let elementLast=array[arrayLength-1];
console.log(`Given Last Element is : ${elementLast}`)


let elementThirdLast=array[arrayLength-3];

console.log(`Given Third last element is : ${elementThirdLast}`);

let elementSecondLast=array[arrayLength-2];
console.log(` Given Second last element is:${elementSecondLast}`);

console.log(`------------Update the value-----------------`);
array[1]=100;
console.log(array);
array[3]=200
console.log(array);

console.log(`-----------------include method =check value--------`);
let isAvailable = array.includes(90);
console.log(`is 90 Available: ${isAvailable}`);

console.log(`-------------How to find Index is any array----------`);
let indexOfElement=array.indexOf(27);
indexOfElement
console.log(`is 27 index of :${indexOfElement}`);


console.log(`--------------------`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log(`-----------------Arrray traversing in reverse order----`);
for (let index =array.length-1; index >= 0;  index--) {
    const element = array[index];
    console.log(element);
}

console.log(`---------------  log even indexed element----`);
for (let index = 0; index < array.length; index++) {
    if (index%2==0) {
        const element = array[index];
        console.log(element);
       }
    }
console.log(`========================end array insert==============`);

array.push(90);
console.log(array);
console.log(`========================STAR BEGINING ADD NO,==============`);
array.unshift(25);
console.log(array);

console.log(`========================i want to remove last element,==============`);

array.pop(90);
console.log(array);
console.log(`========================STAR BEGINING remove NO,==============`);
array.shift(10);
console.log(array);

console.log(`========================end add multiple value push method,==============`);

array.push(80,60,35)
console.log(array);
console.log(`========================star add multiple value unshift method,==============`);

array.unshift(66,78,90,68);
console.log(array);

console.log(`========================slice method,==============`);
console.log(`Getting slice from array:`);
console.log(array.slice(3));
console.log(`========================slice method,star index end return index==============`);
console.log(array.slice(1,4));


console.log(`______performing inser or remove operation in array_______`);

console.log(`............ I want to remove element................`);

let removedElement=array.splice(4);
console.log(array);
console.log(removedElement);

console.log(`-----------remove index .......`);

let elementRemoved=array.splice(2,4);
console.log(array);
console.log(elementRemoved);

array.splice(array.length-2,2)
console.log(array);
console.log(`can u remove ask 4 element`);
array.splice(array.length-4)
console.log(array);
console.log(`-------------------------------------`);

let isAvailable2=array.includes(20);
console.log(`20 is available is it:${isAvailable2}`);


var array=[banana,dragon,papaya,lemon,watermelon,muskmelon]  
let arrayLength2=array.length
console.log(`find array length: ${arrayLength2}`);





