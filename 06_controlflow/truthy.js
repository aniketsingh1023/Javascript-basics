 const userEmail = ""
if (userEmail){
    console.log("got user email")
}else{
    console.log("Dont have user email")
}



// falsy values 



// false , 0 , -0 , BigInt onabort,"", null,undefined,NaN



// truthy values 




// "0" , "false" , " " ,[],{}, function(){} and all other values except falsy values



// then how to check for an empty arrays 
// lenth function of am arrays help in that scenario 


// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

// similarly for object 
const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    //object.keys gives an arrays of keys here it is an empty array
    console.log("Object is empty")
}




//Nullish Coalescing Operator (??) : null undefined 


let Val1;
// val1 = null ?? 10 // returns 10 , because null can cause trouble in database
val1 = undefined ?? 10

console.log(val1);




//ternary operator 

//. condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")