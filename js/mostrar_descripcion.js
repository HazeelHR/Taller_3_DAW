

// funcion para generar el vento click de la materia presionada
function eventoclick(){

    var popup = document.getElementById('popupWrapper');
    // capturando por medio del id al control que mostrará la informacion
    var descrip = document.getElementById('contDescipcion');

    //capturando todos los elementos elementos "td"
    var elementos = document.getElementsByTagName("td");
    

    //recorriendo los elementos 
    for(var i=0;i<elementos.length;i++)
    {
        //agregando el evento click del elemento presionado
        elementos[i].onclick = function()
        {            
            var texto = this.id;//tomando el texto del id

            //mostrando la informacion de la materia en el pop-up
            descrip.innerText = texto;
            //mostrando el pop-up
            popup.style.display = "block";

        }
    }
    
    
}


function init(){
    // capturando por medio del id los elementos del pop-up
    var popup = document.getElementById('popupWrapper');
    var close = document.getElementById('popupClose');    

    //agregando el evento click al boton que cierra el pop-up
    if(close.addEventListener){
        close.addEventListener("click", function(){
            //ocultando el pop-up
            popup.style.display = "none";
        }, false);
    }
    else if(close.attachEvent){
        close.attachEvent("onclick", function(){
            //ocultando el pop-up
            popup.style.display = "none";
        });
    }

    //agregando el evento click para que al precionar afuera se cierre el pop-up
    if(popup.addEventListener){
        popup.addEventListener("click", function(){
            //ocultando el pop-up
            popup.style.display = "none";
        }, false);
    }
    else if(popup.attachEvent){
        popup.attachEvent("onclick", function(){
            //ocultando el pop-up
            popup.style.display = "none";
        });
    }

    
}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", init, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", init);
}