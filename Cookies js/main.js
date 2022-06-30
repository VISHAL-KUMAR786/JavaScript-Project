const cookieBox = document.querySelector(".wrapper")
let acceptBtn = document.querySelector(".buttons .item")

acceptBtn.addEventListener("click",()=>{
    document.cookie = "CookieBy=SasteCoder; max-age="+60*60*24*30
    if(document.cookie){
        cookieBox.classList.add("hide")
    }else{
        alert("Cookie can't be set!")
    }
})

let checkCookie = document.cookie.indexOf("CookieBy=SasteCoder")
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide")