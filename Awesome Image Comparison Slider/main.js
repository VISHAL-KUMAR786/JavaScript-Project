let input = document.querySelector(".slider input")
let dragLine = document.querySelector(".slider .drag-line")
let img2 = document.querySelector(".wrapper .images .img-2")

input.addEventListener("input",(e)=>{
    let value = e.target.value
    dragLine.style.left = `${value}%`
    img2.style.width = `${value}%`
    
})
