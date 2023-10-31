//Stack (primitive) , Heap(Non Primitive)

let myYoutube = "SudhanshuDTU";
let anotherYoutube = myYoutube;
anotherYoutube = "GreenTea aur Code";

console.log(myYoutube);  // "SudhanshuDTU"
console.log(anotherYoutube); // "GreenTea aur Code"

let userOne = {
    email:"abc@gmail.com",
    password: "1234"
};

let userTwo = userOne;
userTwo.email = "xyz@gmail.com";
console.log(userOne); //"xyz@gmail.com"
console.log(userTwo); //"xyz@gmail.com"
