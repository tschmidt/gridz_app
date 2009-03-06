// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(function () {
	
	if ( $("#examples_nav").length > 0 ) {
		
		var $tabs = $("#examples_nav a"),
			$example_container = $("#examples"),
			$examples = $(".example");
			
		$examples.hide();
		
		$tabs.click(function (e) {
			
			e.preventDefault();
			
			var $this = $(this)
			
			$tabs.removeClass("active");
			
			$this.addClass("active");
			
			$examples.fadeOut("fast");
			
			$example_container.animate({
				height : $( $this.attr("href") ).outerHeight()
			}, 350, function () {
				var $example = $($this.attr("href"));
				
				$example.fadeIn();
				$example.css({ position : "absolute", top : 0 })
			});
			
		});
		
		$tabs.filter(":first").click();
	}
	
})