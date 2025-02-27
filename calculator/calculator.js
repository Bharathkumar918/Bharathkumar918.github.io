let x1=0;
let x2=0;
let x3=0;
let labelval1;
let labelval2;
let labelval;
let result=0;
let n=0;
let l=0;
document.getElementById(`one`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=1;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`two`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=2;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`three`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=3;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`four`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=4;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`five`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=5;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`six`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=6;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`seven`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=7;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`eight`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=8;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`nine`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=9;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`zero`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=0;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`dot`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    labelval+=String('.');
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`clc`).onclick=function(){
    labelval=document.getElementById(`display`).innerHTML;
    l=labelval.length;
    labelval=labelval.slice(0,l-1);
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`clear`).onclick=function(){
   x1=0;
   x2=0;
   l=0;
   result=0;
    document.getElementById(`display`).innerHTML=0;
}
document.getElementById(`add`).onclick=function(){
    x1=Number(labelval);
    labelval=0;
    n=1;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`sub`).onclick=function(){
    x1=Number(labelval);
    labelval=0;
    n=2;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`mul`).onclick=function(){
    x1=Number(labelval);
    labelval=0;
    n=3;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`div`).onclick=function(){
    x1=Number(labelval);
    labelval=0;
    n=4;
    document.getElementById(`display`).innerHTML=labelval;
}
document.getElementById(`equal`).onclick=function(){
    if(n==1)
    {
        x2=Number(labelval);
        result=x1+x2;
        document.getElementById(`display`).innerHTML=result;

    }
    else if(n==2)
    {
        x2=Number(labelval);
        result=x1-x2;
        document.getElementById(`display`).innerHTML=result;
    }
    else if(n==3)
    {
        x2=Number(labelval);
        result=x1*x2;
        document.getElementById(`display`).innerHTML=result;
    }
    else if(n==4)
    {
        x2=Number(labelval);
        result=x1/x2;
        document.getElementById(`display`).innerHTML=result;
    }
}
