function displayPieChart2(jsonc) {
    var jscontent = JSON.parse(jsonc);
    var options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Vers quels supports se tournent-ils ?',
                style:{ 
                        fontWeight:'bold',
                        fontSize: '50px'
                    }
            
        },
        /*subtitle: {
            text: 'Vers quels supports se tournent-ils ?'

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
            }
        },
        credits: {
            enabled: false
        },
        series: [{
                type: 'pie',
                name: 'Innovation',
                data: [
                    ['Multimédia', 0.0],
                    ['Appli', 0.0],
                    ['Web', 0.0],
                    ['Pub', 0.0]
                ]
            }]

    };

    var index = {
        cardinal_total: 0,
        supports: [
            ['Multimédia', 0.0],
            ['Appli', 0.0],
            ['Web', 0.0],
            ['Pub', 0.0]
        ]
    };

    $.each(jscontent.Donnees, function(id, tuple) {
        var eventSupport = tuple["Support de l'événement"];
        var eventType = tuple["Type d'événement"];

        if (eventSupport === "Multimédia" || eventSupport === "Appli"
                || eventSupport === "Pub" || eventSupport === "Web") {
            if (eventType === "Création" || eventType === "Développement") {
                index.cardinal_total++;

                var index_support;

                switch (eventSupport) {
                    case "Multimédia":
                        index_support = 0;
                        break;
                    case "Appli":
                        index_support = 1;
                        break;
                    case "Web":
                        index_support = 2;
                        break;
                    case "Pub":
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

    $('#chart3').highcharts(options);
}