//mendeteksi apakah DOM pada HTML/ web sudah siap digunakan
$( document ).ready(function() {
//jika dokumen splash muncul dokumen wrapper dibuat tidak terlihat 
	if($(".splash").is(":visible"))
	{
		$(".wrapper").css({"opacity":"0"});
	}
	setTimeout(function() {
//dokumen splash di set dengan delay 2000 kemudian di hilangkan dan menampilkan dokumen wrapper
    $('.splash').delay(2000).hide(0);
	$(".wrapper").delay(1000).animate({"opacity":"1.0"},2000);}, 2000);
	
	
	
	$(".splash-arrow").click(function()
	{
		$(".splash").slideUp("800", function() {
			  $(".wrapper").delay(100).animate({"opacity":"1.0"},800);
		 });
	});
});
