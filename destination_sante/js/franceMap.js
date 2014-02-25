
function carto(json){
    
	var max = 280,
    min = 0,
    cc,
    startColor = [229, 223, 229],
    endColor = [73, 34, 73],
    colors = {},
    hex;

//set colors according to values of GDP
for (cc in json)
{
    if (json[cc] > 0)
    {
        colors[cc] = '#';
        for (var i = 0; i<3	; i++)
        {
            hex = Math.round(startColor[i] 
                + (endColor[i] 
                - startColor[i])
                * (json[cc] / (max - min))).toString(16);

            if (hex.length == 1)
            {
                hex = '0'+hex;
            }

            colors[cc] += (hex.length == 1 ? '0' : '') + hex;
        }
    }
}
    jQuery(document).ready(function() {
	$('#mapfr').replaceWith("<div id='mapfr'></div>");
        jQuery('#mapfr').vectorMap(
		{ 
			map: 'france_fr',
			/*onRegionOver: function(element, code, region)
			{
				var message = region 
					+ ': '
					+ json[code];
				
				document.getElementById("value").innerHTML = message;
			},*/
			onLabelShow: function (event, label, code) {
				
				label.append(': '+json[code]);
			},
			colors: colors,
			
			backgroundColor: null,
			hoverColor: '#fec8e0',
			enableZoom: false,
			//selectedColor: '#666666',
			//hoverColor: '#8B0000'
		});
    });
        
}	
