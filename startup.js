
var backgroundColors = [
   '#0080ff',
   '#ffbf00',
   '#01df3a',
   '#ff0080',
   '#9966ff',
   '#ff0033'
];

var ideas = [
   'A bunch of iron',
   'Big, huge mucsles',
   'Telephone shoe',
   'Sillystring that shoots out your arm',
];

var forideas = [
   'Ironman',
   'The Incredible Hulk',
   'Inspector gadget',
   'Spiderman',
];

var refresh = document.querySelector('.refresh');
refresh.addEventListener('click', function(){
	console.log("you clicked on refresh!");

	//pick color randomly
	var color = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
	//math.random gives you a random number from 0-5 using decimal points. What we're doing is taking the random number from zero-1 and we are multiply by backgroundgrouncolors.length, so its a random number starting at zero all the way up to 5.999etc. The Math.floor function means round it down, so if it is 5.999 it rounds it down to 5, so you can trun a decimal numbe rinto a interger.

	//set background color to the one we picked 
	document.body.style.backgroundColor = color;

	//pick idea randomly
	var idea1 = ideas[Math.floor(Math.random()*ideas.length)];

	document.getElementById('js-ideas').textContent = idea1;


   //pick  second idea randomly
   var idea2 = forideas[Math.floor(Math.random()*forideas.length)];

   document.getElementById('js-forideas').textContent = idea2;

}
	)
	)
