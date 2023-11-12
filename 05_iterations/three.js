const myobj = {
    js: "javascript",
    cpp : "c++",
    rb: "ruby",
};

for (const key in myobj) {
    console.log(`key ${key} has value ${myobj[key]}`);
}
