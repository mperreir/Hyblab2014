var slides = document.getElementsByClassName("slide");
var video = document.getElementById("video");
var screenHeight = window.screen.height;
var screenWidth = window.screen.width;  
  
//$("#div_video").addClass("leanback-player-video");

for (var i = 0; i < slides.length - 1; i++)
{
    if (i === slides.length - 2) slides[i].style.minHeight = (screenHeight * 0.69) + 'px';
    else if (i === 1) {}
    else slides[i].style.minHeight = (screenHeight * 0.865) + 'px';
}