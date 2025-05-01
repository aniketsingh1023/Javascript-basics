//const tinderUser = new Object() --> singleton object

const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// objects inside objects
const regularUser = {
    email : "sysstumm@gmail.com",
    fullname:{
        userfullname :{
            firstname: "Anik8",
            lastname: "Singh"
        }
    }
}
// ? used to check if , it exists or not bascially can be treated as if else

//console.log(regularUser.fullname?.userfullname.firstname);



//merging objects 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 ={obj1, obj2}


//op : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// just like the arrays we dont need to do this and its wrong 
//console.log(obj3);


//correct way like concatenation using assign
//const obj3 = Object.assign({}, obj1, obj2)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// spread method same as array(...)
//mostly used
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


//objects in array 
const users = [
    {
        id  : 1,
        email : "a@g.com"
    },
    {
        id  : 1,
        email : "a@g.com"
    },
    {
        id  : 1,
        email : "a@g.com"
    },
    {
        id  : 1,
        email : "a@g.com"
    }
]
 //console.log(users[1].email);
 
 //some more methods 
 // 1. .keys , .values , .lenght , .entries , 
 // 2. .hasOwnProperty('') --> check if our object have a property named , gives true/false
 
