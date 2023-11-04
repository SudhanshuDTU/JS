function printName(name) {
    console.log(`${name}`);
}
printName("sudhanshu");

const add = function(a,b,c) {
  return a+b+c;
};
const addTwoNumber =  add(3,6,"5"); 
console.log(addTwoNumber);

function calculateCartPrice(value1,value2,...num) {  // ...num -> rest operator
    console.log(num); // [400,500,600]
}
calculateCartPrice(100,200,400,500,600);  

// Object in Function
const user = {
  username:"sudhanshu",
  price:999
};
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

//Arrays in Function
const myArray = [17,30,16,14]
function handleArray(anyArray) {
    console.log(anyArray[2]);
}
handleArray(myArray);