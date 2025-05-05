

// {} // this is scope 

let s = 1288;  // this is global scope 
if(true){

     // imsdie {} the scope is called local scope 
    let a = 10
    const b = 20
    var c = 30 //generally avoided
}



//console.log(a);
//console.log(b);
// console.log(c); ----> var does'nt work well with scope as its is declared globally


function one(){
    const username = "Anik8"
    function two(){
        const website = "yt"
        //console.log(username);
        }
        //console.log(website);// will throw error because its outhte scoope of website 
        two()
    }
        
one()



if(true){
    const name = "ANIK"
    if(name === "ANIK"){
        const website = " google"
        //console.log(name + website);
    }
    //console.log(website); ---> wii throw error  outside the scope 
}
// console.log(username); --> will throw error because its outside the scope 



// +++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++

console.log(Addone(5)) // -- this will work 
function Addone(num){
    return num +1
}

Addone(5)



console.log(addTwo(5)) // -- this will not work (hoisting)
// in hoisting we cant access a function before its declaration
// we have an execution context
const addTwo = function(num){ // ----> expression 
    return num +2 
}
addTwo(5)
 