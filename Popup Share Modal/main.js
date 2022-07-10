const viewModal = document.querySelector(".view-modal");
const popup = document.querySelector(".popup");
const field = document.querySelector(".field");
const input = document.querySelector("input");
const close = document.querySelector(".close");
const copy = document.querySelector(".clopy");

viewModal.addEventListener("click", () => {
  popup.classList.toggle("show");
});

close.addEventListener("click", () => {
  popup.classList.remove("show");
  // viewModal.click()
});

copy.addEventListener("click", () => {
  input.select();
  if (document.execCommand("copy")) {
    field.classList.add("active");
    copy.textContent = "Copied";
    setTimeout(() => {
      field.classList.remove("active");
      copy.textContent = "Copy";
      window.getSelection().removeAllRanges()
    }, 2500);
  }
});
