$(document).ready(function(){
	$('select').formSelect();

	var SPMaskBehavior = function (val) {
	  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
	spOptions = {
	  onKeyPress: function(val, e, field, options) {
	      field.mask(SPMaskBehavior.apply({}, arguments), options);
	    }
	};

	$('.sp_celphones').mask(SPMaskBehavior, spOptions);

	// $('.submit .try').on('click', function(){
	// 	if (true) {
	// 		$(this).toggleClass('active');
	// 		$('.thanks').toggleClass('active');
	// 		$('.contact').toggleClass('active');
	// 		$('.help-text').toggleClass('active');
	// 	}
	// });

	$(".form-content").validate({
	  	errorElement: "p",
	  	submitHandler: function(form) {
	        $('.try').toggleClass('active');
			$('.thanks').toggleClass('active');
			$('.contact').toggleClass('active');
			$('.help-text').toggleClass('active');
	    }
	});
});