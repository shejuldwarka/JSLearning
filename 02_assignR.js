let array1= [1,2,3,4];
let array2= [5,6,7,8]
let array3=array1.concat(array2);
console.log(array3);
console.log(`----------Join------------`);

let result=array2.join(",");
console.log((result));

console.log(`------For  of loop---------------------`);
for (const element of array3) {
    console.log(element);
}

console.log(`------For  of loop---------------------`);

for (const element of array1) {
    console.log(element);
}
console.log(`------For  of loop---------------------`);
for (const element of array2) {
    console.log(element);
}
 
console.log(`----------------join----------------`);
 
let result1=array2.join("-")
 console.log(result1);
 console.log(`---------spread------`);
let array5=[4,5,6,7,8]
console.log(...array5);

var array=[banana,dragon,papaya,lemon,watermelon,muskmelon]
let arrayLength=array.length
console.log(`find array length: ${arrayLength}`);

