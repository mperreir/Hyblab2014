var stylez = [
  {
	"featureType": "water",
	"elementType": "geometry",
	"stylers": [
	  { "color": "#b0bad3" }
	]
  },{
	"featureType": "road",
	"elementType": "geometry",
	"stylers": [
	  { "color": "#ffffff" }
	]
  },{
	"featureType": "poi.park",
	"elementType": "geometry",
	"stylers": [
	  { "color": "#949597" }
	]
  }
];
var gmap = new OpenLayers.Layer.Google("Google Streets", {type: 'styled'} );
var styledMapOptions = {
	name: "Styled Map"
};
var styledMapType = new google.maps.StyledMapType(stylez, styledMapOptions);


var map = new OpenLayers.Map('map', {controls: []});
//$('#map-legend').hide();

//map.addLayer(osm);
map.addLayer(gmap);
map.addLayers(agenciesLayers);
map.addLayers(pointsLayers);

var proj = new OpenLayers.Projection("EPSG:4326");
var point = new OpenLayers.LonLat(-2, 48);
point.transform(proj, map.getProjectionObject());
var zoomInit = 7;
var zoomTrigger = 10;
map.setCenter(point,zoomInit);


map.addControl(new OpenLayers.Control.PanZoomBar());
map.addControl(new OpenLayers.Control.KeyboardDefaults());
map.addControl(new OpenLayers.Control.Navigation());
//var layerSwitcher = new OpenLayers.Control.LayerSwitcher();
//map.addControl(layerSwitcher);

for(var i=0; i < agenciesLayers.length; i++) {
			agenciesLayers[i].setVisibility(false);
			pointsLayers[i].setVisibility(true);
		}

var showAgencyInfo = function(e) {
	var site_web = e.data.SITE_WEB == null ? "" : e.data.SITE_WEB;
	var popup = new OpenLayers.Popup.FramedCloud(
			"popup",
			new OpenLayers.LonLat(e.data.X, e.data.Y).transform(proj, map.getProjectionObject()),
			null,
			'<div id="agency-name">' + e.data.NOM + '</div>'
			+ '<div id="agency-address">' + e.data.ADRESSE + '</div>'
			+ '<div id="agency-city">' + e.data.CODE_POSTAL + ' ' + e.data.VILLE + '</div>'
			+ '<div id="agency-phone">'+ e.data.TEL +'</div>'
			+ '<div id="agency-website"><a href="http://'+site_web+'">' + site_web +'</a></div>',
			null,
			true
	);
	//console.log(e.data.ADRESSE);
	popup.updateSize();
	//popup.closeOnMove = true;
	map.addPopup(popup);
};
var hideAgencyInfo = function(e) {
	map.popups[0].destroy();
};

var zoomChanged = function() {
	var zoom = map.getZoom();
	if(zoom <= zoomTrigger) {
		for(var i=0; i < agenciesLayers.length; i++) {
			agenciesLayers[i].setVisibility(false);
			pointsLayers[i].setVisibility(true);
			//layerSwitcher.destroy();
		}
		//$('#map-legend:visible').hide('slow');
	}
	else if(zoom == zoomTrigger+1) {
		for(var i=0; i < agenciesLayers.length; i++) {
			agenciesLayers[i].setVisibility(true);
			pointsLayers[i].setVisibility(false);
		}
	}
	/*else {
		for(var i=0; i < agenciesLayers.length; i++) {
			agenciesLayers[i].setVisibility(true);
			pointsLayers[i].setVisibility(false);
			//layerSwitcher = new OpenLayers.Control.LayerSwitcher();
			//map.addControl(layerSwitcher);
			//layerSwitcher.maximizeControl();
		}
		//$('#map-legend:hidden').show('slow');
	}*/
}
var zoomLegend = function() {
	
}
map.events.register("zoomend", map, zoomChanged);

var highlightCtrl = new OpenLayers.Control.SelectFeature(agenciesLayers.concat(pointsLayers),
{
	hover: true,
	highlightOnly: true,
	renderIntent: "temporary",
});

var selectCtrl = new OpenLayers.Control.SelectFeature(agenciesLayers.concat(pointsLayers),
{
	clickout: true,
	onSelect: showAgencyInfo,
	onUnselect: hideAgencyInfo
});

map.addControl(highlightCtrl);
map.addControl(selectCtrl);

highlightCtrl.activate();
selectCtrl.activate();

gmap.mapObject.mapTypes.set('styled', styledMapType);
gmap.mapObject.setMapTypeId('styled');
