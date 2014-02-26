/*jslint browser: true*/
/*global $, jQuery, jvm, alert, moduleDegrade, moduleCSV, coor, data, Highcharts, console, Array, creerClassement, getElementsByClass*/

var creerGraphique, deleteCourbe, addCourbe;

creerGraphique = function (taux) {
    'use strict';
    var options, stats, t, chart, numDiv, annees, backgroundColor, textColor, lineColors, min, max, textTaux;
    switch (taux) {
    case 1:
        numDiv = 0;
        annees = [2011, 2012];
        backgroundColor = "#f5f6f6";
        textColor = "black";
        lineColors = ["#b4a59d", "#cf1315", "#000000"];
        min = 23.37;
        max = 36.58;
        textTaux = "Évolution du taux de la CFE";
        break;
    case 2:
        numDiv = 1;
        annees = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];
        backgroundColor = "#b4a59d";
        textColor = "#f5f6f6";
        lineColors = ["#cf1315", "#f5f6f6", "#000000"];
        min = 8.28;
        max = 28.34;
        textTaux = "Évolution du taux de la taxe professionnelle";
        break;
    case 3:
        numDiv = 2;
        annees = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
        backgroundColor = "#f5f6f6";
        textColor = "black";
        lineColors = ["#b4a59d", "#cf1315", "#000000"];
        max = 36.73;
        min = 7.11;
        textTaux = "Évolution du taux de la taxe foncière";
        break;
    }
            
    stats = getElementsByClass("statistics")[numDiv];
    options = {
        colors: lineColors,
		title: {
            text: textTaux,
            x: -20,
            style: {
                color: textColor
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
		chart: {
            defaultSeriesType: 'spline',
			renderTo: stats,
            backgroundColor: backgroundColor,
            height: 200
        },
        xAxis: {
            categories: annees,
            labels: {
                rotation: 45,
                style: {
                    color: textColor
                }
            }
        },
        yAxis: {
            title: {
                text: 'Taux',
                style: {
                    color: textColor
                }
            },
            max: max,
			min: min,
            tickInterval: 10,
            labels: {
                style: {
                    color: textColor
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
            itemStyle: {
                color: textColor
            }
        },
        series: [{
            name: 'Moyenne',
            data: []
        }]
	};
    
    
    t = data[data.length - 1];
    
    switch (taux) {
    case 1:
        options.series[0].data.push(parseFloat(t.cfe2011.toFixed(2)));
        options.series[0].data.push(parseFloat(t.cfe2012.toFixed(2)));
        break;
    case 2:
        options.series[0].data.push(parseFloat(t.pro2002.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2003.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2004.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2005.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2006.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2007.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2008.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2009.toFixed(2)));
        options.series[0].data.push(parseFloat(t.pro2010.toFixed(2)));
        break;
    case 3:
        console.log(t.foncier2003.toFixed(2));
        options.series[0].data.push(parseFloat(t.foncier2002.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2003.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2004.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2005.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2006.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2007.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2008.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2009.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2010.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2011.toFixed(2)));
        options.series[0].data.push(parseFloat(t.foncier2012.toFixed(2)));
        break;
    }
    
    chart = new Highcharts.Chart(options);
};

deleteCourbe = function (ville, taux) {
    'use strict';
    var chart, series, i;
    switch (taux) {
    case 1:
        chart = $('#statistics0').highcharts();
        break;
    case 2:
        chart = $('#statistics1').highcharts();
        break;
    case 3:
        chart = $('#statistics2').highcharts();
        break;
    }
    
    series = chart.series;
    for (i = 0; i < series.length; i = i + 1) {
        if (series[i].name === ville) {
            series[i].remove(false);
        }
    }
    
};

addCourbe = function (ville, taux) {
    'use strict';
	var stats, options, t, i, chart, datas;
	
	for (i = 0; i < data.length; i = i + 1) {
		if (data[i].ville === ville) {
			t = data[i];
		}
	}
	
    switch (taux) {
    case 1:
        chart = $('#statistics0').highcharts();
        datas = [t.cfe2010,
                      t.cfe2011,
                      t.cfe2012];
        break;
    case 2:
        chart = $('#statistics1').highcharts();
        datas = [t.pro2002,
                 t.pro2003,
                      t.pro2004,
                      t.pro2005,
                      t.pro2006,
                      t.pro2007,
                      t.pro2008,
                      t.pro2009,
                      t.pro2010];
        break;
    case 3:
        chart = $('#statistics2').highcharts();
        datas = [t.foncier2002,
                 t.foncier2003,
                      t.foncier2004,
                      t.foncier2005,
                      t.foncier2006,
                      t.foncier2007,
                      t.foncier2008,
                      t.foncier2009,
                      t.foncier2010,
                      t.foncier2011,
                      t.foncier2012];
        break;
    }
    
    chart.addSeries({
        data: datas,
        name : ville
    });
};