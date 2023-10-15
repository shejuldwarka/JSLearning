let mySet = new Set();

mySet.add(2);

mySet.add(4);

mySet.add(6);

mySet.add(7);

console.log(mySet);

mySet.add(4);

console.log(mySet);

let isAvailable = mySet.has(6);

console.log(isAvailable);

let is9Available = mySet.has(9);

console.log(is9Available);

//console.log(`Set size is ${mySet.size}`);

mySet.delete(4);

console.log(mySet);

// mySet.clear();

for (const element of mySet) {
  console.log(element);
}

let array = [4, 5, 4, 5, 8, 5];

let setOfNumbers = new Set();

for (const value of array) {
  setOfNumbers.add(value);
}

console.log(array);

console.log(setOfNumbers);

console.log(`Removing duplicate elements from array using spread operator`);

let arrayNew = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];

arrayNew = [...new Set(arrayNew)];

console.log(arrayNew);

//Console.log(newSet);

console.log(`-------------MAP.JS---------`);
let arrayM = [11, "6ft", "GK", "MH", true, true];
console.log(arrayM);
let map = new Map();
map.set("rollNo", 11);
map.set("height", "6ft");
map.set("name", "GK");
map.set("state", "MH");
map.set("isMarried", true);
map.set("haveKid", true);
map.set("Skills", ["Angular", "React", "Java", "Docker", "KB", "CICD"]);
//console.table(map);
console.log(map.size);
let stateValues = map.get("state");
console.log(stateValues);
console.log(`__________________skills_______________________________`);
let skills = map.get("Skills");
for (const Skill of skills) {
  console.log(Skill);
}

let isHeightKeyAvalaible = map.has("height");
console.log(isHeightKeyAvalaible);
map.delete("haveKid");
console.table(map);

console.log(map.keys()); //return all keys
console.log(map.values()); //reteun all values
console.log(`------traversing map--------`);
let keys = map.keys();
for (const key of keys) {
  console.log(`${key}==>${map.get(key)}`);
}

console.log(`__________________09_OBJECT File_____________________`);
let personGK = {

  empId: 2233,

  state: "MH",

 designation: "Tech Lead",

  city: "Pune",

  isMarried: true,

  empId: 2233,

show:function(){
  console.log(`Inside Show Function`);
}

};

console.log(personGK);
console.log(typeof personGK);
console.log(`Emp Id: ${personGK.empId}`); // Dot Notation
console.log(`Emp city: ${personGK["city"]}`);
console.log(`designation:${personGK.designation}`);

//let isMarried=personGK.isMarried;
//console.log(isMarried);
personGK.show();

let empId=personGK.empId;
console.log(empId);
personGK.city='mumbai'
 
delete personGK.designation;
console.log(personGK);

delete personGK.empId
console.log(personGK);
personGK.adhharNumber=43455653455
console.log(personGK);

//function in object how to call

console.log(`_______Empaty object created------`);
let array2=[];

let banks={

}
bank.bankName="SBI BanK"
bank.location= "Aundh Pune";
console.log(bank);
//object properties
let bank1={
  bankName: "SBI Bank",
  accountNumber:12345673,
  ifsc: SBIN000567,
  
 }
 bank.bankName="SBI BanK"
 bank.location= "Aundh Pune";
 console.log(bank);


console.log(`__________________Nested Object______________`);

 let bank = {

  bankName: "SBI Bank",

  accountNumber: 12345673,

  ifsc: "SBIN000567",

  address: {

      street: "Wakad Main Road",

      pin: 411057,

      landmark: "Near Petrol Pump",

      telPhone: "020-446789",

      city: "Pune",

      state: "MH",

      country : "India"

  },

  empNames : ["Jenny", "Elon", "Warrren", "Stew"]

}



let city = bank.address.city;

bank.address.country = "Maharashtra";
delete bank.address.telPhone;

remove = bank.empNames.pop()
console.log(remove);
bank.empNames.unshift("mark")
console.log(bank.empNames);

console.log(`__________THIS+++++++++++++`);
let personGK = {

  empId: 2233,

  state: "MH",

  designation: "Tech Lead",

  city: "Pune",

  isMarried: true,

  show: function(){

      console.log(`Inside show function`);

  }

}

console.log(personGK);



console.log(typeof personGK);



console.log(`Emp Id: ${personGK.empId}`); // Dot Notation

console.log(`Emp city: ${personGK["city"]}`);



let isMarried = personGK.isMarried;

console.log(isMarried);



personGK.city = "Mumbai";

console.log(personGK);



delete personGK.designation;

console.log(personGK);



personGK.adharNumber = 123456781234;



personGK.show();



let array = [];



let bank = {

  bankName: "SBI Bank",

  accountNumber: 12345673,

  ifsc: "SBIN000567",

  address: {

      street: "Wakad Main Road",

      pin: 411057,

      landmark: "Near Petrol Pump",

      telPhone: "020-446789",

      city: "Pune",

      state: "MH",

      country : "India",

      getAddress: function(){

         console.log(`Bank Address: ${this.street}, ${this.landmark}, ${this.pin}, ${this.telPhone}, ${city}, ${this.state}, ${this.country}`);

      }

  },

  empNames : ["Jenny", "Elon", "Warrren", "Stew"]

}



let city = bank.address.city;

bank.address.country = "Maharashtra";

bank.empNames.pop();

bank.empNames.unshift("Mark");



bank.address.getAddress();
















let arrayNew1=[4,5,4,5,8,5,7,8,9,7,8];
for (let index = 0; index <10; index++) {
console.log(index);    
}

