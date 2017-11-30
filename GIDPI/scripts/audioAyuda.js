var audio = document.getElementById("audio-player");

$('#ayudaAudioUno').click(function () {
    $('#audioAyudaUno').toggle();
    $(this).toggleClass('clientsClose');
});
$('.cerrarAudio').click(function () {
    $('#audioAyudaUno').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioDos').click(function () {
    $('#audioAyudaDos').toggle();
    $(this).toggleClass('clientsClose');
});
$('.cerrarAudio').click(function () {
    $('#audioAyudaDos').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});


$('#ayudaAudioTres').click(function () {
    $('#audioAyudaTres').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});
$('.cerrarAudio').click(function () {
    $('#audioAyudaTres').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioCuatro').click(function () {
    $('#audioAyudaCuatro').toggle();
});
$('#closeObj1').click(function () {
    $('#audioAyudaCuatro').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});


$('#ayudaAudioCinco').click(function () {
    $('#audioAyudaCinco').toggle();
    $(this).toggleClass('clientsClose');
});
$('#closeObj2').click(function () {
    $('#audioAyudaCinco').toggle();
    $(this).toggleClass('clientsClose');
});
$('#ayudaAudioSeis').click(function () {
    $('#audioAyudaSeis').toggle();
    $(this).toggleClass('clientsClose');
});
$('#closeObj3').click(function () {
    $('#audioAyudaSeis').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioSiete').click(function () {
    $('#audioAyudaSiete').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});
$('.cerrarAudio').click(function () {
    $('#audioAyudaSiete').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioOcho').click(function () {
    $('#audioAyudaOcho').toggle();
    $(this).toggleClass('clientsClose');
});
$('#closePerfil1').click(function () {
    $('#audioAyudaOcho').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioNueve').click(function () {
    audio.pause();
    $('#audioAyudaNueve').toggle();
    $(this).toggleClass('clientsClose');
});

$('#closePerfil2').click(function () {
    audio.pause();
    $('#audioAyudaNueve').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioDiez').click(function () {
    $('#audioAyudaDiez').toggle();
    $(this).toggleClass('clientsClose');
});
$('#closeCrono1').click(function () {
    $('#audioAyudaDiez').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioOnce').click(function () {
    $('#audioAyudaOnce').toggle();
    $(this).toggleClass('clientsClose');

});

$('#closeCrono2').click(function () {
    $('#audioAyudaOnce').toggle();
    $(this).toggleClass('clientsClose');

});
$('#ayudaAudioDoce').click(function () {
    $('#audioAyudaDoce').toggle();
    $(this).toggleClass('clientsClose');
});
$('.cerrarAudio').click(function () {
    $('#audioAyudaDoce').toggle();
    audio.pause();
    $(this).toggleClass('clientsClose');
});


//--------------------------------------------------------------------

$("#pause-button").click(function () {
    $(this).children(".icon")
      .toggleClass("icon-pause")
      .toggleClass("icon-play");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});


function CreateSeekBar() {
    var seekbar = document.getElementById("audioSeekBar");
    seekbar.min = 0;
    seekbar.max = audio.duration;
    seekbar.value = 0;
}

function EndofAudio() {
    document.getElementById("audioSeekBar").value = 0;
}

function audioSeekBar() {
    var seekbar = document.getElementById("audioSeekBar");
    audio.currentTime = seekbar.value;
}

function SeekBar() {
    var seekbar = document.getElementById("audioSeekBar");
    seekbar.value = audio.currentTime;
}

audio.addEventListener("timeupdate", function () {
    var duration = document.getElementById("duration");
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
}, false);

//---------------------------------------------------------------------------------------------
var audio2 = document.getElementById("audio-player2");

$("#pause-button2").click(function () {
    $(this).children(".icon")
      .toggleClass("icon-pause")
      .toggleClass("icon-play");

    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
    }
});


function CreateSeekBar2() {
    var seekbar = document.getElementById("audioSeekBar2");
    seekbar.min = 0;
    seekbar.max = audio2.duration;
    seekbar.value = 0;
}

function EndofAudio() {
    document.getElementById("audioSeekBar2").value = 0;
}

function audioSeekBar2() {
    var seekbar = document.getElementById("audioSeekBar2");
    audio2.currentTime = seekbar.value;
}

function SeekBar2() {
    var seekbar = document.getElementById("audioSeekBar2");
    seekbar.value = audio2.currentTime;
}

audio2.addEventListener("timeupdate", function () {
    var duration = document.getElementById("duration");
    var s = parseInt(audio2.currentTime % 60);
    var m = parseInt((audio2.currentTime / 60) % 60);
}, false);


Waves.init();
Waves.attach("#play-button2", ["waves-button", "waves-float"]);
Waves.attach("#pause-button2", ["waves-button", "waves-float"]);

// ---------------------------------------------------------------------------------------------
//var audio1 = document.getElementById("audio-player1");

//$("#pause-button1").click(function () {
//    $(this).children(".icon")
//      .toggleClass("icon-pause")
//      .toggleClass("icon-play");

//    if (audio1.paused) {
//        audio1.play();
//    } else {
//        audio1.pause();
//    }
//});


//function CreateSeekBar1() {
//    var seekbar = document.getElementById("audioSeekBar1");
//    seekbar.min = 0;
//    seekbar.max = audio1.duration;
//    seekbar.value = 0;
//}

//function EndofAudio() {
//    document.getElementById("audioSeekBar1").value = 0;
//}

//function audioSeekBar1() {
//    var seekbar = document.getElementById("audioSeekBar1");
//    audio1.currentTime = seekbar.value;
//}

//function SeekBar1() {
//    var seekbar = document.getElementById("audioSeekBar1");
//    seekbar.value = audio1.currentTime;
//}

//audio1.addEventListener("timeupdate", function () {
//    var duration = document.getElementById("duration");
//    var s = parseInt(audio1.currentTime % 60);
//    var m = parseInt((audio1.currentTime / 60) % 60);
//}, false);


//Waves.init();
//Waves.attach("#play-button1", ["waves-button", "waves-float"]);
//Waves.attach("#pause-button1", ["waves-button", "waves-float"]);

//--------------------------------------------------------------------------------------------------------------------
