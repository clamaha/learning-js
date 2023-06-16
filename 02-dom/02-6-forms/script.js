
//display firstname
const firstnameInput = document.getElementById('firstname');
const displaySpan = document.getElementById('display-firstname');

    firstnameInput.addEventListener('keyup',(event) => {
      const fName= event.target.value;
      displaySpan.textContent = fName;
    });

//age
const ageInput = document.getElementById('age');
const hardTruth = document.getElementById('a-hard-truth');

    ageInput.addEventListener('keyup',function() {
      const age = parseInt(ageInput.value);

      if (age < 18) {
        hardTruth.style.visibility = 'visible';
        hardTruth.style.color = 'red';
      } else {
        hardTruth.style.visibility = 'hidden';
      }
    });

//password
const passwordField = document.getElementById('pwd');
const confirmPasswordField = document.getElementById('pwd-confirm');

function checkPassword() {
const password = passwordField.value;
const confirmPassword = confirmPasswordField.value;

    if (password.length < 6) {
    passwordField.style.color = 'red';
  }    
    else {
    passwordField.style.color = '';
  }

    if (password !== confirmPassword) {
    confirmPasswordField.style.borderColor = 'red';
  } 
    else {
    confirmPasswordField.style.borderColor = '';
  }
}

passwordField.addEventListener('keyup', checkPassword);
confirmPasswordField.addEventListener('keyup', checkPassword);

//light/dark mode
    const mode = document.getElementById("toggle-darkmode");

    mode.addEventListener("change", function() {
      const modeValue = mode.value;

      if (modeValue === "dark") {
        document.body.style.color = 'white';
        document.body.style.backgroundColor = 'black';

      } else {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
      }
    })
    function myFunction() {
        document.getElementById("myForm").submit();
        alert('Thanks! Your form was successfully submitted :)')
      }