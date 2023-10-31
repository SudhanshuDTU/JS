const myArr = new Array(0,1,2,3,4);

myArr.push(5);
myArr.unshift(3); // myArr2 = [3,1,2,3,4,5]; starting me add ho jata hai
myArr.shift(); // starting element ko remove krdega

console.log("A" , myArr); //A [ 0, 1, 2, 3, 4, 5 ]
const newArr = myArr.slice(1,3);
console.log(newArr); //[ 1, 2 ]
console.log("B", myArr);  //B [ 0, 1, 2, 3, 4, 5 ]

const newArr2 = myArr.splice(1,3); 
console.log(newArr2);   //[ 1, 2, 3 ]
console.log("C", myArr);  //C [ 0, 4, 5 ]