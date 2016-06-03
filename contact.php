<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Accueil</title>
        <link rel="stylesheet" href="main.css">
          
    </head>
    
    
    <body>
        
    <?php

if (get_magic_quotes_gpc())
{
    $nom = stripslashes($_POST['user_name']); 
    $mail = stripslashes($_POST['user_email']); 
    $tel = stripslashes($_POST['user_phone']); 
    $msg = stripslashes($_POST['user_message'])."\r\n"; 
} 
else
{  
    $nom = $_POST['user_name']; 
    $mail = $_POST['user_email']; 
    $tel = $_POST['user_phone']; 
    $msg = $_POST['user_message']."\r\n";
}
   

//officiel
$TO = array("4lsandnsound@gmail.com","thubert@etud.insa-toulouse.fr","amiel@etud.insa-toulouse.fr"); 

$subject = "[SITE - 4L SAND N SOUND] _ Nouvelle demande"; 


// Headers
// Headers
$headers = 'From: '.$nom.' <'.$mail.'>'."\r\n\r\n";



$msg .= 'Le numéro renseigné est : '.$tel."\r\n\r\n";

foreach ($TO as $to)
{
    mail($to, $subject, $msg, $headers) ;
} 
echo 

'<script language="Javascript">

document.location.replace("accuse.php");

</script>';

?>
        
    </body>
    
    
</html>
<!--

Bloc de commentaires 
-->
