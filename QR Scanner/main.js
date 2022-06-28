const wrapper = document.querySelector(".wrapper")
form = document.querySelector("form")
fileInp = form.querySelector("input")
infoText = form.querySelector(".content p")
closeBtn = document.querySelector(".close")
copyBtn = document.querySelector(".wrapper .copy")

copyBtn.addEventListener("click",()=>{
    let text = document.querySelector("textarea").textContent
    navigator.clipboard.writeText(text)
})

closeBtn.addEventListener("click",()=>{
    wrapper.classList.remove("active")
    infoText.innerText = "Upload QR Code to Scan"
})

function fetchRequest(formData,file){
    infoText.innerText = "Scanning QR code .."
    fetch("http://api.qrserver.com/v1/read-qr-code/",{
        method : "POST",
        body: formData
    }).then(res => res.json())
    .then(result =>{
        result = result[0].symbol[0].data
        if(!result) return
        wrapper.classList.add("active")
        wrapper.querySelector(".details textarea").innerText.innerText = result
        form.querySelector("img").src = URL.createObjectURL(file)
    }).catch((e)=>{
        innerText.innerText = "Unable to scan QR"
    })
}

fileInp.addEventListener("change",e =>{
    let file = e.target.files[0]
    if(!file) return
    let formData = new FormData()
    formData.append("file",file)
    fetchRequest(formData,file)
})

form.addEventListener("click", ()=> fileInp.click())