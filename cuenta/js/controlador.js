$(document).ready(function(){
   $.ajax({
      url:"ajax/vista-cuenta.php?accion=listar",
      dataType:"json",
      success:function(resspuesta){
        $("#tarjeta1").append(`
                <h3 class="text-primario">Perfil</h3>  
                <form action="">
                    <div class="grupos-formulario">
                        <label class="labels" for="">Nombre de Usuario</label><!--<label> se utiliza para asociar una etiqueta de texto con un campo de formulario <input>. La etiqueta se utiliza para indicar a los usuarios el valor que se debe ingresar en el campo de entrada asociado.-->
                        <p class="parrafos-form">${resspuesta[0].usuario}</p>
                    </div>
                    <div class="grupos-formulario">
                        <label class="labels" for="">Email</label>
                        <p class="parrafos-form">${resspuesta[0].email}</p>
                    </div>
                    <div class="grupos-formulario">
                        <label class="labels" for="">Fecha de Nacimiento</label>
                        <p class="parrafos-form">${resspuesta[0].fechaNacimiento}</p>
                    </div>
                    <div class="grupos-formulario">
                        <label class="labels" for="">${resspuesta[0].pais}</label>
                        <p class="parrafos-form">HN</p>
                    </div>
                </form>
                <a class="btn-labels" href="">Editar Perfil</a>
                  `);
      }
   });
   
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
                    case 'suscripcion':
                      console.log("entro en switch"+a_html5); 
                        $("#name-vista").html(`
                            <h1 class="vista-general">Pagos y suscripciones</h1>
                        `);
            
                      $("#change-target").html(`
                            <div class="col-md-12" id="div-planfamiliar">
                            <h5 class="text-plan-premium2" >Plan Familiar Premium</h5>
                            <p id="text-tu-plan-1">Tu plan se renovará automáticamente el <b id="text-tu-plan-2">12/5/19</b> y se te cobrará <b id="text-tu-plan-2">8.99 USD.</b></p>
                            <div class="div-button">
                                <input type="button" value="CAMBIAR O CANCELAR" class="button btn btn-success btn-sm center-block"  class="center-block">
                            </div>
                            <h6 class="text-plan-premium">Forma de pago</h6>
                            <div id="cuadro-mastercard">
                                <div class="row" id="">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12-2" id="">
                                        <img src="img/mastercard.png"  width="50px" height="50px">
                                    </div>
                                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12-8" id="">
                                        <div>
                                            <p>${res[0].tarjeta[0].nombreTarjeta}</p>
                                        </div>
                                        <div>
                                            <p>${res[0].tarjeta[0].vencimiento}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         <div class="div-button">
                            <input type="button" value="ACTUALIZAR" class="button btn btn-secondary btn-sm center-block"  class="center-block">
                         </div>
                         </div>
                         <div class="col-md-12" id="div-espacio"></div>
                        
                        `);
                        $("#tarjeta3").html(`
                            <div class="col-md-12" id="div-gestionar">
                                    <h5 class="text-plan-premium2" >Gestiona tus cuentas familiares</h5>
                                    <h6 class="text-plan-premium">¿Quieres añadir o eliminar miembros?</h6>
                                    <div class="div-button">
                                        <input type="button" value="Ír" id="button-ir" class="btn btn-dark btn-sm center-block" class="center-block">
                                    </div>
                            </div>
                        `);
                      break;
                    case 'editar':
                      console.log("entro en switch"+a_html5); 
                      break;
                    case 'cambiar_contrasena':
                      console.log("entro en switch"+a_html5); 
                      $("#todo-contenido").html(`
                          <div><!--content top-->
                          <div class="div-vista"><!--page header-->
                              <h1 class="vista-general">Cambiar contraseña</h1>
                          </div><!--page header-->

                          <div id="cambiar-contrasena" class="tarjeta-perfil" style="padding-bottom: 90px;"><!--well card-->
                              <form id="formulario-cambiar-contrasena" action="">
                                  <div>
                                      <div class="row">
                                          <div class="col-md-12">
                                              <div class="form-grupo">
                                                  <label  class="control-label" for="">
                                                      Contraseña Actual
                                                 </label> 
                                                 <input id="contrasena-actual" class="form-control" type="password">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-12">
                                              <div class="form-grupo">
                                                  <label  class="control-label" for="">
                                                      Nueva Contraseña
                                                 </label> 
                                                 <input id="nueva-contrasena" class="form-control" type="text">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="row">
                                          <div class="col-md-12">
                                              <div class="form-grupo">
                                                  <label  class="control-label" for="">
                                                      Repetir Nueva Contraseña
                                                 </label> 
                                                 <input id="confirmacion-contrasena" class="form-control" type="text">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="row borde-botones">
                                          <button id="establecer-nueva-contrasena" onclick="enviarCorreo();" type="submit" class="btn-nueva-contrasena btn-verde"> Establecer una nueva contraseña</button>
                                          <a class="btn-cancelar" href="">Cancelar </a>
                                      </div>
                                  </div>
                              </form>
                          </div><!--well card-->
                          <div class="tarjeta-perfil"><!--well card-->
                            <h3 class="text-primario">Ayúdanos a mejorar la experiencia con tu cuenta.</h3>
                            <h5 >¿Encontraste lo que estabas buscando?</h5>
                            <div class="Radio">
                                <input type="radio" name="radio-button" id="radio-button_si">si<br>
                            </div>
                            <div class="Radio">
                                <input type="radio" name="radio-button" id="radio-button_no">no<br>
                            </div>
                        </div><!--well card-->
                      </div><!--content top-->
                          `);

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
                    case 'premium-familiar':
                        $("#name-vista").html(`
                            <div class="row" id="div-info-1">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12-12" id="home">
                                        <div id="tamanio-home" class="btn-sm center-block">
                                            <img src="img/home.png" alt="home" id="home" >
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12-12">
                                        <h2 id="text-tu-casa">Tu casa</h2>
                                    </div>
                            </div>
                        `);    
                        $("#change-target").html(`
                            <div class="row" id="div-info-2">
                                    <div class="col-xl-12">
                                        <section class="section-divided">
                                            <ul class="ul-info" >
                                                <li>
                                                    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12-1"   style="padding-left: 0px; padding-right: 0px;">
                                                        <div class="icon" style="float: left;">
                                                            <div class="tamanio-foto-usuario">
                                                                <img src="img/titular.jpeg" alt="icono-usuario" class="foto-usuario">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-12-11" class="usuario-div" style="    ">
                                                        <div class="name"> Tu</div>
                                                        <div class="estado">Titular</div>
                                                    </div>
                                                </li>
                                                <hr>
                                                <li>
                                                    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-12-1" style="padding-left: 0px; padding-right: 0px;">
                                                            <div class="icon" style="float: left;">
                                                                <div class="tamanio-foto-usuario">
                                                                    <img src="img/invitado.jpeg" alt="icono-usuario" class="foto-usuario">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-12-11">
                                                            <div class="name"> Daniel Amaya</div>
                                                            <div class="estado">Activo</div>
                                                        </div>
                                                    </li>
                                            <hr>
                                            </ul>
                                        </section>
                                        <section class="section-invite-link">
                                            <div>
                                                <p id="text-invita">Invita a tu plan a otras personas que vivan en tu casa.</p>
                                                <div id="div-button-enviar-info">
                                                    <a href="" class="button btn btn-dark btn-sm center-block" id="button-enviar-informacion">ENVIAR INVITACIÓN <input id="enviar-invitation" type="button"></a>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                        `);
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

$("#enviar-invitation").click(function formInvitacion(){
    console.log("se ejecuto enviar informacion");
    $("#todo-contendio").html(`
        <div id="info-color"><!--content top-->
        <a href="" id="button-atras">ATRAS</a>
        <div>
            <div id="div-info-2">
                <h2 id="text-info-1">Invitar a un familiar</h2>
            </div>
            <div>
                <h4 id="text-info-2">¿A quienes quieres invitar?</h4>
            </div>
            <ul id="ul-congig1">
                <li>
                    <div><h6>Nombre</h6></div>
                    <input type="text" id="Nombre" placeholder="Nombre">
                </li>
                <li>
                    <div><h6>Apellido</h6></div>
                    <input type="text" id="Apellido" placeholder="Apellido">
                </li>
                <li>
                    <div><h6>Direccion de email</h6></div>
                    <input type="text" id="DireccionEmail" placeholder="Direccion de email">
                </li>
                <li>
                    <h1></h1>
                    <button id="EnviarInvitacion" class="button btn btn-success btn-sm center-block">Enviar invitacion</button>
                </li>
            </ul>
        </div>
    </div><!--content top-->
    <div class="tarjeta-perfil" id="div-info-4"><!--well card-->
        <h3 class="text-primario">Ayúdanos a mejorar la experiencia con tu cuenta.</h3>
        <h5 >¿Encontraste lo que estabas buscando?</h5>
        <div class="Radio">
            <input type="radio" name="radio-button" id="radio-button_si">si<br>
        </div>
        <div class="Radio">
            <input type="radio" name="radio-button" id="radio-button_no">no<br>
        </div>
    </div>
    </div><!--content-->
        `);
});


function enviarCorreo(){
    var parametros = 
        'contrasena-actual='+$("#contrasena-actual").val()+"&"+
        'nueva-contrasena='+$("#nueva-contrasena").val()+"&"+
        'confirmacion-contrasena='+$("#confirmacion-contrasena").val();
    console.log("Esto se enviará al servidor: "+parametros);
    $.ajax({
		url:"ajax/enviar-prueba.php",
        dataType:"json",
        method:"POST",
        data:parametros,
		success:function(respuesta){
			console.log(respuesta);

		},
		error:function(error){
			console.log(error);
		}
	});      
}
