var main = document.querySelector("#main")
var nam = document.querySelector(".name")


main.addEventListener("mousemove",function(dets){
    nam.style.left = dets.x+"px"
    nam.style.top = dets.y+"px"
})