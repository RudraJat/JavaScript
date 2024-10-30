function a(){
    var b=2;
    c();
    function c(){
        console.log(b);
    }
}
a();
// console.log(b); here it'll give error that b is not defined