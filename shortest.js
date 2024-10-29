var x=20;
function a(){
    var y=30;
}
// these all 3 will give the same output d
console.log(window.x);
console.log(x);
console.log(this.x);