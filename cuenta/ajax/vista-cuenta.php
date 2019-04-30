<?php
    include("../class/class-cuenta.php");
    switch($_GET["accion"]){
        case "listar":
            echo Cuenta::obtenerUsuarios();
        break;
    }
?>