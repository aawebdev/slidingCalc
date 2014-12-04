(function($) {	
	
	
	jQuery(function() {//doc.ready[shorthand] start	
		

		function setup() {
		jQuery('.calc-slider').each(function() {

			
		
			var $this = $(this);
			var $this_amt = $this.parents('.calc-left').siblings('.calc-value').find('span');
			
			$this.slider({
				min: $this.data('min'),
				max: $this.data('max'),
				step: 1,
				value: $this.data('start'),
				create: function ( e, u ) {
					$this.append('<span class="alignleft">' + $this.data('min') + '</span><span class="connector"></span><span class="alignright">' + $this.data('max') + '</span>');	
				},
				slide: function( event, ui ) {
					$this_amt.html(ui.value);
					if( $this.data('is_cash') ) {
						$this_amt.prepend('$');
					}					
					totalcost();					
				}
				
			});

			
			
			$this_amt.html( $this.slider( 'value' ));
			if( $this.data('is_cash') ) {
				$this_amt.prepend('$');
			}
			
		
		});
		}

		setup();
		
		function totalcost() {
		
			var $totalCost = $(".total-cost");
		
		
			var examCost = parseInt($('#exam_cost .calc-value span').html().replace('$', ''));
			var glassesCost = parseInt($("#glasses_cost .calc-value span").html().replace('$',''));
			var lensCost = parseInt($("#lens_cost .calc-value span").html().replace('$', ''));
			var solutionCost = parseInt($("#solution_cost .calc-value span").html().replace( '$', ''));
			var years = parseInt($("#years_of_use .calc-value span").html().replace( '$', ''));
		
			$totalCost.html( '$' + (examCost + glassesCost + lensCost + solutionCost ) * years );
		}
		
		totalcost();

	    

	});// end of doc.ready
}(jQuery));


