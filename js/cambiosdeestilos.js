//Funcion que se realiza al cargar la pagina
$(document).ready(function(){

    //Se controla el evento click para estilo de tabla 1 
    $('#tab1').click(function(){
        //Se quitan las demas clases
        $('table').removeClass('tabla2');
        $('table').removeClass('tabla3');
        //Se añade la nueva clase
        $('table').addClass('tabla1');
    });

    //Se controla el evento click para estilo de tabla 2
    $('#tab2').click(function(){
        //Se quitan las demas clases
        $('table').removeClass('tabla1');
        $('table').removeClass('tabla3');
        //Se añade la nueva clase
        $('table').addClass('tabla2');
    });

    //Se controla el evento click para estilo de tabla 3 
    $('#tab3').click(function(){
        //Se quitan las demas clases
        $('table').removeClass('tabla1');
        $('table').removeClass('tabla2');
        //Se añade la nueva clase
        $('table').addClass('tabla3');
    });

    //Se controla el evento click para estilo de pagina 1 
    $('#pag1').click(function(){
        //Se quitan las demas clases
        $('body').removeClass('pagina2');
        $('body').removeClass('pagina3');
        //Se añade la nueva clase
        $('body').addClass('pagina1');
    });

    //Se controla el evento click para estilo de pagina 2
    $('#pag2').click(function(){
        //Se quitan las demas clases
        $('body').removeClass('pagina1');
        $('body').removeClass('pagina3');
        //Se añade la nueva clase
        $('body').addClass('pagina2');
    });

    //Se controla el evento click para estilo de pagina 3 
    $('#pag3').click(function(){
        //Se quitan las demas clases
        $('body').removeClass('pagina1');
        $('body').removeClass('pagina2');
        //Se añade la nueva clase
        $('body').addClass('pagina3');
    });
});