const arr=[5,1,3,2,6];

//DOUBLE IT
function double(x){
    return x*2;
}
const output=arr.map(double);
console.log(output);


//TRIPLE IT
const output1=arr.map(function triple(x){
    return x*3;
});
console.log(output1);


//BINARY OF IT
const output2=arr.map((x) => x.toString(2));
console.log(output2);
