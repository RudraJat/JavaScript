//CODE FOR AREA CIRCUMFERENECE AND DIAMETER
const radius=[1,2,3,4];

//1st way but in this we have to write same code for every time 
const calculateArea= function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));