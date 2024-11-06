//Here synchronity rule breaks because first function setTimeout will be execute at last when 5 sec expire
// setTimeout(function () {
//     console.log("timer");
// },5000)
// function a(b){
//     console.log("a");
//     b();
// }
// a(function b(){
//     console.log("b");
// });

document.getElementById("clickMe")
.addEventListener("click",function(){
    console.log("Button Clicked");
})