function displayPieChart(jsonc) {
    var jscontent = JSON.parse(jsonc);
    var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Quel média a le plus innové?',
                style:{ 
                        fontWeight:'bold',
                        fontSize: '50px',
                        color: '#FFFFFF'
                        
                    }
        },
        /*subtitle: {
            text: 'En 8 ans, les médias locaux se sont lancés à la conquête du numérique.\n\
                    Succès ou échec, le nombre de brèves témoigne de cette évolution et met \n\
                    en évidence la réactivité de tous les différents médias face à cette révolution. '
        },*/
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style:{ 
                        fontWeight:'bold'
                    }
                },
                //showInLegend: true
            }
        },
        credits: {
            enabled: false
        },
        series: [{
                type: 'pie',
                name: 'Innovation',
                data: [
                    ['TV', 0.0],
                    ['Papier', 0.0],
                    ['Radio', 0.0],
                    ['Web', 0.0]
                ]
            }]

    };

    var index = {
        cardinal_total: 0,
        supports: [
            ['TV', 0],
            ['Papier', 0],
            ['Radio', 0],
            ['Web', 0]
        ]
    };

    $.each(jscontent.Donnees, function(id, tuple) {
        var eventSupport = tuple["Support de l'événement"];
        var eventType = tuple["Type d'événement"];

        if (eventSupport === "TV" || eventSupport === "Papier"
                || eventSupport === "Radio" || eventSupport === "Web") {
            if (eventType === "Création" || eventType === "Développement") {
                index.cardinal_total++;

                var index_support;

                switch (eventSupport) {
                    case "TV":
                        index_support = 0;
                        break;
                    case "Papier":
                        index_support = 1;
                        break;
                    case "Radio":
                        index_support = 2;
                        break;
                    case "Web":
                        index_support = 3;
                        break;
                    default:
                }
                index.supports[index_support][1]++;
            }
        }
    });

    options.series[0]["data"][0][1] = index.supports[0][1];
    options.series[0]["data"][1][1] = index.supports[1][1];
    options.series[0]["data"][2][1] = index.supports[2][1];
    options.series[0]["data"][3][1] = index.supports[3][1];

    $('#chart2').highcharts(options);
}
