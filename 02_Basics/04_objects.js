//object by constructor 
//singleton

const tinderUser = new Object();
tinderUser["id"] = "123abc";
tinderUser["name"] = "Sudhanshu";
tinderUser["isLoggedIn"] = false;
// console.log(tinderUser);

const regularUser = {
email: "narendraModi@gmail.com",
fullname: {
    userfullname: {
        firstname: "hitesh",
        lastname: "chaudhary"
    }
},
};
// console.log(regularUser.fullname.userfullname.firstname); //hitesh

const obj1 = {
    1: "a",
    2:"b",
}
const obj2 = {
    3:"c",
    4:"d"
}
const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({},obj1,obj2); 

// obj3 === obj4 bas method alg hai bnane ka
// console.log(obj3);

const users = [{id:1,email:"s@gmail.com"},{id:2,email:"u@gmail.com"}];
console.log(users[0].email);  //s@gmail.com
console.log(Object.keys(tinderUser)); // [all the keys]
console.log(Object.values(tinderUser)); // [all the values]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));