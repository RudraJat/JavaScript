//PROMISE.ALL API
//SUCCESS CASE

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),1000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),2000);
//     }); 

// Promise.all([p1,p2,p3]).then(result => {
//     console.log(result);
// });

//FAILURE CASE

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),1000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>reject("P1 fail"),2000);
//     }); 

// Promise.all([p1,p2,p3]).then(result => {
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err);//look like error RED IN COLOR
// });


//PROMISE.ALLSETTLED API
//success case same as promise.all

//failure case

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),1000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>reject("P1 fail"),2000);
//     }); 

// Promise.allSettled([p1,p2,p3]).then(result => {
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err);//look like error RED IN COLOR
// });


//PROMISE.RACE API
//success case

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P2 success"),1000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P3 success"),2000);
//     }); 

// Promise.race([p1,p2,p3]).then(result => {
//     console.log(result);
// });

//failure case

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P2 success"),2000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>reject("P3 fail"),1000);
//     }); 

// Promise.race([p1,p2,p3]).then(result => {
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err);//look like error RED IN COLOR
// });


//PROMISE.ANY API
//success case

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P2 success"),1000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P3 success"),2000);
//     }); 

// Promise.any([p1,p2,p3]).then(result => {
//     console.log(result);
// });

//failure case

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P1 success"),3000);
//     }); 

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(() =>resolve("P2 success"),2000);
//     });

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(() =>reject("P3 fail"),1000);
//     }); 

// Promise.any([p1,p2,p3]).then(result => {
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err);//look like error RED IN COLOR
// });


//if all promises fail in promise.any api

const p1 = new Promise(function(resolve, reject){
    setTimeout(() =>reject("P1 fail"),3000);
    }); 

const p2 = new Promise(function(resolve, reject){
    setTimeout(() =>reject("P2 fail"),2000);
    });

const p3 = new Promise(function(resolve, reject){
    setTimeout(() =>reject("P3 fail"),1000);
    }); 

Promise.any([p1,p2,p3]).then(result => {
    console.log(result);
})
.catch((err)=>{
    console.error(err);//look like error RED IN COLOR
    console.log(err.errors);//for seeing array of error on console
});