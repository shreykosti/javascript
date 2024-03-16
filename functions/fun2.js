//taking multiple value as input

function calculatepricevalue(...num1){
    return num1;
}

console.log(calculatepricevalue(1,22,3,4,5,6,78,9));
//return array

//object and function 

const human = {
    name : "shrey",
    age : "20",
    class : "2nd year",
}

function student(anyobj){
    return `name of student is ${anyobj.name} his age is ${anyobj.age}`
}

console.log(student(human));