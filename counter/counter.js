let number=document.getElementById(`Number`);
number=Number(number);
document.getElementById(`inc`).onclick=function(){
    number++;
    document.getElementById(`value`).textContent=number;
}
document.getElementById(`reset`).onclick=function(){
    number=0;
    document.getElementById(`value`).textContent=number;
}
document.getElementById(`dec`).onclick=function(){
    number--;
    document.getElementById(`value`).textContent=number;
}