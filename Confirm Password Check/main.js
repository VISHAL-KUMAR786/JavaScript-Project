const [password1, password2] = document.querySelectorAll(".field input");
const errText = document.querySelector(".error-text");
const button = document.querySelector("button");

button.style.opacity = 1;

password1.addEventListener("keyup", () => {
  errText.style.display = "none";
  errText.classList.remove("matched");
});
password2.addEventListener("keyup", () => {
  errText.style.display = "none";
  errText.classList.remove("matched");
});

button.addEventListener("click", () => {
  if (password1.value === password2.value) {
    errText.style.display = "block";
    errText.innerText = "Conform Password Matches";
    errText.classList.add("matched");
  } else {
    errText.style.display = "block";
    errText.innerText = "Conform Password Don't Match";
  }
});
