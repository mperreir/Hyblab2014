//chart de base slide 3
$(function () {	
	$('.reglette_Bretagne').highcharts({
		title: {
			text: 'Évolution de l\'emploi',
			x: -20 //center
		},
		subtitle: {
			text: 'Source : URSSAF',
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
});