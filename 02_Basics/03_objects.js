//constructor se bnega to hi sirf Singleton hoga 
// Object.create() --> constructor

//object literals:
const mySym = Symbol("key1");

const jsUser = {
    name: "Sudhanshu",
    "full name": "Sudhanshu Jha",
    age: 21,
    [mySym]: "myKey1",
   
    location: "ghaziabad",
    email: "sudhanshu2717@gmail.com",
    isLoggedIn: false,
    lastLogginDays : ["Monday","Saturday"]
};

jsUser.greeting = function(){
    console.log("hello JS user");
};
jsUser.greetingTWO = function(){
    console.log(`Hello JS user, ${this.name}`);
};
console.log(jsUser.greeting());   //hello JS user
console.log(jsUser.greetingTWO()); //hello JS user ,sudhanshu
console.log(jsUser["full name"]);  //Sudhanshu Jha
console.log(jsUser[mySym]); //mykey1
console.log(jsUser["greeting"]()); //hello JS user