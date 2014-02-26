function displayColumnsChart1(jsonc) {
    var jscontent = JSON.parse(jsonc);
    var options = {
        chart: {
            type: 'column',
            zoomType: 'x'
        },
        title: {
            text: ' '
        },
        /*subtitle: {
            text: '<i>e.g. création d\'entreprise, nouveau projet, \n\
                                        société en déclin, développement de nouveaux postes</i>'
        },*/
        xAxis: {
            type: 'category',
            categories: [],
            allowDecimals: false
                    //maxZoom: 3600000, // fourteen days
                    /*title: {
                     text: null
                     }*/
        },
        yAxis: {
            gridLineWidth:0,
            title: {
                text: 'Nombre d\'évènements médiatisé'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
                name: 'Création',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Développement',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Projet',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Déclin',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }, {
                name: 'Abandon',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }]
        
    };

    var index = [];
    $.each(jscontent.Donnees, function(id, tuple) {
        var year = tuple["Année"];
        var eventType = tuple["Type d'événement"];

        if (id === 0) {
            options.xAxis["categories"].push(year);
            index.push(year);

        } else {
            function nexists(element, index, array) {
                return (array[index] !== year);
            }
            if (index.every(nexists)) {
                options.xAxis["categories"].push(year);
                index.push(year);
            }
        }
        var index_serie;
        var index_cat;

        switch (eventType) {
            case "Création":
                index_serie = 0;
                break;
            case "Développement":
                index_serie = 1;
                break;
            case "Projet":
                index_serie = 2;
                break;
            case "Déclin":
                index_serie = 3;
                break;
            case "Abandon":
                index_serie = 4;
                break;
            default:
        }

        switch (year) {
            case options.xAxis["categories"][0]:
                index_cat = 0;
                break;
            case options.xAxis["categories"][1]:
                index_cat = 1;
                break;
            case options.xAxis["categories"][2]:
                index_cat = 2;
                break;
            case options.xAxis["categories"][3]:
                index_cat = 3;
                break;
            case options.xAxis["categories"][4]:
                index_cat = 4;
                break;
            case options.xAxis["categories"][5]:
                index_cat = 5;
                break;
            case options.xAxis["categories"][6]:
                index_cat = 6;
                break;
            case options.xAxis["categories"][7]:
                index_cat = 7;
                break;
            case options.xAxis["categories"][8]:
                index_cat = 8;
                break;
            case options.xAxis["categories"][9]:
                index_cat = 9;
                break;
            default:
        }

        options.series[index_serie]["data"][index_cat]++;
    });

    /*var negativ_cat = 3;
     $.each(options.series[negativ_cat]["data"], function(id, tuple) {
     options.series[negativ_cat]["data"][id] *= -1;
     });
     
     negativ_cat = 4;
     $.each(options.series[negativ_cat]["data"], function(id, tuple) {
     options.series[negativ_cat]["data"][id] *= -1;
     });*/
    Highcharts.theme = {
        colors: ['rgb(138,225,170)', 'rgb(91,167,183)',
            'rgb(254,245,228)', 'rgb(255,162,98)',
            'rgb(236,113,98)'],
        chart: {
            backgroundColor: 'rgb(53, 55, 67)',
            borderRadius: '7px'
        },
        title: {
            style: {
                color: '#ffffff',
                font: '18px Futura, "Trebuchet MS", Arial, sans-serif'
            }
        },
        yAxis: {
            title: {
                style: {
                    color: '#ffffff',
                    font: '14px Futura, "Trebuchet MS", Arial, sans-serif'
                }
            }
        },
        subtitle: {
            style: {
                color: '#ffffff',
                font: '14px Futura, "Trebuchet MS", Arial, sans-serif'
            }
        },
        legend: {
            align: 'right',
            //floating: true,
            layout: 'vertical',
            itemStyle: {
                font: '11.5px Futura, "Trebuchet MS", Arial, sans-serif',
                color: '#ffffff'
            },
            itemHoverStyle: {
                color: '#000000'
            }
        }
    };
    Highcharts.setOptions(Highcharts.theme);
    $('#chart1').highcharts(options);
}