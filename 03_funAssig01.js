
console.log(".................STEP1..............");
function show(){ //no argument no return
    console.log(' learning .js 1');
    console.log(' learning .js 2');

}
 show();
 console.log("''''''''''''''''''STEP2''''''''''''''''");

 function personalDetails(firstName,lastName,collageName){
    console.log("First Name:","Dwarka");
    console.log("Last Name:","Shejul");

    console.log("Collage Name:","Vasantrao Naik Marathwada Krushi Vidhyapeeth Parbhani" );


 }
  personalDetails("Dwarka","Shejul","Vasantaro Naik Marathwada Krushi VidhyaPeeth Parbhani");

  console.log("''''''''''''''''''''''STEP3''''''''''''''''''''''''");

  function swapValues(n1,n2){
    console.log("Before Swapping:","values:",n1,"values:",n2);

    var temp=n2;
    n2=temp;
    console.log("After Swapping:","values:",n1,"values:",n2);
    
  }
  swapValues(1000,2000);
  var name1="Virat";
  var name2="Anushka";
  swapValues(name1,name2);

  console.log("''''''''''''''''''''''STEP4'''''''''''''''''");
  function addThreeValues(arg1,arg2,arg3){
    console.log( "Addition are:",arg1+arg2+arg3);
    }
    addThreeValues(10.23,600,40);
    addThreeValues("hello","Good","Morning");
    console.log("'''''''''''''''''''''''STEP5'''''''''''''''''''''''''''''");
    function bankDetails(bankName,accountNum,location,pinCode){
    console.log("BankName=>",bankName,"AccountNumber=>",accountNum,"Location=>",location,"PinCode=>",pinCode);
    }
    bankDetails("CITI Bank",3456782345,"Pune",431202);
    bankDetails("Axis Bank",7891234568,"Mumbai",425103);
    bankDetails("HDFC Bank",2345678954,"pune",631202,"Open");

  
var num=0/0;
console.log(num);

var a=20;
var b='20';
var ab=20/'10';
console.log(ab);

var pin="202"
console.log(typeof pin);

var n=+pin;
console.log(typeof n);

var result=+pin;
console.log(result);



console.log(`______________________________`);
function display(){
  console.log(" I love to learning js");
}
display();
console.log(`____________________________________`);

function personalDetails(FirstName,lastName,collegeName){
  console.log('FirstName','Dwarka');
  console.log('LastName','Shejul');
  console.log('CollegeName','VNMKVP');


}
personalDetails();
console.log(`_________________________`);
function swapValues(num1,num2){
  console.log('Before swapping:',' values',num1, 'Values',num2);
temp=num1;
num1=num2;
num2=temp;
 console.log('Before swapping:',' values',num1, 'Values',num2)
}
swapValues(100,200);
swapValues('Virat','Anushka');
swapValues(57,89);
console.log(`______________________________________`);
function threeValues(ag1,ag2,ag3){
var result= ag1+ag2+ag3;
console.log(`${result}`);

}
threeValues(10.23,600,40);
threeValues("Hello","Good","Morning");
console.log(`____________________________`);
function bankDetails(bankName,accountNum,location,pinCode){
console.log("BankName",bankName,"AccountNum",accountNum,"Location",location,"pinCode",pinCode);

}
bankDetails("CITI Bank",3456782345,"Pune",431202);
bankDetails("Axis Bank",7891234568,"Mumbai",425103);
bankDetails("HDFC Bank",2345678954,"pune",631202,"Open");

