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
    },
};
obj.x();