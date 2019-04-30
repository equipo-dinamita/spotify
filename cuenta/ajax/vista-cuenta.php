<?php
    include("../class/class-cuenta.php");
    include("../class/class.phpmailer.php");
    include("../class/class.smtp.php");
    switch($_GET["accion"]){
        case "listar":
            echo Cuenta::obtenerUsuarios();
        break;
        case "enviarCorreo":
            
            $email_user = "enrique97_barrientos97@hotmail.com";
            $email_password = "sasukeuchiha15";
            $the_subject = "Phpmailer prueba by Evilnapsis.com";
            $address_to = "photojavhn@gmail.com";
            $from_name = "Evilnapsis";
            $phpmailer = new PHPMailer();
            // ---------- datos de la cuenta de Gmail -------------------------------
            $phpmailer->Username = $email_user;
            $phpmailer->Password = $email_password; 
            //-----------------------------------------------------------------------
            // $phpmailer->SMTPDebug = 1;
            $phpmailer->SMTPSecure = 'ssl';
            $phpmailer->Host = "smtp.gmail.com"; // GMail
            $phpmailer->Port = 465;
            $phpmailer->IsSMTP(); // use SMTP
            $phpmailer->SMTPAuth = true;
            $phpmailer->setFrom($phpmailer->Username,$from_name);
            $phpmailer->AddAddress($address_to); // recipients email
            $phpmailer->Subject = $the_subject;	
            $phpmailer->Body .="<h1 style='color:#3498db;'>Hola Mundo!</h1>";
            $phpmailer->Body .= "<p>Mensaje personalizado</p>";
            $phpmailer->Body .= "<p>Fecha y Hora: ".date("d-m-Y h:i:s")."</p>";
            $phpmailer->IsHTML(true);
            $phpmailer->Send();
        break;
    }
?>