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
const p1 = new Promise(function(resolve, reject){
    setTimeout(() =>resolve("P1 success"),3000);
    }); 

const p2 = new Promise(function(resolve, reject){
    setTimeout(() =>resolve("P1 success"),1000);
    });

const p3 = new Promise(function(resolve, reject){
    setTimeout(() =>reject("P1 fail"),2000);
    }); 

Promise.allSettled([p1,p2,p3]).then(result => {
    console.log(result);
})
.catch((err)=>{
    console.error(err);//look like error RED IN COLOR
});