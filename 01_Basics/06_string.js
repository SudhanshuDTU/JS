const firstName = "sudhanshu";
const lastName = "Jha"
console.log(`hello my name is ${firstName} ${lastName}`);

let nameString = new String("Sudhanshu JHA"); //new is use for creating
nameString = nameString.toUpperCase();
console.log(nameString.charAt(2));
console.log(nameString.indexOf('N'));

const gameName = new String('hitesh-hc-com');

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-3);
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('e'));