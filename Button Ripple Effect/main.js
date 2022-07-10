const buttons = document.querySelectorAll("a")

buttons.forEach(button =>{
    button.addEventListener("click",function(e){
        let x = e.clientX - e.target.offsetLeft
        let y = e.clientY - e.target.offsetTop

        let ripple = document.createElement("span")
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`

        this.appendChild(ripple)

        setTimeout(() => {
            ripple.remove()   
        },600);
    })
})