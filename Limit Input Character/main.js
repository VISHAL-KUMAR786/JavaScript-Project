const input = document.querySelector("form input")
counter = document.querySelector(".counter")

maxLength = input.getAttribute("maxlength")

input.addEventListener("keyup",()=>{
    counter.innerText = maxLength - input.value.length
})