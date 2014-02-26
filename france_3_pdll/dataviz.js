
function chargement() {
	$.getJSON('data/municipales_2008.json', function(data) {
		graph(data);
	});
}

function graph(data) {
	
	var exprimes_droit = [], exprimes_gauche = [], s_exprimes_droit = 0, s_exprimes_gauche = 0,
		bechu_voix = [], antonini_voix = [], id_bureau = [], abstention = []
		cs3_droite = [], cs4_droite = [], cs5_droite = [],
		cs4_gauche = [], cs5_gauche = [], cs6_gauche = [];
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
	for (node in data) {
		var nbItems = data[node].length;
		for (i=0; i<nbItems; i++) {	
			antonini_voix.push(data[node][i].voix_exp_antonini);
			bechu_voix.push(data[node][i].voix_exp_bechu);
			id_bureau.push(data[node][i].id_bureau);
			abstention.push(data[node][i].abstentions);
			if(data[node][i].voix_exp_antonini>data[node][i].voix_exp_bechu) {
				exprimes_gauche.push(data[node][i].exprimes);
				s_exprimes_gauche += data[node][i].exprimes;
				cs4_gauche.push(data[node][i].cs4);
				cs5_gauche.push(data[node][i].cs5);
				cs6_gauche.push(data[node][i].cs6);	
			}
			if(data[node][i].voix_exp_antonini<data[node][i].voix_exp_bechu) {
				exprimes_droit.push(data[node][i].exprimes);
				s_exprimes_droit += data[node][i].exprimes;
				cs3_droite.push(data[node][i].cs3);
				cs4_droite.push(data[node][i].cs4);
				cs5_droite.push(data[node][i].cs5);
			}
			
		}
	}
	/* Code de la dataviz2 */
	/* Le graphique */
	CanvasJS.addColorSet("blue_red",
                [//colorSet Array
					"#db0000",
					"#2e648c",
					"#ffffff"
                ]);
    var chart = new CanvasJS.Chart("graph1",
    {
		colorSet: "blue_red",
		title:{	text: "sur " + data[node].length + " bureaux de votes",
				fontSize: 60,
				fontColor: "#000000",
				fontWeight: "bold"
				},
		data: [{
			startAngle: 90,
			type: "doughnut",
			dataPoints: [
				{  y: exprimes_gauche.length, indexLabel: "Gauche" },
				{  y: exprimes_droit.length, indexLabel: "Droite" },
				{  y: exprimes_gauche.length-exprimes_droit.length, indexLabel: "" }]
		}]
	});
	chart.render();
	/* Texte sous graphe 1 */
	document.getElementById('text_graph_gauche').innerHTML = '<p><a class="ps">' + exprimes_gauche.length + '</a> SONT À <a class="ps">GAUCHE</a></p>';
	document.getElementById('text_graph_droite').innerHTML = '<p><a class="ump">' + exprimes_droit.length + '</a> SONT À <a class="ump">DROITE</a></p>';
	
	/* Texte à coté des persos */
	document.getElementById('text_gauche').innerHTML = '<p>sur les <a class="ps">' + exprimes_gauche.length + '</a> bureaux de vote</p>';
	document.getElementById('text_droite').innerHTML = '<p>sur les <a class="ump">' + exprimes_droit.length + '</a> bureaux de vote</p>';
	
	/* Poucentage des persos */
	/* Pour la gauche */
	var pcs4_gauche = 0, pcs5_gauche = 0, pcs6_gauche = 0;
	for (i=0; i<exprimes_gauche.length; i++) {
		pcs4_gauche += cs4_gauche[i]*exprimes_gauche[i];
		pcs5_gauche += cs5_gauche[i]*exprimes_gauche[i];
		pcs6_gauche += cs6_gauche[i]*exprimes_gauche[i];
	}
	pcs4_gauche = Math.round((pcs4_gauche/s_exprimes_gauche)*1000)/10;
	pcs5_gauche = Math.round((pcs5_gauche/s_exprimes_gauche)*1000)/10;
	pcs6_gauche = Math.round((pcs6_gauche/s_exprimes_gauche)*1000)/10;
	
	
	document.getElementById('perso_cs4_g').innerHTML += '<p id="text_cs4_g"><a class="ps">' + pcs4_gauche + '%</a> ont une profession intermédiaire</p>';
	document.getElementById('img_cs4_g').src = 'img/dataviz2/vote_gauche/intermediaire/p.png';
	document.getElementById('text_cs4_g').style.fontFamily = "bebas_neueregular";
	document.getElementById('text_cs4_g').style.fontSize = "30px";
	
	document.getElementById('perso_cs5_g').innerHTML += '<p id="text_cs5_g"><a class="ps">' + pcs5_gauche + '%</a> sont des employés</p>';
	document.getElementById('img_cs5_g').src = 'img/dataviz2/vote_gauche/employe/e.png';
	document.getElementById('text_cs5_g').style.fontFamily = "bebas_neueregular";
	document.getElementById('text_cs5_g').style.fontSize = "30px";
	
	document.getElementById('perso_cs6_g').innerHTML += '<p id="text_cs6_g"><a class="ps">' + pcs6_gauche + '%</a> sont des ouvriers</p>';
	document.getElementById('img_cs6_g').src = 'img/dataviz2/vote_gauche/ouvrier/o.png';
	document.getElementById('text_cs6_g').style.fontFamily = "bebas_neueregular";
	document.getElementById('text_cs6_g').style.fontSize = "30px";
	
	/* Pour la droite */
	var pcs3_droite = 0, pcs4_droite = 0, pcs5_droite = 0;
	for (i=0; i<exprimes_droit.length; i++) {
		pcs3_droite += cs3_droite[i]*exprimes_droit[i];
		pcs4_droite += cs4_droite[i]*exprimes_droit[i];
		pcs5_droite += cs5_droite[i]*exprimes_droit[i];
	}
	pcs3_droite = Math.round((pcs3_droite/s_exprimes_droit)*1000)/10;
	pcs4_droite = Math.round((pcs4_droite/s_exprimes_droit)*1000)/10;
	pcs5_droite = Math.round((pcs5_droite/s_exprimes_droit)*1000)/10;
	
	
	document.getElementById('perso_cs3_d').innerHTML += '<p id="text_cs3_d"><a class="ump">' + pcs3_droite + '%</a> sont des cadres</p>';
	document.getElementById('img_cs3_d').src = 'img/dataviz2/vote_droite/cadre/c.png';
	document.getElementById('text_cs3_d').style.fontFamily = "bebas_neueregular";
	document.getElementById('text_cs3_d').style.fontSize = "30px";
	
	document.getElementById('perso_cs4_d').innerHTML += '<p id="text_cs4_d"><a class="ump">' + pcs4_droite + '%</a> ont une profession intermdédiaires</p>';
	document.getElementById('img_cs4_d').src = 'img/dataviz2/vote_droite/intermediaire/p.png';
	document.getElementById('text_cs4_d').style.fontFamily = "bebas_neueregular";
	document.getElementById('text_cs4_d').style.fontSize = "30px";
	
	document.getElementById('perso_cs5_d').innerHTML += '<p id="text_cs5_d"><a class="ump">' + pcs5_droite + '%</a> sont des employés</p>';
	document.getElementById('img_cs5_d').src = 'img/dataviz2/vote_droite/employe/e.png';
	document.getElementById('text_cs5_d').style.fontFamily = "bebas_neueregular";
	document.getElementById('text_cs5_d').style.fontSize = "30px";
	
	/* dataviz1 */
		Morris.Donut({
	  element: 'nord',
	  data: [
		{label: "ANGERS NORD \n BUREAU 701", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "701",colour_bureau)*1000)/10},
		{label: "ANGERS NORD \n BUREAU 702", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "702",colour_bureau)*1000)/10},
		{label: "ANGERS NORD \n BUREAU 703", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "703",colour_bureau)*1000)/10},
		{label: "ANGERS NORD \n BUREAU 704", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "704",colour_bureau)*1000)/10}
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
		{label: "ANGERS NORD OUEST \n BUREAU 804", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "804",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 801", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "801",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 802", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "802",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 803", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "803",colour_bureau)*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 805", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "805",colour_bureau)*1000)/10}
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
		{label: "ANGERS OUEST \n BUREAU 601", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "601",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 602", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "602",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 603", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "603",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 604", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "604",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 605", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "605",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 606", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "606",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 607", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "607",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 608", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "608",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 609", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "609",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 610", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "610",colour_bureau)*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 611", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "611",colour_bureau)*1000)/10}
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
		{label: "ANGERS CENTRE VILLE \n BUREAU 313", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "313",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 317", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "317",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 301", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "301",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 302", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "302",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 303", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "303",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 304", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "304",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 305", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "305",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 306", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "306",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 307", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "307",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 308", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "308",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 309", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "309",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 310", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "310",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 311", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "311",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 312", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "312",colour_bureau)*1000)/10},	
		{label: "ANGERS CENTRE VILLE \n BUREAU 314", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "314",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 315", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "315",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 316", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "316",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 318", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "318",colour_bureau)*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 319", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "319",colour_bureau)*1000)/10}
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
		{label: "ANGERS NORD EST \n BUREAU 101", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "101",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 102", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "102",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 103", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "103",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 104", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "104",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 105", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "105",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 106", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "106",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 107", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "107",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 108", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "108",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 109", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "109",colour_bureau)*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 110", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "110",colour_bureau)*1000)/10}
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
		{label: "ANGERS EST \n BUREAU 201", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "201",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 204", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "204",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 202", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "202",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 203", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "203",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 205", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "205",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 206", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "206",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 207", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "207",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 208", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "208",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 209", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "209",colour_bureau)*1000)/10},
		{label: "ANGERS EST \n BUREAU 210", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "210",colour_bureau)*1000)/10}
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
		{label: "TRELAZE \n BUREAU 401", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "401",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 402", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "402",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 403", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "403",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 404", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "404",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 405", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "405",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 406", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "406",colour_bureau)*1000)/10},
		{label: "TRELAZE \n BUREAU 407", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "407",colour_bureau)*1000)/10}
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
		{label: "ANGERS SUD \n BUREAU 502", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "502",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 503", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "503",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 506", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "506",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 508", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "508",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 512", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "512",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 513", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "513",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 501", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "501",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 504", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "504",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 505", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "505",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 507", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "507",colour_bureau)*1000)/10},	
		{label: "ANGERS SUD \n BUREAU 509", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "509",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 510", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "510",colour_bureau)*1000)/10},
		{label: "ANGERS SUD \n BUREAU 511", value: Math.round(voix_max_1(bechu_voix, antonini_voix, id_bureau, "511",colour_bureau)*1000)/10}
		
	  ],
		//colors: ["#039","#039","#039","#039","#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		colors:colour_bureau[4],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});
	
	/* 
	Morris.Donut({
	  element: 'nord',
	  data: [
		{label: "ANGERS NORD \n BUREAU 701", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "701")*1000)/10},
		{label: "ANGERS NORD \n BUREAU 702", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "702")*1000)/10},
		{label: "ANGERS NORD \n BUREAU 703", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "703")*1000)/10},
		{label: "ANGERS NORD \n BUREAU 704", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "704")*1000)/10}
	  ],
		colors: ["#039","#db0000","#db0000","#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'nord-ouest',
	  data: [
		{label: "ANGERS NORD OUEST \n BUREAU 804", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "804")*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 801", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "801")*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 802", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "802")*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 803", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "803")*1000)/10},
		{label: "ANGERS NORD OUEST \n BUREAU 805", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "805")*1000)/10}
	  ],
		colors: ["#039","#db0000","#db0000","#db0000","#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});
	Morris.Donut({
	  element: 'ouest',
	  data: [
		{label: "ANGERS OUEST \n BUREAU 601", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "601")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 602", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "602")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 603", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "603")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 604", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "604")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 605", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "605")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 606", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "606")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 607", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "607")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 608", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "608")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 609", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "609")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 610", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "610")*1000)/10},
		{label: "ANGERS OUEST \n BUREAU 611", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "611")*1000)/10}
	  ],
		colors: ["#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'centre-ville',
	  data: [
		{label: "ANGERS CENTRE VILLE \n BUREAU 313", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "313")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 317", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "317")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 301", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "301")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 302", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "302")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 303", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "303")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 304", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "304")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 305", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "305")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 306", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "306")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 307", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "307")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 308", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "308")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 309", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "309")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 310", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "310")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 311", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "311")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 312", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "312")*1000)/10},	
		{label: "ANGERS CENTRE VILLE \n BUREAU 314", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "314")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 315", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "315")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 316", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "316")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 318", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "318")*1000)/10},
		{label: "ANGERS CENTRE VILLE \n BUREAU 319", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "319")*1000)/10}
	  ],
		colors: ["#db0000","#db0000","#db0000","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039","#039"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'nord-east',
	  data: [
		{label: "ANGERS NORD EST \n BUREAU 101", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "101")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 102", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "102")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 103", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "103")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 104", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "104")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 105", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "105")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 106", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "106")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 107", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "107")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 108", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "108")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 109", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "109")*1000)/10},
		{label: "ANGERS NORD EST \n BUREAU 110", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "110")*1000)/10}
	  ],
		colors: ["#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'east',
	  data: [
		{label: "ANGERS EST \n BUREAU 201", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "201")*1000)/10},
		{label: "ANGERS EST \n BUREAU 204", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "204")*1000)/10},
		{label: "ANGERS EST \n BUREAU 202", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "202")*1000)/10},
		{label: "ANGERS EST \n BUREAU 203", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "203")*1000)/10},
		{label: "ANGERS EST \n BUREAU 205", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "205")*1000)/10},
		{label: "ANGERS EST \n BUREAU 206", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "206")*1000)/10},
		{label: "ANGERS EST \n BUREAU 207", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "207")*1000)/10},
		{label: "ANGERS EST \n BUREAU 208", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "208")*1000)/10},
		{label: "ANGERS EST \n BUREAU 209", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "209")*1000)/10},
		{label: "ANGERS EST \n BUREAU 210", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "210")*1000)/10}
	  ],
		colors: ["#039","#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'trelaze',
	  data: [
		{label: "TRELAZE \n BUREAU 401", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "401")*1000)/10},
		{label: "TRELAZE \n BUREAU 402", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "402")*1000)/10},
		{label: "TRELAZE \n BUREAU 403", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "403")*1000)/10},
		{label: "TRELAZE \n BUREAU 404", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "404")*1000)/10},
		{label: "TRELAZE \n BUREAU 405", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "405")*1000)/10},
		{label: "TRELAZE \n BUREAU 406", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "406")*1000)/10},
		{label: "TRELAZE \n BUREAU 407", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "407")*1000)/10}
	  ],
		colors: ["#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});

	Morris.Donut({
	  element: 'sud',
	  data: [
		{label: "ANGERS SUD \n BUREAU 502", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "502")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 503", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "503")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 506", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "506")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 508", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "508")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 512", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "512")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 513", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "513")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 501", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "501")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 504", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "504")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 505", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "505")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 507", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "507")*1000)/10},	
		{label: "ANGERS SUD \n BUREAU 509", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "509")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 510", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "510")*1000)/10},
		{label: "ANGERS SUD \n BUREAU 511", value: Math.round(voix_max(bechu_voix, antonini_voix, id_bureau, "511")*1000)/10}
		
	  ],
		colors: ["#039","#039","#039","#039","#039","#039","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000","#db0000"],
		formatter: function (x) { return "\n"+ x + "%"}
	}).on('click', function(i, row){
	  console.log(i, row);
	});
 */

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

/* renvoie la valeur max des voix entre les candidats pour un bureau donné */
function voix_max(tab_voix_1, tab_voix_2, tab_bureau, id_bureau) {
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
	}
	else {
		res = tab_voix_2[indice];
	}
	return res;
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

/* partie son */
function play_dv2(idPlayer, idGOT, control) {
    var player = document.querySelector('#' + idPlayer);
    var got = document.querySelector('#' + idGOT);
	
    if (player.paused) {
        player.play();
		got.pause();
		control.style.backgroundImage = "url(img/dataviz2/play_after.png)";
    } else {
        player.pause();
		got.play();
		control.style.backgroundImage = "url(img/dataviz2/play_before.png)";
    }
}

function play_dv6(idPlayer, idGOT, control) {
    var player = document.querySelector('#' + idPlayer);
	var got = document.querySelector('#' + idGOT);
    
    if (player.paused) {
        player.play();
		got.pause();
		control.style.backgroundImage = "url(img/dataviz6/play_after.png)";
    } else {
        player.pause();
		got.play();
		control.style.backgroundImage = "url(img/dataviz6/play_before.png)";
    }
}

