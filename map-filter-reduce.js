// //MAP FUNCTION
// const arr=[5,1,3,2,6];

// //DOUBLE IT
// function double(x){
//     return x*2;
// }
// const output=arr.map(double);
// console.log(output);


// //TRIPLE IT
// const output1=arr.map(function triple(x){
//     return x*3;
// });
// console.log(output1);


// //BINARY OF IT
// const output2=arr.map(x => x.toString(2));
// console.log(output2);



// //FILTER FUNCTION
// //filter out all odd and even value
// function isOdd(x){
//     return x%2;
// }
// const output3=arr.filter(isOdd);
// console.log(output3);


// const output4=arr.filter(function isEven(x){
//     return x%2===0;
// });
// console.log(output4);


// const output5=arr.filter(x => x>4);
// console.log(output5);



// //RSDUCE FUNCTION
// //reduce the arr to one value
// //SUM
// const output6=arr.reduce(function(acc,curr){
//     acc+=curr;
//     return acc;
// },0);
// console.log(output6)


// //MAXIMUM NUMBER
// function findMax(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr));
// const output7=arr.reduce(function(acc,curr){
//     if(curr>acc){
//         acc=curr;        
//     }
//     return acc;
// },0);
// console.log(output7);

const users=[
    {firstName: "Rudra", lastName: "jat" , age: 15},
    {firstName: "Kunu", lastName: "jat" , age: 18},
    {firstName: "Beta", lastName: "jat" , age: 15},
];
const result=users.map(x => x.firstName+" "+x.lastName);
console.log(result);
 

//acc{15:2, 18:1}
const result1=users.reduce(function(acc, curr){
    //we will check if our accumulator is there or not
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];//if we found same age again
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});//we take second parameter as empty object
console.log(result1);


//age<30 thier first name
//here we well use chaining of filter and map function
const result3=users.filter(y => y.age<16).map(y => y.firstName);
console.log(result3);