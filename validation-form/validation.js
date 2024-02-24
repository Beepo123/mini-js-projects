document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.querySelector(".name-input").value;
  const number = document.querySelector(".number-input").value;
  const email = document.querySelector(".email-input").value;
  const message = document.querySelector(".message-input").value;

  if (name.length !== 0 && validateName(name)) {
    console.log("valid name");
  } else {
    console.log("invalid name");
    return;
  }

  if (number.length === 10 && validateNumber(number)) {
    console.log("valid number");
  } else {
    console.log("invalid number");
    return;
  }

  if (email.length !== 0 && validateEmail(email)) {
    console.log("valid email");
  } else {
    console.log("invalid email");
    return;
  }

  if (message.length === 0) {
    console.log("enter a message");
  }
});

// will find the index of space element -> " "
// and check if the element before and after that index is an alphabet
function validateName(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      try {
        return (
          name[i - 1].toLowerCase() != name[i - 1].toUpperCase() &&
          name[i + 1].toLowerCase() != name[i + 1].toUpperCase()
        );
      } catch {
        return false;
      }
    }
  }
}

function validateNumber(number) {
  for (let i = 0; i < number.length; i++) {
    if (isNaN(Number(number[i]))) {
      return false;
    }
  }
  return true;
}

function validateEmail(email) {
  return email.includes('@gmail.com')
}

function displayCharsRemaining(){
  message = document.querySelector('.message-input').value;
  console.log(`${30 - message.length} characters more`)
}