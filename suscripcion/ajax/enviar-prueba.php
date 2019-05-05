<?php
$nombre= $_POST['Nombre'];
$apellido= $_POST['Apellido'];
$direccionEmail= $_POST['DireccionEmail'];
$body = "Estimado Sr: ".$nombre." ".$apellido." usted a sido invitado a formar parte de el plan Premium Familiar";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'photojavhn@gmail.com';                     // SMTP username
    $mail->Password   = 'Canon1998';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('photojavhn@gmail.com', 'Equipo Spotify');
    $mail->addAddress($direccionEmail, $nombre);     // Add a recipient
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Invitacion Plan Familiar Premium';
    $mail->Body    = $body;

    $mail->send();
    echo 'Envio Exitoso';
} catch (Exception $e) {
    echo "Ha ocurrido un error: {$mail->ErrorInfo}";
}