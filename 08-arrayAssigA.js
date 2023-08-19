const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];

 let elementFirst = arrayFruits[0];
console.log  ( `Given First Element is :${elementFirst} `);

let elementLast= arrayFruits[arrayFruits.length-1];
console.log();

console.log(`Given Last Element is;  ${elementLast}`);

let a =arrayFruits.unshift("papaya");
console.log(`Log array Papaya Before Banana:  ${arrayFruits}`);
 
let removedElement=arrayFruits.splice(4,1);
console.log(`Remove Mango From Array is : ${arrayFruits}`);

let elementLastPosition=arrayFruits.push("Pine Apple")
console.log(`add element 'Pine Apple' at the Last position: ${arrayFruits}`);

let adElement=arrayFruits.splice( 4,0,"Dragon Fruit")

console.log(` Add an element Dragon Fruit,Before 'watermelon:  ${arrayFruits}`);

arrayFruits.splice(2,0,"Kiwi");
console.log(` Replace an element "Orange " with Kiwi :  ${arrayFruits}`);

    


console.log(`-------------elements starting from index 1 to 4-----------------`);
for (let index = 1; index < 4; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}


