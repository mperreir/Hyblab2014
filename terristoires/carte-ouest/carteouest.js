var diviseur=4;
var ListeDepartements=['finistere', 'morbihan', 'cotearmor',  "ile-et-vilaine", "loire-atlantique", "vendee", "maine-et-loire",  "mayenne", "sarthe"];



jQuery(function($){
$('.map').append('<div class="overlay">');
$('.map area').mouseover(function(){
var index= $(this).index();
var left= -index * 1445/diviseur - 1450/diviseur;
loadimageouest(index);
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


for (var i=0; i<imageini.length; i++)
{
	var im=new Image();
	im.src=imageini[i];
}

function loadimageouest(iddept)
{
$("#departementselection").attr("src", ListeDepartements[iddept]+".svg");
$("#nomdepartementselection").html(ListeDepartements[iddept]);
}

