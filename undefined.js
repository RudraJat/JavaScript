console.log(a);// here "a" will get a keyword which behaves like a pleaceholder "undefined"
var a =7;
console.log(a);
if(a===undefined){
    console.log("a is undefined")
}else{
    console.log("a is not undefined")
}

//JS is loosely-typed language
var m;
console.log(m);
m=1;
console.log(m);
m="Hello World";
console.log(m);