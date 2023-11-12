//if

const balance = 300;
if (balance > 100) {
    console.log("yes");
}
else{
    console.log("No");
}
balance > 100 ? console.log("yes") : console.log("No");

// null coalescing operator

let val1 = 14 ?? 2;
console.log(val1);