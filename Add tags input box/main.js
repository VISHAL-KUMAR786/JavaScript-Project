const ul = document.querySelector(".tag-box ul");
let input = document.querySelector(".tag-box input");
countTag1 = document.querySelector(".details span");
const removeBtn = document.querySelector(".details button");

let maxTag = 10;
let tags = [];

const countTag = () => {
  input.focus();
  countTag1.innerText = maxTag - tags.length;
};

function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `
        <li>
            ${tag}
            <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i>
        </li>
        `;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
  countTag();
}

function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];

  element.parentElement.remove();
  countTag();
}

function addTag(e) {
  if (e.key == "Enter") {
    // removing unwanter space
    let tag = e.target.value.replace(/\s+/g, " ");
    if (tag.length > 1 && !tags.includes(tag)) {
      if (tag.length < 10) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag();
        });
      }
    }
    e.target.value = "";
  }
}

input.addEventListener("keyup", addTag);

removeBtn.addEventListener("click", () => {
  tags.length = 0;
  ul.querySelectorAll("li").forEach((li) => li.remove());
  countTag();
});
