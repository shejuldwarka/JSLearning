
var array1=[1,2,3,4.5];
var array2=[9,8,7,6,5];
var array3=array1.concat(array2);
console.log(array3);
var result=array3.join(`,`);
console.log(result);


console.log(`________For Of Loop____________`);

for (const element of array3) {
    console.log(element);
}


console.log(`------ array resize ----------`);

let array4 = [4, 5, 6, 7, 8, 9];

array4.length = 3;

console.log(array4);



console.log(`------ spread operator ... ----------`);

let array5 = [4, 5, 6, 7, 8, 9];

console.log(array5);

console.log(...array5);












