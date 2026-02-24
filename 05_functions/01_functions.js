//function sayMyName(){
   // console.log("Anik8");
//}
//sayMyName()


/*function addTwoNum( these are parameter-snum1,num2){
    console.log(num1 + num2);
}

*/
function addTwoNum( num1,num2){
    let result = num1 + num2
    return result
    //after return statement no code is executed in a function scope 
    console.log("Anik")
}
const result = addTwoNum(/*these are arguments*/3,4)
//console.log("Result: ", result);
// Result:  undefined
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("ANik"));

//suppose we dont know the number of parameter ---- (...) rest/spread
function calculateCartPrice(va1,val2,...num){
    //here val1 will be assigned to 200 , val 2 --> 400 , and rest all value will be assigned to num via the rest operator

    return num
}
//console.log(calculateCartPrice(200,400,500,100))
// passing objects in a function
const user = {
    username : "Anik8",
    prices: "199"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject(user)


// wrute a function that takes user input from an object and greets the user and also tells them if they are legal or not 

function greet(user2) {
 console.log("Hi " + user2.gender+ " " + user2.name + "\n" + "your age is " + user2.age);
 if (user2.age >= 18 ){
    console.log(" you are a adult and get a right to vote");
 }else{
    console.log("Womp Womp Kid")
 }
}
let user2 = {
    name : "Anik",
    age : 17, 
    gender: "Mr"
} 
greet(user2);

let age = 15;
function canVote (age){
     if (age >= 18){
        return true;
     }
     return false ; 
}
console.log(canVote(age));
