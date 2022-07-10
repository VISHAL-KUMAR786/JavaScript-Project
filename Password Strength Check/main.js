const indicator = document.querySelector(".indicator")
const indicatorAll = document.querySelectorAll(".indicator span")
const input = document.querySelector("input")
const weak = document.querySelector(".weak")
const medium = document.querySelector(".medium")
const strong = document.querySelector(".strong")
const text = document.querySelector(".text")

let weakReg = /[a-z]/
let mediumReg = /\d+/
let strongReg = /.[!,@,#,$,%,^,&,*,(,),~,-,?,_]/

input.addEventListener("keyup",(e)=>{
    let data = e.target.value
    text.style.display = "none"
    for (let i = 0; i < indicatorAll.length; i++) {
        indicatorAll[i].classList.remove("active")
    }
    if(data != ""){
        indicator.style.display = "block"
        indicator.style.display = "flex"
        if(data.match(strongReg)){
            strong.classList.add("active")
            medium.classList.add("active")
            weak.classList.add("active")
            text.textContent = "Your Password is Strong"
        }else if(data.match(mediumReg)){
            medium.classList.add("active")
            weak.classList.add("active")
            text.textContent = "Your Password is medium"
        }else{
            weak.classList.add("active")
        }
        text.style.display = "block"
    }else{
        indicator.style.display = "none"
    }
})