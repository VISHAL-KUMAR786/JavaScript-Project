const button = document.querySelector("button");
const alert = document.querySelector(".alert");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  alert.classList.remove("show");
  alert.classList.remove("hide");
  alert.classList.remove("showAlert");
});

button.addEventListener("click", () => {
  alert.classList.add("show");
  alert.classList.add("showAlert");

  setTimeout(() => {
    closeBtn.click();
  }, 2500);
});
