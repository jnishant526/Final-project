$(document).ready(function(){
    setTimeout(function(){
        $('#popUpMain').css('display','block')


	},10000);

	var typed = new Typed('#typing', {
		strings: [" Technocolabs is non-profit organization which is followed by technical experts for enthusiastic learners","Artificial intelligence machine learning have great way to develop.","Technical Colabs is a leading tech Startups with learn something new and innovative ideas..."],
		loop: true,
		typeSpeed: 15,
		backSpeed: 40,
		backDelay:500
	  });

});
$('.submitId').click(function(){
    $('#popUpMain').css('display','none')


});

$('#submitModal1').click(function(){
  
    swal("Your message has been successfully sent!", "We appreciaate you contacting us and we'll be in touch soon", "success");
    

});
// $(document).ready(function(){
			// 	$('div#loading').removeAttr('id');
		// });
		var preloader = document.getElementById("loading");
		// window.addEventListener('load', function(){
		// 	preloader.style.display = 'none';
		// 	})

		function myFunction(){
			preloader.style.display = 'none';
		};

