$(function(){	
	var map;
	var euCountries = ["at","be","bg","hr","cy","cz","dk","ee","fi","fr","de","gr","he","ie","it","lv","lt","lu","mt","nl","pt","ro","sk","si","es","se","gb","pl"];	
	$('#europe-map').vectorMap({
		container: $('#europe-map'),
		map: 'europe_en',
		attribute: 'fill',
		color: '#fdf8d9',
		hoverColor: '#fec8e0',
		scaleColors: ['#e5dfe5','#492249'],
		values: countryData,
		backgroundColor: null,
		enableZoom: false,
		
		onRegionOver: function(event, code, region) {
			if(euCountries.indexOf(code) <= -1) {
				event.preventDefault();
			}
		},
		onLabelShow: function(element, label, code){			
			if (euCountries.indexOf(code) <= -1)
				element.preventDefault();
				
			if (countryData[code]=="nc")
				label.append(' : non renseigné');
			else if (countryData[code]!= null)
				label.append(': ' +countryData[code] + ' cas');
			}
	});
});