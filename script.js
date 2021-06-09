
     
var myInput = document.getElementById("psw");

var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
         
myInput.onkeyup = function() {
    
   special = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
     if(myInput.value.match(special)){
         char.classList.remove("invalid");
         char.classList.add("valid");
        } else {
        char.classList.remove("valid");
        char.classList.add("invalid");
            }
      
    // Validate capital letters
    
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length ===8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
     ifelse
      onclick(alert("Password is correct"));  
    } 
    
