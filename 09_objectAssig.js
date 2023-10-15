 /*let professor={

Name: "sunilMane",
collage: "VNMKVP",
Age: "45",
City: "Jalna",
State:"MH",
Country: "India",

degree: {
    enginering:"civil",
csc:  "microbiology",
Phd:"maths",
advcomputing:"ento",
msc:"Path",

getDegree:function(){
   console.log(`degree :${this.enginering}, ${this.csc}, ${this.Phd} ,${this.advcomputing}, ${this.msc}`);
}

 },
 
 //certificates: [ 'HackerRankParticipation','IFEcourse','AdvProgramming'];

 }

professor.degree.getDegree();

professor.totalExper="15 years";
let result=professor.degree.Phd="English";
console.log(result);
//professor.certificates.pop();
//professor.certificates.push("Anju");


let student={
    rollNumber:4364,
    state:"MH",
    city:"pune",
    collage:"VNMKV",


}
/*let keysStudent=Object.keys(student);
console.log(keysStudent)
let valuesStudent=Object.values(student);
console.log(valuesStudent);

console.log(` ________traversing on object__________`);

for (const key in object) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`key: ${key}, value:${element}`);
        
        
    }
}
*/

let professor={
    profName:'Manisha Jadhav',
    profCollageN:"VNMKVP",
    profAge:30,
    State:"MH",
    Sub: "IT",

    degree:{
        engineering: "Civil",
        PHD: "adv Computing",
        Bsc: " Bio tech",
        CA: " Adv.accounting",
        getDegree:function(){
            console.log(`degree:${this.engineering},${this.PHD},${this.Bsc},${this.CA}`);
        }
    },
    certificates:[" Hacker Rank Participation","certificate in IFE course","Certificate in Adv Programming"]
}

professor.degree.getDegree();
console.log(professor.degree);

professor.profAge=32;
console.log(professor);
//let profName=professor.profName;
//console.log(profName);

professor.certificates.push("Msc Certificate")
console.log(professor.certificates);
console.log(`________Assignement 09_boject.js_B__________`);
console.log(_`___________Step1______________`);
 let sbiBank={
    bankName:"SBI Bank",
    location: "wakad pune",
    accountNumber: 123445666,
    ifsc:"SBI00034",
    interestRate: 10.5,
    showDetails:function(){
        console.log(`bankName: ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);

    }
    
 }

  myJSON= JSON.stringify(sbiBank, null, "/t")
 console.log(" sbi bank details: " ,myJSON);
 
 sbiBank.showDetails();

 console.log(`_____________Step 2________________________`);

 let axisBank={
    bankName:"AXIS Bank",
    location: "phase1 pune",
    accountNumber: 99876554,
    ifsc:"AXIS00686",
    interestRate: 11,
    showDetails:function(){
        console.log(`bankName: ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);

    }
    
 }

  myJSON1= JSON.stringify(axisBank, null, "/t")
 console.log(" axis bank details: " ,myJSON1);
 
axisBank.showDetails();
 console.log(`______________________Step3 _________________________________________`);
 let hdfcBank={
    bankName:"HDFC Bank",
    location: "Wipro Circle pune",
    accountNumber: 65768666,
    ifsc:"HDFC00345",
    interestRate: 11.5,
    showDetails:function(){
        console.log(`bankName: ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);

    }
    
 }
 myJSON= JSON.stringify(hdfcBank, null, "/t")
console.log("  hdfc bank details: " ,myJSON);
 hdfcBank.showDetails();

console.log(`_______________________STep 4___________________`);
yesBank={
    bankName:"YES Bank",
    location: "V.Nagar pune",
    accountNumber: 1,
    ifsc:"YES0656",
    interestRate: 9.5,
    showDetails:function(){
        console.log(`bankName: ${this.bankName}, ${this.location}, ${this.accountNumber}, ${this.ifsc}, ${this.interestRate}`);

    }
 }
  let myJSON= JSON.stringify(yesBank, null, "/t")
 console.log(" Yes bank details: " ,myJSON);
 
 yesBank.showDetails();


 


