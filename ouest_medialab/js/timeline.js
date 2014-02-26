var resizeTimerID = null;
var tl;

function onResize() {
   /* var video = document.getElementsByTagName("video")[0];
    var lbp_video = document.getElementById("leanback-video-parent-id0");
    var div_video = document.getElementById("video");
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.body.clientHeight;
  //  console.log(video.width);
    div_video.style.width = clientWidth * 0.75;
    div_video.style.height = 400 * 0.55;
    lbp_video.style.width = clientWidth * 0.75;
    lbp_video.style.height = 400 * 0.75;
    video.width = clientWidth * 0.75;
    video.height = 400 * 0.55;*/

    if (resizeTimerID === null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}

function displayTimeLine(jsonc) {
    var evtSource = new Timeline.DefaultEventSource();
    var evtSource2 = new Timeline.DefaultEventSource();
    var evtSource3 = new Timeline.DefaultEventSource();
    var evtSource4 = new Timeline.DefaultEventSource();
    var evtSource5 = new Timeline.DefaultEventSource();
    var tl_element = document.getElementById("tl");
    var jsoncontent = JSON.parse(jsonc);
    var url = '.';
    var t = Timeline.ClassicTheme.create();
    var d = Timeline.DateTime.parseGregorianDateTime(new Date(Date.UTC(2004, 0, 1)));
    var currentYear = "2004";

    var onScrollFunction = function onScroll(listener) {
        var gregorianDate = listener._bandInfo.ether._start;
        var year = Expression.exec(gregorianDate)[0];

        if (currentYear !== year && parseInt(year) > 2003) {
            currentYear = year;
            tl_element.style.background = "url('../images/années/" + year + ".png') no-repeat center center";
        }

        var divs_picto = document.getElementsByClassName("pictogrammes");
        var divs_lignes = document.getElementsByClassName("lignes");
        
        for (var i = 0; i < divs_picto.length; i++) {
            if (parseInt(tl.getBand(i)._div.style.height) > 47) {
                var bandHeight = tl.getBand(i)._div.style.height;
                //divs_picto[i].style.height = bandHeight;
                //console.log(divs_lignes[i].style.backgroundPosition);
                //divs_lignes[i].style.backgroundPosition = (divs_lignes[i].style.backgroundPositionY + bandHeight) + "px";
                //divs_picto[i].style.backgroundSize = (parseInt(tl.getBand(i)._div.style.height) + "%";
            }
            //tl.getBand(0)._div.style.backgroundColor = "#aaa";
            //tl.getBand(0)._div.style.backgroundTransparent = "transparent";
        }
    };

    var bandInfos = [
        Timeline.createBandInfo({
            width: 90, //width: "70%",
            intervalUnit: Timeline.DateTime.MONTH,
            intervalPixels: 300,
            eventSource: evtSource,
            date: d,
            theme: t,
            layout: 'original',
            timeZone: 0
        }),
        Timeline.createBandInfo({
            width: 90, //width: "70%",
            intervalUnit: Timeline.DateTime.MONTH,
            intervalPixels: 300,
            eventSource: evtSource2,
            date: d,
            theme: t,
            layout: 'original',
            timeZone: 0
        }),
        Timeline.createBandInfo({
            width: 90, //width: "70%",
            intervalUnit: Timeline.DateTime.MONTH,
            intervalPixels: 300,
            eventSource: evtSource3,
            date: d,
            theme: t,
            layout: 'original',
            timeZone: 0
        }),
        Timeline.createBandInfo({
            width: 90, //width: "70%",
            intervalUnit: Timeline.DateTime.MONTH,
            intervalPixels: 300,
            eventSource: evtSource4,
            date: d,
            theme: t,
            layout: 'original',
            timeZone: 0
        })/*,
        Timeline.createBandInfo({
            width: 150, //width: "70%",
            intervalUnit: Timeline.DateTime.YEAR,
            intervalPixels: 160,
            eventSource: evtSource5,
            overview: true,
            date: d,
            theme: t,
            layout: 'original',
            timeZone: 0
        })*/
    ];

    bandInfos[1].syncWith = 0;
    bandInfos[1].highlight = true;
    bandInfos[2].syncWith = 0;
    bandInfos[2].highlight = true;
    bandInfos[3].syncWith = 0;
    bandInfos[3].highlight = true;
    //bandInfos[4].syncWith = 0;
    //bandInfos[4].highlight = true;

    t.autoWidth = false;
    t.timeline_start = new Date(Date.UTC(2004, 0, 1));
    t.timeline_stop = new Date(Date.UTC(2013, 11, 31));

    var timeline_data = {
        'dateTimeFormat': 'Gregorian',
        'events': []
    };
    var timeline2_data = {
        'dateTimeFormat': 'Gregorian',
        'events': []
    };
    var timeline3_data = {
        'dateTimeFormat': 'Gregorian',
        'events': []
    };
    var timeline4_data = {
        'dateTimeFormat': 'Gregorian',
        'events': []
    };
    var timeline5_data = {
        'dateTimeFormat': 'Gregorian',
        'events': []
    };

    $.each(jsoncontent.Donnees, function(id, tuple) {
        var year = tuple["Année"];
        var month = tuple["NoMois"];
        var title = tuple["Titre de l'info"];
        var corpus = tuple["Corps de l'info"];
        var support = tuple["Support de l'événement"];
        var eventType = tuple["Type d'événement"];
        var randomnumber = Math.floor(Math.random() * 30) + 1; //whatever the day for displaying
        var event = {
            'start': Timeline.DateTime.parseGregorianDateTime(new Date(Date.UTC(parseInt(year), parseInt(month) - 1, randomnumber))),
            'title': title,
            'description': corpus
        };

        switch (eventType) {
            case "Développement":
                event.icon = '../images/points/bleu.png';
                break;
            case "Création":
                event.icon = '../images/points/vert.png';
                break;
            case "Projet":
                event.icon = '../images/points/blanc.png';
                break;
            case "Déclin":
                event.icon = '../images/points/orange.png';
                break;
            case "Abandon":
                event.icon = '../images/points/rose.png';
                break;
            default:
        }

        switch (support) {
            case "Papier":
                timeline_data.events.push(event);
                timeline5_data.events.push(event);
                break;
            case "TV":
                timeline2_data.events.push(event);
                timeline5_data.events.push(event);
                break;
            case "Web":
                timeline3_data.events.push(event);
                timeline5_data.events.push(event);
                break;
            case "Radio":
                timeline4_data.events.push(event);
                timeline5_data.events.push(event);
                break;
            default:
        }
    });

    tl = Timeline.create(tl_element, bandInfos, Timeline.HORIZONTAL);

    evtSource.loadJSON(timeline_data, url);
    evtSource2.loadJSON(timeline2_data, url);
    evtSource3.loadJSON(timeline3_data, url);
    evtSource4.loadJSON(timeline4_data, url);
   // evtSource5.loadJSON(timeline5_data, url);
    tl.layout();
    Expression = /\d{4}/;
    tl.getBand(0).addOnScrollListener(onScrollFunction);
    tl.getBand(1).addOnScrollListener(onScrollFunction);
    tl.getBand(2).addOnScrollListener(onScrollFunction);
    tl.getBand(3).addOnScrollListener(onScrollFunction);
   // tl.getBand(4).addOnScrollListener(onScrollFunction);

}