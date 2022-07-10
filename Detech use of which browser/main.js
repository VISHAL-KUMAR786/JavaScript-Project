let userAgent = navigator.userAgent
let browser

if(userAgent.match(/edge|Edg/i)){
    browser= "edge"
}else if(userAgent.match(/firefox|fxios/i)){
    browser= "firefox"
}else if(userAgent.match(/opr/i)){
    browser= "opera"
}else if(userAgent.match(/chrome|chromium|crios/i)){
    browser= "chrome"
}else if(userAgent.match(/safari/i)){
    browser= "safari"
}else{
    browser= "other browser"
}

const logos = document.querySelector(`.logos .${browser}`)

if(logos != ""){
    logos.style.opacity = "1"
}