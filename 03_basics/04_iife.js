//Immediately invoked Function Expressions (IIFE)

//global scope k pollution se bachane k liye iife use krte hai

//named iife
(function chai(){
    console.log(`DB Connected`);
})();

// without name
( (name)=>{
   console.log(`DB Connected ${name}`); 
} )("sudhanshu");

