let sign_login = document.querySelector('#sign-login')
let popup = document.querySelector('.popup')
let close_btn = document.querySelector('.close-btn')


sign_login.addEventListener('click',function(){
    popup.classList.add('active')
})
close_btn.addEventListener('click',function(){
    popup.classList.remove('active')
})