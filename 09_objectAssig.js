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




 

