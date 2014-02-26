
/* Fonction d'initialisation principale*/

jQuery(document).ready(function($) {

//Detecte si le navigateur utilise le moteur Webkit
var isWebkit = 'WebkitAppearance' in document.documentElement.style;

//Scroll to
$.fn.ScrollTo = function(speed){  
	if(!speed) var speed = 'slow';  

	return this.each(function(){  
		$(this).click(function(){  
			var goscroll = false;  
			var the_hash = $(this).attr("href");  
			var the_id = $(this).attr("id");
			var regex = new RegExp("(.*)\#(.*)","gi");  
			var the_element = '';  

			if(the_hash.match("\#(.+)")) {  

				the_hash = the_hash.replace(regex,"$2");  

				if($("#"+the_hash).length>0) {  
					the_element = "#" + the_hash;  
					goscroll = true;  
				}  
				else if($("a[name=" + the_hash + "]").length>0) {  
					the_element = "a[name=" + the_hash + "]";  
					goscroll = true;  
				}  

				if(goscroll) {  
					var container = 'html';  
					if (isWebkit) container = 'body';  

					$(container).animate({  
						scrollTop:$(the_element).offset().top+1  
					}, speed);  
					return false;  
				}  
			}  
		});  
	});  
}; 

//Scroll detector, dectecte l'id courant
var lastId,
slideMenu = $("#navSlide"),
menuItems = slideMenu.find("a"),
scrollItems = menuItems.map(function(){
	var item = $($(this).attr("href"));
	if (item.length) { return item; }
});

$(window).scroll(function(){
	var fromTop = $(this).scrollTop();
	var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
			return this;
	});
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
		lastId = id;
		menuItems
		.parent().removeClass("active")
		.end().filter("[href=#"+id+"]").parent().addClass("active");
	}                   
});

davidFunction(); 

var data = getData();

slideEntreprise(data);
slideJury(data);
ministereDirection();
slideTableaux();
ArtsDeLaSceneF();


});

davidFunction = function() {

// Animation de l'écran daccueil dès le chargement.
TweenMax.from( $('#cloud1'), 1.5, {css:{opacity:0}, ease:Bounce.easeOut});
TweenMax.from( $('#cloud2'), 1.5, {css:{opacity:0}, ease:Bounce.easeOut});
TweenMax.from( $('#cloud3'), 1.5, {css:{opacity:0}, ease:Bounce.easeOut});
TweenMax.from( $('#cloud3'), 2.5, {css:{top:'1000px', left:'60px'}, ease:Quad.easeInOut});
TweenMax.from( $('#cloud2'), 2.5, {css:{top:'-300px', left:'860px'}, ease:Quad.easeInOut});
TweenMax.from( $('#cloud1'), 2.5, {css:{top:'-300px', left:'-860px'}, ease:Quad.easeInOut})



$('a').ScrollTo('slow');
$('#slideshow').bjqs({
	'height' : 461,
	'width' : 960,
	'responsive' : true,
	'automatic' : false,
	'nexttext' : '', 
	'prevtext' : '', 

});

// $(".pager").click(function(){
// 	$this = $(this);
// 	$('body').juizScrollTo('#slide'+$this.attr("id").substring(0,1));
// 	console.log('#slide'+$this.attr("id").substring(0,1));

// });

var controller = $.superscrollorama({
	triggerAtCenter: false,
	playoutAnimations: false,
	reverse:false
});

controller.addTween('#slide2', TweenMax.from( $('#cloud6'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud6-1'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud7'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud8'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud-5'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud9'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#verticalLine1'), 1, {delay:2, css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#textCulture'), 1, {delay:2, css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud6'), 2.3, {css:{top:'-300px', left:'-860px'}, ease:Quad.easeInOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud6-1'), 3, {css:{top:'-300px', left:'-860px'}, ease:Quad.easeInOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud7'), 1.5, {css:{top:'-400', left:'-1000px'}, ease:Quad.easeInOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud8'), 1.85, {css:{top:'1000px', left:'-260px'}, ease:Quad.easeInOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud-5'), 5, {css:{top:'1000px', left:'-260px'}, ease:Quad.easeInOut}));
controller.addTween('#slide2', TweenMax.from( $('#cloud9'), 1.95, {css:{top:'-300px', left:'-860px'}, ease:Quad.easeInOut}));

controller.addTween('#slide2', TweenMax.from( $('#building1'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building1'), 1.25, {css:{top:'-300px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building2'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building2'), 1.10, {css:{top:'-200px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building3'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building3'), 1.30, {css:{top:'-250px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building4'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building4'), 1, {css:{top:'-400px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building5'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building5'), 1.20, {css:{top:'-300px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building6'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building6'), 1.25, {css:{top:'-350px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building7'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building7'), 1.5, {css:{top:'-380px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building8'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building8'), 1.5, {css:{top:'-380px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building9'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building9'), 1.1, {css:{top:'-480px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building10'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building10'), 1.2, {css:{top:'-580px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building11'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building11'), 1.3, {css:{top:'-420px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building12'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building12'), 1.25, {css:{top:'-320px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building13'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building13'), 1.10, {css:{top:'-520px'}, ease:Bounce.easeOut}));

controller.addTween('#slide2', TweenMax.from( $('#building14'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building14'), 1.20, {css:{top:'-540px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building15'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building15'), 1.25, {css:{top:'-500px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building16'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building16'), 1, {css:{top:'-520px'}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building17'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide2', TweenMax.from( $('#building17'), 1.4, {css:{top:'-580px'}, ease:Bounce.easeOut}));

controller.addTween('#slide3', TweenMax.from( $('#cloudC3'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#cloudC3'), 1.6, {css:{top:'-300px', left:'-60px'}, ease:Quad.easeInOut}));
controller.addTween('#slide3', TweenMax.from( $('#cloudC2'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#cloudC2'), 2.25, {css:{top:'-300px', left:'-60px'}, ease:Quad.easeInOut}));
controller.addTween('#slide3', TweenMax.from( $('#cloudC1'), .5, {css:{opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#cloudC1'), 2.25, {css:{top:'300px', left:'-600px'}, ease:Quad.easeInOut}));

controller.addTween('#slide3', TweenMax.from( $('#buildingC1'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC1'), 1.20, {css:{top:'-540px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC1h'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC1h'), 1.25, {css:{top:'-500px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC2'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC2'), 1, {css:{top:'-520px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC2h'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC2h'), 1.4, {css:{top:'-580px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC3'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC3'), 1.2, {css:{top:'-580px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC3h'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC3h'), 1.3, {css:{top:'-420px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC4'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC4'), 1.25, {css:{top:'-320px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC4h'), .5, {css:{display:'none', opacity:0}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#buildingC4h'), 1.10, {css:{top:'-520px'}, ease:Bounce.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#ballsC3'), .5, {css:{display:'none', opacity:0}, ease:Quad.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#ballsC3'), 1.5, {css:{top:'-380px'}, ease:Quad.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#iconC3'), .5, {css:{opacity:0}, ease:Quad.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#iconC2'), .5, {css:{opacity:0}, ease:Quad.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#iconC1'), .5, {css:{opacity:0}, ease:Quad.easeOut}));
controller.addTween('#slide3', TweenMax.from( $('#iconC4'), .5, {css:{opacity:0}, ease:Quad.easeOut}));

};

/* Fonctions pour paramétrer chaque slide en fonction des données*/
slideEntreprise = function() {
	var data = getData();
	$('#nbEntrepriseFemme').text(data.General.nbFemme);
	$('#totalEntreprise').text(data.General.nbFemme+data.General.nbHomme);
	$('#generalPourcentFemme').text(pourcentFemme(data.General));
};
/* Fonctions Secteurs*/

ArtsDeLaSceneF = function() {
	var data = getData();
	var domaine=data.ArtsDeLaScene;
	$('#descriptionSecteur').text(domaine.description);
	$('#nomSecteur').text(domaine.name);
	$('#SecteurHomme').text(pourcentHommeSecteur(domaine));
	$('#SecteurMixte').text(pourcentMixteSecteur(domaine));
	$('#SecteurFemme').text(100-(pourcentMixteSecteur(domaine)+pourcentHommeSecteur(domaine)));

	$('#buildingC2h').css("visibility","visible");
	$('#buildingC1h').css("visibility","hidden");
	$('#buildingC3h').css("visibility","hidden");
	$('#buildingC4h').css("visibility","hidden");

	modifPie(domaine);

};

MusiqueF = function() {
	var data = getData();
	var domaine=data.Musique;
	$('#descriptionSecteur').text(domaine.description);
	$('#nomSecteur').text(domaine.name);
	$('#SecteurHomme').text(pourcentHommeSecteur(domaine));
	$('#SecteurMixte').text(pourcentMixteSecteur(domaine));
	$('#SecteurFemme').text(100-(pourcentMixteSecteur(domaine)+pourcentHommeSecteur(domaine)));

	$('#buildingC4h').css("visibility","visible");
	$('#buildingC2h').css("visibility","hidden");
	$('#buildingC3h').css("visibility","hidden");
	$('#buildingC1h').css("visibility","hidden");

	modifPie(domaine);
};

BeauxArtsF = function() {
	var data = getData();
	var domaine=data.BeauxArts;
	$('#descriptionSecteur').text(domaine.description);
	$('#nomSecteur').text(domaine.name);
	$('#SecteurHomme').text(pourcentHommeSecteur(domaine));
	$('#SecteurMixte').text(pourcentMixteSecteur(domaine));
	$('#SecteurFemme').text(100-(pourcentMixteSecteur(domaine)+pourcentHommeSecteur(domaine)));

	$('#buildingC3h').css("visibility","visible");
	$('#buildingC2h').css("visibility","hidden");
	$('#buildingC1h').css("visibility","hidden");
	$('#buildingC4h').css("visibility","hidden");

	modifPie(domaine);
};

AudioVisuelF = function () {
	var data = getData();
	var domaine = data.AudioVisuel;
	$('#descriptionSecteur').text(domaine.description);
	$('#nomSecteur').text(domaine.name);
	$('#SecteurHomme').text(pourcentHommeSecteur(domaine));
	$('#SecteurMixte').text(pourcentMixteSecteur(domaine));
	$('#SecteurFemme').text(100-(pourcentMixteSecteur(domaine)+pourcentHommeSecteur(domaine)));

	$('#buildingC1h').css("visibility","visible");
	$('#buildingC2h').css("visibility","hidden");
	$('#buildingC3h').css("visibility","hidden");
	$('#buildingC4h').css("visibility","hidden");

	modifPie(domaine);
};

modifPie = function(secteur) {
	var ctx = document.getElementById("myChart").getContext("2d");
	var data = [
	{
		value: totalFemmeSecteur(secteur),
		color:"#A74C4C"
	},
	{
		value : totalHommeSecteur(secteur),
		color : "#2E546D"
	},
	{
		value : totalMixteSecteur(secteur),
		color : "#ECE4B1"
	}			
	]

	var options = {
//Boolean - Whether we should show a stroke on each segment
segmentShowStroke : false,

//String - The colour of each segment stroke
segmentStrokeColor : "#fff",

//Number - The width of each segment stroke
segmentStrokeWidth : 2,

//Boolean - Whether we should animate the chart	
animation : true,

//Number - Amount of animation steps
animationSteps : 100,

//String - Animation easing effect
animationEasing : "easeOutQuart",

//Boolean - Whether we animate the rotation of the Pie
animateRotate : true,

//Boolean - Whether we animate scaling the Pie from the centre
animateScale : false,

//Function - Will fire on animation completion.
onAnimationComplete : null
}
new Chart(ctx).Pie(data,options);
};

/*Fin fonctions secteurs*/

slideJury = function(data) {
	$('#presidenceJuryFemme').text(pourcentFemme(data.Jury.Presidence));
	$('#juryFemme').text(pourcentFemme(data.Jury.Composition));
	$('#encart1').text(pourcentFemme(data.Jury.Presidence));
	$('#encart2').text(pourcentFemme(data.Jury.Composition));

};


/*Fonctions javascript*/
pourcentFemme = function(domaine) {
	var pourcent = Math.round(100*domaine.nbFemme/(domaine.nbHomme+domaine.nbFemme+domaine.nbMixte));
	return (pourcent);
};
pourcentHomme = function(domaine) {
	var pourcent = Math.round(100*domaine.nbHomme/(domaine.nbHomme+domaine.nbFemme+domaine.nbMixte));
	return (pourcent);
};

pourcentMixte = function(domaine) {
	var pourcent = Math.round(100*domaine.nbMixte/(domaine.nbHomme+domaine.nbFemme+domaine.nbMixte));
	return (pourcent);
};

totalFemmeSecteur = function(secteur){
	var nombreFemme=0;
	for (var s in secteur) {
		if (secteur.hasOwnProperty(s)) {
			if(secteur[s].hasOwnProperty('nbFemme')){
				nombreFemme=nombreFemme + secteur[s].nbFemme;
			}
		}
	}
	return nombreFemme;
};

totalHommeSecteur = function(secteur){
	var nombreHomme=0;
	for (var s in secteur) {
		if (secteur.hasOwnProperty(s)) {
			if(secteur[s].hasOwnProperty('nbHomme')){
				nombreHomme=nombreHomme + secteur[s].nbHomme;
			}
		}
	}
	return nombreHomme;
};

totalMixteSecteur = function(secteur){
	var nombreMixte=0;
	for (var s in secteur) {
		if (secteur.hasOwnProperty(s)) {
			if(secteur[s].hasOwnProperty('nbMixte')){
				nombreMixte=nombreMixte + secteur[s].nbMixte;
			}
		}
	}
	return nombreMixte;
};

pourcentHommeSecteur = function(secteur){
	return (Math.round(100*totalHommeSecteur(secteur)/(totalHommeSecteur(secteur)+totalFemmeSecteur(secteur) + totalMixteSecteur(secteur))));
};

pourcentFemmeSecteur  = function(secteur){
	return (Math.round(100*totalFemmeSecteur(secteur)/(totalHommeSecteur(secteur)+totalFemmeSecteur(secteur) + totalMixteSecteur(secteur))));
};

pourcentMixteSecteur  = function(secteur){
	return (Math.round(100*totalMixteSecteur(secteur)/(totalHommeSecteur(secteur)+totalFemmeSecteur(secteur) + totalMixteSecteur(secteur))));
};

pourcentPalier = function(pourcentage){
	var newp = 0;
	newp = pourcentage;
	return (10*Math.round(newp/10));
};

/* Slide tableaux*/

slideTableaux = function() {
	tableauOeuvres();
	tableauProg();
	Oeuvres();
}

Oeuvres = function() {
	var data = getData();
	var domaine2 = data.Oeuvres;
	var domaine = data.Oeuvres.AcquisitionAnnuelleDesFRAC;
	$('#nomOeuvres').text(domaine2.name);
	$('#descriptionOeuvres').text(domaine.name);
	$('#oeuvresHommes').text(pourcentHomme(domaine));
	$('#oeuvresShemale').text(pourcentMixte(domaine));
	$('#oeuvresFemmes').text(100-(pourcentHomme(domaine)+pourcentMixte(domaine)));
	$('#tableauProg1').css('opacity','0.5');
	$('#tableauProg2').css('opacity','0.5');
	$('#tableauProg3').css('opacity','0.5');
	$('#tableauProg4').css('opacity','0.5');
	$('#tableauProg5').css('opacity','0.5');
	$('#tableauProg6').css('opacity','0.5');
	$('#tableauProg7').css('opacity','0.5');
	$('#tableauProg8').css('opacity','0.5');
	$('#tableauProg9').css('opacity','0.5');
	$('#tableauProg10').css('opacity','0.5');
	$('#tableauOeuvres1').css('opacity','1');
	$('#tableauOeuvres2').css('opacity','1');
	$('#tableauOeuvres3').css('opacity','1');
	$('#tableauOeuvres4').css('opacity','1');
	$('#tableauOeuvres5').css('opacity','1');
	$('#tableauOeuvres6').css('opacity','1');
	$('#tableauOeuvres7').css('opacity','1');
	$('#tableauOeuvres8').css('opacity','1');
	$('#tableauOeuvres9').css('opacity','1');
	$('#tableauOeuvres10').css('opacity','1');
};

Prog = function() {
	var data = getData();
	var domaine2 = data.Oeuvres;
	var domaine = data.Oeuvres.Programmation;
	$('#nomOeuvres').text(domaine2.name);
	$('#descriptionOeuvres').text(domaine.name);
	$('#oeuvresHommes').text(pourcentHomme(domaine));
	$('#oeuvresShemale').text(pourcentMixte(domaine));
	$('#oeuvresFemmes').text(100-(pourcentHomme(domaine)+pourcentMixte(domaine)));
	$('#tableauProg1').css('opacity','1');
	$('#tableauProg2').css('opacity','1');
	$('#tableauProg3').css('opacity','1');
	$('#tableauProg4').css('opacity','1');
	$('#tableauProg5').css('opacity','1');
	$('#tableauProg6').css('opacity','1');
	$('#tableauProg7').css('opacity','1');
	$('#tableauProg8').css('opacity','1');
	$('#tableauProg9').css('opacity','1');
	$('#tableauProg10').css('opacity','1');
	$('#tableauOeuvres1').css('opacity','0.5');
	$('#tableauOeuvres2').css('opacity','0.5');
	$('#tableauOeuvres3').css('opacity','0.5');
	$('#tableauOeuvres4').css('opacity','0.5');
	$('#tableauOeuvres5').css('opacity','0.5');
	$('#tableauOeuvres6').css('opacity','0.5');
	$('#tableauOeuvres7').css('opacity','0.5');
	$('#tableauOeuvres8').css('opacity','0.5');
	$('#tableauOeuvres9').css('opacity','0.5');
	$('#tableauOeuvres10').css('opacity','0.5');
};

tableauOeuvres = function() {
	var data = getData();
	var domaine = data.Oeuvres.AcquisitionAnnuelleDesFRAC;
	var taux = pourcentPalier(pourcentFemme(domaine));

	switch (taux)
	{
		case 10:
		$('#tableauOeuvres1').css("visibility","visible");
		break;
		case 20:
		$('#tableauOeuvres2').css("visibility","visible");
		break;
		case 30:
		$('#tableauOeuvres3').css("visibility","visible");
		break;
		case 40:
		$('#tableauOeuvres4').css("visibility","visible");
		break;
		case 50:
		$('#tableauOeuvres5').css("visibility","visible");
		break;
		case 60:
		$('#tableauOeuvres6').css("visibility","visible");
		break;
		case 70:
		$('#tableauOeuvres7').css("visibility","visible");
		break;
		case 80:
		$('#tableauOeuvres8').css("visibility","visible");
		break;
		case 90:
		$('#tableauOeuvres9').css("visibility","visible");
		break;
		default : 
		$('#tableauOeuvres10').css("visibility","visible");
		break;
	}		
};

tableauProg = function() {
	var data = getData();
	var domaine = data.Oeuvres.Programmation;
	var taux = pourcentPalier(pourcentFemme(domaine));

	switch (taux)
	{
		case 10:
		$('#tableauProg1').css("visibility","visible");
		break;
		case 20:
		$('#tableauProg2').css("visibility","visible");
		break;
		case 30:
		$('#tableauProg3').css("visibility","visible");
		break;
		case 40:
		$('#tableauProg4').css("visibility","visible");
		break;
		case 50:
		$('#tableauProg5').css("visibility","visible");
		break;
		case 60:
		$('#tableauProg6').css("visibility","visible");
		break;
		case 70:
		$('#tableauProg7').css("visibility","visible");
		break;
		case 80:
		$('#tableauProg8').css("visibility","visible");
		break;
		case 90:
		$('#tableauProg9').css("visibility","visible");
		break;
		default : 
		$('#tableauProg10').css("visibility","visible");
		break;
	}				
};

ministereEncadrement = function() {
	var data = getData();
	var domaine2 = data.MinistereCulture;
	var domaine = data.MinistereCulture.Encadrement;
	drapeau(domaine);
	$('#nomMinistere').text(domaine.name);
	$('#descriptionMinistere').text(domaine2.description);
	$('#ministereHomme').text(pourcentHomme(domaine));
	$('#ministereFemme').text(100-pourcentHomme(domaine));

	$('#sousdirecteurHover').css("visibility","visible");
	$('#directeurHover').css("visibility","hidden");
	$('#sousdirecteur').css("visibility","hidden");
	$('#directeur').css("visibility","visible");

};

ministereDirection = function() {
	var data = getData();
	var domaine2 = data.MinistereCulture;
	var domaine = data.MinistereCulture.Direction;
	drapeau(domaine);
	$('#nomMinistere').text(domaine.name);
	$('#descriptionMinistere').text(domaine2.description);
	$('#ministereHomme').text(pourcentHomme(domaine));
	$('#ministereFemme').text(100-pourcentHomme(domaine));
	$('#directeur').css("visibility","visible");

	$('#sousdirecteurHover').css("visibility","hidden");
	$('#directeurHover').css("visibility","visible");
	$('#sousdirecteur').css("visibility","visible");
	$('#directeur').css("visibility","hidden");

};

drapeau = function(domaine) {
	var taux = pourcentPalier(pourcentFemme(domaine));

	if (taux>0 && taux<=10) {					
		$('#drapeau1').css("visibility","visible");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","hidden");
	}
	else if ((taux>10)&&(taux<=25)) {
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","visible");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","hidden");
	}
	else if ((taux>25)&&(taux<=35)){
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","visible");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","hidden");
	}
	else if ((taux>35)&&(taux<=50)){
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","visible");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","hidden");
	}
	else if ((taux>50)&&(taux<=65)){
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","visible");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","hidden");
	}
	else if ((taux>65)&&(taux<=75)){
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","visible");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","hidden");
	}
	else if ((taux>75)&&(taux<=90)){
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","visible");
		$('#drapeau8').css("visibility","hidden");
	}
	else {
		$('#drapeau1').css("visibility","hidden");
		$('#drapeau2').css("visibility","hidden");
		$('#drapeau3').css("visibility","hidden");
		$('#drapeau4').css("visibility","hidden");
		$('#drapeau5').css("visibility","hidden");
		$('#drapeau6').css("visibility","hidden");
		$('#drapeau7').css("visibility","hidden");
		$('#drapeau8').css("visibility","visible");
	}
};