$(document).ready(function() {
	$('div.toutes-les-agences').click(function() {
		/*var box = $('div.toutes-les-agences input[type="checkbox"]');
		if(box.prop('checked')) {
			for(var i in agenciesLayers) {
				agenciesLayers[i].setVisibility(false);
			}
			box.prop('checked',false);
		}
		else {*/
			for(var i in agenciesLayers) {
				agenciesLayers[i].setVisibility(true);
			}
			/*box.prop('checked',true);
		}*/
	});
	$('div.agences-globale-plus10').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerGlobalePlus10.setVisibility(true);
	});
	$('div.agences-globale-moins10').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerGlobaleMoins10.setVisibility(true);
	});
	$('div.agences-conseil-en-communication').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerConseilCommunication.setVisibility(true);
	});
	$('div.agences-digitale-plus10').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerDigitalePlus10.setVisibility(true);
	});
	$('div.agences-digitale-moins10').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerDigitaleMoins10.setVisibility(true);
	});
	$('div.agences-audiovisuelle').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerAudiovisuelle.setVisibility(true);
	});
	$('div.agences-evenementielle').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerEvenementielle.setVisibility(true);
	});
	$('div.agences-relation-presse').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerRelationPresse.setVisibility(true);
	});
	$('div.agences-design').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerDesign.setVisibility(true);
	});
	$('div.agences-affichage-regie').click(function() {
		for(var i in agenciesLayers) {
			agenciesLayers[i].setVisibility(false);
		}
		layerAffichage.setVisibility(true);
	});
});