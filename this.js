"use strict"; 


//this in global space
console.log(this);


//this inside a function
function x(){
    console.log(this);
}
x();
// window.x(); this keyword value depends on how it is called


//this inside  a object's method
const obj = {
    a:10,
    x:function() {
        console.log(this);
        console.log(this.a);
    },
};
obj.x();

const student={
    name: "Rudra",
    printName:function(){
        console.log(this.name);
    },
};
student.printName();
const student2={
    name:"Surya",
};
student.printName.call(student2);


//this inside an arrow function
const obj1={
    a:120,
    x:()=>{
        console.log(this);
    },
};
obj1.x();


//this inside a nested  arrow function
const obj2={
    a:120,
    x: function(){
        const y=()=>{
            console.log(this);
        };
        y();
    },
};
obj2.x();