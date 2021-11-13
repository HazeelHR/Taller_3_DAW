var Materialist = new Array();


/*funcion para capturar el xml que tiene los datos de las materias */
function get_materia(){
    AJAX.execute('xml/catalogo.xml', ajax_response);
    
}


/*funcion para capturar al elemento que contiene la informacion de la materia*/
function getChildrenByTagName(element,name){

    var list = new Array();

    name = name.toUpperCase();

    for(var i=0; i<element.childNodes.length; i++)
    if (element.childNodes[i].nodeName.toUpperCase()==name)
    list.push( element.childNodes[i] );
    return list;//retornado la lista de elementos que contienen los datos de las materias
}


/*funcion para capturar los datos de cada propiedad de la materia */
function getTextByName(element, name){

    name = name.toUpperCase();

    for(var i=0; i<element.childNodes.length; i++)
    if (element.childNodes[i].nodeName.toUpperCase()==name)
    return element.childNodes[i].firstChild.nodeValue;
    return '';
}


/*funcion que captura los datos de todas las materias */
function ajax_response(ajaxobj){

    var xml = ajaxobj.responseXML;
    var doc = (xml.firstChild.nextSibling)? xml.firstChild.nextSibling : xml.firstChild;
    var materiasxml = getChildrenByTagName(doc, 'materia');

    /*validando que la lista de las materias sea diferente de null */
    if (materiasxml!= null && materiasxml.length>0)
    {        
        Materialist=new Array();//array para guardar los datos 

        /*capturando los datos de cada materia */
        for(var i=0; i<materiasxml.length; i++)
        {
            t = getTextByName(materiasxml[i],'codigo');
            a = getTextByName(materiasxml[i],'nombre');
            u = getTextByName(materiasxml[i],'descripcion');
            Materialist.push( createMateria(t,a,u) );
        }
        
        /*llamando a la funcion que muestra las materias */
        showlist(Materialist);
    }

}


/*funcion que permite mostrar las materias */
function showlist(materialist){

    var dom_tracklist = document.getElementById('content');//capturando al elemento en el que se mostraran los datos
    var casilla = 0;
    var estructura = "";

    //creando la estructura de la tabla

    estructura += "<table border='1'>";

    estructura += "<thead>";
    estructura += "<tr>";
    estructura += "<th>Nivel</th>";
    estructura += "<th colspan='6'></th>";
    estructura += "</tr>";
    estructura += "</thead>";
    estructura += "<tbody>";

    for(var j=0; j<4; j++)//recorriendo las filas de las tablas
    {
        if(j == 0){//validando que sea la primer fila

            estructura += "<tr>";
            for(var i=0; i<6; i++)//recorriendo las casillas de la fila
            {
                if(i < 5){//validando que la casilla sea manor que 5
                    if(i == 0){//validando que sea la primer casilla para crearla

                        estructura += "<td id='Ciclo 1'>";
                        estructura += "<p>1</p>";
                        estructura += "</td>";
                        
                    }else{//creando cada una de las casillas diferentes de 1 y menores que 5
                        estructura += "<td id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                        estructura += "<p>";
                        estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                        estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                        
                        estructura += "</p>";
                        estructura += "</td>";
                        casilla++;
                    }
                    
                }else{//creando la ultima fila de la casilla para aplicar la propiedad colspan='2'                     
                
                    estructura += "<td colspan='2' id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                    estructura += "<p>";
                    estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                    estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                    
                    estructura += "</p>";
                    estructura += "</td>";
                    casilla++;
                }
                
            }
            estructura += "</tr>";//cerrando la fila

        }else if(j == 1){//validando que sea la segunda fila

            //creando la estructura de la fila
            estructura += "<tr>";
            for(var i=0; i<7; i++)
            {
                
                if(i == 0){//validando que sea la primer casilla
                    estructura += "<td id='Ciclo 2'>";
                    estructura += "<p>2</p>";
                    estructura += "</td>";
                    
                }else{//creando las demas casillas de la fila
                    estructura += "<td id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                    estructura += "<p>";
                    estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                    estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                    
                    estructura += "</p>";
                    estructura += "</td>";
                    casilla++;
                }
                           
            }
            estructura += "</tr>";
        }else if(j == 2){//validando que sea la tercer fila

            //creando la estructura de la fila
            estructura += "<tr>";
            for(var i=0; i<6; i++)
            {
                if(i < 5){//validando que la casilla a crear sea menor que la quinta
                    if(i == 0){//creando la primer casilla
                        estructura += "<td id='Ciclo 3'>";
                        estructura += "<p>3</p>";
                        estructura += "</td>";
                        
                    }else{//creando las de mas casillas de la fila sin contar la ultima
                        estructura += "<td id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                        estructura += "<p>";
                        estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                        estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                        
                        estructura += "</p>";
                        estructura += "</td>";
                        casilla++;
                    }
                    
                }else{//creando la ultima fila de la casilla para aplicar la propiedad colspan='2' 
                    estructura += "<td colspan='2' id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                    estructura += "<p>";
                    estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                    estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                    
                    estructura += "</p>";
                    estructura += "</td>";
                    casilla++;
                }
                
            }
            estructura += "</tr>";
        }else if(j == 3){//validando que sea la cuarta fila

            //creando la estructura de la fila
            estructura += "<tr>";
            for(var i=0; i<6; i++)
            {
                if(i < 5){//validando que las casillas a crear sean menores a la quinta
                    if(i == 0){//creando la primer casilla
                        estructura += "<td id='Ciclo 4'>";
                        estructura += "<p>4</p>";
                        estructura += "</td>";
                        
                    }else{//creando las de mas casillas
                        estructura += "<td id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                        estructura += "<p>";
                        estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                        estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                        
                        estructura += "</p>";
                        estructura += "</td>";
                        casilla++;
                    }
                    
                }else{//creando la ultima fila de la casilla para aplicar la propiedad colspan='2' 
                    estructura += "<td colspan='2' id='Materia: "+ materialist[casilla].nombre +".\n\n Descripción: " + materialist[casilla].descripcion + "'>";
                    estructura += "<p>";
                    estructura += "<b>Codigo:</b> " + materialist[casilla].codigo +". <br/>";
                    estructura += "<b>Nombre:</b> " + materialist[casilla].nombre +". <br/>";                    
                    estructura += "</p>";
                    estructura += "</td>";
                    casilla++;
                }
                
            }
            estructura += "</tr>";
        }
                
    }   
    estructura += "</tbody>";
    estructura += "</table>";

    dom_tracklist.innerHTML = estructura; //insertando la estructura de la tabla creada en el contenedor que la va a mostrar
    eventoclick();//llamando a la funcion que muestra la descipcion de la materia presionada
}


/*funcion para crear un objeto por materia */
function createMateria(codigo,nombre,descripcion){
    var a = new Object();
    a.codigo = codigo;
    a.nombre = nombre;
    a.descripcion = descripcion;
    return a;
}



//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", get_materia, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", get_materia);
}
