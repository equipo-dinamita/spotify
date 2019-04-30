$(document).ready(function(){
    $("#cuenta").html(`
         <h3 class="text-primario">Perfil</h3>  
         <form action="">
             <div class="grupos-formulario">
                 <label class="labels" for="">Nombre de Usuario</label><!--<label> se utiliza para asociar una etiqueta de texto con un campo de formulario <input>. La etiqueta se utiliza para indicar a los usuarios el valor que se debe ingresar en el campo de entrada asociado.-->
                 <p class="parrafos-form"></p>
             </div>
             <div class="grupos-formulario">
                 <label class="labels" for="">Email</label>
                 <p class="parrafos-form"></p>
             </div>
             <div class="grupos-formulario">
                 <label class="labels" for="">Fecha de Nacimiento</label>
                 <p class="parrafos-form"></p>
             </div>
             <div class="grupos-formulario">
                 <label class="labels" for=""></label>
                 <p class="parrafos-form"></p>
             </div>
         </form>
         <a class="btn-labels" href="">Editar Perfil</a>    
    `);
    $( document ).on( 'click', '.li-solo', function() {
  
        //Dentro de este selector existe la etiqueta <a> la buscamos
        let a_tag = $( this ).find('a');
        var a="general";
        //Ahora si, podemos obtener varias cosas de este selector
        //Por ejemplo el texto
        let a_text = a_tag.text();
        
        console.log( 'Por atributo nativo: ' + a_text );
        
        //Podemos usar igual las bondades de HTML5
        //Nota que agregué al código HTML un atributo data-name
        let a_html5 = a_tag.data('name');
        console.log( 'Por HTML5: ' + a_html5 );

        $.ajax({
            url:"ajax/vista-cuenta.php?accion=listar",
            dataType:"json",
            success:function(res){
                console.log(res);
                switch (a_html5) {
                    case 'general':
                         $("#cuenta").html(`
                         <h3 class="text-primario">Perfil</h3>  
                         <form action="">
                             <div class="grupos-formulario">
                                 <label class="labels" for="">Nombre de Usuario</label><!--<label> se utiliza para asociar una etiqueta de texto con un campo de formulario <input>. La etiqueta se utiliza para indicar a los usuarios el valor que se debe ingresar en el campo de entrada asociado.-->
                                 <p class="parrafos-form">${res[0].usuario}</p>
                             </div>
                             <div class="grupos-formulario">
                                 <label class="labels" for="">Email</label>
                                 <p class="parrafos-form">${res[0].email}</p>
                             </div>
                             <div class="grupos-formulario">
                                 <label class="labels" for="">Fecha de Nacimiento</label>
                                 <p class="parrafos-form">${res[0].email}</p>
                             </div>
                             <div class="grupos-formulario">
                                 <label class="labels" for="">${res[0].pais}</label>
                                 <p class="parrafos-form">HN</p>
                             </div>
                         </form>
                         <a class="btn-labels" href="">Editar Perfil</a>
                           `);
                      break;
                    case 'suscripcion':
                      console.log("entro en switch"+a_html5); 
                        $("#todo-contenido").html(`
                        <div><!--content top-->
                        <div class="div-vista"><!--page header-->
                            <h1 class="vista-general"> Suscripcion y pago </h1>
                        </div><!--page header-->
                        <div class="tarjeta-perfil"><!--well card-->
                            <h3 class="">Plan Familiar Premium</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <p class="parrafos-form">Tu plan se renovará automáticamente el 12/5/19 y se te cobrará 8.99 USD..</p>
                                </div>
                                <div class="col-md-12">
                                    <a class="btn-labels" href="">CAMBIAR O CANCELAR</a>
                                </div>
                                <div class="col-md-12">
                                   <h5 class="">Forma de pago</h5>
                                </div>
                                <div id="datos-tarjeta">
                                  <div>icon</div>
                                  <div>
                                    <div>nombreTarjeta</div>
                                    <div>fechaVencimiento</div>
                                  </div>
                                </div>
                                
                            </div>
                        </div><!--well card-->
                        <div class="tarjeta-perfil"><!--well card-->
                            <h3 class="text-primario">Cierra sesion en todas partes</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <p class="parrafos-form">Cierra sesión dondequiera que tengas Spotify abierto, lo que incluye la web, el celular, tu computadora de escritorio o cualquier otro dispositivo.</p>
                                </div>
                                <div class="col-md-6">
                                    <a class="btn-labels" href="">Cierra sesion en todas partes</a>
                                </div>
                            </div>
                        </div><!--well card-->
                        <div class="tarjeta-perfil"><!--well card-->
                        <h3 class="text-primario">Cierra sesion en todas partes</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="parrafos-form">Cierra sesión dondequiera que tengas Spotify abierto, lo que incluye la web, el celular, tu computadora de escritorio o cualquier otro dispositivo.</p>
                            </div>
                            <div class="col-md-6">
                                <a class="btn-labels" href="">Cierra sesion en todas partes</a>
                            </div>
                        </div>
                     </div><!--well card-->
                    </div><!--content top-->
                        
                        `);
                      break;
                    case 'editar':
                      console.log("entro en switch"+a_html5); 
                      break;
                    case 'cambiar_contrasena':
                    console.log("entro en switch"+a_html5); 
                     break; 
                    case 'notificaciones':
                     console.log("entro en switch"+a_html5); 
                     break;  
                    case 'privacidad':
                     console.log("entro en switch"+a_html5); 
                     break; 
                    case 'offline':
                      console.log("entro en switch"+a_html5);
                      break;
                    case 'playlist':
                      console.log("entro en switch"+a_html5);
                      break;
                    case 'recibos':
                      console.log("entro en switch"+a_html5);
                      break;
                    case 'apps':
                    console.log("entro en switch"+a_html5);
                     break; 
                    case 'canjear':
                     console.log("entro en switch"+a_html5);
                     break;  
                    default:
                      break;
                }
            },
            error:function(error){
                console.error(error);
            }
        });
        

    });
    
    
});

$('#EnviarInvitacion').click(function(){
    console.log("hola que tal");
    var parametros = 
        'Nombre='+$("#Nombre").val()+"&"+
        'Apellido='+$("#Apellido").val()+"&"+
        'DireccionEmail='+$("#DireccionEmail").val();
    console.log("Esto se enviará al servidor: "+parametros);

    $.ajax({
        url:"ajax/vista-cuenta.php?accion=enviarCorreo",
        method:"POST",
        data:parametros, //La información en formato URLEncoded
        dataType: 'json', //tipo de dato de retorno, por defecto es html
        success:function(){
            console.log("bien");
        },
        error:function(error){
			console.error(error);
		}
    });
});



                
