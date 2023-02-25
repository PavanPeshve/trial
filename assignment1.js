//Program for month using Array

// console.log("DIsplay month using Array");
// let ary=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"]

let mon=new Date()
let month=mon.getMonth();
// console.log(ary[month]);


// console.log("DIsplay month using Switch");
// switch(month)
// {
//     case 0:{
//         console.log("JAN");
//     }
//     break;
//     case 1:{
//         console.log("FEBU");
//     }
//     break;
//     case 2:{
//         console.log("March");
//     }
//     break;
//     case 3:{
//         console.log("APR");
        
//     }
//     break;
//     case 4:{
//         console.log("MAY");
//     }
//     break;
//     case 5:{
//         console.log("June");
//     }
//     break;
//     case 6:{
//         console.log("july");
//     }
//     break;
//     case 7:{
//         console.log("aug");
//     }
//     break;
//     case 8:{
//         console.log("SEPT");
//     }
//     break;
//     case 9:{
//         console.log("OCTO");
//     }
//     break;
//     case 10:{
//         console.log("NOVE");
//     }
//     break;
//     case 11:{
//         console.log("DECE");
//     }
//     break;
//     default:{
//         console.log("ALien month");
//     }
//     break;
// }


//2

console.log("Display month if else");

if (month==0)
{
    console.log("Jan");
}
else if (month==1)
{
    console.log("feebb");
}
else if (month==2)
{
    console.log("Mar");
}
else if (month==3)
{
    console.log("APR");
}
else if (month==4)
{
    console.log("MAY");
}
else if (month==5)
{
    console.log("JUN");
}
else if (month==6)
{
    console.log("JUL");
}
else if (month==7)
{
    console.log("AUG");
}
else if (month==8)
{
    console.log("SEPT");
}
else if (month==9)
{
    console.log("OCT");
}
else if (month==10)
{
    console.log("NOV");
}
else if (month==11)
{
    console.log("DEC");
}
else{
    console.log("not a month");
}