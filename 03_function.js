
function swap(n1, n2){ // n1, n2 arguments or parameters n1=100   n2=200

    console.log('Inside swap function');

    console.log('Before Swap=> n1', n1, " n2", n2 );

    var temp = n1;

    n1 = n2;

    n2 = temp;

    console.log('After Swap=> n1', n1, " n2", n2 );

}

var num1 = 100;

var num2 = 200;

swap(num1, num2);// Function call or invocation

 

var sweety = "Sweety";

var cutie = "Cutey";

swap(sweety, cutie);

 

var name1 = "Virat";

var name2 = "Anushka";

swap(name1, name2);



var show1=200;
var show2= 300; 
swap(show1,show2);

console.log('End of program');

console.log(`---------------------------------------`);

var name1="Bilgates";
var name2="Elon Musk";
var numOne=100;
var numTwo=200;
var fruitApple="Apple";
var fruitMango="Mango";
function swapVariables(valueOne,valueTwo){// var valueOne=100 valueTwo=200
    console.log("Before Swap:", valueOne, valueTwo);

    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log("After Swap is :",valueOne,valueTwo);
}
swapVariables(numOne,numTwo);//100 200
swapVariables(name1,name2);
swapVariables(fruitApple,fruitMango);


console.log(`-----------------F----------`);

