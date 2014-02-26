var context = {
	getSize: function(){
		return 5000/map.getResolution();
	}
};

var pointsAudiovisuelle = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#0080C3',
			strokeColor: '#0080C3',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/audiovisuelle.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});


var pointsConseilCommunication = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#FDC87D',
			strokeColor: '#FDC87D',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),	
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/conseil-en-communication.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsDesign = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#D27DB0',
			strokeColor: '#D27DB0',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/design-com-ecrite-marketing.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsDigitaleMoins10 = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#AAC45C',
			strokeColor: '#AAC45C',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/digitale-10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsDigitalePlus10 = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#91B837',
			strokeColor: '#91B837',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/digitale+10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsEvenementielle = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#B8077B',
			strokeColor: '#B8077B',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/evenementielle.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsGlobaleMoins10 = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#FAB451',
			strokeColor: '#FAB451',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/globale-10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsGlobalePlus10 = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#F8A223',
			strokeColor: '#F8A223',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/globale+10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsAffichage = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#C8C8C8',
			strokeColor: '#C8C8C8',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/regie-affichage-conseil-medias.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var pointsRelationPresse = new OpenLayers.Layer.Vector("GeoJSON", {
	styleMap: new OpenLayers.StyleMap(
		new OpenLayers.Style({
			pointRadius: '${getSize}',
			fillColor: '#C54E92',
			strokeColor: '#C54E92',
			fillOpacity: 0.4
		},
		{
			context: context
		})
	),
	isBaseLayer:false,
	displayInLayerSwitcher: false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/relation-presse-publique.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});

// Tableaux pour stocker les layers
var pointsLayers = [pointsAudiovisuelle,pointsConseilCommunication,pointsDesign,
pointsDigitaleMoins10,pointsDigitalePlus10,pointsEvenementielle,
pointsGlobaleMoins10,pointsGlobalePlus10,pointsAffichage,pointsRelationPresse];