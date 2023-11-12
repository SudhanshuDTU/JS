//.map
const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNum =  myNums.map( (item,index)=>{
   return item + 10;
});


// .reduce
const num = [1,2,3];
 
const ans =  num.reduce((acc,currVal)=>{
return acc + currVal;
},0);
console.log(ans);