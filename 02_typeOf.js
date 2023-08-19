var bankName; // Declaration
console.log(bankName);


var bankName; // Declaration
bankName = " SBI Bank" // Initialization
console.log(bankName);


var mark; // Declaration
mark = "string " // Initialization
  console.log(mark)

  var mark; // Declaration
mark = " 90%" // Initialization
console.log(mark);


var dataType; // Declaration
console.log(dataType);

var dataType; // Declaration
  console.log(dataType)
 

  var mark; // Declaration
mark = "true " // Initialization
  console.log(mark)

  var value; // Declaration
  value = "boolean " // Initialization
    console.log(value)
   
    var value; // Declaration
    value = "Hundred and Seven " // Initialization
      console.log(value)
  
      var mark; // Declaration
mark = "string " // Initialization
  console.log(mark)

  var mark; // Declaration
mark = "107" // Initialization
  console.log(mark)

  var mark; // Declaration
mark = "Number" // Initialization
  console.log(mark)


 var once; //Declaration
 once = " "
 console.log(once);


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