var icon2 = document.getElementById("theme22");
icon2.onclick = function(){
    document.body.classList.toggle("lighttheme");
    if(document.body.classList.contains("lighttheme")){
        icon2.src = "moon.svg"
    }
    else{ 
        icon2.src = "sun.svg"
    }
}

function myFunction() {
    var txt;
    if (confirm("Press on OK to confrim Your Order!")) {
      txt = "Your Order Confrimed!";
    } else {
      txt = "Your Order Canceled!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
