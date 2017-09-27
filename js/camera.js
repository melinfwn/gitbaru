document.addEventListener('DOMContentLoaded', function () {

   //set variable yang digunakan dan mengambil nilainya dari masing-masing variable
    var video = document.querySelector('#kamerastream'),
        image = document.querySelector('#jepret'),
        mulaikamera = document.querySelector('#mulaikamera'),
        controls = document.querySelector('.controls'),
        ambilfoto_btn = document.querySelector('#ambilfoto'),
        //hapusfoto_btn = document.querySelector('#hapusfoto'),
        //downloadfoto_btn = document.querySelector('#downloadfoto'),
        error_message = document.querySelector('#error-message');
   //mengakses media pada device
    navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

    if(!navigator.getMedia){
        displayErrorMessage("Browser Anda tidak suport navigator.getUserMedia.");
    }
    else{
        navigator.getMedia(
            {
                video: true
            },
            function(stream){
                video.src = window.URL.createObjectURL(stream);
                video.play();
                video.onplay = function() {
                    showVideo();
                };
            },
            function(err){
                displayErrorMessage("Ada kesalahan mengakses kamera: " + err.name, err);
            }
        );
    }
  //mengaktifkan kamera
    mulaikamera.addEventListener("click", function(e){
        e.preventDefault();
        video.play();
        showVideo();
    });
  //pengambilan gambar dengan kamera
    ambilfoto_btn.addEventListener("click", function(e){
        e.preventDefault();
        var jepret = takeSnapshot();
        image.setAttribute('src', jepret);
        image.classList.add("visible");
        //hapusfoto_btn.classList.remove("disabled");
        //downloadfoto_btn.classList.remove("disabled");
        downloadfoto_btn.href = jepret;
        video.pause();
    });
    hapusfoto_btn.addEventListener("click", function(e){
        e.preventDefault();
        image.setAttribute('src', "");
        image.classList.remove("visible");
        //hapusfoto_btn.classList.add("disabled");
        //downloadfoto_btn.classList.add("disabled");
        video.play();
    });
  //menampilkan gambar pada kamera
    function showVideo(){
        hideUI();
        video.classList.add("visible");
        controls.classList.add("visible");
    }
 //mengatur ukuran dari layar kamera
    function takeSnapshot(){
        var hidden_canvas = document.querySelector('canvas'),
            context = hidden_canvas.getContext('2d');
        var width = video.videoWidth,
            height = video.videoHeight;
        if (width && height) {
            hidden_canvas.width = width;
            hidden_canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            return hidden_canvas.toDataURL('image/png');
        }
    }
//fungsi error ketika kamera pada device tidak support
    function displayErrorMessage(error_msg, error){
        error = error || "";
        if(error){
            console.error(error);
        }
        error_message.innerText = error_msg;
        hideUI();
        error_message.classList.add("visible");
    }
    function hideUI(){
        controls.classList.remove("visible");
        mulaikamera.classList.remove("visible");
        video.classList.remove("visible");
        jepret.classList.remove("visible");
        error_message.classList.remove("visible");
    }
});
