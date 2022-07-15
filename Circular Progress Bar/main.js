const numb = document.querySelector(".numb")

let counter = 0

setInterval(() => {
    if(counter == 100){
        clearInterval()
    }else{
        counter++
        numb.textContent = counter+"%"
    }
}, 80);