  const marvel_heros = ["thor", "Ironman", "spiderman"]
  const dc_heros = ["superman", "flash", "batman"]


  //push vs concat
  //marvel_heros.push(dc_heros)
  //console.log(marvel_heros);
  // output [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
  // arays inside a array
  //console.log(marvel_heros[3][1]);


//const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);
//returns a new arrays , not a array in array also called a 2d array like in push method
//output : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//beterr alternative is the spread operator (...)
//it indivisualises the elements in a array

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);
//ouptut : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//.flat
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
// output : [
  //1, 2, 3, 4, 5,
  //6, 7, 6, 7, 4,
  //5
//]

  //to check if its a array or not use .isArray
  //to convert a string into a array use Array.from

console.log(Array.isArray("Aniket"))
console.log(Array.from("Aniket"))
console.log(Array.from({name: "Aniket"})) //interesting




let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
//op: [ 100, 200, 300 ]