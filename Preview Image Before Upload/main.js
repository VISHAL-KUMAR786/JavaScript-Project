const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const img = document.querySelector("img");
const fileName = document.querySelector(".file-name");
const cancelBtn = document.querySelector(".wrapper #cancel-btn i");
const wrapper = document.querySelector(".wrapper");

/*

lastModified: 1657114461360
lastModifiedDate: Wed Jul 06 2022 19:04:21 GMT+0530 (India Standard Time) {}
name: "Screenshot (448).png"
size: 58994
type: "image/png"
webkitRelativePath: ""

*/

let regex = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/

defaultBtn.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      img.style.display = "block";
      img.src = reader.result;
    });
    reader.readAsDataURL(file);

    if (file.name) {
      fileName.textContent = file.name.match(regex);
    //   fileName.style.display = "block";
      wrapper.classList.add("active")
    }
    // cancelBtn.style.display = "block";
  }
});

cancelBtn.addEventListener("click", () => {
  img.src = "";
  fileName.textContent = "";
  fileName.style.display = "none";
  img.style.display = "none";
  wrapper.classList.remove("active")
});

customBtn.addEventListener("click", () => defaultBtn.click());