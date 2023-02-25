// let btn=document.querySelector("button")

// btn.addEventListener("click", (e)=>{
// e.preventDefault();
// let usr=document.getElementById("username").value
// let pwd=document.getElementById("password").value
// console.log({usr, pwd});
// })

let color=prompt("Enter color")
let btn=document.querySelector("button")
let input=document.getElementById("tex")

input.addEventListener("keypress",()=>{
    console.log("key Pressed");
})

let inp=document.querySelector("#randomly")

inp.addEventListener("keypress", ()=>{
    let randomColor=Math.floor(Math.random()*100000).toString(16)
    document.body.style.backgroundColor=`#${randomColor}`
    console.log(randomColor);
})


btn.innerText=color
btn.addEventListener("click",()=>{
    btn.style.backgroundColor=color
    document.body.style.backgroundColor=color
})