import { generateWeakPass, generateAvgPass, generateStrongPass } from "./utils.js";


document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.closest(".button")) {
    const passStrength = event.target.classList[0]
    let password = '';

    if(passStrength === 'weak'){
      password = generateWeakPass();
    } else if (passStrength === 'average'){
      password = generateAvgPass();
    } else {
      password = generateStrongPass();
    }

    displayGeneratedPass(password);
  }

  if (event.target.closest('.copy-image')){
    copyToClipboard();
  }
});

function displayGeneratedPass(pass){
  document.querySelector('input').value = pass;
}

function copyToClipboard(){
  const inputValue = document.querySelector('input').value;
  navigator.clipboard.writeText(inputValue);
}