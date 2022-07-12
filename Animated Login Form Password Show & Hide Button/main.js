let input = document.querySelector(".pswrd");
let show = document.querySelector(".show");

show.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    show.style.color = "#1da1f2";
    show.textContent = "HIDE";
  } else {
    input.type = "password";
    show.style.color = "#111";
    show.textContent = "SHOW";
  }
});
