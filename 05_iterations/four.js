const coding = ["js","ruby","swift","c++"];

coding.forEach(function (item,index,coding) {
    console.log(`value at index ${index} is ${item}`);
    console.log(`complete array : ${coding}`);
});


const myArr = [{name:"one"},{name:"two"},{name:"three"}];
myArr.forEach((item)=>{
    console.log(`${item.name}`);
});