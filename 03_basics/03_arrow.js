//"this" keyword refers to current context

const user = {
username: "sudhanshu",
price:999,
welcomeMessage: function(){
    console.log(`${this.username} welcome to website`);
    console.log(this); // entire object of this context
},
};
 
console.log(this); // in node : {}, in browser: window object

//context is present only inside object

const chai = function(){
    let a = "hii";
    console.log(this.a); //undefined
    console.log(this); // kaafi properties milti hai
};
chai();

//arrow function

const coffee = ()=>{
    let a = "hii";
    console.log(this.a); //undefined
    console.log(this); // {}
};

const addTwo = (num1,num2)=>{
    return num1+num2;
}
// OR
const add = (num1,num2) => (num1+num2);

const returnObj = (num1,num2) => ({username: "sudhanshu"});