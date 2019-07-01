'use strict';

console.log('>> Ready :)');

// Defining variable and function for audio:

var audio1 = document.getElementById("audioID");

function playAudio() {
  audio1.play();
}

// Defining variable and function for ACCORDION:

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Change + for - inside the accordion, when clicking an option:

let iconImage = document.getElementById('icon-button');
function toggleIcon(){
  if (iconImage.classList.contains('fa-plus')) {
    iconImage.classList.toggle('fa-plus');
    iconImage.classList.add('fa-minus');
  } else if ((iconImage.classList.contains('fa-minus'))){
    iconImage.classList.toggle('fa-minus');
    iconImage.classList.add('fa-plus');
  }
}

