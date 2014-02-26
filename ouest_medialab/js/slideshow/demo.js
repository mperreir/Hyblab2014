$(function(){
  var toggles = $('.toggle a'),
      codes = $('.code');
  
  toggles.on("click", function(event){
    event.preventDefault();
    var $this = $(this);
    
    if (!$this.hasClass("active")) {
      toggles.removeClass("active");
      $this.addClass("active");
      codes.hide().filter(this.hash).show();
    }
  });
  toggles.first().click();
});

function display(){
		//var ddg=document.getElementById("ddg");
		var slider = document.getElementById("slider");
		var carousel = document.getElementById("carousel");
		

		slider.style.visibility = "hidden";
		slider.style.height = "auto";
		slider.style.visibility = "visible";
		carousel.style.visibility = "hidden";
		carousel.style.height = "0px";
		//ddg.style.display="block";
		//ddg.style.visibility="visible";	
		//slider.style.heigth = "100px";
		//slider.style.display="block";
		//slider.style.visibility="visible";			
	}
	

	
	function unDisplayed() {
		
		var slider = document.getElementById("slider");
		var carousel = document.getElementById("carousel");
		
		slider.style.height = "0px";
		slider.style.visibility = "hidden";
		/*setTimeout(function(){*/
		carousel.style.height = "auto";
		carousel.style.visibility = "visible";
		/*},10);*/
	}
	
	$('body').click(function() {
	var slider = document.getElementById("slider");
		//var carousel = document.getElementById("carousel");
		
		if (slider.style.visibility === "visible") {
			unDisplayed();
		}
		
			
	});

$('#slider').click(function(event){
    event.stopPropagation();
});

$('#carousel').click(function(event){
    event.stopPropagation();
});

	$(function(){
      SyntaxHighlighter.all();
    });
    $(window).load(function(){
      $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 5,
        asNavFor: '#slider'
      });

      $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        start: function(slider){
        $('body').removeClass('loading');
        }
      });
    });
  
  
    