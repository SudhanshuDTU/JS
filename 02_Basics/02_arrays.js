const marvelHeros = ["thor","ironmen","spidermen"];
const dcHeros = ["supermen","batmen","flash"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);  // [ 'thor', 'ironmen', 'spidermen', ['supermen', 'batmen', 'flash'] ]

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros); //  [ 'thor', 'ironmen', 'spidermen', 'supermen', 'batmen', 'flash' ]

const allHeros = [...marvelHeros,...dcHeros];  //Spread operator
console.log(allHeros);  //  [ 'thor', 'ironmen', 'spidermen', 'supermen', 'batmen', 'flash' ]

const anotherArray = [1,2,3, [4,5,6],7,[6,7,[4,5]]];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.from("sudhanshu"));  
let a = 3;
let b = 4;
console.log(Array.of(a,b));  // [ 3, 4 ]