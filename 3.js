var main = document.querySelector("#main");
var crs = document.querySelector(".cursur");

main.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+"px"
    crs.style.top = dets.y+"px"
})