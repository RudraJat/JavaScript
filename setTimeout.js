// function s(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },10000);
//     console.log("Namaste JS") //First it'll print this then it'll wait for 10 sec then it'll print valure of 'a'
// }
// s();

// //PRINT 1,2,3... AFTER 1sec,2sec and so on....
// // function x(){
// //     for(let i=1;i<=5;i++){
// //         setTimeout(function(){
// //             console.log(i);
// //         },i*1000);
// //     }
// // }
// // x();

// //IF WE HAVE TO USE VAR IN PLACE OF LET
// function a(){
//     for(var j=1;j<=5;j++){
//         function close (a){
//             setTimeout(function(){
//                 console.log(a);
//             },a*1000);
//         }
//         close(j);
//     }
// }
// a();


//SETTIMEOUT TIMER WILL PRINT VALUE AFTER THE WHOLE CODE IS PIRNTED 
console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);
console.log("End");
//code to wait for 10 sec
let startDate=new Date().getTime(); //It'll print recent time in sec
let endDate=startDate;
while(endDate<startDate+10000){//IT will end while loop after 10 sec from start time
    endDate=new Date().getTime();
}
console.log("while expires");