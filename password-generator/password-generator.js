

document.querySelector(".buttons").addEventListener("click", (event) => {
  if (event.target.closest(".button")) {
    const passStrength = event.target.classList[0]
    
    if(passStrength === 'weak'){
      console.log("weak pass")
    } else if (passStrength === 'average'){
      console.log("average pass")
    } else {
      console.log("strong pass")
    }
  }
});
