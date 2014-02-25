$("grapheFrAll").ready(function() {
			

			var options = {
				exporting: {
					enabled: false
				},
				credits: {
					enabled: false
				},
				chart: {
					defaultSeriesType: 'spline',
					renderTo: 'grapheFrAll',
					width: 500,
					height:400
				},
				title: {
					text: ''
				},
				xAxis: {
					categories: [],
					tickInterval: 5
				},
				yAxis: {
					title: {
						text: ''
					},
					max: 100,
					min: 0,
					labels:
						{
						  enabled: true
						},
					tickInterval: 50
				},
				series: []
			};
			
		
			$.get('./DATA/Europe/vaccinationFrAll.csv', function(data) {
				// Split the lines
				var lines = data.split('\n');
				$.each(lines, function(lineNo, line) {
					var items = line.split(',');
					
					// header line containes categories
					if (lineNo == 0) {
						$.each(items, function(itemNo, item) {
							if (itemNo > 0) options.xAxis.categories.push(item);
						});
					}
					
					// the rest of the lines contain data with their name in the first position
					else if (lineNo == 1) {
						var series = { 
							data: [],
							showInLegend: false, 
							visible:true,
							marker: {
								radius: 0
							},
							lineWidth: 4,
							dashStyle:'dash'
						};
						$.each(items, function(itemNo, item) {
							if (itemNo == 0) {
								series.name = item;
							} else {
								series.data.push(parseFloat(item));
							}
						});
						
						options.series.push(series);

					}
					
					else {
						var series = { 
							data: [],
							showInLegend: false, 
							visible:true,
							marker: {
								radius: 1.5
							},
							lineWidth: 4
						};
						$.each(items, function(itemNo, item) {
							if (itemNo == 0) {
								series.name = item;
							} else {
								series.data.push(parseFloat(item));
							}
						});
						
						options.series.push(series);

					}
					
				});
				
				Highcharts.setOptions({
					colors: ['#ED561B','#DDDF00','#058DC7']
				});
				
				var chart = new Highcharts.Chart(options);
			});
			
			
		});