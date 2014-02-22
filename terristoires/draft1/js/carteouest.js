var diviseur=4;
var grandouestar = new Array();
var ListeDepartements=new Array();
var NomVilleprincipaleDpt=new Array();
var NBDonneVilleprincipaleDpt=new Array();
var NBdonneDepartements=new Array();

function initialiseouest(grandouestar)
{
ListeDepartements=grandouestar[0];

NomVilleprincipaleDpt=grandouestar[1];
NBDonneVilleprincipaleDpt=grandouestar[2];
NBdonneDepartements=grandouestar[3];
}


$.ajax( "data/grandouest.csv" ).done(function(grandouestcsv) {

   grandouestar = csv2array(grandouestcsv);
   initialiseouest(grandouestar);
});



//var ListeDepartements=['finistere', 'morbihan', 'cotearmor',  "ile-et-vilaine", "loire-atlantique", "vendee", "maine-et-loire","mayenne", "sarthe"];
//var NomVilleprincipaleDpt=['Brest', 'Vannes', "Côtes d'Armor",  "Rennes", "Nantes", "La Roche sur Yon", "Angers",  "Laval", "Le Mans"];
//var NBDonneVilleprincipaleDpt=[10, 0, 0,  168, 96, 0, 81,  0, 23];
//var NBdonneDepartements=[0, 0, 0, 0, 196, 0, 74, 0, 0];


jQuery(function($){
$('.map').append('<div class="overlay">');
$('.map area').mouseover(function(){
var index= $(this).index();
var left= -index * 1445/diviseur - 1450/diviseur;
loadinfoouest(index);
$('.map .overlay').css({
	backgroundPosition : left+"px"
});
});

//$('.map area').mouseout(function(){
//$('.map .overlay').css({
	//backgroundPosition : 1450/diviseur+"px"
//});
//});
});



for (var j=1; j<10; j++)
{
	var dataa=$("#dep-"+j).attr("coords").split(",");
	var res="";
	for (var i=0; i<dataa.length-1; i++)
	{
	res+=dataa[i]/diviseur+", ";
	}
	res+=dataa[dataa.length-1]/diviseur;
	$("#dep-"+j).attr("coords", res);
}


for (var i=0; i<ListeDepartements.length; i++)
{
	var im=new Image();
	im.src="img/"+ListeDepartements[i]+".svg";
}


function loadimageouest(iddept)
{
   var imgDep = {"finistère":"finistere",
   "morbihan":"morbihan",
   "côte d'armor":"cotearmor",
   "ille et vilaine":"ile-et-vilaine",
   "loire atlantique":"loire-atlantique",
   "vendée":"vendee",
   "maine et loire":"maine-et-loire",
   "mayenne":"mayenne",
   "sarthe":"sarthe"};
	//image département
	$("#departementselection").attr("src", "img/"+imgDep[ListeDepartements[iddept]]+".svg");
	// Nom département
	$("#nomdepartementselection").html("<h4>"+ListeDepartements[iddept].toUpperCase()+"</h4>");
}


function loadinfoouest(iddept)
{
	loadimageouest(iddept);
	if ( NBdonneDepartements[iddept]!=0)
		$("#infodepartementselection").html("<h4>Nombre de données de la région : " + NBdonneDepartements[iddept]+"</h4>");
	else
		$("#infodepartementselection").html("");


if ( NBDonneVilleprincipaleDpt[iddept]!=0)
		$("#infovilledepartementselection").html("Nombre de données de la ville de " + NomVilleprincipaleDpt[iddept]+" : " + NBDonneVilleprincipaleDpt[iddept]+"");
	else
		$("#infovilledepartementselection").html("");
 
}





