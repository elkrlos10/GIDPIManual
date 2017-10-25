var audio = document.getElementById("audio-player");
var Nombre = document.getElementById("audio-nombre");
var Perfil = document.getElementById("audio-Perfil");
$('#ayudaAudioUno').click(function () {
    $('#audioAyudaUno').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioDos').click(function () {
    $('#audioAyudaDos').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioTres').click(function () {
    $('#audioAyudaTres').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioCuatro').click(function () {
    $('#audioAyudaCuatro').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioCinco').click(function () {
    $('#audioAyudaCinco').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioSeis').click(function () {
    $('#audioAyudaSeis').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioSiete').click(function () {
    $('#audioAyudaSiete').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioOcho').click(function () {
  
    $('#audioAyudaOcho').toggle();
   $(this).toggleClass('clientsClose');
});

$('#ayudaAudioNueve').click(function () {

    $('#audioAyudaNueve').toggle();
    $(this).toggleClass('clientsClose');
  
});

$('#ayudaAudioDiez').click(function () {
    $('#audioAyudaDiez').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioOnce').click(function () {
    $('#audioAyudaOnce').toggle();
    $(this).toggleClass('clientsClose');
});

$('#ayudaAudioDoce').click(function () {
    $('#audioAyudaDoce').toggle();
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

Waves.init();
Waves.attach("#play-button", ["waves-button", "waves-float"]);
Waves.attach("#pause-button", ["waves-button", "waves-float"]);



//----------------------Nombre de proyecto ------------------------- 

$("#pause-buttonNombre").click(function () {
    $(this).children(".icon")
      .toggleClass("icon-pause")
      .toggleClass("icon-play");

    if (Nombre.paused) {
        Nombre.play();
    } else {
        Nombre.pause();
    }
});


function CreateSeekBar() {
    var seekbar = document.getElementById("audioSeekBarNombre");
    seekbar.min = 0;
    seekbar.max = Nombre.duration;
    seekbar.value = 0;
}

function EndofAudio() {
    document.getElementById("audioSeekBarNombre").value = 0;
}

function audioSeekBar() {
    var seekbar = document.getElementById("audioSeekBarNombre");
    Nombre.currentTime = seekbar.value;
}

function SeekBar() {
    var seekbar = document.getElementById("audioSeekBarNombre");
    seekbar.value = audio.currentTime;
}

Nombre.addEventListener("timeupdate", function () {
    var duration = document.getElementById("duration");
    var s = parseInt(Nombre.currentTime % 60);
    var m = parseInt((Nombre.currentTime / 60) % 60);
}, false);

Waves.init();
Waves.attach("#play-button", ["waves-button", "waves-float"]);
Waves.attach("#pause-button", ["waves-button", "waves-float"]);

//----------------Perfil del proyecto--------------------------------
$("#pause-buttonPerfil").click(function () {
    $(this).children(".icon")
      .toggleClass("icon-pause")
      .toggleClass("icon-play");

    if (Perfil.paused) {
        Perfil.play();
    } else {
        Perfil.pause();
    }
});


function CreateSeekBar() {
    var seekbar = document.getElementById("audioSeekBarPerfil");
    seekbar.min = 0;
    seekbar.max = Perfil.duration;
    seekbar.value = 0;
}

function EndofAudio() {
    document.getElementById("audioSeekBarPerfil").value = 0;
}

function audioSeekBar() {
    var seekbar = document.getElementById("audioSeekBarPerfil");
    Perfil.currentTime = seekbar.value;
}

function SeekBar() {
    var seekbar = document.getElementById("audioSeekBarPerfil");
    seekbar.value = Perfil.currentTime;
}

Perfil.addEventListener("timeupdate", function () {
    var duration = document.getElementById("duration");
    var s = parseInt(Perfil.currentTime % 60);
    var m = parseInt((Perfil.currentTime / 60) % 60);
}, false);

Waves.init();
Waves.attach("#play-button", ["waves-button", "waves-float"]);
Waves.attach("#pause-button", ["waves-button", "waves-float"]);