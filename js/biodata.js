//fungsi reader() digunakan untuk membaca parameter yang dimasukkan untuk ditampilkan
function reader() {

	//ambil value dari elemen forms dengan id nama
	var nama = $('#nama').val();
	
	//ambil properti berupa id dari radio button yang dipilih
	var idrad = $(":radio:checked").prop('id');
	
	//ambil value dari radio button dengan id yang dipilih
	var kelamin = $('#' + idrad).val();
	
	//ambil semua value dari checkbox untuk disimpan di array
	var hobi = [];
	$(':checkbox:checked').each(function() {
		hobi.push($(this).val());
    });
	
	//membangun isi pop up untuk ditampilkan
	$('#popup-reader').html('<center> HAI, '+nama+'. Kamu itu '+kelamin+'?! , Ternyata hobimu '+hobi+'. Keren sekali. Terima kasih atas responnya. ');
	
	//membuka pop up saat diambil
	$('#popup-read').popup("open");
}
