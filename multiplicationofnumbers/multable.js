let num=window.prompt("Enter the number:");
document.getElementById(`num1`).innerHTML=num;
let n=1;
let answer;
while(n!=11){
    document.getElementById(`table`).innerText=num*n;
    n++;
}

