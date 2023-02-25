// localStorage.setItem("UserName", "Raghu")
// localStorage.setItem("Password", "rahul")

// let data=localStorage.getItem("UserName")
// let data1=localStorage.getItem("Password")

// console.log(data, data1);



// sessionStorage.setItem("UserName", "Raghu")
// sessionStorage.setItem("Password", "rahul")

// let data=sessionStorage.getItem("UserName")
// let data1=sessionStorage.getItem("Password")

// console.log(data, data1);


let Obj={
    Username:"Pavan",
    Pwd:"zorro"
}
let jsondata=JSON.stringify(Obj);

console.log(jsondata);

let objdata=JSON.parse(jsondata)

console.log(objdata);