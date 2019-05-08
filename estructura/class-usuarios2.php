<?php
  class Usuario{
    protected $codigoUsuario;
    protected $correo;
    protected $contrasena;
    protected $imagen;
    protected $siguiendo; 

    public function __construct(
      $codigoUsuario,
      $correo,
      $contrasena,
      $imagen,
      $siguiendo
    ){
      $this->codigoUsuario= $codigoUsuario;
      $this->correo= $correo;
      $this->contrasena= $contrasena;
      $this->imagen= $imagen;
      $this->siguiendo= $siguiendo;


    }

    public static function soloUsuarios(){
      return file_get_contents("../data/usuarios.json");
    }

    public static function obtenerTodo($usuarioActual){
      $registroUsuario= json_decode(file_get_contents("../data/usuarios.json"),true);
      $registroComentarios= json_decode(file_get_contents("../data/comentarios.json"),true);
      $registroPosts= json_decode(file_get_contents("../data/posts.json"),true);
      $resultado=array();
      $indiceResultado=0;
      $indicePosts=0;
      $indiceSiguiendo=0;

      for ($i=0; $i <count($registroUsuario) ; $i++) { 
        if ($registroUsuario[$i]["codigoUsuario"]== $usuarioActual) {
          $resultado[$indiceResultado]=$registroUsuario[$i];
          $resultado[$indiceResultado]["seguidores"]=array();
          for ($j=0; $j <count($registroUsuario[$i]["siguiendo"]) ; $j++) { 
            if ($resultado[$indiceResultado]["siguiendo"][$indiceSiguiendo]==$registroUsuario[$j]["codigoUsuario"]) {
              $resultado[$indiceResultado]["seguidores"][$indiceSiguiendo]=$registroUsuario[$j];
              $resultado[$indiceResultado]["seguidores"][$indiceSiguiendo]["posts"]=array();
              $indicePosts=0;
              for ($k=0; $k <count($registroPosts) ; $k++) { 
                if ($resultado[$indiceResultado]["seguidores"][$j]["codigoUsuario"]==$registroPosts[$k]["codigoUsuario"]) {
                  $resultado[$indiceResultado]["seguidores"][$indiceSiguiendo]["posts"][$indicePosts]=$registroPosts[$k];
                  $indicePosts++;
                }
              }
              $indiceSiguiendo++;
              $j=0;

            }
           
          }

        }
      }
      
      return json_encode($resultado);
    }

  }
?>