let intialValue = 0;
function slideShow() {
    setTimeout(slideShow, 4500);
    const images = document.querySelectorAll("img")
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
    }
    intialValue++
    if(intialValue > images.length)
        intialValue = 1
    images[intialValue - 1].style.display = "block"
}

slideShow();
