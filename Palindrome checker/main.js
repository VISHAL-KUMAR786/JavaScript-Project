const txtInput = document.querySelector(".inputs input")
let checkBtn = document.querySelector(".inputs button")
let infoTxt = document.querySelector(".info-txt")
let filterInput = ""

txtInput.addEventListener("keyup",()=>{
    let data = txtInput.value.toLowerCase()
    filterInput = data.replace(/[^A-Z0-9]/ig,"")
    if(filterInput){
        return checkBtn.classList.add("active")
    }
    checkBtn.classList.remove("active")
    infoTxt.style.display = "none"
})

checkBtn.addEventListener("click",()=>{
    let reverseInput = filterInput.split("").reverse().join("")
    if(filterInput == reverseInput){
        infoTxt.style.display = "block"
        infoTxt.innerHTML = `<span> ${filterInput} </span> is a palindrome`
    }else{
        infoTxt.style.display = "block"
        infoTxt.innerHTML = `<span> ${filterInput} </span> is a not palindrome`
    }
})