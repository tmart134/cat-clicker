//cat clicker js
let clickCounter=0;


$('.cat-image').click(function(e) {

  	clickCounter++;
  	document.getElementById("clicks").innerHTML = clickCounter;

});