let arr=[200, 4000, 6000, 485, 199]

//filter
let res= arr.filter((x)=>{
    return x>200
})
console.log(res);

//map
let tax=arr.map((x)=>{
    return x+x*0.18
})
console.log(tax)

//reduce

let payable=arr.reduce((acc, val)=>{
    return acc +val
},10)
console.log(payable);

// for (i=0;i<=arr.length;i++)
// {
//     if (arr[i]>200){
        
//     }
    
// }

