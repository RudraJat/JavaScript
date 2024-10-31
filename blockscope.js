var a=100;
let b=200;
const c=300;
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

// These both will give error because let and const cant be access outside block scope
// console.log(b); 
// console.log(c);
const y=120;
function x(){
    const y =10;
    console.log(y);
}
x();
console.log(y);