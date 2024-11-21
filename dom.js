// console.log("Hello");
// alert("Rudra");
let rudra= document.getElementById("heading");
console.log(rudra);
console.dir(rudra);
let abc=document.getElementsByClassName("same");
console.log(abc);
console.dir(abc);
const xyz=document.getElementsByTagName("p");
console.log(xyz);
console.dir(xyz);

//FOR FIRST ELEMENT
const FirstEl=document.querySelector("p");
console.dir(FirstEl);

//FOR ALL ELEMENT IN FORM OF NODE LIST
const AllEl=document.querySelectorAll("p");
console.dir(AllEl);