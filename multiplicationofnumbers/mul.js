let num1=document.getElementById(`num1`).value;
console.log(num1)
let num2=document.getElementById(`num2`).value;
let answer=num1+num2;
document.getElementById(`result`).onclick=function(){
    document.getElementById(`answer`).innerHTML=answer;
}