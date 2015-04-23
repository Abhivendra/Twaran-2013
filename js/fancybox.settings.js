jQuery(document).ready(function() {
	
	$("a.enlarge").fancybox({
		'titleShow'     : false,
	    'transitionIn'	 : 'fade',
		'transitionOut'	 : 'fade',
		'overlayOpacity' : '0.6',
		'overlayColor'   : '#000'
	});
	
	$("a.fancybox").fancybox({
		'titlePosition'  : 'over',
		'overlayOpacity' : '0.6',
		'overlayColor'   : '#000'
	});

});