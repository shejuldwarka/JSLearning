
 console.log('----------------STEP1----------------');
function swap(){ //no argument no return

console.log('I like learning.js');
console.log('I like learning also HTML,CSS');

}
swap();

console.log('--------------------------STEP2---------------------');
function personalDetails(firstName,lastName,collageName) { //arguments
    console.log("firstName :","dwarka");
    console.log("lastName :","shejul");
    console.log( "collageName :","VNMKVP");
    
}
personalDetails(`firstName,lastName,collageName`);
  console.log('---------------------STEP3-------------');
function swapVlauesDude(n1,n2){ //
  console.log('"Before Swapping',"values",n1,"values",n2);
  var temp=n1;
  n1=n2;
  n2=temp;
  
  
  console.log('"After  Swapping',"values",n1,"values",n2);

 
}
 swapVlauesDude(1000,2000);
 var name1  ="Virat";
 var name2  ="Anushka";

 swapVlauesDude(name1,name2);

console.log("-------------------------STEP4--------------------");

function addThreeValues(arg1,arg2,arg3){

  
  console.log("addition is ",arg1+arg2+arg3 );
 
}

addThreeValues(10,40.34,60);

addThreeValues("Hello","Good","Morning" );

