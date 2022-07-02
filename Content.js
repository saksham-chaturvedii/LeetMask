const username = document.title.replace(" - LeetCode Profile", "");
const url = window.location.pathname;
let questionPage = false;

if (
  (url.includes("/problems/") && !url.includes("/submissions/") && !url.includes("/discuss/")) ||
  (url.includes("/problems/") && url.includes("/contest/biweekly-contest-")) ||
  url.includes("/contest/weekly-contest-")
)
  questionPage = true;

const generateStyle = () => {
  setTimeout(() => {
    document.getElementById("m2").style.visibility = "visible";
    document.getElementById("m2").style.animation = "fadeIn 1.2s";
  }, 500);
  return `  
  <style>

  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');

  html{
    font-family: 'Comfortaa', cursive;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    letter-spacing: 0.1em;
  }

  body
  {
    background-image: url('sample.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    color: #000000;
    height: 90vh;
  }
  
  .message{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2.5;
    height: 100%;
  }

  #m1
  {
    animation: fadeIn 1.2s;
    font-size: 1rem;
  }

  #m2
  {
    font-size: 1.25rem;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    80% { opacity: 1; }
  }

  </style>
  `;
};

const generateHTML = (username) => {
  return `
  <div class="message"> 
  <div id="m1">Stay Focussed</div>
  <div id="m2" style="visibility:hidden;">GET BACK TO THE GRIND 👋🏽</div>
  </div>`;
};

if (`/${username}/` === window.location.pathname) {
  document.head.innerHTML = generateStyle();
  document.body.innerHTML = generateHTML(username);
} else if (questionPage) {
  const callback = (mutations, observer) => {
    const difficultyTag = document.querySelector("[diff]");
    if (difficultyTag) {
      difficultyTag.innerText = "💩";
      difficultyTag.style.color = "#FFFFFF";
      observer.disconnect();
    }
  };

  var observer = new MutationObserver(callback);
  observer.observe(document, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
  });
}

// https://javascript.info/mutation-observer
// We're repeatedly keep observing the "document" object. And, as soon as it loads, we call the callback function with the help of the "MutationObserver" object.
// Now, in that function we check if we have yet found the attribute "diff". If we have, we change the difficulty and stop observing the "document" object.
