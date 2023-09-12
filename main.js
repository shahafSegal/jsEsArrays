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

//4

function inputToArr(){
    let allInputCol= FORM_EL.querySelectorAll("input")
    const NEW_ARR=[]
    for (let i = 0; i < allInputCol.length; i++) {
        NEW_ARR.push(allInputCol[i].value)
    }
    return NEW_ARR
}
function make10InputsForm(){
    for (let i = 0; i < 10; i++) {
        FORM_EL.innerHTML+=`<input type="text" placeholder="name ${i+1}">`
    }
    FORM_EL.innerHTML+=`<button id="formBtn"> submit me</button>`
}


function submitNames(){
    nameUserArr=inputToArr()
    nameUserArr.sort()
    FORM_EL.style.display="none";
    mainDiv.innerHTML+= `" ${nameUserArr.join(' " ,')}"`
}



// let nameUserArr=[] 
// mainDiv.innerHTML+=` <form id="mainForm" onsubmit="return false" style="display:flex; flex-direction :column"></form>`
// const FORM_EL= document.querySelector('#mainForm')
// make10InputsForm();
// FORM_EL.querySelector('#formBtn').addEventListener('click',submitNames)

//5

function getRandomNumber(rangeNumber){
    return Math.floor(Math.random()*(rangeNumber+1));
}

function getRandDate(){
    let maxDate= new Date()
    let minDate= new Date(1920,0,1)
    let randomTime= getRandomNumber(maxDate.getTime()-minDate.getTime())+minDate.getTime() 
    let randDate= new Date(randomTime)
    return randDate
}
function getFullDate(dateObject){
    return dateObject.getDay() +'/'+(dateObject.getMonth()+1)+'/'+dateObject.getFullYear();
}

function getArrRandDates(){
    let randDateArr=[]
    for (let i = 0; i < 10; i++) {
        randDateArr.push(getRandDate())
    }
    return randDateArr
}
const AGE_ARRAY= sortNumberDescend(getArrRandDates())
mainDiv.innerHTML+='<ul>'
for (let i = 0; i < AGE_ARRAY.length; i++) {
    mainDiv.innerHTML+= `<li>${getFullDate(AGE_ARRAY[i])}</li>`
    
}
mainDiv.innerHTML+='</ul>'

//6
