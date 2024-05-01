function order() {
    let x;
  if (confirm("conirm order?")) {
    x = true;
  } else {
    y =false;
  }
}
function check() {
    let x=document.getElementById('final');
    let y=document.getElementById('p1');
    x.style.visibility='visible';
    const checkedRadio = document.querySelector('input[type="radio"]:checked');
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let innerHTMLContent = '';
    if (checkedRadio) {
      innerHTMLContent += `- ${checkedRadio.id}`;
      }
    checkedCheckboxes.forEach((checkbox) => {
      innerHTMLContent += `- ${checkbox.id}`;
      });
      x.querySelector('.f1 p').innerHTML = innerHTMLContent;
}
function res(){
  let x=document.getElementById('final');
  let y=document.getElementById('p1');
  x.style.visibility='hidden';
}
function dark(){
  let styleLink = document.getElementById('styleLink');
  let currentStyle = styleLink.getAttribute('href');

  if (currentStyle === 'master.css') {
    styleLink.setAttribute('href', 'master1.css');
  } else {
    styleLink.setAttribute('href', 'master.css');
  }
};
