let indexValue = 1;
showImg(indexValue);
function btmSlide(e) {
  showImg((indexValue = e));
}
function side_slide(e) {
  showImg((indexValue += e));
}

function showImg(e) {
  let images = document.querySelectorAll(".images img");
  let spans = document.querySelectorAll(".btm-slides span");
  if (e > images.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = images.length;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.background = "transparent";
  }
  images[indexValue - 1].style.display = 'block';
  spans[indexValue - 1].style.background = 'white';
}
