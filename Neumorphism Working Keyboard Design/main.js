let form = document.querySelector("form");
let display = document.querySelector(".display");

function disp(result) {
  form.textarea.value += result;
}

display.addEventListener("dblclick",()=>{
    form.textarea.value = ""
})