const continueBtn = document.getElementById("continueBtn");
const bubbles = document.querySelectorAll(".SpeechBubble");

let current = 0;

continueBtn.addEventListener("click", event =>{
    if(current < bubbles.length){
    bubbles.forEach(bubble => bubble.classList.remove("show"));
    const currentBubble = bubbles[current];
    bubbles[current].classList.add("show");
    if (currentBubble.id === "bubble2"){
            continueBtn.style.display = "none";
        } else {
            continueBtn.style.display = "inline-block"; // or 'block', depending on your styling
        }

        if(current === bubbles.length -1){
          continueBtn.style.display = "none";
          document.getElementById("newpageBtn").style.display = "inline-block";
        }
    current++;
}
});

const container = document.getElementById("draggablecontainer");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  container.classList.add("dragging");
  
  // calculate offset between mouse and top-left corner of container
  const rect = container.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  // set new position based on mouse movement
  container.style.left = `${e.clientX - offsetX}px`;
  container.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  container.classList.remove("dragging");
});

 //Heart Cursor
const HeartCursor = document.getElementById('HeartCursor');
document.addEventListener('mousemove', (e) => {
  if (HeartCursor) {
    HeartCursor.style.top = `${e.clientY}px`;
    HeartCursor.style.left = `${e.clientX}px`;
  }
});

const musicBtn = document.getElementById("musicBtn");
const bgmusic = document.getElementById("bgmusic");
musicBtn.addEventListener("click", event =>{
  if (bgmusic.paused){
    bgmusic.play();
  }
  else{
    bgmusic.pause();
  }
});

// Username Input
let username;
document.getElementById("MySubmit").onclick = function(){
  username = document.getElementById("MyText").value;
  const bubble3 = document.getElementById("bubble3");
  const bubble7 = document.getElementById("bubble7")
  bubble3.textContent = `Ahh! What a nice name. I hope you are having a great day, ${username}😀`
  bubble7.textContent = `You've got this ${username}!💪`
  bubbles.forEach(bubble => bubble.classList.remove("show"));
  bubble3.classList.add("show");

  continueBtn.style.display = "inline-block";
  continueBtn.classList.remove("initialAnimation");
  continueBtn.classList.add("quickPop");
  
  current = Array.from(bubbles).indexOf(bubble3) + 1;
};



