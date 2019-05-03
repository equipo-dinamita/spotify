<?php
    class Cuenta{
      protected $codigoUsuario;
      protected $nombreUsuario;  
      protected $email;
      protected $fechaNacimiento;
      protected $pais;
      protected $usuario; 
      protected $tipoPlan;
      protected $tarjeta; 

    public function __construct(
      $codigoUsuario,
      $nombreUsuario,
      $email,
      $fechaNacimiento,
      $pais,
      $usuario,
      $tipoPlan,
      $tarjeta
    ){
      $this->codigoUsuario= $codigoUsuario;
      $this->nombreUsuario= $nombreUsuario;
      $this->email= $email;
      $this->fechaNacimiento= $fechaNacimiento;
      $this->pais= $pais;
      $this->usuario= $usuario; 
      $this->tipoPlan = $tipoPlan;
      $this->tarjeta = $tarjeta;
    }

        public function __toString(){
          $b["codigoUsuario"]=$this->codigoUsuario;
          $b["nombreUsuario"]=$this->nombreUsuario;
          $b["email"]=$this->email;
          $b["fechaNacimiento"]=$this->fechaNacimiento;
          $b["pais"]=$this->pais;
          $b["usuario"]=$this->usuario;
          $b["tipoPlan"]=$this->tipoPlan;
          $b["tarjeta"]=$this->tarjeta;
           
          return json_encode($b);
        }
        public static function obtenerUsuarios(){
            return file_get_contents("../data/usuarios.json");
        }

    }  
?>