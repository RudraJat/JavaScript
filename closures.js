function x(){
    var a=2;
    function y(){
        console.log(a)
    }
    return y;
}
var c=x();
console.log(c);// it will return the whole fucniton y 
