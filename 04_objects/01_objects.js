//singleton is made when we declare objects as a constructor(object.create)
//objects can be declared in 2 ways - literals , constructor



//objects literals
//objects conatain key/value pairs
const mySym = Symbol("key1")

const JsUser = {
    name : "Aniket",
    "full name": "Aniket Singh",
    //using symbol as a key use [] while declaring and calling both
    [mySym]: "myKey1",
    age: 20,
    location: "Indore",
    email: "aniket@apple.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// objects names or also called keys are stored as strings so to call those
//keys we have to call it like strings ie []
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

// to overide anything in a object
JsUser.email = "Aniket@google.com"
//console.log(JsUser.email)

/* 
prev: aniket@apple.com

Updated/Overide : Aniket@google.com

*/


// lock or freeze any object
//Object.freeze(JsUser) 
JsUser.email = "Aniket@microsoft.com"
//console.log(JsUser.email)


// before freezing : Aniket@google.com
//after freezing : Aniket@google.com(didnt change to Aniket@microsoft.com)


//udating objects via use of funtion
JsUser.greeting = function(){
    console.log("Hello User");
}
console.log(JsUser.greeting());




//calling objet values using function
// string interpolation

//string interpolation syntax-->  console.log(`Hello User, ${this.name}`);


JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(JsUser.greetingTwo());


/*difference between greeting and greetingTwo
Hello User

Hello User, Aniket

*/




















































