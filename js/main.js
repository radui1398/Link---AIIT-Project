$( document ).ready(function() {
	 $('#subscribeForm').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault();  //prevent form from submitting
    	$('#alert').fadeIn(500).css("display","inline-block");
		$("#alert").delay(500).fadeOut(1000);
	});
});

