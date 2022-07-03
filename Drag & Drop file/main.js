const dropArea = document.querySelector(".drag-area")
let drapText = document.querySelector("header")
let button = document.querySelector("button")
let input = document.querySelector("input")

let file

button.addEventListener("click", () => input.click())

input.addEventListener("change", function(){
    file = this.files[0]
    showFile()
    dropArea.classList.remove("active")
})

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    dropArea.classList.add("active")
    drapText.textContent = "Release to upload file"
})

dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault()
    dropArea.classList.remove("active")
    drapText.textContent = "Drag & Drop to upload file"
})

dropArea.addEventListener("drop", (e) => {
    e.preventDefault()
    dropArea.classList.remove("active")
    file = e.dataTransfer.files[0]
    showFile()
})

function showFile() {
    let fileType = file.type
    let validExtension = ["image/jpeg", "image/jpg", "image/png"]

    if (validExtension.includes(fileType)) {
        let fileReader = new FileReader()
        fileReader.addEventListener("load", () => {
            let fileURL = fileReader.result
            let imgTag = `<img src="${fileURL}" alt="drag-image">`
            dropArea.innerHTML = imgTag
        })
        fileReader.readAsDataURL(file)

    } else {
        alert("this is not a image file")
        dropArea.classList.remove("active")
        drapText.textContent = "Drag & Drop to upload file"
    }
}