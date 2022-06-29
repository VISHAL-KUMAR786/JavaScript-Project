const selectMenu = document.querySelectorAll("select")
let currentTime = document.querySelector(".wrapper h1")
let setAlarmBtn = document.querySelector(".wrapper button")
let content = document.querySelector(".content")

let alarmTime
let ringTone = new Audio("./ringtone.mp3")
let alarmSet = false

selectMenu[0].firstElementChild.style.display = "none"
selectMenu[1].firstElementChild.style.display = "none"
selectMenu[2].firstElementChild.style.display = "none"

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    let myoption = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",myoption)
}
for (let i = 60; i > 0; i--) {
    i = i < 10 ? "0" + i : i
    let myoption = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",myoption)
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM"
    let myoption = `<option value="${ampm}">${ampm}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend",myoption)
}

setInterval(myclock, 1000);

function myclock(){
    let date = new Date()
    h = date.getHours()
    m = date.getMinutes()
    s = date.getSeconds()
    ampm = "AM"
    if(h >= 12){
        h = h - 12
        ampm = "PM"
    }
    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`

    if(alarmTime == `${h}:${m} ${ampm}`){
        ringTone.play()
        ringTone.loop = true
    }
}

function setAlarm(){
    if(alarmSet){
        ringTone.pause()
        alarmTime = ""
        content.classList.remove("disable")
        setAlarm.innerText = "Set Alarm"
        return alarmSet = false 
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`

    alarmTime = time
    alarmSet = true
    content.classList.add("disable")
    setAlarm.innerText = "Clear Alarm"
}

setAlarmBtn.addEventListener("click", setAlarm)