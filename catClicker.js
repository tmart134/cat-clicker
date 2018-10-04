//cat clicker js
let firstCat = "Buddy";
let secondCat = "Heidi";
let firstCatClickCounter=0;
let secondCatClickCounter=0;
let clickMessage;

//display the cat names
document.getElementById('first-cat-name').innerHTML = firstCat;
document.getElementById('second-cat-name').innerHTML = secondCat;


$('.first-cat').click(function(e) {

//update the click count and display the count and cat name
  	firstCatClickCounter++;
  	clickMessage = `${firstCat}! ${firstCatClickCounter}`;
  	document.getElementById('first-cat-clicks').innerHTML = clickMessage;

});

$('.second-cat').click(function(e){

//update the click count and display the count and cat name
	secondCatClickCounter++;
	clickMessage = `${secondCat}! ${secondCatClickCounter}`;
	document.getElementById('second-cat-clicks').innerHTML = clickMessage;
});