//HEading animation
$(document).ready(function(){
	var mouseX, mouseY;
	var ww =$(window).width();
	var wh = $(window).height();
	var traX, traY;
	$(document).mouseover(function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;
		traX = ((4 * mouseX) / 570) + 40;
		traY = ((4 * mouseY) / 570) + 50;
		console.log(traX);
		$('.title').css({"background-position": traX + "%" + traY + "%"});
	});
});
//end of heading anymation

//button anymation
$(document).ready(function(){
	var mouseX, mouseY;
	var ww =$(window).width();
	var wh = $(window).height();
	var traX, traY;
	$(document).mouseover(function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;
		traX = ((4 * mouseX) / 570) + 40;
		traY = ((4 * mouseY) / 570) + 50;
		console.log(traX);
		$('#findSign').css({"background-position": traX + "%" + traY + "%"});
	});
});
//end of button anymation

var horoscopes = [
	{
		name: "aries",
		picture: 'img/aries.png',
		info: "Courageous, energetic, willful, commanding, leading. Often leads when following would be best course of action."
	},
	{
		name: "taurus",
		picture: 'img/taurus.png',
		info: "Pleasure seeking, loves control, dependable, grounded, provokes slowly, and highly sensual in nature."
	},
	{
		name: "gemini",
		picture: "img/gemini.png",
		info: "Cerebral, chatty, loves learning and education, charming, and adventurous."
	},
	{
		name: "cancer",
		picture: "img/cancer.png",
		info: "Emotional, group oriented, seeks security, family."
	},
	{
		name: "leo",
		picture: "img/leo.png",
		info: "Generous, organized, protective, beautiful."
	},
	{
		name: "virgo",
		picture: "img/virgo.png",
		info: "Particular, logical, practical, sense of duty, critical."
	},
	{
		name: "libra",
		picture: "img/libra.png",
		info: "Particular, logical, practical, sense of duty, critical."
	},
	{
		name: "scorpio",
		picture: "img/scorpio.png",
		info: "Passionate, exacting, loves extremes, combative, reflective."
	},
	{
		name: "sagittarius",
		picture: "img/sagittarius.png",
		info: "Happy, absent minded, creative, adventurous."
	},
	{
		name: "capricorn",
		picture: "img/capricorn.png",
		info: "Timeless, driven, calculating, ambitious."
	},
	{
		name: "aquarius",	 
		picture: "img/aquarius.png",
		info: "Forward thinking, communicative, people oriented, stubborn, generous, and dedicated."
	},
	{
		name: "pisces",
		picture: "img/pisces.png",
		info: "Likeable, energetic, passionate, sensitive."
	}
];

// This is code so the enter key also fires the function
var press = document.getElementById('horoscope');
press.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		myFunction();
		e.preventDefault();
	};
}, false);

//function to search for user horoscope
function myFunction() {
	//variable input will store data that user entered

	var input = document.getElementById("horoscope");
	//confirm that the element exists and what value user sumbits
	console.log('horoscope');
	console.log("user value is: " + horoscopes.value);

	//loop through horoscopes array one item at a time
	for(var i = 0; i < horoscopes.length; i++) {

		//check what the users value is 
		console.log("users value lowercase is: " + input.value.toLowerCase());
		//check the current item's sign in the array
		console.log('current zodiac sign is: ' + horoscopes[i].name);

		// if the value the user typed in, changed to all lowercase letters, is equal to one of our signs, then we do something
		if (input.value.toLowerCase() === horoscopes[i].name) {
			//confirm if statement 
			console.log('if statement ran');

		//get elements with id name, picture, info and change it according to user's input
			var signName = document.getElementById('name');
			signName.textContent = horoscopes[i].name;
			var image = document.getElementById('picture');
			image.src = horoscopes[i].picture;
			var info = document.getElementById('info');
			info.textContent = horoscopes[i].info;
            input.value= "";
			return;
		} 


		//if match not found these statements run
		document.getElementById('name').textContent = "Doesn't match. Try again!";
		document.getElementById('info').textCOntent = "";
		document.getElementById('picture').src = "";
        
	};
    

};





























