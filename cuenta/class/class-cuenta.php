<?php
    class Cuenta{
      protected $codigoUsuario;
      protected $nombreUsuario;  
      protected $email;
      protected $fechaNacimiento;
      protected $pais;
      protected $usuario;  

    public function __construct(
      $codigoUsuario,
      $nombreUsuario,
      $email,
      $fechaNacimiento,
      $pais,
      $usuario
    ){
      $this->codigoUsuario= $codigoUsuario;
      $this->nombreUsuario= $nombreUsuario;
      $this->email= $email;
      $this->fechaNacimiento= $fechaNacimiento;
      $this->pais= $pais;
      $this->usuario= $usuario; 
    }

        public function __toString(){
          $b["codigoUsuario"]=$this->codigoUsuario;
          $b["nombreUsuario"]=$this->nombreUsuario;
          $b["email"]=$this->email;
          $b["fechaNacimiento"]=$this->fechaNacimiento;
          $b["pais"]=$this->pais;
          $b["usuario"]=$this->usuario;
           
          return json_encode($b);
        }
        public static function obtenerUsuarios(){
            $archivo= fopen("../data/usuarios.json", "r");
            $respuesta = array();
            while(($linea=fgets($archivo))){
                $respuesta[] = json_decode($linea,true); 
            }
            fclose($archivo);
            return json_encode($respuesta);
        }

        public function guardar(){
          $archivo = fopen("data/usuarios.json","a+"); //r Lectura, w Escritura, a+ Anexar
          fwrite($archivo,$this->__toString()."\n"); //Convertir arreglo a cadena JSON
          fclose($archivo);
          

      } 

    }  
?>