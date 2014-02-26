$(function() {
	/* Les phrases chocs */
	$('#phrase-choc1').dialog({
		autoOpen: false,
		dialogClass: 'phrase-choc1-dialog',
		position: 'center'
    });
	$('#tete1').click(function() {
		$('#phrase-choc1').dialog('open');
	});
	
	$('#phrase-choc2').dialog({
		autoOpen: false,
		dialogClass: 'phrase-choc2-dialog'
    });
	$('#tete2').click(function() {
		$('#phrase-choc2').dialog('open');
	});
	
	$('#phrase-choc3').dialog({
		autoOpen: false,
		dialogClass: 'phrase-choc3-dialog'
    });
	$('#tete3').click(function() {
		$('#phrase-choc3').dialog('open');
	});
	
	$('#phrase-choc4').dialog({
		autoOpen: false,
		dialogClass: 'phrase-choc4-dialog'
    });
	$('#tete4').click(function() {
		$('#phrase-choc4').dialog('open');
	});
	
	$('#phrase-choc5').dialog({
		autoOpen: false,
		dialogClass: 'phrase-choc5-dialog'
    });
	$('#tete5').click(function() {
		$('#phrase-choc5').dialog('open');
	});
	
	/* Les interviews */
	dialogH = $(window).height()*80/100;
	dialogW = $(window).width()*80/100;

	$('#interview1').dialog({
		autoOpen: false,
		height: dialogH,
		width: dialogW,
		dialogClass: 'interview1-dialog'
	});
	$('#details-interview1').click(function() {
		$('#interview1').dialog('open');
		$('#phrase-choc1').dialog('close');
	});
	
	$('#interview2').dialog({
		autoOpen: false,
		height: dialogH,
		width: dialogW,
		dialogClass: 'interview2-dialog'
	});
	$('#details-interview2').click(function() {
		$('#interview2').dialog('open');
		$('#phrase-choc2').dialog('close');
	});
	
	$('#interview3').dialog({
		autoOpen: false,
		height: dialogH,
		width: dialogW,
		dialogClass: 'interview3-dialog'
	});
	$('#details-interview3').click(function() {
		$('#interview3').dialog('open');
		$('#phrase-choc3').dialog('close');
	});
	
	$('#interview4').dialog({
		autoOpen: false,
		height: dialogH,
		width: dialogW,
		dialogClass: 'interview4-dialog'
	});
	$('#details-interview4').click(function() {
		$('#interview4').dialog('open');
		$('#phrase-choc4').dialog('close');
	});
	
	$('#interview5').dialog({
		autoOpen: false,
		height: dialogH,
		width: dialogW,
		dialogClass: 'interview5-dialog'
	});
	$('#details-interview5').click(function() {
		$('#interview5').dialog('open');
		$('#phrase-choc5').dialog('close');
	});
	$(".ui-dialog-titlebar").removeClass('ui-widget-header');
	//$('.ui-dialog-titlebar').hide();*/
});