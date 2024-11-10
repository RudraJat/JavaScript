//CODE FOR AREA CIRCUMFERENECE AND DIAMETER
const radius=[1,2,3,4];

//1st way but in this we have to write same code for every time 
const calculateArea= function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
};
console.log(calculateArea(radius));

//2nd way it is reusable way
const area=function(radius){
    return Math.PI * radius*radius;
};
const circumferenece=function(radius){
    return 2*Math.PI *radius;
};
const diameter=function(radius){
    return 2*radius;
};

const calculate=function(radius,logic){
    const output=[];
    for(let i=0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log("Area with another way");
console.log(calculate(radius,area));
console.log("CIRCUMFERENCE: ");
console.log(calculate(radius,circumferenece));
console.log("DIAMETER: ");
console.log(calculate(radius,diameter));