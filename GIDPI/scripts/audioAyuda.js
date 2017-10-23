var audio = document.getElementById("audio-player");

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