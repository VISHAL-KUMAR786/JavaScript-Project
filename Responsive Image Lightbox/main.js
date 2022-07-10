const gallery = document.querySelectorAll(".gallery .image");
let previewBox = document.querySelector(".preview-box");
let collapseIcon = document.querySelector(".icon");
let previewImg = document.querySelector(".image-box img");
let currentImg = document.querySelector(".current-img");
let totalImg = document.querySelector(".total-img");
let shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.innerText = gallery.length;

    gallery[i].addEventListener("click", () => {
      function preview() {
        let selectedImgUrl = gallery[i].querySelector("img").src;
        currentImg.innerText = i + 1;
        previewImg.src = selectedImgUrl;
      }

      let prevBtn = document.querySelector(".prev");
      let nextBtn = document.querySelector(".next");

      if (i == 0) {
        prevBtn.style.display = "none";
      }
      if (i >= gallery.length - 1) {
        nextBtn.style.display = "none";
      }

      prevBtn.addEventListener("click", () => {
        i--;
        if (i == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          preview();
        }
      });

      nextBtn.addEventListener("click", () => {
        i++;
        if (i >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          preview();
        }
        preview();
      });

      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";
      document.querySelector("body").style.overflow = "hidden"
      
      collapseIcon.addEventListener("click", () => {
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
          previewBox.classList.remove("show");
          shadow.style.display = "none";
          document.querySelector("body").style.overflow = "auto"
      });
    });
  }
};
