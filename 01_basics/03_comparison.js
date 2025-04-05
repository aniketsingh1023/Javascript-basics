//console.log(2>1);
//console.log(2>=1); 
//these comparisons are simple comparisons , so  no need to discuss them since they are comparing same kind of data type with each other

//console.log("2" > 1);
//console.log("02" > 1);
//js automatically converts internally here that why its true
// these comparison are of a different data type with each other
// no predictable results


// what about null ?
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// null shows true for third case 
// in js == and comparison <,>,>=,<= work differently

//console.log(undiefined == 0); // always gives false no matter the comparison

//strict check (===)
//in strict check its checks datatype also
// doesnt do conversion internally , doesnt convert automatically
console.log("2" === 2)
  