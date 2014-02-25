
$(function () {
	Highcharts.setOptions({
		colors: ['#3f8eca', '#492249']
	});
    $('#cam4').highcharts({
		credits: {
					enabled: false
				},
        chart: {
            plotBackgroundColor: null,
			backgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			width: 360,
			height:240
			
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
		exporting: {
					enabled: false
		},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#ffffff',
                    connectorColor: '#000000',
                    format: '{point.percentage:.1f} %',
					distance:-40
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Nombre de cas',
            data: [
                ['France',14949],
                ['Reste de l\'UE',17295]
                
            ]
        }]

    });
});

$(function () {
    $('#cam3').highcharts({
		credits: {
					enabled: false
				},
        chart: {
            plotBackgroundColor: null,
			backgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			width: 300,
			height:200
        },
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
		exporting: {
					enabled: false
		},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#ffffff',
                    connectorColor: '#000000',
                    format: '{point.percentage:.1f} %',
					distance:-40
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Nombre de cas',
            data: [
                ['France',5048],
                ['Reste de l\'UE',24856]
                
            ]
        }]
    });
});

$(function () {
    $('#cam2').highcharts({
		credits: {
					enabled: false
				},
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
			backgroundColor: null,
            plotShadow: false,
			width: 300,
			height:200
		},
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
		exporting: {
					enabled: false
		},
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#ffffff',
                    connectorColor: '#000000',
                    format: '{point.percentage:.1f} %',
					distance:-40
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Nombre de cas',
            data: [
                ['France',1541],
                ['Reste de l\'UE',4836]
                
            ]
        }]
    });
});

$(function () {
    $('#cam1').highcharts({
		credits: {
					enabled: false
				},
        chart: {
            plotBackgroundColor: null,
			backgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
			width: 300,
			height:200
        },
		exporting: {
					enabled: false
		},
        title: {
            text: ''
        },
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#ffffff',
                    connectorColor: '#000000',
                    format: '{point.percentage:.1f} %',
					distance:-30
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Nombre de cas',
            data: [
                ['France',604],
                ['Reste de l\'UE',5107]
                
            ]
        }]
    });
});