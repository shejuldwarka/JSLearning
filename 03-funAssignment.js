const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`;---------------First and last element log----------------`);

console.log(arrayFruits[0]);
let length=arrayFruits.length;
console.log(arrayFruits[length-1]);
console.log(`-----------------Add element Papaya before element Banana----------------`);
let a=arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`---------------------Remove 'Mango' from the array------------------`);
let removedElement = arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`--------------Add element or insert an element "pineapple" At the last position-------------`);
arrayFruits.push("pineapple");
console.log(arrayFruits);
console.log(`-------------Insert an element "Dragon Fruit"before "water Melon----------------`);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(arrayFruits);
console.log(`---------------Replace an element "orange" with "Kiwi"------------------------------`);
arrayFruits.splice(2,0,"Kiwi")
console.log(arrayFruits);

console.log(`------------Log elements starting from index 1 to 4---------------------------`);
for (let index = 0; index < 4; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}

console.log(`-------------------only select last 3 element-----------------------------------------`);
console.log(arrayFruits);
let elementLast = arrayFruits.slice(length)
console.log(`Last  3 element is : ${elementLast}`);