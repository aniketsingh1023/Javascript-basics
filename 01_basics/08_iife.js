// Immediately Invoked Function Expressions
// means when we need to exectute a function directly 
//to remove polution from global scope we use iife 
// iife function do now know when to end its scope use ; and the end to stop 
// syntax (write function here)();
(function Chai(){
    console.log(`db connected`);
})();

// iife in arrown function
((name) => {
    console.log(`db connected again ${name}`)
})('Anik8');
