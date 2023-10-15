let jenny = {

    fullName: "Jenny Musk",

    age: 22,

    city: "Pune",

    college: "COEP Pune", 

}

marks = {

    physics: 100,

    science: 99,

    math: 92

}

 

let mergedObject = Object.assign({} , jenny, marks);

console.table(mergedObject);

console.log(`____________________________________________________________`);


let dwarka={
    FullName: "Dwaraka Shejul",
    age: 25,
    college: "VNMKVP",
    Mob:9877665544,
}
marks={
    physics: 99,

    science: 91,

    math: 100

}


let mergObject2=Object.assign({} , dwarka, marks);

console.table(mergObject2);
console.log(`_____________________________________________`);
const profile={
    name:"peter",
    age: 56,
    kids:[{
        name:"jill",
        age: 23,
        kids:[{
            name:"bill",
            age:2,
        }]

    }
        
    ]
}



