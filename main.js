//1
function sortStringArray(strArr){
    return strArr.sort()
}
//2
function sortNumberAscend(numArr){
    return numArr.sort((a,b)=>a-b)
}
//3
function sortNumberDescend(numArr){
    return numArr.sort((a,b)=>b-a)
}
// var arr1=[1,84,231,123,1]

// console.log(sortNumberAscend(arr1))
// console.log( sortNumberDescend(arr1))


document.body.innerHTML+=` <form id="mainForm"></form>`
const FORM_EL= document.querySelector('#mainForm')
for (let i = 0; i < 10; i++) {
    FORM_EL.innerHTML+=`<input type="text" placeholder="name ${i+1}">`
}

function inputsToArr(){
    let allInput= FORM_EL.querySelectorAll("input")
    
}
