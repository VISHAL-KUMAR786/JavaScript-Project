const option = document.querySelectorAll("label")
for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click",()=>{
        for (let k = 0; k < option.length; k++) {
            if(option[k].classList.contains("selected")){
                option[k].classList.remove("selected")    
            }
        }
        option[i].classList.add("selected")
        for (let j = 0; j < option.length; j++) {
            option[j].classList.add("selectall")
        }
    })
}