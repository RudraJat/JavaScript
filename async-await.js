
// const p=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },10000);
// });

// const p1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved2");
//     },5000);
// });

//  HANDELING PROMISE USING NORMAL FUNCTION

//  function get(){
//      //JS engine won't wait for promise to be resolved
//      p.then((res)=>console.log(res));
//      console.log("Hyyy...");
//  }
//  get();

// // HANDELING PROMISE USING ASYNC-AWAIT FUNCTION

// async function getData(){
//     //JS engine was waiting for promise is resolved
//     console.log("Hello world");
//     const val=await p; //program will wait over here to promise get resolved
//     console.log("Namaste"); 
//     console.log(val);
//     //here it will wait for 10 sec only to print both val and val2
//     const val2=await p1; 
//     console.log("Namaste 2"); 
//     console.log(val2);
// }
// getData();
// const dataPromise = getData();
// console.log(dataPromise); // IT'LL WRAP VALUE IN THE PROMISE

// dataPromise.then((res)=>console.log(res));//for printing just value out of promise


//REAL WORLD EXAMPLE OF ASYNC-AWAIT

// const Api_Url="https://api.github.com/users/RudraJat";
// async function handlePromise() {
//     const data = await fetch(Api_Url);
//     const jsonValue= await data.json();
//     console.log(jsonValue);
// }
// handlePromise();

//ERROR HANDELING
const Api_Url="https://invalidrandomurl";
async function handlePromise() {
   try{
    const data = await fetch(Api_Url);
    const jsonValue= await data.json();
    console.log(jsonValue);
   }catch(err){
    console.error(err);
    console.log(err);
}
}
handlePromise();