class Vehicle {
    constructor(Company,Model,color,engineType,price){


    this.Company = Company;
    this.Model= Model;
    this.color = color;
    this.engineType= engineType;
    this.price = price;
    
    }


}
let VehicleToyota = new Vehicle("Toyota ","2001","Black","234","895 6433 890");
console.log(VehicleToyota);

let VehicleHero = new Vehicle("Hero Honda ","1997","silver","566","1000000");
console.log(VehicleHero);

let VehicleFord = new Vehicle("Ford ","1994","Orang","979","77000000");
console.log(VehicleFord);


let VehicleFerrari= new Vehicle("Ferrari ","1994","NavyBlue","977","11000000");
console.log(VehicleFerrari);

let VehicleRangeRover = new Vehicle("Range rover ","2005","SilverBlack","4X4","20000000");
console.log(VehicleRangeRover);


const array=[VehicleToyota,VehicleHero,VehicleFord,VehicleFerrari,VehicleRangeRover];
console.log(`Traversing array`);
for (const Vehicle of array) {
console.log(Vehicle);
    
}

