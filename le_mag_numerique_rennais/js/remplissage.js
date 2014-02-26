$(document).ready(function(){
	$('#S2image1-2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
		// element is now visible in the viewport
            if (visiblePartY == 'top') {
              // top part of element is visible
            }
            else if (visiblePartY == 'bottom') {
              // bottom part of element is visible
            }
            else {
				$("#S2image1-2").delay(100).animate({
				height: '90px'
				  }, 2000, function() {
				  });
				   $("#S2image2-2").delay(100).animate({
				height: '40px'
				  }, 2000, function() {
				  });
				   $("#S2image3-2").delay(100).animate({
				height: '145px'
				  }, 2000, function() {
				  });
			}
		} else{
					$("#S2image1-2").animate({
					height: '200px'
					  }, 0);
					   $("#S2image2-2").animate({
					height: '200px'
					  }, 0);
					   $("#S2image3-2").animate({
					height: '200px'
					  }, 0);
		}
	});

});

$(document).ready(function(){
	if ($(window).width() < 800)
				$("#texteS8").css({"margin-right": "5%",
									"width": "50%",
									"text-indent": "30px",
									"margin-top": "20%"});
	if ($(window).width() > 1000)
				$("#texteS8").css({"float": "right",
									"margin-right": "20%",
									"width": "60%",
									"text-indent":"30px"});
	$("#S8image1-2").bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
		    // element is now visible in the viewport
		    if (visiblePartY == 'top') {
		    // top part of element is visible
		    } else if (visiblePartY == 'bottom') {
		    // bottom part of element is visible
		    } else {
		    	$("#S8image1-2").delay(100).animate({
					height: '125px'
					  }, 2000, function() {
					  });
					  
					 $("#S8image2-2").delay(100).animate({
					height: '70px'
					  }, 2000, function() {
					  });
				
					 $("#S8image3-2").delay(100).animate({
					height: '130px'
					  }, 2000, function() {
					  });
		    }
		} else {
		    // element has gone out of viewport
			$("#S8image1-2").animate({
			height: '350px'
			  }, 0);
			  
			 $("#S8image2-2").animate({
			height: '350px'
			  }, 0);
		
			 $("#S8image3-2").delay(100).animate({
			height: '350px'
			  }, 2000, function() {
			  });
		}

		/*('#S8image2-2').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
		
		$("#S8image1-2").delay(500).animate({
		height: '90px',
		width: '200px'
		  }, 2000, function() {
		  });
		  
		 $("#S8image2-2").delay(500).animate({
		height: '70px',
		width: '200px'
		  }, 2000, function() {
		  });
	
		 $("#S8image3-2").delay(500).animate({
		height: '120px',
		width: '200px'
		  }, 2000, function() {
		  });
		  }
		  });*/
	});

});
	

/*$("#S2image1-2").ready(function(){
		 $("#S2image1-2").delay(1500).animate({
		height: '50px',
		width: '200px'
		  }, 2000, function() {
		  });
		   $("#S2image2-2").delay(1500).animate({
		height: '30px',
		width: '200px'
		  }, 2000, function() {
		  });
		   $("#S2image3-2").delay(1500).animate({
		height: '70px',
		width: '200px'
		  }, 2000, function() {
		  });
});*/
		
/*if (dataslideint = 2) {
			 $("#S2image1-2").delay(1500).animate({
			height: '50px',
			width: '200px'
			  }, 2000, function() {
			  });
			   $("#S2image2-2").delay(1500).animate({
			height: '30px',
			width: '200px'
			  }, 2000, function() {
			  });
			   $("#S2image3-2").delay(1500).animate({
			height: '70px',
			width: '200px'
			  }, 2000, function() {
			  });
/*			  
if (slide = 9) {		

			 $("#S8image1-2").delay(1500).animate({
			height: '90px',
			width: '200px'
			  }, 2000, function() {
			  });
		
			 $("#S8image2-2").delay(1500).animate({
			height: '70px',
			width: '200px'
			  }, 2000, function() {
			  });
		
			 $("#S8image3-2").delay(1500).animate({
			height: '120px',
			width: '200px'
			  }, 2000, function() {
			  });
};*/
		