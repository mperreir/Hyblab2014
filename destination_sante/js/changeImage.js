function changeImage(date) {
	switch(date) {
		case 2008:
		$("#bouton2008").css('background-image', 'url(style/images/2008.png)');
		$("#bouton2009").css('background-image', 'url(style/images/2009hover.png)');
		$("#bouton2010").css('background-image', 'url(style/images/2010hover.png)');
		$("#bouton2011").css('background-image', 'url(style/images/2011hover.png)');
		break;
		case 2009:
		$("#bouton2008").css('background-image', 'url(style/images/2008hover.png)');
		$("#bouton2009").css('background-image', 'url(style/images/2009.png)');
		$("#bouton2010").css('background-image', 'url(style/images/2010hover.png)');
		$("#bouton2011").css('background-image', 'url(style/images/2011hover.png)');
		break;
		case 2010:
		$("#bouton2008").css('background-image', 'url(style/images/2008hover.png)');
		$("#bouton2009").css('background-image', 'url(style/images/2009hover.png)');
		$("#bouton2010").css('background-image', 'url(style/images/2010.png)');
		$("#bouton2011").css('background-image', 'url(style/images/2011hover.png)');
		break;
		case 2011:
		$("#bouton2008").css('background-image', 'url(style/images/2008hover.png)');
		$("#bouton2009").css('background-image', 'url(style/images/2009hover.png)');
		$("#bouton2010").css('background-image', 'url(style/images/2010hover.png)');
		$("#bouton2011").css('background-image', 'url(style/images/2011.png)');
		break;
	}
}