<?php
    class Usuarios {
        private $codigoUsuario;
        private $nombre;
        private $correo;
        private $contrasena;
        private $imagen;
        private $siguiendo;   

        public function __construct(
            $codigoUsuario,
            $nombre,
            $correo,
            $contrasena,
            $imagen,
            $siguiendo
        ){
            $this->codigoUsuario= $codigoUsuario;
            $this->nombre= $nombre;
            $this->correo= $correo;
            $this->contrasena= $contrasena;
            $this->imagen= $imagen;
            $this->siguiendo= $siguiendo;
        }
        public static function obtenerSoloUsuarios(){
            return file_get_contents("../data/usuarios.json");
        }

        public static function obtenerUsuarios($usuarioLogin){
            $registrosUsuarios= json_decode(file_get_contents("../data/usuarios.json"),true);
            $registrosHistorias = json_decode(file_get_contents("../data/historias.json"),true);
            $registrosPosts= json_decode(file_get_contents("../data/posts.json"),true);
            $registrosComentarios=json_decode(file_get_contents("../data/comentarios.json"),true);
            $resultado=array();
            $indicesSeguidores=0;
            $indiceResultado=0;
            $indicePosts=0;
            $indiceHistorias=0;
            $indiceComentarios=0;
            for ($i=0; $i <count($registrosUsuarios) ; $i++) { 
                if ($registrosUsuarios[$i]["codigoUsuario"]==$usuarioLogin) {
                    $resultado[$indiceResultado]=$registrosUsuarios[$i];
                    $resultado[$indiceResultado]["seguidores"]=array();

                    for ($j=0; $j <count($resultado[$indiceResultado]["siguiendo"]) ; $j++) { 
                            if ($resultado[$indiceResultado]["siguiendo"][$indicesSeguidores]==$registrosUsuarios[$j]["codigoUsuario"]) {
                                $resultado[$indiceResultado]["seguidores"][$indicesSeguidores]= $registrosUsuarios[$j];
                                $resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["posts"]=array();
                                
                                for ($k=0; $k <count($resultado[$indiceResultado]["seguidores"]) ; $k++) { 
                                    if ($resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["codigoUsuario"]==$registrosPosts[$k]["codigoUsuario"]) {
                                        $resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["posts"][$indicePosts]=$registrosPosts[$k]; 
                                        $resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["posts"][$indicePosts]["comentarios"]=array();

                                        $indicePosts=0;
                                        for ($l=0; $l < count($resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["posts"]); $l++) { 
                                           if ($resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["posts"][$indicePosts]["codigoPost"]==$registrosComentarios[$l]["codigoPost"]) {
                                            $resultado[$indiceResultado]["seguidores"][$indicesSeguidores]["posts"][$indicePosts]["comentarios"][$indiceComentarios]=$registrosComentarios[$l];
                                           }
                                           $indiceComentarios++;

                                        }

                                    }
                                    
                                }
                                $indicesSeguidores++;
                            }
                            
                        
                    }
                    
                }
                
            }

            return json_encode($resultado);
        }



    }
?>