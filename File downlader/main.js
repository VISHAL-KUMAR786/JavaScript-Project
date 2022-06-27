let fileInput = document.querySelector("form input")
let downloadBtn = document.querySelector("form button")

downloadBtn.addEventListener("click",function(e){
    e.preventDefault()
    downloadBtn.innerText = "Downloading file..."
    fetchFile(fileInput.value)
})

function fetchFile(url){
    fetch(url)
    .then(res => res.blob())
    .then(file => {
        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement("a")
        aTag.href = tempUrl
        // aTag.download = "fileName"
        aTag.download = url.replace(/^.*[\\\/]/, '')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl)
        downloadBtn.innerText = "Download File"
    }).catch(()=>{
        alert("Failed to download")
        fileInput.value = ""
    })
}