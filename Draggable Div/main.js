const wrapper = document.querySelector(".wrapper")
header = wrapper.querySelector("header")

function onDrag({movementX,movementY}){
    // getting all style of wrapper
    let getStyle = window.getComputedStyle(wrapper)
    let left = parseInt(getStyle.left)
    let top = parseInt(getStyle.top)
    wrapper.style.left = `${left+movementX}px`
    wrapper.style.top = `${top+movementY}px`

}

// it is triggered when left mouse button is click
// it will trigger when you move the mouse
header.addEventListener("mousedown",()=>{
    header.classList.add("active")
    header.addEventListener("mousemove",onDrag)
})

// when you released the left mouse button
document.addEventListener("mouseup",()=>{
    header.classList.remove("active")
    header.removeEventListener("mousemove",onDrag)
})