var string = "     Hey you are  doing good,keep it up     ";


   function stringHandsOn(){
    console.log(`-----------STEP1----------------------------------------`);
console.log(`   Given string is:    Hey you are doing good, keep it up     `);


console.log(`--------------------STEP2---------------------------------------`);
var result = string.length
console.log(`    Length of string is : ${result}     `);
console.log(`-----------------------------STEP3-----------------------------`);
var leading=string.trim();
var newString=leading.length;
console.log(`Removing leading and trailing extra spaces of string:${leading} ,and it's length is:${newString}`);


console.log(`---------------------STEP4------------------------------------------------------`);

var resultTrimstart=string.trimStart();
var trimStartLength = resultTrimstart.length; 
var startSpaces = string.length - trimStartLength;
var resultTrimEnd = string.trimEnd();
var trimEndLength = resultTrimEnd.length; 
var endSpaces = string.length - trimEndLength;
var count=startSpaces+endSpaces;
console.log(`Total number extra spaces count that is remove step 3:${count}`);

console.log(`--------------------------------STEP5-----------------------------`);
var first=leading.charAt(0);
var last=leading.charAt(newString-1);
console.log(`first  charater after trim:${first}, Last  charater after trim: ${last}`);

console.log(`--------------------------------------------------STEP6----------------------------`);
var result =leading.split(' ');
var words = result.length;
console.log(`Total number of words are : ${words}`);

console.log(`--------------------------------STEP7--------------------------------------------`);
var result=leading.indexOf("good");
console.log(`Index of ${"good"} word from string ${result}`);
console.log();

console.log(`------------------------------------STEP8-------------------------------------`);
var result=leading.slice(22);
console.log(`substring starting from index 22: ${result}`);

console.log(`-----------------------------------STEP9------------------------`);
var end=leading.endsWith(`up`);
console.log(`String end with word ${'up'}: ${end}`);
console.log(`------------------------------------STEP10--------------------------------`);
var start=leading.startsWith('Hey');
console.log(`String start with word ${'Hey'}:${start}`);


}


stringHandsOn();

