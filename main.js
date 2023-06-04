// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const docHearts = document.querySelectorAll(".like-glyph");
document.getElementById("modal").classList.add("hidden");

function callback(e) {
  const heart = e.target;
  mimicServerCall()
  .then(() => {
    if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.classList.add("activated-heart");
    } else if(heart.innerText === FULL_HEART){
      heart.innerText = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  })
  .catch((error) => {
    document.getElementById("modal").classList.remove("hidden");
    setTimeout(() => document.getElementById("modal").classList.add("hidden"), 3000);
  })
}
for (const hrts of docHearts){
  hrts.addEventListener("click", callback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
