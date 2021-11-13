
/*funcion que se ejecuta cuando se carga la pagina */
$(document).ready( function() { 

    /*evento de la opcion para el estilo de la tabla 1 */
    $("#tab1").click(function() {        
                
        /*aplicando borde a la tabla*/
        $("table").css("border","solid 2px #D7C617");
        /*aplicando borde a los th*/
        $("th").css("border","solid 2px #D7C617");
        /*aplicando fondo a los th*/
        $("th").css("background","linear-gradient(to bottom, rgba(242, 231, 125, 0.2), rgba(228, 211, 42, 0.6))");
        /*aplicando fondo a los tr impares*/
        $("tr:odd").css("background-color","rgba(242, 231, 125, 0.2)");
        /*aplicando fondo a los tr pares*/
        $("tr:even").css("background-color","rgba(228, 211, 42, 0.6)");
        //aplicando color a la letra de la tabla
        $("table").css("color","#CA2424");

        return false;
    });

    /*evento de la opcion para el estilo de la tabla 2 */
    $("#tab2").click(function() {        
        
        /*aplicando borde a la tabla*/
        $("table").css("border","solid 2px #4E00A7");
        /*aplicando borde a los th*/
        $("th").css("border","solid 2px #4E00A7");
        /*aplicando fondo a los th*/
        $("th").css("background","linear-gradient(to bottom, rgba(179, 126, 240, 0.2), rgba(106, 34, 189, 0.7))");
        /*aplicando fondo a los tr impares*/
        $("tr:odd").css("background-color","rgba(179, 126, 240, 0.2)");
        /*aplicando fondo a los tr pares*/
        $("tr:even").css("background-color","rgba(106, 34, 189, 0.6)");        
        //aplicando color a la letra de la tabla
        $("table").css("color","#005641");

        return false;
    });

    /*evento de la opcion para el estilo de la tabla 3 */
    $("#tab3").click(function() {        
        
        /*aplicando borde a la tabla*/
        $("table").css("border","solid 2px rgba(64, 157, 196, 1)");
        /*aplicando borde a los th*/
        $("th").css("border","solid 2px rgba(64, 157, 196, 1)");
        /*aplicando fondo a los th*/
        $("th").css("background","linear-gradient(to bottom, rgba(33, 9, 168, 0.2), rgba(64, 157, 196, 0.6))");
        /*aplicando fondo a los tr impares*/
        $("tr:odd").css("background-color","rgba(33, 9, 168, 0.1)");
        /*aplicando fondo a los tr pares*/
        $("tr:even").css("background-color","rgba(64, 157, 196, 0.5)");
        //aplicando color a la letra de la tabla
        $("table").css("color","#000");
        
        return false;
    });

    /*evento de la opcion para el estilo de la pagina 1 */
    $("#pag1").click(function() {

        //aplicando un color de fondo al cuerpo de la pagina
        $("body").css("background-color","#EEDEC1");
        // aplicando tamaño de letra al elemento con la clase title
        $(".title").css("font-size","40px");
        // aplicando color de letra al elemento con la clase title
        $(".title").css("color","#D6C200");

        return false;
    });

    /*evento de la opcion para el estilo de la pagina 2 */
    $("#pag2").click(function() {

        // aplicando tamaño de letra al elemento con la clase title
        $(".title").css("font-size","40px");
        // aplicando color de letra al elemento con la clase title
        $(".title").css("color","#7124CA");
        //aplicando un color de fondo al cuerpo de la pagina
        $("body").css("background-color","#BFA294");

        return false;
    });

    /*evento de la opcion para el estilo de la pagina 3 */
    $("#pag3").click(function() {

        // aplicando tamaño de letra al elemento con la clase title
        $(".title").css("font-size","30px");
        // aplicando color de letra al elemento con la clase title
        $(".title").css("color","#0003CC");
        //aplicando un color de fondo al cuerpo de la pagina
        $("body").css("background-color","#BBF7E0");

        return false;
    });

});