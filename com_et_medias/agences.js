var layerAudiovisuelle = new OpenLayers.Layer.Vector("Audiovisuelle", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Audiovisuelles-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/audiovisuelle.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerConseilCommunication = new OpenLayers.Layer.Vector("Conseil en communication", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Conseil-en-communication-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/conseil-en-communication.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerDesign = new OpenLayers.Layer.Vector("Design", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Design-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/design-com-ecrite-marketing.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerDigitaleMoins10 = new OpenLayers.Layer.Vector("Digitale -10", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Digitales-10-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/digitale-10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerDigitalePlus10 = new OpenLayers.Layer.Vector("Digitale +10", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Digitales+10-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/digitale+10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerEvenementielle = new OpenLayers.Layer.Vector("Evenementielle", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Evenementielles-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/evenementielle.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerGlobaleMoins10 = new OpenLayers.Layer.Vector("Globale -10", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Globales-10-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/globale-10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerGlobalePlus10 = new OpenLayers.Layer.Vector("Globale +10", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Globales+10-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/globale+10.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerAffichage = new OpenLayers.Layer.Vector("Affichage", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/Affichage-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/regie-affichage-conseil-medias.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});
var layerRelationPresse = new OpenLayers.Layer.Vector("Relation Presse", {
	styleMap: new OpenLayers.StyleMap({
		// Set the external graphic and background graphic images.
		externalGraphic: "images/carte/RelationPresse-zones.png",
		pointRadius: 20
	}),
	isBaseLayer:false,
	projection:"EPSG:900913",
    strategies: [new OpenLayers.Strategy.Fixed()],
    protocol: new OpenLayers.Protocol.HTTP({
        url: "agences/relation-presse-publique.geojson",
        format: new OpenLayers.Format.GeoJSON()
    })
});

// Tableaux pour stocker les layers
var agenciesLayers = [layerAudiovisuelle,layerConseilCommunication,layerDesign,
layerDigitaleMoins10,layerDigitalePlus10,layerEvenementielle,
layerGlobaleMoins10,layerGlobalePlus10,layerAffichage,layerRelationPresse];
