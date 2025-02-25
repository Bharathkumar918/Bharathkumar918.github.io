document.getElementById(`Blue`).onclick=function(){
    document.getElementById(`mycolour`).style.color='blue'
}
document.getElementById(`red`).onclick=function(){
    document.getElementById(`mycolour`).style.color='red'
}
document.getElementById(`random`).onclick=function(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(`mycolour`).style.color = randomColor;

}