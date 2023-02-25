let promise=new Promise((resolve, reject)=>{
let a=10;
let b=30;
let c=a+b;
let str=""
if (str.length>30)
{
    resolve(document.body.style.backgroundColor="green")
}else if (str.length===5){
    resolve(document.body.style.backgroundColor="purple")
}else
{
    reject(document.body.style.backgroundColor="lime")
}
})

//promise.then((x)=>console.log(x)).then((y)=>console.log(y)).catch((z)=>console.log(z))
promise.then((x)=>console.log(x)).catch((z)=>console.log(z))