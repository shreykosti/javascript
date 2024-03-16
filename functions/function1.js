//defining function

function shrey(){

}

shrey();//calling

//parameters = while defining function
//argumnets = giving value to function while calling it

function addtwonumber(n1,n2){
    return n1+n2;
}

const result = addtwonumber(2,4);

console.log("Result ",result);

function login(username = "nothing"){ // = "nothing"// default value like alt tag in image 
    return `${username} just logged in`
}

console.log(login());