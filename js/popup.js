$(document).ready(function(){
    setTimeout(function(){
        $('#popUpMain').css('display','block')


    },12000);

});
$('.submitId').click(function(){
    $('#popUpMain').css('display','none')


});

$('#submitModal1').click(function(){
    $('#submitModal').css('display','hide');
    swal("Good job!", "Thsnk you for Contacting with Us!", "success");
    

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