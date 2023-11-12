const arr = [1,2,3,4,5];
//for of Loop
for (const i of arr) {
    console.log(i); //1 2 3 4 5
}

let map = new Map();
map.set('1', "one");
map.set('2',"two");
map.set('3',"three");
map.set('1', "four"); // ye add nhi hoga map me kyuki map holds unique keys

for (const [key,value] of map) {
    console.log(`key is ${key} and value is ${value}`);
}

