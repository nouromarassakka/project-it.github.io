document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('button');
  
  button.addEventListener('mouseenter', function() {
    button.style.backgroundColor = 'rgb(255,0,0,0.7)'; // Change to color
  });

  button.addEventListener('mouseleave', function() {
    button.style.backgroundColor = ''; // Reset to default color
  });
});

function changeText() {
  const element = document.getElementById("word");  
  element.innerText = "gallery";  
}

function myFunction() {
  alert("your order is added to the cart");
}
// Get references to the button and iframe container
var toggleButton = document.getElementById("toggleButton");
var iframeContainer = document.getElementById("iframeContainer");

toggleButton.addEventListener("click", function() {
  // Toggle the visibility of the iframe container
  if (iframeContainer.style.display === "none") {
    iframeContainer.style.display = "block";
  } else {
    iframeContainer.style.display = "none";
  }
});
function animateButton() {
  var button = document.querySelector('.centered-button');
  button.classList.add('animated');
  setTimeout(function() {
      button.classList.remove('animated');
  }, 500);
}
function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  const element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}

function changeText2() {
element =document.getElementById("mode-toggle6");  
  if ( element.innerText == "light" ) {
    element.innerText = "dark"; 
  } else {
      element.innerText =="light" }
 
}