$(document).ready(function(){

var catNamesArray=["Buddy", "Heidi", "Chubbs", "Spooky", "Ginger"];
var catImagesArray=["cat","cats","kitten","kittens","felines"];
var catNamesList = $('#cats-list');
var catDisplayList = $('.cats');
var catImageURL = "https://source.unsplash.com/random/300x200/?";;
var clickMessage;

var buddyClicks = 0;
var heidiClicks = 0;
var chubbsClicks = 0;
var spookyClicks = 0;
var gingerClicks = 0;


function updateCat(cat){

	switch (cat){
	        case "Buddy":
	           buddyClicks++;
	           clickMessage = cat + " " + buddyClicks.toString() + "!!";
	           break;
	        case "Heidi":
	         	heidiClicks++;
	         	clickMessage = cat + " " + heidiClicks.toString() + "!!";
	            break; 
	        case "Chubbs":
	        	chubbsClicks++
	        	clickMessage = cat + " " + chubbsClicks.toString() + "!!";
	        	break;
	        case "Spooky":
	        	spookyClicks++;
	        	clickMessage = cat + " " + spookyClicks.toString() + "!!";
	        	break
	        case "Ginger":   
	        	gingerClicks++;
	        	clickMessage = cat + " " + gingerClicks.toString() + "!!";
	        	break;   
	        default:
	            break;    
	    }
			
		document.getElementById(cat).innerHTML = clickMessage;
}

for (var i=0; i < catNamesArray.length; i++){

	var cat = catNamesArray[i];
	var liElem = document.createElement( 'li' );
	liElem.classList.add("cat-name-list");
	liElem.innerHTML = cat;
	var figureElem = document.createElement( 'figure');
	var imgElem = document.createElement('img');
	imgElem.classList.add('cat-image');
	var url = catImageURL + catImagesArray[i];
	imgElem.setAttribute("src", url);
	var figcaptionElem = document.createElement('figcaption');
	figcaptionElem.setAttribute('id', cat);
	figcaptionElem.innerHTML = cat; 

	catDisplayList.append(figureElem);
	figureElem.append(imgElem);
	figureElem.append(figcaptionElem);
	liElem.addEventListener('click', (function(catCopy){
		return function(){
			updateCat(catCopy);
		};
	})(cat));

	catNamesList.append(liElem);

	
	}
});
