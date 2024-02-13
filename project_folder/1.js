var istatus = document.querySelector("h5")

var Add = document.querySelector("#Add")
var remove = document.querySelector("#remove")

Add.addEventListener("click",function(){
    istatus.innerHTML = "Friends"
    istatus.style.color  = "green"
})
remove.addEventListener("click",function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color  = "red"
})