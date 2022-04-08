// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heart = document.querySelectorAll(".like-glyph")

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

function likeBtn(e){
  const newHeart = e.target;
 mimicServerCall("someUrl")

.then(function(){
   newHeart.innerText = glyphStates[newHeart.innerText]; 
    newHeart.style.color = 'red'
 })
 .catch(function(error){
const modal = document.getElementById("modal")
modal.className = "";
modal.innerText = error;
setTimeout(() => modal.className = "hidden", 3000)
 })

 }
 for (const glyph of heart){
   glyph.addEventListener("click", likeBtn)
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
