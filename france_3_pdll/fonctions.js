	function change(value){
	if (value == 2007) 
	{
		document.getElementById("button_2007_left_right").src = "img/boutons/bouton2007_on.png";
		
		document.getElementById("button_2008_left_right").src = "img/boutons/bouton2008_off.png";
		
		document.getElementById("button_2012_left_right").src = "img/boutons/bouton2012_off.png";
		
		$.getJSON('data/presidentielles_2007.json', function(data) {
			majData(data,value);
		});
	}
	if (value == 2008) 
	{
		document.getElementById("button_2007_left_right").src = "img/boutons/bouton2007_off.png";
		
		document.getElementById("button_2008_left_right").src = "img/boutons/bouton2008_on.png";
		
		document.getElementById("button_2012_left_right").src = "img/boutons/bouton2012_off.png";
		
		$.getJSON('data/municipales_2008.json', function(data) {
			majData(data,value);
		});
	}
	if (value == 2012) 
	{
		document.getElementById("button_2007_left_right").src = "img/boutons/bouton2007_off.png";
		
		document.getElementById("button_2008_left_right").src = "img/boutons/bouton2008_off.png";
		
		document.getElementById("button_2012_left_right").src = "img/boutons/bouton2012_on.png";
		
		$.getJSON('data/presidentielles_2012.json', function(data) {
			majData(data,value);
		});
	}
	if (value == 20071) 
	{
		value = (value - 1) / 10;
		document.getElementById("button_2007_abstention").src = "img/boutons/bouton2007_on.png";
		
		document.getElementById("button_2008_abstention").src = "img/boutons/bouton2008_off.png";
		
		document.getElementById("button_2012_abstention").src = "img/boutons/bouton2012_off.png";
		
		$.getJSON('data/presidentielles_2007.json', function(data) {
			majAbs(data,value);
		});
	}
	if (value == 20081) 
	{
		value = (value - 1) / 10;
		document.getElementById("button_2007_abstention").src = "img/boutons/bouton2007_off.png";
		
		document.getElementById("button_2008_abstention").src = "img/boutons/bouton2008_on.png";
		
		document.getElementById("button_2012_abstention").src = "img/boutons/bouton2012_off.png";
		
		$.getJSON('data/municipales_2008.json', function(data) {
			majAbs(data,value);
		});
	}
	if (value == 20121) 
	{
		value = (value - 1) / 10;
		document.getElementById("button_2007_abstention").src = "img/boutons/bouton2007_off.png";
		
		document.getElementById("button_2008_abstention").src = "img/boutons/bouton2008_off.png";
		
		document.getElementById("button_2012_abstention").src = "img/boutons/bouton2012_on.png";
		
		$.getJSON('data/presidentielles_2012.json', function(data) {
			majAbs(data,value);
		});
	}
	
}

	function popup(bureau){

		document.getElementById(bureau).src = "img/dataviz3/swing bureau/"+bureau+".png";	
}


function majData(data,year) {
	
	var droite_voix = [], gauche_voix = [], id_bureau = [];
	
	var colour_bureau =new Array(); //pour changer le coleur de bureau
	colour_bureau[0] = new Array();
    colour_bureau[1] = new Array();
	colour_bureau[2] = new Array();
	colour_bureau[3] = new Array();
	colour_bureau[4] = new Array();
	colour_bureau[5] = new Array();
	colour_bureau[6] = new Array();
	colour_bureau[7] = new Array();
	for(i = 0;i<=6;i++)
	{	
		for(j = 0;j<=18;j++){
		  colour_bureau[i][j] = "";
		 // alert("j is "+ j);
		}
	}
	
	
	
	if(year == 2007) {
		for (node in data) {
		var nbItems = data[node].length;
		for (i=0; i<nbItems; i++) {	
			gauche_voix.push(data[node][i].roy07t2);
			droite_voix.push(data[node][i].sar07t2);
			id_bureau.push(data[node][i].id_bureau);			
			}
		}
	}
	else if(year == 2008) {
		for (node in data) {
			var nbItems = data[node].length;
			for (i=0; i<nbItems; i++) {	
				gauche_voix.push(data[node][i].voix_exp_antonini);
				droite_voix.push(data[node][i].voix_exp_bechu);
				id_bureau.push(data[node][i].id_bureau);			
			}
		}
	}
	else if(year == 2012) {
		for (node in data) {
			var nbItems = data[node].length;
			for (i=0; i<nbItems; i++) {	
				gauche_voix.push(data[node][i].hollandetour2);
				droite_voix.push(data[node][i].sarkozytour2);
				id_bureau.push(data[node][i].id_bureau);			
			}
		}
	}
	
	
	
	/* dataviz1 */
	Morris.Donut({
	  element: 'nord',
	  data: [
		{label: "ANGERS NORD \n BUREAU 701", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "701",colour_bureau)*1000)/10},
		{label: "ANGERS NORD \n BUREAU 702", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "702",colour_bureau)*1000)/10},
		{label: "ANGERS NORD \n BUREAU 703", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "703",colour_bureau)*1000)/10},
		{label: "ANGERS NORD \n BUREAU 704", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "704",colour_bureau)*1000)/10}
	  ],
		//colors: ["#039","#db0000","#db0000","#db0000"],
		colors:colour_bureau[6],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'nord-ouest',
	  data: [
		{label: "ANGERS NORD OUEST \n BUREAU 804", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "804",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 801", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "801",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 802", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "802",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 803", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "803",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 805", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "805",colour_bureau)*1000)/10}
	  ],
		//colors: ["#039","#db0000","#db0000","#db0000","#db0000"],
		colors:colour_bureau[7],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});
	Morris.Donut({
	  element: 'ouest',
	  data: [
		{label: "ANGERS OUEST \n BUREAU 601", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "601",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 602", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "602",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 603", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "603",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 604", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "604",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 605", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "605",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 606", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "606",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 607", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "607",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 608", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "608",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 609", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "609",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 610", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "610",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 611", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "611",colour_bureau)*1000)/10}
	  ],
		//colors: ["#db0000"],
		colors:colour_bureau[5],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'centre-ville',
	  data: [
		{label: "ANGERS CENTRE VILLE \n BUREAU 313", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "313",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 317", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "317",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 301", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "301",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 302", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "302",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 303", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "303",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 304", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "304",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 305", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "305",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 306", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "306",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 307", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "307",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 308", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "308",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 309", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "309",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 310", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "310",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 311", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "311",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 312", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "312",colour_bureau)*1000)/10},	
		{label: "ANGERS CENTRE VILLE \n BUREAU 314", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "314",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 315", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "315",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 316", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "316",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 318", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "318",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 319", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "319",colour_bureau)*1000)/10}
	  ],
		//colors: ["#db0000","#db0000","#db0000","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039"],
		colors:colour_bureau[2],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'nord-east',
	  data: [
		{label: "ANGERS NORD EST \n BUREAU 101", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "101",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 102", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "102",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 103", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "103",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 104", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "104",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 105", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "105",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 106", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "106",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 107", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "107",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 108", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "108",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 109", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "109",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 110", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "110",colour_bureau)*1000)/10}
	  ],
		//colors: ["#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		colors:colour_bureau[0],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'east',
	  data: [
		{label: "ANGERS EST \n BUREAU 201", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "201",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 204", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "204",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 202", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "202",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 203", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "203",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 205", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "205",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 206", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "206",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 207", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "207",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 208", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "208",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 209", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "209",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 210", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "210",colour_bureau)*1000)/10}
	  ],
		//colors: ["#039","#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		colors:colour_bureau[1],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'trelaze',
	  data: [
		{label: "TRELAZE \n BUREAU 401", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "401",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 402", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "402",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 403", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "403",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 404", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "404",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 405", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "405",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 406", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "406",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 407", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "407",colour_bureau)*1000)/10}
	  ],
		//colors: ["#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		colors:colour_bureau[3],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'sud',
	  data: [
		{label: "ANGERS SUD \n BUREAU 502", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "502",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 503", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "503",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 506", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "506",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 508", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "508",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 512", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "512",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 513", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "513",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 501", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "501",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 504", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "504",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 505", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "505",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 507", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "507",colour_bureau)*1000)/10},	
		{label: "ANGERS SUD \n BUREAU 509", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "509",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 510", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "510",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 511", value: Math.round(voix_max_1(droite_voix, gauche_voix, id_bureau, "511",colour_bureau)*1000)/10}
		
	  ],
		//colors: ["#039","#039","#039","#039","#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		colors:colour_bureau[4],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});
	
	
}

/* renvoie la valeur max des voix entre les candidats pour un bureau donn?*/
function voix_max_1(tab_voix_1, tab_voix_2, tab_bureau, id_bureau,colour_bureau) {
	var res = 0;
	var indice = 0;
	var id_tmp = "";
	var nbElem = tab_bureau.length;
	var droite = false;
	for (i=0; i<nbElem; i++) {
		id_tmp = "" + tab_bureau[i];
		if(id_tmp.indexOf(id_bureau) != -1) {
			indice = i;
		}
	}
	if(tab_voix_1[indice]>tab_voix_2[indice]) {
		res = tab_voix_1[indice];
		droite = true;
	}
	else {
		res = tab_voix_2[indice];
		droite = false;
	}
	
	//alert("id_bureau"+ id_bureau );
	var c_1 = Math.floor (id_bureau/100) -1;
	var c_2 = id_bureau % 100 - 1;
	//alert("this is c_1"+ c_1 +"this is c_1" +c_2 );
	if(droite){
		colour_bureau[c_1][c_2] ="#039" ;
	}
	else {
		colour_bureau[c_1][c_2] ="#db0000" ;
	}
	return res;
}

/* changer d'année pour l'abstension */ 
function majAbs(data, year) {

	var id_bureau = [], abstention = [];
	if(year == 2007) {
		for (node in data) {
		var nbItems = data[node].length;
		for (i=0; i<nbItems; i++) {	
			id_bureau.push(data[node][i].id_bureau);
			abstention.push(data[node][i].abs07t2);
			}
		}
	}
	else if(year == 2008) {
		for (node in data) {
		var nbItems = data[node].length;
		for (i=0; i<nbItems; i++) {	
			id_bureau.push(data[node][i].id_bureau);
			abstention.push(data[node][i].abstentions);
			}
		}
	}
	else if(year == 2012) {
		for (node in data) {
		var nbItems = data[node].length;
		for (i=0; i<nbItems; i++) {	
			id_bureau.push(data[node][i].id_bureau);
			abstention.push(data[node][i].abstentionstour2);
			}
		}
	}
	
	Morris.Donut({
	  element: 'nord_A',
	  data: [
		{label: "ANGERS NORD", value: Math.round(abs_quatier(abstention, id_bureau, 7)*1000)/10},
		{label: "ANGERS NORD", value: (100-Math.round(abs_quatier(abstention, id_bureau, 7)*1000)/10)}
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'nord-ouest_A',
	  data: [
		{label: "ANGERS NORD OUEST", value: Math.round(abs_quatier(abstention, id_bureau, 8)*1000)/10},
		{label: "ANGERS NORD OUEST", value: (100-Math.round(abs_quatier(abstention, id_bureau, 8)*1000)/10)}
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});
	Morris.Donut({
	  element: 'ouest_A',
	  data: [
		{label: "ANGERS OUEST", value: Math.round(abs_quatier(abstention, id_bureau, 6)*1000)/10},
		{label: "ANGERS OUEST", value: 100 - Math.round(abs_quatier(abstention, id_bureau, 6)*1000)/10},
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'centre-ville_A',
	  data: [
		{label: "ANGERS CENTRE VILLE", value: Math.round(abs_quatier(abstention, id_bureau, 3)*1000)/10},
		{label: "ANGERS CENTRE VILLE", value:(100 - Math.round(abs_quatier(abstention, id_bureau, 3)*1000)/10)},
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'nord-east_A',
	  data: [
		{label: "ANGERS NORD EST", value: Math.round(abs_quatier(abstention, id_bureau, 1)*1000)/10},
		{label: "ANGERS NORD EST", value: (100 - Math.round(abs_quatier(abstention, id_bureau, 1)*1000)/10)}
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'east_A',
	  data: [
		{label: "ANGERS EST", value: Math.round(abs_quatier(abstention, id_bureau, 2)*1000)/10},
		{label: "ANGERS EST", value: (100-Math.round(abs_quatier(abstention, id_bureau, 2)*1000)/10)}
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'trelaze_A',
	  data: [
		{label: "TRELAZE", value: Math.round(abs_quatier(abstention, id_bureau, 4)*1000)/10},
		{label: "TRELAZE", value: (100 - Math.round(abs_quatier(abstention, id_bureau, 4)*1000)/10)}
	  ],
		colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'sud_A',
	  data: [
		{label: "ANGERS SUD", value: Math.round(abs_quatier(abstention, id_bureau, 5)*1000)/10},
		{label: "ANGERS SUD", value: (100-Math.round(abs_quatier(abstention, id_bureau, 5)*1000)/10)}
	  ],
	   colors: ["#FC0","#999"],
		formatter: function (x) { return x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

}

/* renvoie la valeur de l'abstension pour les quartiers */
function abs_quatier(tab_abs, tab_bureau, id_bureaux) {
	var res = 0;
	var nbBureauQuartier = 0;
	var id_tmp = "";
	var nbElem = tab_bureau.length;
	for (i=0; i<nbElem; i++) {
		id_tmp = "" + tab_bureau[i];
		if(id_tmp.substring(5,6).indexOf(id_bureaux) != -1) {
			res += tab_abs[i];
			nbBureauQuartier++;
		}
	}
	res = res / nbBureauQuartier;
	return res;
}