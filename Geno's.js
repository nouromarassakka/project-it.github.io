// // let availableKeywords =[
// //   'Freddo Espresso',
// //   ' Ice Latte',
// //   'Ice Americano',
// //   'White Mocha Frappe',
// //   'Ice Spanish Latte',
// //   'Ice White Mocha',
// //   'Lotus Latte Frappe',
// //   'Flat White',
// //   'Hot White Mocha',
// //   'Toffe Latte Frappe',
// //   'Hot Caramel Macchiato',
// //   'Ice Caramel Macchaito',
// //   'Spanish Latte',
// //   'Cappuccino',
// //   'Latte',
// //   'Ice Cappuccino',
// //   'Espresso',
// // ];
// const resultsBox = document.querySelector(".result-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function(){
//   let result =[];
//   let input = inputBox.value;
//   if(input.length){
//     result = availableKeywords.filter((keyword)=>{
//      return  keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);
//   }
//   display(result);
// if(!result.length){
//      resultsBox.innerHTML = ' ';
// }


// }
// function display(result){
//   const content = result.map((list)=>{
//     return "<li>" + list + "<li>";
//   });
//   resultsBox.innerHTML = "<ul>" + content.join(' ') + "</ul>";

// }

// function selectInput(list){
//   inputBox.value = list.innerHTML;
//   resultsBox.innerHTML = ' ';
// }


document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  
  themeToggleBtn.addEventListener('click', () => {
      root.classList.toggle('Light-mode');
  });
});
