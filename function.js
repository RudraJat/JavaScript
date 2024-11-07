// function a(){
//     console.log("a is called");
// }

// //Function Expression
//     var z=function (){
//     console.log("b is called");
// }
// a();
// z();

// //Anonymous Function
// var t=function (){
     
// }

// //Named function expression
// var m= function xyz(){
//     console.log("Named function expression");
// }
// m();
// //xyz(); we cant call it outside like this because xyz is in local scope

// //First Class function
// //ability to pass function as a value
// function l (param1){
//     console.log(param1);
// }
// l(function(){

// });
// //another way
// function k(param1){
//     console.log(param1);
// }
// function xyz(){

// }
// k(xyz);
// //we can return a fucntion from a function
// function g(){
//     return function(){

//     }
// }
// console.log(g());
// var x=7;
// console.log(x);
// a();
// b();
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }
// function c(){
//     console.log("Hello Rudra!!!");
// }
// c();

//Function Statement or Function Declaration
function x(){
    var w=9;
    function y(){
        console.log(w);
    }
    return y;
}
var n= x();
console.log(n);