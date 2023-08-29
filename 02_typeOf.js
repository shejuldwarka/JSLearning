var bankName; // Declaration
console.log(bankName);
console.log(typeof bankName);

var bankName; // Declaration
bankName = " SBI Bank" // Initialization
console.log(bankName);
console.log(typeof bankName);

console.log(`_______________________________________`);

var marks; // Declaration
marks = "90%" // Initialization
  console.log(marks)
  console.log(typeof marks);
 
console.log(`_________________________________________`);

 
var isWorking= true; //Declaration & Initialization
console.log(isWorking);
console.log(typeof isWorking);

console.log(`__________________________________________`);

var totalCount="Hundred Seven";//Declaration & Initialization
console.log(totalCount);
console.log(typeof totalCount);

var totalCount=107;
console.log(totalCount);
console.log(typeof totalCount);



console.log(`-------------------------`);











console.log(`_______________________________________________`);
function stringHandson(){
  var str="   Hey you are doing good, keep it up   ";
console.log(`________________STEP1_________________`);
 console.log(`Given string  is :${str}`);
console.log(`______________________STEP2______________________`);

var strLength=str.length;
console.log(` String Length is :${strLength}`);

console.log(`___________________________STEP3_____________________`);

var resultTrimstart=str.trim();
var resultTrimstart=resultTrimstart.length;
var startSpaces=str.length-resultTrimstart;
console.log(` Remove the leading spaces is :${startSpaces}`);

var resultTrimEnd=str.trim();

resultTrimEnd=resultTrimEnd.length;
endSpaces=str.length-resultTrimEnd;
console.log(`remove endspaces from this string is:${endSpaces}`);

var str=str.trim();
strLength=str.length
console.log(`removing leadind & trailing spaces string length : ${strLength}`);

console.log(`____________________________STEP4__________________________`);


var resultTrimEnd=str.trim();
resultTrimEnd=resultTrimEnd.length;
endSpaces=str.length-resultTrimEnd;
console.log(`remove endspaces from this string is:${endSpaces}`);
console.log(`---------------------------------------------------------------------`);
var str=str.trim();
strLength=str.length
console.log(`removing leadind & trailing spaces string length : ${strLength}`);
 var count=startSpaces+endSpaces;
console.log(`---------------------------------------------------------------------`);
console.log(`Total number extra spaces count that is remove step 3:${count}`);
console.log(`---------------------------STEP5-------------------------------------------`);
var first= afterTrim.charAt(0);
console.log(`${first}`);
var last= afterTrim.charAt(afterTrim.length-1);
console.log(`First & last chararcter is:${first},${last}`);




}
stringHandson();