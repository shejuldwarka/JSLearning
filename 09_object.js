console.log(`__09_classPerson.js`);

class person {
  constructor(fullName, mobile, emailId, age, salary) {
    this.fullName = fullName;
    this.mobile = mobile;
    this.emailId = emailId;
    this.age = age;
    this.salary = salary;
  }
  show() {
    console.log(
      ` Student Details is Full Name:${this.fullName},Mobile Number: ${this.mobile}, Email Id:${this.emailId}, Age: ${this.age}, Salary: ${this.salary}`
    );
  }
}
let personStew = new person(
  "Stew Job",
  "9988776655",
  "stew12J@gmail.com",
  34,
  67890
);
//personStew.show();

let personJenny = new person(
  "Jenny Gate",
  9922334455,
  "jenny@gmail.com",
  9575757
);
//personJenny.show();
console.log(`Array Traversing`);
const array2 = [personStew, personJenny];
for (const person of array2) {
  person.show();
}

console.log(
  `++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`
);
class Student {
  constructor(fullName, rollNo, college, emailId, mobile) {
    this.fullName = fullName;
    this.rollNo = rollNo;
    this.college = college;
    this.emailId = emailId;
    this.mobile = mobile;
  }
  show() {
    console.log(`Student Details is Full Name: ${this.fullName} , Roll Number: ${this.rollNo}
      College Name: ${this.college}, Email Id: ${this.emailId}, Mobile : ${this.mobile}`);
  }
}
let studentJenny = new Student(
  "Jenny Gates",
  11,
  "COEP Pune",
  "abc@gmail.com",
  "9096 78 6789"
);
let studentStew = new Student(
  "Stew Page",
  22,
  "JSPM",
  "stew@gmail.com",
  "9867 8989 98"
);
let studentElon = new Student(
  "Elon Musk",
  33,
  "Standford",
  "stew@gmail.com",
  "9867 8989 98"
);
let studentSatya = new Student(
  "Satya Nadella",
  44,
  "ABC",
  "stya@gmail.com",
  "9867 8989 98"
);
let studentSundar = new Student(
  "Sundar Pichai",
  55,
  "XYZ",
  "sundar@gmail.com",
  "9867 8989 98"
);
const array = [
  studentJenny,
  studentStew,
  studentElon,
  studentSatya,
  studentSundar,
];
console.log(`Traversing array`);
for (const student of array) {
  student.show();
}

console.log(
  `)))))))))))))))))))))))))))))))))))))))))))))))))))))))ASSIGMENT-1CLASS))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))`
);
class Vehicle {
  constructor(company, model, price, owner, established) {
    this.company = company;
    this.model = model;
    this.price = price;
    this.owner = owner;
    this.established = established;
  }
}
let VehicleCar = new Vehicle(
  "TATA",
  " TATA-M467",
  "10 lac",
  "RATAN TAT",
  "1938"
);
//console.log(VehicleCar);
let VehicleBike = new Vehicle(
  "TATA",
  " TATA-MH6790",
  "1 lac",
  "RATAN TAT",
  "1910"
);
//console.log(VehicleBike);

const VehicleOfArray = [VehicleCar, VehicleBike];
for (const Vehicle of VehicleOfArray) {
  //console.log(`Vehicle Details Name: ${Vehicle.company}, Model: ${Vehicle.model}, Price: ${Vehicle.price},Owner: ${Vehicle.owner}, Established: ${Vehicle.established}`);
  Vehicle.company;
  Vehicle.model;
  Vehicle.price;
  Vehicle.owner;
  Vehicle.established;
  console.log(Vehicle);
}

console.log(`____________prototype function constructor____`);

function College(name, year, city, founderName) {
  this.name = name;

  this.year = year;

  this.city = city;

  this.founderName = founderName;
}

const coep = new College("COEP Pune", 1970, "Pune", "Yogesh Muske");

console.log(coep);

let mit = new College("MIT", 1990, "Mumbai", "Sitaji Narayan");

console.log(mit);

let shivaji = new College("Shivali College", 2001, "Karad", " Sunil Kadam");

console.log(shivaji);

College.prototype.country = "Bharath";

console.log(`MIT Country : ${mit.country}`);

console.log(`COEP Country : ${coep.country}`);

console.log(`Shivaji Country : ${shivaji.country}`);


