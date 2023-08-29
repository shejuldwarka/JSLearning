 let professor={

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
 
 certificates: [ 'HackerRankParticipation','IFEcourse','AdvProgramming'];

 }

professor.degree.getDegree();

professor.totalExper="15 years";
let result=professor.degree.Phd="English";
console.log(result);
professor.certificates.pop();
professor.certificates.push("Anju");


let student={
    rollNumber:4364,
    state:"MH",
    city:"pune",
    collage:"VNMKV",


}
let keysStudent=Object.keys(student);
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




 

