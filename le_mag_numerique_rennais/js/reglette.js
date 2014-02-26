/*******	Survol d'un bouton de la reglette	*******/
function swapOnReglette(img){
	img.src = img.src.replace("OFF","ON");
	return false;
}

function swapOffReglette(img){
	if ( img.alt == 'not selected' )
		img.src = img.src.replace("ON","OFF");

	return false;
}



/*******	Clic sur un bouton de la reglette	******/
function clickReglette(img){
	var t1; var t2; var t3; var t4;

	img.src = img.src.replace("OFF","ON");
	img.alt = "selected";
	document.getElementById("chart").className = img.id;
	
	//console.log(document.getElementById("chart").className);
	
	switch ( img.id ){
		case "reglette_Bretagne" :
			//enregistrement des id des boutons à mettre en OFF
			t1 = document.getElementById("reglette_22");
			t2 = document.getElementById("reglette_29");
			t3 = document.getElementById("reglette_35");
			t4 = document.getElementById("reglette_56");
			
			//changement des pourcentages
			document.getElementById("pourcentageAgro").p = dptBretagne[0]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageNum").p = dptBretagne[4]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageAuto").p = dptBretagne[2]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			
			//changement du graphique
			$('.reglette_Bretagne').highcharts({
				title: {
					text: 'Évolution de l\'emploi',
					x: -20 //center
				},
				subtitle: {
					text: 'Source : MEITO',
					x: -20
				},
				xAxis: {
					title: {
						text: 'Années'
					},
					categories: ['2008', '2009', '2010', '2011', '2012']
				},
				yAxis: {
					title: {
						text: 'Effectifs'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#2d3a45'
					}]
				},
				tooltip: {
					valueSuffix: ' employés'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Agroalimentaire',
					data: [parseInt(dptBretagne[0]["eff2008"]),parseInt(dptBretagne[0]["eff2009"]),parseInt(dptBretagne[0]["eff2010"]),parseInt(dptBretagne[0]["eff2011"]),parseInt(dptBretagne[0]["eff2012"])],
					color: '#6C85A3'
				}, {
					name: 'Numérique',
					data: [parseInt(dptBretagne[4]["eff2008"]),parseInt(dptBretagne[4]["eff2009"]),parseInt(dptBretagne[4]["eff2010"]),parseInt(dptBretagne[4]["eff2011"]),parseInt(dptBretagne[4]["eff2012"])],
					color: '#2C3944'
				}, {
					name: 'Automobile',
					data: [parseInt(dptBretagne[2]["eff2008"]),parseInt(dptBretagne[2]["eff2009"]),parseInt(dptBretagne[2]["eff2010"]),parseInt(dptBretagne[2]["eff2011"]),parseInt(dptBretagne[2]["eff2012"])],
					color: '#EC6B6A'
				}]
			});
			break;

		case "reglette_22" :
			//enregistrement des id des boutons à mettre en OFF
			t1 = document.getElementById("reglette_Bretagne");
			t2 = document.getElementById("reglette_29");
			t3 = document.getElementById("reglette_35");
			t4 = document.getElementById("reglette_56");
			
			//changement des pourcentages
			document.getElementById("pourcentageAgro").innerHTML = dpt22[0]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageNum").innerHTML = dpt22[4]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageAuto").innerHTML = dpt22[2]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			
			//changement du graphique
			$('.reglette_22').highcharts({
				title: {
					text: 'Évolution de l\'emploi',
					x: -20 //center
				},
				subtitle: {
					text: 'Source : MEITO',
					x: -20
				},
				xAxis: {
					title: {
						text: 'Années'
					},
					categories: ['2008', '2009', '2010', '2011', '2012']
				},
				yAxis: {
					title: {
						text: 'Effectifs'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#2d3a45'
					}]
				},
				tooltip: {
					valueSuffix: ' employés'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Agroalimentaire',
					data: [parseInt(dpt22[0]["eff2008"]),parseInt(dpt22[0]["eff2009"]),parseInt(dpt22[0]["eff2010"]),parseInt(dpt22[0]["eff2011"]),parseInt(dpt22[0]["eff2012"])],
					color: '#6C85A3'
				}, {
					name: 'Numérique',
					data: [parseInt(dpt22[4]["eff2008"]),parseInt(dpt22[4]["eff2009"]),parseInt(dpt22[4]["eff2010"]),parseInt(dpt22[4]["eff2011"]),parseInt(dpt22[4]["eff2012"])],
					color: '#2C3944'
				}, {
					name: 'Automobile',
					data: [parseInt(dpt22[2]["eff2008"]),parseInt(dpt22[2]["eff2009"]),parseInt(dpt22[2]["eff2010"]),parseInt(dpt22[2]["eff2011"]),parseInt(dpt22[2]["eff2012"])],
					color: '#EC6B6A'
				}]
			});
			break;

		case "reglette_29" :
			t1 = document.getElementById("reglette_22");
			t2 = document.getElementById("reglette_Bretagne");
			t3 = document.getElementById("reglette_35");
			t4 = document.getElementById("reglette_56");
			
			document.getElementById("pourcentageAgro").innerHTML = dpt29[0]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageNum").innerHTML = dpt29[4]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageAuto").innerHTML = dpt29[2]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			
			//changement du graphique
			$('.reglette_29').highcharts({
				title: {
					text: 'Évolution de l\'emploi',
					x: -20 //center
				},
				subtitle: {
					text: 'Source : MEITO',
					x: -20
				},
				xAxis: {
					title: {
						text: 'Années'
					},
					categories: ['2008', '2009', '2010', '2011', '2012']
				},
				yAxis: {
					title: {
						text: 'Effectifs'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#2d3a45'
					}]
				},
				tooltip: {
					valueSuffix: ' employés'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Agroalimentaire',
					data: [parseInt(dpt29[0]["eff2008"]),parseInt(dpt29[0]["eff2009"]),parseInt(dpt29[0]["eff2010"]),parseInt(dpt29[0]["eff2011"]),parseInt(dpt29[0]["eff2012"])],
					color: '#6C85A3'
				}, {
					name: 'Numérique',
					data: [parseInt(dpt29[4]["eff2008"]),parseInt(dpt29[4]["eff2009"]),parseInt(dpt29[4]["eff2010"]),parseInt(dpt29[4]["eff2011"]),parseInt(dpt29[4]["eff2012"])],
					color: '#2C3944'
				}, {
					name: 'Automobile',
					data: [parseInt(dpt29[2]["eff2008"]),parseInt(dpt29[2]["eff2009"]),parseInt(dpt29[2]["eff2010"]),parseInt(dpt29[2]["eff2011"]),parseInt(dpt29[2]["eff2012"])],
					color: '#EC6B6A'
				}]
			});
			break;
			
		case "reglette_35" :
			t1 = document.getElementById("reglette_22");
			t2 = document.getElementById("reglette_29");
			t3 = document.getElementById("reglette_Bretagne");
			t4 = document.getElementById("reglette_56");
			
			document.getElementById("pourcentageAgro").innerHTML = dpt35[0]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageNum").innerHTML = dpt35[4]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageAuto").innerHTML = dpt35[2]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			
			//changement du graphique
			$('.reglette_35').highcharts({
				title: {
					text: 'Évolution de l\'emploi',
					x: -20 //center
				},
				subtitle: {
					text: 'Source : MEITO',
					x: -20
				},
				xAxis: {
					title: {
						text: 'Années'
					},
					categories: ['2008', '2009', '2010', '2011', '2012']
				},
				yAxis: {
					title: {
						text: 'Effectifs'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#2d3a45'
					}]
				},
				tooltip: {
					valueSuffix: ' employés'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Agroalimentaire',
					data: [parseInt(dpt35[0]["eff2008"]),parseInt(dpt35[0]["eff2009"]),parseInt(dpt35[0]["eff2010"]),parseInt(dpt35[0]["eff2011"]),parseInt(dpt35[0]["eff2012"])],
					color: '#6C85A3'
				}, {
					name: 'Numérique',
					data: [parseInt(dpt35[4]["eff2008"]),parseInt(dpt35[4]["eff2009"]),parseInt(dpt35[4]["eff2010"]),parseInt(dpt35[4]["eff2011"]),parseInt(dpt35[4]["eff2012"])],
					color: '#2C3944'
				}, {
					name: 'Automobile',
					data: [parseInt(dpt35[2]["eff2008"]),parseInt(dpt35[2]["eff2009"]),parseInt(dpt35[2]["eff2010"]),parseInt(dpt35[2]["eff2011"]),parseInt(dpt35[2]["eff2012"])],
					color: '#EC6B6A'
				}]
			});
			break;
			
		case "reglette_56" :
			t1 = document.getElementById("reglette_22");
			t2 = document.getElementById("reglette_29");
			t3 = document.getElementById("reglette_35");
			t4 = document.getElementById("reglette_Bretagne");
			
			document.getElementById("pourcentageAgro").innerHTML = dpt56[0]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageNum").innerHTML = dpt56[4]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			document.getElementById("pourcentageAuto").innerHTML = dpt56[2]["Taux d'acc 2008-2012"]+"<br/> depuis 2008";
			
			//changement du graphique
			$('.reglette_56').highcharts({
				title: {
					text: 'Évolution de l\'emploi',
					x: -20 //center
				},
				subtitle: {
					text: 'Source : MEITO',
					x: -20
				},
				xAxis: {
					title: {
						text: 'Années'
					},
					categories: ['2008', '2009', '2010', '2011', '2012']
				},
				yAxis: {
					title: {
						text: 'Effectifs'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#2d3a45'
					}]
				},
				tooltip: {
					valueSuffix: ' employés'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Agroalimentaire',
					data: [parseInt(dpt56[0]["eff2008"]),parseInt(dpt56[0]["eff2009"]),parseInt(dpt56[0]["eff2010"]),parseInt(dpt56[0]["eff2011"]),parseInt(dpt56[0]["eff2012"])],
					color: '#6C85A3'
				}, {
					name: 'Numérique',
					data: [parseInt(dpt56[4]["eff2008"]),parseInt(dpt56[4]["eff2009"]),parseInt(dpt56[4]["eff2010"]),parseInt(dpt56[4]["eff2011"]),parseInt(dpt56[4]["eff2012"])],
					color: '#2C3944'
				}, {
					name: 'Automobile',
					data: [parseInt(dpt56[2]["eff2008"]),parseInt(dpt56[2]["eff2009"]),parseInt(dpt56[2]["eff2010"]),parseInt(dpt56[2]["eff2011"]),parseInt(dpt56[2]["eff2012"])],
					color: '#EC6B6A'
				}]
			});
			break;
			
		default: break;
	}
	
	t1.alt = "not selected";
	t2.alt = "not selected";
	t3.alt = "not selected";
	t4.alt = "not selected";
	swapOffReglette(t1);
	swapOffReglette(t2);
	swapOffReglette(t3);
	swapOffReglette(t4);
}