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

//closures demo with Event listeners
function attachEventListeners(){
    let count =0;
    document.getElementById("clickMe")
    .addEventListener("click",function(){
    console.log("Button Clicked",++count);//it'll count the no. of times button is clicked
});
}
attachEventListeners();