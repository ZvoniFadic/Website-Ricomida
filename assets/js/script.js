$(document).ready(function(){

    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // alerta correo
    $("#enviarCorreo").on("click",function(){
        alert('El correo fue enviado correctamente');
    });

    // cambio de color
    $("h4").on("dblclick",function(){
        $(this).css({
            "color": "red",
        });
    })

    // esconder card-text
    $(".card-title").on("click",function(){
        $(".card-text").toggle("slow");
        
    })

     // animate
    $('.buton-3').on("click",function(){
        $(this).animate({
        borderWidth:"7rem",},3000);
     });

});

