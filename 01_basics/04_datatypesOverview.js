// Primitive : change in clone or copy not in original value , stack memory

//7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValues = 100.3
  //no separatre float defined in js , both are number
    
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId);

const bigNumber = 8467589769744598745n

//Reference(Non primitive) : change in original value , heap

//Array, Objects, Functions 

const heros = ["shaktiman" , " naagraj" , "doga"]
let myObject = {
    name: "Aniket",
    age: 22,
}
const myFunction = function(){
    console.log("Hello World");

}

//datatype pta krna
console.log(typeof bigNumber);

