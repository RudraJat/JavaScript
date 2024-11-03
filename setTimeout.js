function s(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },10000);
    console.log("Namaste JS") //First it'll print this then it'll wait for 10 sec then it'll print valure of 'a'
}
s();