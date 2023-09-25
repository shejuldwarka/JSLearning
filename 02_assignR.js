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


console.log(`____________________ Loop IPM 08 for loop___________`);
//index=11
for (let index = 0; index <=10; index++) {// index = index +1  
    console.log(index);//0  2 3----print...10
    
}
console.log("After loop");
0
2
3
4
5

10
//start/Initialization=0;
//Update Expression =1;
//condition<=10;

console.log(`________________vowelsCount.js____________________`);

var word = "JavaScript Language Of Internet";

// a e i o u == A E I O U

var count = 0;

for (let index = 0; index < word.length; index++) {

    var char = word.charAt(index); // 

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 

        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {

        //console.log(char);

        //count++;

    }

    

}

//console.log(`Count total vowels: ${count}`);



console.log(`_____________Assignment ,file 08 loopAssignA.js____________`);


var string= "I am very good IT Developer";
var Count=0
for (let index = 0; index < string.length; index++) {
    var char=string.charAt(index);

    if (char=="a" || char=="e" ||char=="i"||char=="o"|| char=="u"
        ||char=="A"|| char=="E"||char== "I"|| char=="0") {
        
  console.log(char);
  count ++;
        }

    
}
console.log(`Count total vowels: ${count}`);



// 1*1*1 + 2*2*2 + 3*3*3 4*4*4 5*5*5

sumOfCube=function (num) {

    var sum = 0;
    for (let index = 1; index <=num; index++) {
var sum= sum+ index*index*index;
    }
console.log(` sum of the cube of number is :${sum}`);

}
sumOfCube(5)
sumOfCube(7)
sumOfCube(9)

console.log(`_____________________________________________`);
function oddPositionedChars(givenstring) {
    for (let index = 0; index < array.length; index++) {
        ;
        
    }
}
oddPositionedChars("Hardwork always pays back");

