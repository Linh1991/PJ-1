(function($) {
    $.fn.extend({
        tooltip: function() {
    		var el = this;
			el.mousemove(function(ev){
    			
    			if($('#tooltip').html() ==  null){
    				var div = $('<div>').addClass('tooltip').hide().attr('id', 'tooltip');
    				$('body').append(div);
    			}
				
				var img = $(this).prev('img');
				var extraHeight = 0;
				var extraWidth = 0;
				
				var src = img.attr('src');			
				var reg = /^\/previews_480x300\/*/i;
				
				if(reg.test(src)){
					$('#tooltip').css({
						'height': 300 + 'px',
						'width': 480 + 'px'
					});
				}
				else{
					$('#tooltip').css({
						'height': 300 + 'px',
						'width': 400 + 'px'
					});					
				}
				
				if (img.hasClass('dualscreen')) {
					$('#tooltip').css({
						'height': 133 + 'px',
						'width': 424 + 'px'
					});		
					
					extraHeight += ((300 - 133) / 2);
					extraWidth += ((480 - 424));			
				}
				
				if ($('#tooltip').is(':hidden')) {
					$('#tooltip').html('<img border="0" style="border-color:#e9ecf3" src="' + src + '" />');
					$('#tooltip').fadeIn(150);
				}  						
				
				
				if ($(this).hasClass('top')) {		
					$('#tooltip').css({
						'left': (ev.pageX - (240 - extraWidth)) + 'px',
						'top': (ev.pageY - (360 - extraHeight)) + 'px'
					});  					
				}
				else {
					if (screen.width <= 1280) {
						$('#tooltip').css({
							'left': (ev.pageX + (100 - extraWidth)) + 'px',
							'top': (ev.pageY - (150 - extraHeight)) + 'px'
						}); 				
					}
					else {
						$('#tooltip').css({
							'left': (ev.pageX - (580 - extraWidth)) + 'px',
							'top': (ev.pageY - (150 - extraHeight)) + 'px'
						}); 					
					}
				}
    			
    			el.mouseleave(function(){
    				$('#tooltip').hide();
    			});    			
    		});
			
			if(arguments[0] !== true)
			{
				el.click(function(ev){
					ev.preventDefault();
				});
			}
        }
    });
})(jQuery);
