function enviarCorreo(){
    var parametros = 
        'Nombre='+$("#Nombre").val()+"&"+
        'Apellido='+$("#Apellido").val()+"&"+
        'DireccionEmail='+$("#DireccionEmail").val();
    console.log("Esto se enviará al servidor: "+parametros);
    location.reload();
    $.ajax({
		url:"ajax/enviar-prueba.php",
        dataType:"json",
        method:"POST",
        data:parametros,
		success:function(respuesta){
            console.log(respuesta);
            console.log("correo enviado exitosamente");
          
		},
		error:function(error){
			console.log(error);
		}
	});      
}