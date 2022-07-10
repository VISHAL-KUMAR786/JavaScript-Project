const display = document.querySelector("input");
const button = document.querySelector("button");
const copyBtn = document.querySelector("i.far");

let chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-~`|{}[]:;?><,./=";

button.addEventListener("click", () => {
  randomPasswrod = "";
  for (let i = 0; i < 16; i++) {
    randomPasswrod += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  display.value = randomPasswrod;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(display.value);
});
