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