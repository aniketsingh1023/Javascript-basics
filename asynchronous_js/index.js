//Synchronous code : executed line by line in the order its written . Each operation waits for the previous one to complete 
//write a function to calculate sum of n numbers

function sum(n){
    let ans = 0;
    for(let i = 1 ; i <= n ; i++){

        ans = ans + i ;
    }
    return ans;
}
const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);


//I/O Heavy operations : basically CPU intensive tasks or tasks involving lot of data transfer through the os 
// ex trying to fetch some external data with the help of readfile 
//in memory computations are faster 

//HTTP Requests are also I/O operation 
//example of I/O - reading another file 

const fs = require("fs");// importing a library

const contents = fs.readFileSync("a.txt", "utf-8");// reading the file synchronously in bytes and hex
console.log(contents);
// Hi I am Anik8
const contentsb = fs.readFileSync("b.txt", "utf-8");// reading the file synchronously in bytes and hex
console.log(contentsb);

