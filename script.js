const captcha = document.querySelector(".captcha"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusTxt = document.querySelector(".status-text");

/* Storing all captcha characters in array */
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * It's a function that loops 6 times, each time it loops it gets a random character from the array and
 * passes it inside the captcha innerText.
 */
function getCaptcha(){
  for (let i = 0; i < 6; i++) {
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`;
  }
}

/* Calling getCaptcha when the page open */
getCaptcha(); 

/* Calling getCaptcha & removeContent on the reload btn click */ 
reloadBtn.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
}); 


checkBtn.addEventListener("click", e =>{
  e.preventDefault(); // Preventing button from it's default behaviour
  statusTxt.style.display = "block";
  // Adding space after each character of user entered values because I've added spaces while generating captcha
  let inputVal = inputField.value.split('').join(' ');
  if(inputVal == captcha.innerText){ // If captcha matched
    statusTxt.style.color = "#4db2ec";
    statusTxt.innerText = "Nice! You don't appear to be a robot.";
    setTimeout(()=>{ // Calling removeContent & getCaptcha after 4 seconds
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please try again!";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 statusTxt.style.display = "none";
}
