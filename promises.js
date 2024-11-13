// const github_api="https://api.github.com/users/RudraJat";
// const user =fetch(github_api);
// console.log(user);
// user.then(function(data){
//     console.log(data);
// })

//CREATING OUR OWN PROMISE


const cart=["shoes", "shirt", "kurta"];

const promise=createOrder(cart); //OrdreID

promise.then(function(orderId){   // IT's FOR THE SUCCESS OR RESOLVE PART
    console.log(orderId);
})
.catch(function(err){  // IT's FOR THE FAILURE OR REJECTED PART
    console.log(err.message);
});

//CODE FOR PRODUCER END HERE WE WILL CREATE PROMISE

//which will get resolve

// function createOrder(cart){
//     const pr =new Promise(function(resolve, reject){
//         if(!validateCart(cart)){
//             //throw error if item is not in cart
//             const err= new Error("Cart is not valid");
//             reject(err);
//         }
//         const orderId="12345";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             },5000);
//         }
//     });
//     return pr;
// }
// function validateCart(cart){
//     return true;
// };

//which will get reject

function createOrder(cart){
     const pr =new Promise(function(resolve, reject){
         if(!validateCart(cart)){
             //throw error if item is not in cart
             const err= new Error("Cart is not valid");
             reject(err);
         }
         const orderId="12345";
         if(orderId){
             setTimeout(function(){
                 resolve(orderId);
             },5000);
         }
     });
     return pr;
 }
 function validateCart(cart){
     return false;
 };