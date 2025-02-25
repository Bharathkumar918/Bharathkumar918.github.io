let mynumber=window.prompt("Enter your number");
document.getElementById(`mylabel`).innerHTML=mynumber;
if(mynumber==null){
    document.getElementById(`mylabel`).textContent=0;
}
document.getElementById(`inc`).onclick=function(){
    mynumber++;
    document.getElementById(`mylabel`).innerHTML=mynumber;
}
document.getElementById(`reset`).onclick=function(){
    mynumber=window.prompt("Enter your number");
    document.getElementById(`mylabel`).innerHTML=mynumber;
    if(mynumber==null){
        document.getElementById(`mylabel`).innerHTML=0;
    }
}
document.getElementById(`dec`).onclick=function(){
    mynumber--;
    document.getElementById(`mylabel`).innerHTML=mynumber;
}