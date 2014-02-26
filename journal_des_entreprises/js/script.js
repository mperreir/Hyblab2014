/*jslint browser: true*/
/*global $, jQuery, jvm, alert, moduleDegrade, moduleCSV, coor, data, Highcharts, console, Array, creerClassement, addCourbe, creerGraphique, deleteCourbe, creerTimeline*/

var map0, addCourbe, creerGraphique, deleteCourbe, getElementsByClass, map1, map2, scrollUp, scrollDown;

$(document).ready(function () {
    'use strict';
    var i, stats, pepe, carte, maire, couleur;
    
    pepe = $.fn.fullpage({
        keyboardScrolling: true,
        slidesColor: ['#ffffff', '#f5f6f6', '#b4a59d', '#f5f6f6', '#b4a59d', '#b4a59d'],
        anchors: ['Introduction', 'CFE', 'Taxe professionnelle', 'Taxe foncière', 'Analyse', 'Credits'],
		menu: '#myMenu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Introduction', 'CFE', 'Taxe professionnelle', 'Taxe foncière', 'Analyse', 'Crédits']
    });
    
	map0 = new jvm.WorldMap({
		map: 'fr_mill_en',
        zoomButtons: false,
        zoomOnScroll: false,
		container: $('#map0'),
		markers: coor,
		onMarkerSelected: function (e, code, isSelected, selectedMarkers) {
            var markers, i;
            if (isSelected) {
                addCourbe(code, 1);
            }
            if (!isSelected) {
                deleteCourbe(code, 1);
            }
		},
        markerStyle : {
            initial: {
                fill: "#cf1315",
                "fill-opacity": 0.6,
                r : 4
            },
            selected: {
                fill: "#cf1315",
                "fill-opacity": 1,
                r : 7
            }
        },
        markersSelectable: true,
        backgroundColor: "#f5f6f6",
        regionStyle: {
            initial: {
                fill: "#b4a59d"
            }
        },
		onMarkerLabelShow: function (e, label, code) {
            for (i = 0; i < data.length; i = i + 1) {
                if (data[i].ville === code) {
                    maire = data[i].president2012;
                    couleur = data[i].couleur2012;
                }
            }
			label.html(code + "<br>Président de l'agglomération : " + maire);
		}
	});
    
    map1 = new jvm.WorldMap({
		map: 'fr_mill_en',
        zoomButtons: false,
        zoomOnScroll: false,
		container: $('#map1'),
		markers: coor,
		onMarkerSelected: function (e, code, isSelected, selectedMarkers) {
            var markers, i;
            if (isSelected) {
                addCourbe(code, 2);
            }
            if (!isSelected) {
                deleteCourbe(code, 2);
            }
		},
        markerStyle : {
            initial: {
                fill: "#cf1315",
                "fill-opacity": 0.6,
                r : 4
            },
            selected: {
                fill: "#cf1315",
                "fill-opacity": 1,
                r : 7
            }
        },
        markersSelectable: true,
        backgroundColor: "#b4a59d",
        regionStyle: {
            initial: {
                fill: "#f5f6f6"
            }
        },
		onMarkerLabelShow: function (e, label, code) {
			for (i = 0; i < data.length; i = i + 1) {
                if (data[i].ville === code) {
                    maire = data[i].maire2012;
                    couleur = data[i].couleur2012;
                }
            }
			label.html(code + "<br>" + maire + "<br>" + couleur);
		}
	});
    
    map2 = new jvm.WorldMap({
		map: 'fr_mill_en',
        zoomButtons: false,
        zoomOnScroll: false,
		container: $('#map2'),
		markers: coor,
        markerStyle : {
            initial: {
                fill: "#cf1315",
                "fill-opacity": 0.6,
                r : 4
            },
            selected: {
                fill: "#cf1315",
                "fill-opacity": 1,
                r : 7
            }
        },
		onMarkerSelected: function (e, code, isSelected, selectedMarkers) {
            var markers, i;
            if (isSelected) {
                addCourbe(code, 3);
            }
            if (!isSelected) {
                deleteCourbe(code, 3);
            }
		},
        markersSelectable: true,
        backgroundColor: "#f5f6f6",
        regionStyle: {
            initial: {
                fill: "#b4a59d"
            }
        },
		onMarkerLabelShow: function (e, label, code) {
			for (i = 0; i < data.length; i = i + 1) {
                if (data[i].ville === code) {
                    maire = data[i].maire2012;
                    couleur = data[i].couleur2012;
                }
            }
			label.html(code + "<br>" + maire + "<br>" + couleur);
		}
	});
    
    creerGraphique(1);
    creerGraphique(2);
    creerGraphique(3);
    creerClassement(3, "2012");
    creerClassement(1, "2012");
    creerClassement(2, "2010");
    creerTimeline(3, ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012"]);
    creerTimeline(2, ["2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"]);
    creerTimeline(1, ["2011", "2012"]);
});

getElementsByClass = function (classe) {
    'use strict';
    var divs, resultats, i;
    divs = document.getElementsByTagName('div');
    resultats = [];
    for (i = 0; i < divs.length; i = i + 1) {
        if (divs[i].className === classe) {
            resultats.push(divs[i]);
        }
    }
    return resultats;
};

scrollUp = function (div) {
    'use strict';
    var table;
    table = getElementsByClass("tableau")[div];
    table.scrollTop -= 50;
};

scrollDown = function (div) {
    'use strict';
    var table;
    table = getElementsByClass("tableau")[div];
    table.scrollTop += 50;
};