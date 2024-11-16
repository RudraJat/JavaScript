
const p=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");
    },10000);
});
// async function getData(){
//     return p;
// }
function getData(){
    p.then((res)=>console.log(res));
    console.log("Hyyy...");
}
getData();
// const dataPromise = getData();
// console.log(dataPromise);//IT'LL WRAP VALUE IN THE PROMISE

// dataPromise.then((res)=>console.log(res));