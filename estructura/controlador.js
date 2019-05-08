function verHistoria(codigoUsuario, codigoHistoria){
    console.log(`Ver historia ${codigoHistoria} del usuario ${codigoUsuario} `);
    $('#ver-historia').modal('show');
}

function comentar(codigoPost){
    console.log(`Comentar el post ${codigoPost} con el comentario ${$("#comentario-post-"+codigoPost).val()}`);
}

$(document).ready(function() {
    console.log("El DOM ha sido cargado");
    $.ajax({
		url:"ajax/usuarios.php?accion=listar",
		dataType:"json",
		success:function(res){
            console.log(res);
            for (var i = 0; i <res.length; i++) { 
                $("#usuario-actual").append(`
                  <option value="${i+1}">${res[i].nombre}</option>
               `);
                
            }
		},
		error:function(error){
			console.error(error);
		}
    });
});

$("#usuario-actual").change(function(){
    console.log("usuario logueado "+$("#usuario-actual").val());
    var parametros = 'usuario-actual='+$("#usuario-actual").val();
    var indice=0;
           
  
    $.ajax({
        url:"ajax/usuarios.php?accion=posts",
        data:parametros,
        dataType:"json",
        method:"POST",
	    	success:function(respuesta){
            console.log(respuesta);
            console.log("respuesta de usuario actual");
            $("#posts").empty();
            for(var i=0;i<respuesta[indice].seguidores.length;i++){
                $("#posts").empty();
              $("#posts").append(`
                <div class="col-lg-12">
                <div class="card mb-4 shadow-sm">
                  <div class="card-header">
                      <img class="img-fluid img-thumbnail rounded-circle" src="${respuesta[indice].seguidores[i].imagen}">    
                      <span>${respuesta[indice].seguidores[i].nombre} </span>
                  </div>
                  <div class="card-body px-0 py-0">
                    <div class="image-post" style="background-image: url();">
  
                    </div>
                    <div class="px-3 py-3 post">
                      <span class="pointer" onclick="like();"><i class="far fa-heart"></i></span>&nbsp;4 Likes<br>
                      <span class="post-user"></span>
                      <span class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa distinctio libero perspiciatis a fugit iusto, beatae ab voluptates quaerat voluptatem magni dolor expedita ipsa eius unde. Earum reprehenderit ab doloremque.</span>
                      <hr>
                      <b>Comments</b><br>
                      <div>
                        <span class="post-user"></span>
                        <span class="post-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, iusto.</span>
                      </div>
                      <div>
                        <span class="post-user">Dende</span>
                        <span class="post-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, iusto.</span>
                      </div>
                      <hr>
                      <div class="px-0">
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Comment" id="comentario-post-2">
                          <div class="input-group-append">
                              <button type="button" onclick="comentar(2);" class="btn btn-outline-danger"><i class="far fa-paper-plane"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
                
                `);
                
            }
           
           
		},
		error:function(error){
			console.error(error);
		}
    });
  
});