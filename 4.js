var arr = [{
    dp:"https://images.unsplash.com/photo-1502712059375-b673ccc489c6?q=80&w=1427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1664029248229-c1f6fdb4150e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},{dp:"https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://media.istockphoto.com/id/660629502/photo/one.jpg?s=1024x1024&w=is&k=20&c=vfldd1rMivrcHrAAEMktDn-7cv9OSztPMmoeaiTJRmU="}]



var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `div class="story">
    <img id = "${idx}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector("#stories").innerHTML = clutter;