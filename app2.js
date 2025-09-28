// --- HEART CURSOR ---
const HeartCursor = document.getElementById('HeartCursor');
if (HeartCursor) {
    document.addEventListener('mousemove', (e) => {
        HeartCursor.style.top = `${e.clientY}px`;
        HeartCursor.style.left = `${e.clientX}px`;
    });
}

// --- MUSIC BUTTON 2 ---
const musicBtn2 = document.getElementById("musicBtn2");
const bgmusic2 = document.getElementById("bgmusic2");
if (musicBtn2 && bgmusic2) {
    musicBtn2.addEventListener("click", () => {
        if (bgmusic2.paused) bgmusic2.play();
        else bgmusic2.pause();
    });
}
//Music 3
const bgmusic3 = document.getElementById("bgmusic3");
bgmusic3.volume = 0.6; 

const continueBtn2 = document.getElementById("continueBtn2");
const Speech = document.querySelectorAll(".MySpeech");
const buttonContainer = document.getElementById("buttonContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const pixel_cat = document.getElementById("pixel_cat4");

let index = 0;

buttonContainer.style.display = "none";

continueBtn2.addEventListener("click", event =>{
  if(index>0){
    Speech[index - 1].classList.remove("show");
  }

  if(index < Speech.length){
    Speech[index].classList.add("show");
    index++;

  if( index === Speech.length){
    continueBtn2.style.display = "none";
    buttonContainer.style.display = "flex";
  }
}
});

//YesBtn & NoBtn result
let noClicks =0;
let noscale = 1;
let yesFontsize = 16;

noBtn.addEventListener('click', event =>{
  if(noClicks < 5){
    noClicks++;

    noscale -= 0.1;
    noBtn.style.transform = `scale(${noscale})`;
    noBtn.style.transition = "all 0.3s ease";

    yesFontsize += 3;
    yesBtn.style.fontSize = yesFontsize + "px";

    if(noClicks === 1){
      noBtn.textContent = "sure?😟";
    } else if(noClicks === 2){
      noBtn.textContent = "Please..😞";
    } else if(noClicks === 3){
      noBtn.textContent = "Noo...😢";
    } else if(noClicks === 4){
      noBtn.textContent = "Okay..😭";
    }

    if(noClicks === 1){
      pixel_cat.src = "image/pixel_cat6.gif";
    } else if(noClicks === 2){
      pixel_cat.src = "image/pixel_cat7.gif";
    } else if(noClicks === 3){
      pixel_cat.src = "image/pixel_cat8.gif";
    } else if(noClicks === 4){
      pixel_cat.src = "image/pixel_cat9.gif";
    } 

    const speechIndex = Speech.length - 1; // example: last speech
    if (speechIndex >= 0) {
        Speech.forEach(s => s.classList.remove("show"));

        Speech[speechIndex].innerHTML = "<p>Nooo!"; 
        Speech[speechIndex].classList.add("show");
    }
  } 
});

yesBtn.addEventListener('click', event => {
  pixel_cat.src = "image/pixel_cat12.gif";

  const speechIndex = Speech.length - 1; // example: last speech
    if (speechIndex >= 0) {
        Speech.forEach(s => s.classList.remove("show"));

        Speech[speechIndex].innerHTML = "<p>Yay!!!🎉😻You just made my day 1000x better! Love you lots💖💖</p>"; 
        Speech[speechIndex].classList.add("show");
    }
});



//draggable container2
const container2 = document.getElementById("draggablecontainer2");

let offsetX = 0;
let offsetY = 0;
let isDragging = false;

container2.addEventListener("mousedown", (e) => {
  isDragging = true;
  container2.classList.add("dragging");
  
  // calculate offset between mouse and top-left corner of container
  const rect = container2.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  // set new position based on mouse movement
  container2.style.left = `${e.clientX - offsetX}px`;
  container2.style.top = `${e.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  container2.classList.remove("dragging");
});

//YesBtn & NoBtn result

