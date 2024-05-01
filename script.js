let inputs = document.getElementsByClassName('border');//it doesnt work with js , so i made it with css
window.onload = function(){
  inputs.focus();
}
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function(){
        inputs[i].style.border = '2px solid #383848';
    });

    inputs[i].addEventListener('blur', function(){
        inputs[i].style.border = 'none';
    });
}


function myFunction() { //POPUP ALERT
    var txt;
    if (confirm("WELCOME TO GINO'S")) {
      txt = "";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("noo").innerHTML = txt;
  }
// var x = document.getElementById("btn"); 
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);

// function myFunction() {
//   alert ("WELCOME TO GINO'S");
// }
// function someOtherFunction() {
//   alert ("ENJOY!");
// }

  function mOver(obj) { //to change login button
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "login"
  }
  function changeText(id) {
    id.innerHTML = "Ur homee!!";
  }
   function upperCase() { //making the inputs in usermane be uppercasas onlyyyy
   const x = document.getElementById("border");
   x.value = x.value.toUpperCase();
   }
  
   function dark(){
    let styleLink = document.getElementById('styleLink');
    var currentStyle = styleLink.getAttribute('href');
  
    if (currentStyle === 'style1.css') {
      styleLink.setAttribute('href', 'style2.css');
    } else {
      styleLink.setAttribute('href', 'style1.css');
    }
  };
  const signUpButton = document.getElementById('loginn');
signUpButton.addEventListener('click', validateSignUp);

function validateSignUp() {
  const password = document.getElementById('password').value;
  // const confirmPassword = document.getElementById('signconfirmPassword').value;

  // if (password!== confirmPassword) {
  //   alert('Passwords do not match');
  //   return;
  // }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    alert('Password must include at least one uppercase letter');
    return;
  }

  console.log('log in successful!');
}



document.getElementById("formmm").addEventListener("submit", function() {
  var email = document.getElementById("border").value;
  var password = document.getElementById("password").value;
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 100); // Set the cookie to expire in 7 days
  document.cookie = "border=" + email + "; expires=" + expirationDate.toUTCString() + "; path=/";
  document.cookie = "password=" + password + "; expires=" + expirationDate.toUTCString() + "; path=/";
});


var cookies = document.cookie.split("; ");
for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i].split("=");
  if (cookie[0] == "border") {
    document.getElementById("border").value = cookie[1];
  } else if (cookie[0] == "password") {
    document.getElementById("password").value = cookie[1];
  }
}
if (!getCookie("cookieAccepted")) {
  
  document.getElementById("cookie-message").style.display = "block";


  document.getElementById("accept-cookies").addEventListener("click", function() {
    setCookie("cookieAccepted", "true", 365);
    document.getElementById("cookie-message").style.display = "none";
  });
}


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}


function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
