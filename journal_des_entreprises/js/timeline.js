/*jslint browser: true*/
/*global $, jQuery, jvm, alert, moduleDegrade, moduleCSV, coor, data, Highcharts, console, Array, creerClassement, getElementsByClass, modifierClassement*/

var creerTimeline;

creerTimeline = function (taux, annees) {
    'use strict';
    var timeline, options, chart, i, zero, backgroundColor, lineColor;
    
    zero = [];
    for (i = 0; i < annees.length; i = i + 1) {
        zero.push(0);
    }
    
    switch (taux) {
    case 1:
        backgroundColor = "#f5f6f6";
        lineColor = "#b4a59d";
        timeline = getElementsByClass("timeline")[0];
        break;
    case 2:
        backgroundColor = "#b4a59d";
        lineColor = "#f5f6f6";
        timeline = getElementsByClass("timeline")[1];
        break;
    case 3:
        backgroundColor = "#f5f6f6";
        lineColor = "#b4a59d";
        timeline = getElementsByClass("timeline")[2];
        break;
    }
    
    options = {
        colors: [lineColor],
        chart : {
            defaultSeriesType: 'spline',
			renderTo: timeline,
            backgroundColor: backgroundColor,
            height: 50
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        xAxis: {
            categories: annees,
            lineWidth: 0,
            minorGridLineWidth: 0,
            labels: {
                style: {
                    color: lineColor
                }
            },
            lineColor: 'transparent'
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineColor: backgroundColor,
            minorGridLineWidth: 0,
            labels: {
                enabled: false
            },
            title: {
                text: null
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            modifierClassement(taux, this.category);
                        }
                    }
                },
                marker: {
                    states: {
                        select: {
                            fillColor: '#cf1315'
                        }
                    }
                }
            }
        },
        series: [{
            data: zero
        }]
    };
    
    chart = new Highcharts.Chart(options);
    
    
};