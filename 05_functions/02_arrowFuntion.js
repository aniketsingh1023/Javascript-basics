// this keyword 
// this keyword is used when we have to refer something from the current context 
// like from the current scope we have call some value of the object 
// we use this keyword 

const user = {
    username : "Aniket",
    price : 999,


    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to the page`)
        //console.log(this)
        /*{
  username: 'Aniket',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */
    }
}

user.welcomeMessage()

user.username = "Noob"

user.welcomeMessage() // will print Noob, Welcome to the pge 
// because we didnt hardcode the value we used .this keyword
/*Noob, welcome to the page
{
  username: 'Noob',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */



  //console.log(this)
  // {}
  // because we have no context in gobal scope 


  //function Coffee(){
    //let username = "Anik8"
    //console.log(this.username);// undefined 
    //we are unable to use this inside the function
  //}
//Coffee()


//declaring function through arrow functions
//we cannot use this in arrow functions
const arrow  = () =>{
    let username = "anik"
    console.log(this);
}
//arrow()

//basic arrow function
/*const addTwo = (num1,num2) => {
    return num1 + num2
}
    */

//implicit return in arrow function
// we assume that we dont need reutrn statement because we have a simple one line problem
// we remove parenthesis and return and take all values in one line
const addTwo = (num1,num2) =>  (num1 + num2)
//const name = (num1,num2) =>  ({username : "Anik8"})

console.log(addTwo(3,4))
