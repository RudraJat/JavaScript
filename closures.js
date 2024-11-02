// function x(){
//     var a=2;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// var c=x();
// console.log(c);// it will return the whole fucniton y 

// //Here it still remember that where is 'a' in the code and we can use that fucntion anywhere in the code
// c();//it'll return the value of a, even when it is inside a local funtion this is due to closure 


function z(){
    var b=299;
    function x(){
        var a=1;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();