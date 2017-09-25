//-------------INICIA MENÚ PRINCIPAL---------------------

$('#menu-toggle').click(function () {
     $('#wrapper').slideToggle({
         direction: "up"
     }, 300);
     $(this).toggleClass('clientsClose');
 });


$(document).ready(function(){
    $("#audio").click(function () {
        $("#audioWrap").each(function () {
            displaying = $(this).css("display");
            if(displaying == "block") {
                $(this).fadeOut('slow',function() {
                    $(this).css("display","none");
                });
            } else {
                $(this).fadeIn('slow',function() {
                    $(this).css("display","block");
                });
            }
        });
    });
});


$(function () {

    $('.demo5').svgpopup({
        figure: 'rectangle',
        fill: '#238276',
        randomize: false
    });

    $('.demo6').svgpopup({
        figure: 'rectangle',
        fill: '#238276',
        randomize: false
    });

}());



$(function() {
    var player = $.AudioPlayer;
    player.init({
        container: '#audioWrap'
        ,source: '../audios/Don Tetto - Yo Estaré Bien (Con Letra).mp3'
        ,imagePath: '../images'
        ,debuggers: false
        ,allowSeek: true
    });

    $('[data-url]').on('click', function(event) {
        event.preventDefault();

        player.updateSource({
            source: $(this).data('url')
        });
    });
});

//-------------FINALIZA MENÚ PRINCIPAL---------------------


//------------- INICIA DATOS PROYECTO----------------------

$(function () {

    $('.ayudaTextoUno').svgpopup({
        figure: 'rectangle',
        fill: '#238276',
        randomize: false
    });


    $('.ayudaVideoUno').svgpopup({
        figure: 'rectangle',
        fill: '#238276',
        randomize: false
    });

}());

//------------- FINALIZA DATOS PROYECTO----------------------



//------------- INICIA MATRIZ DE VESTER----------------------






//------------- FINALIZA MATRIZ DE VESTER----------------------