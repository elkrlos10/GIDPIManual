var audio1 = document.getElementById("audio-player1");

$("#pause-button1").click(function () {
    $(this).children(".icon")
      .toggleClass("icon-pause")
      .toggleClass("icon-play");

    if (audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
    }
});


function CreateSeekBar1() {
    var seekbar = document.getElementById("audioSeekBar1");
    seekbar.min = 0;
    seekbar.max = audio1.duration;
    seekbar.value = 0;
}

function EndofAudio() {
    document.getElementById("audioSeekBar1").value = 0;
}

function audioSeekBar1() {
    var seekbar = document.getElementById("audioSeekBar1");
    audio1.currentTime = seekbar.value;
}

function SeekBar1() {
    var seekbar = document.getElementById("audioSeekBar1");
    seekbar.value = audio1.currentTime;
}

audio1.addEventListener("timeupdate", function () {
    var duration = document.getElementById("duration");
    var s = parseInt(audio1.currentTime % 60);
    var m = parseInt((audio1.currentTime / 60) % 60);
}, false);


//Waves.init();
Waves.attach("#play-button1", ["waves-button", "waves-float"]);
Waves.attach("#pause-button1", ["waves-button", "waves-float"]);