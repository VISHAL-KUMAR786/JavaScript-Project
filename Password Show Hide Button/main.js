const input = document.querySelector("input")
const showBtn = document.querySelector("i")

showBtn.addEventListener("click",()=>{
    if(input.type === "password"){
        input.type = "text"
        showBtn.classList.remove("hide")
    }else{
        input.type = "password"
        showBtn.classList.add("hide")
    }
})