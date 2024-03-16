//object literal//

//creating symbol//

const mySym = Symbol("key1")

//creting object//
const shrey = {
    name : "shrey",
    age : 19,
    location : "surat",
    [mySym]: "someone",//using symbol in object
}

//empty object//

//singleton - The Singleton Pattern ensures that a class can only have a 
// single instance throughout the lifetime of an application. By 
// restricting the instantiation of a class to one object, you can 
// ensure that shared resources or data are managed consistently across
// different parts of your application

const shrey1 = new Object();//singleton
const shrey2 = {};//non singleton

shrey2.id = "hero"
shrey2.name = "superman"
shrey2.islogin = false

console.log(shrey2);

//accesing object

// console.log(shrey.name);
// console.log(shrey["location"]);
// console.log(shrey[mySym]);//accesing symbol of object

//methods

Object.freeze(shrey);//dosent let ant one change value

//meging object 
//m1
const obj1 = {1 : "a",2 : "b",3 : "c"}
const obj2 = {4 : "d",5 : "e",6 : "f"}

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

//m2