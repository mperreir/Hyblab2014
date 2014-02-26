$(function () {

    Highcharts.setOptions({
    lang: {
        drillUpText: '<-- Dézoomer'
    }
});

    Highcharts.data({
        csv: document.getElementById('tsv').innerHTML,
        itemDelimiter: '\t',
        parsed: function (columns) {

            var groupes = {},
            groupesData = [],
            ages = {},
            drilldownSeries = [];

// Parse percentage strings
columns[1] = $.map(columns[1], function (value) {
    if (value.indexOf('%') === value.length - 1) {
        value = parseFloat(value);
    }
    return value;
});

$.each(columns[0], function (i, name) {
    var brand,
    age;

    if (i > 0) {

// Remove special edition notes
// name = name.split(' -')[0];

// Split into brand and age
age = name.match(/([0-9]+[\.0-9x]*)+ à +([0-9]+[\.0-9x]*)/);
if (age) {
    age = age[0];
}
brand = name.replace(age, '');

// Create the main data
if (!groupes[brand]) {
    groupes[brand] = columns[1][i];
} else {
    groupes[brand] += columns[1][i];
}

// Create the age data
if (age !== null) {
    if (!ages[brand]) {
        ages[brand] = [];
    }
    ages[brand].push([age + " ans", columns[1][i]]);
}
}

});

$.each(groupes, function (name, y) {
    groupesData.push({ 
        name: name, 
        y: (Math.round(y/6)),
        drilldown: ages[name] ? name : null
    });
});
$.each(ages, function (key, value) {
    drilldownSeries.push({
        name: key,
        id: key,
        data: value
    });
});

// Create the chart
$('#container').highcharts({
    colors:[
        'rgb(164,218,208)',
        'rgb(72,155,139)', 
        'rgb(245,89,83)', 
        'rgb(216,48,61)',  
        'rgb(40,52,77)', 
        'rgb(14,20,30)'
    ],
    chart: {
        type: 'pie'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Activités'
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}',
            
            },



        },
        
    },

    tooltip: {
        //headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        formatter: function() {
                    var point = this.point,
                        series = this.series,
                        s = ""

                    if (point.drilldown) {
                        s += '<b> '+this.y +'% </b>de la population en moyenne pour: <br/><b>' +point.name+ ' </b><br/>' ;
                        s += '<i>Cliquer pour plus de détails</i>' ;
                    } else {
                        s += '<b> '+this.y +'% </b>des <b>'+point.name+'</b> utilisent les réseaux sociaux pour<br/> <b>'+series.name+'</b>';
                    };
                    chart = $('#container').highcharts();
                    chart.setTitle({text: series.name});

                    return s;
                }
            
    }, 

    series: [{
        name: 'Activités',
        colorByPoint: true,
        data: groupesData,
        size :'80%',
        innerSize: '40%'
    }],
    drilldown: {
        series: drilldownSeries,
        drillUpButton: {
                relativeTo: 'spacingBox',
                position: {
                    y: 0,
                    x: 0
                },
                theme: {
                    fill: 'white',
                    'stroke-width': 1,
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#bada55'
                        },
                        select: {
                            stroke: '#039',
                            fill: '#bada55'
                        }
                    }
                }
            }
    }
})

}
});
});
