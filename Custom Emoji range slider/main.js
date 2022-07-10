const slider = document.querySelector(".slider")
const bar = document.querySelector(".progress-bar")
const thumb = document.querySelector(".thumb")
const k = document.querySelector(".wrapper .section li")

slider.addEventListener("input",(e)=>{
    let value = e.target.value
    bar.style.width = `${value}%`
    thumb.style.left = `${value}%`
    if(value < 20){
        k.style.marginTop = `0px`
    }
    if(value >= 20){
        k.style.marginTop = `-135px`
    }
    if(value >= 40){
        k.style.marginTop = `-279px`
    }
    if(value >= 60){
        k.style.marginTop = `-420px`
    }
    if(value >= 80){
        k.style.marginTop = `-560px`
    }
})