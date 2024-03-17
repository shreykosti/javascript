//this points to current context
const human = {
    name : "shrey",
    age : 20,

    welcomemessage : function(){
        console.log(`${this.name} ,welcome to website`);
    }
}

human.welcomemessage()
human.name = "sharda"
human.welcomemessage()

//++++++++++++arrow  +++++++ function+++++++++=//

const addtwo = (num1,num2) => {
    return num1 + num2
}

const addthree = (num1,num2) =>(num1 + num2)

//+++++++++++++++Immediately Invoked Function Expressions IIFE

//polution due to global scope

(function shrey(){
    console.log();
})()