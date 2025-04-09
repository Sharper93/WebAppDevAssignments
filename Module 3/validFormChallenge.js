let validColor = "LightGreen";
let invalidColor = "Orange";
let userAgeInput = document.getElementById("userAge");
let formWidget = document.getElementById("userForm");
let userAgeValid = false;

if (userAgeInput.value > 15 && userAgeInput.value < 120) {
   userAgeInput.style.background = validColor;
   userAgeValid = true;
} else {
   userAgeInput.style.background = invalidColor;
   userAgeValid = false;
}


function formCheck(event) {
   if (!userAgeValid) {
      event.preventDefault();
   }
}

userAgeInput.addEventListener("input", userAgeCheck);
formWidget.addEventListener("submit", formCheck);