function s(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    },10000);
    console.log("Namaste JS") //First it'll print this then it'll wait for 10 sec then it'll print valure of 'a'
}
s();

//PRINT 1,2,3... AFTER 1sec,2sec and so on....
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
x();