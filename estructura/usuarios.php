<?php
    switch($_GET["accion"]){
        case 'listar':
            include("../class/class-usuarios.php");
            echo Usuarios::obtenerSoloUsuarios();
         break;
        case 'posts':
            include("../class/class-usuarios.php");
            echo Usuarios::obtenerUsuarios($_POST["usuario-actual"]);
        break;


    }
?>