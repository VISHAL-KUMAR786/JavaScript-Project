const quote = document.querySelector(".quote");
let quoteBtn = document.querySelector(".features button");
let authorName = document.querySelector(".author .name");
let soundBtn = document.querySelector("li.sound");
let copyBtn = document.querySelector("li.copy");
let twitterBtn = document.querySelector("li.twitter");

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote ...";
  let url = "https://api.quotable.io/random";
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      authorName.innerText = res.author;
      quote.innerText = res.content;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quote.innerText}`);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`
    window.open(tweetUrl,'_blank')
});

quoteBtn.addEventListener("click", randomQuote);
