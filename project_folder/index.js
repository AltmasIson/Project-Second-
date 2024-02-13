var timer = 6;
var score = 0;
var hitre = 0;
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makebubble(){
    var clutter = "";

for (var i = 1; i<=170; i++) {
    var rn = Math.floor(Math.random()*170)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){


      var timerint = setInterval(function(){ 
        if(timer>0){
            timer--;
        document.querySelector("#timeint").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
     },1000)
      
  
}

function getNewhit(){
     hitre = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitre;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = (Number(dets.target.textContent));
    if (hitre === clickednum) {
        increasescore();
        makebubble();
        getNewhit();
        
    }
})


getNewhit();
runtimer();
makebubble();
// increasescore();