//array 
// []
const myArr  = [0,1,2,3,4,5]
const myHeros =["shaktiman", "naag "]

// arrays in js are resizable
// arrays in js make shallow copy - look into it(basically changes conatin same reference)
//accesing araays
//console.log(myArr[0]);

//declaring array via object
const myNewArr = new Array(1,2,3)
//console.log(myNewArr[1]);

//some arrays methods
//list 
//push

myArr.push(4);
//console.log(myArr);


//pop - removes last elements in arrays
myArr.pop();
// insert something at starting of array
myArr.unshift(0)
//removes something from start of the array 
myArr.shift(0)
//console.log(myArr);

// .include , .indexof

const newArr = myArr.join()
//console.log(myArr);
//joins the array in to new arr and convert into a string
 
//slice , splice 
//console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
//console.log(myn1)
//console.log("B ", myArr);

const myn2 = myArr.splice( 1,3)
console.log("C", myArr);
console.log(myn2); 