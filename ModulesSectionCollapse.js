$(function(){
		   
	// hide tables and bind click event to h2 to toggle table
	$('h2').each(function(i){
						  
		$(this).next('table').hide();
		$(this).css('cursor','pointer');
		
		var count = $(this).next('table').find('tbody tr').length;
		
		$(this).prepend('<span class="detail indi" style="font-size:0.7em;position:relative;top:-2px;">+ </span>');
		$(this).append('<span class="detail" style="font-size:0.7em"> ('+count+')</span>');

		$(this).bind('click',function(e){
			var indi = $(this).find('.indi');
			indi.html( indi.text() == '+ ' ? '– ' : '+ ' );
			$(this).next('table').siblings('table:visible').prev('h2').find('.indi').text('+ ');
			$(this).next('table').siblings('table').hide();
			$(this).next('table').toggle();
			
		});
		
	});
	
});