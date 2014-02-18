<?php
session_start();

function getContenu($path,$vars = null) {
   ob_start();
   include($path);
   return ob_get_clean();
}

function printVar($var) {
   if(isset($var)) {
      echo htmlentities($var);
   }
}

$contenu = "";
$message="";
$messageSuccess="";
$page = isset($_GET["page"]) ? $_GET["page"] : "";

// si l'utilisateur est connecté
if(isset($_SESSION['log']) and $_SESSION['log'] == 1) {

   if($page == "modifierIdentifiants") {
   
      $query = $dbh->prepare("SELECT * FROM user");
      $query->execute();
      $result = $query->fetch();
   
      if(isset($_POST["identifiant"]) and isset($_POST["newpassword"]) and isset($_POST["newpassword2"]) and isset($_POST["oldpassword"])) {
      
         if(is_null($_POST["identifiant"])) {
            $message = "Veuillez renseigner l'identifiant";
         } else if($_POST["newpassword"] != $_POST["newpassword2"]) {
            $message = "Les nouveaux mots de passes ne correspondent pas";
         } else if($_POST['oldpassword'] != $result["password"]) {
            $message = "Le mot de passe rentré est incorrect";
         } else {
            $dbh->exec("DELETE FROM user");
            $query = $dbh->prepare("INSERT INTO user VALUES(:login,:mdp)");
            $query->bindParam(":login",$_POST["identifiant"],PDO::PARAM_STR);
            $query->bindParam(":mdp",$_POST["newpassword"],PDO::PARAM_STR);
            $query->execute();
            
            $messageSuccess = "Modification réussie";
         } 
      }
      
      $contenu = getContenu("template/modifier_identifiant.html.php",array(
         "identifiant"=>$result["login"],
         "oldpassword"=>"",
         "newpassword"=>"",
         "newpassword2" => ""));
   
   } else if($page == "secret") {
   
   } else if($page == "videoAccueil") {
   
      if(isset($_POST["urlvideo"])) {
            $query = $dbh->prepare("UPDATE global SET videoAccueil = :video");
            $query->bindParam(":video",$_POST["urlvideo"],PDO::PARAM_STR);
            $query->execute();
            $messageSuccess = "Modification réussie";
      
      }
   
      $query = $dbh->prepare("SELECT * FROM global");
      $query->execute();
      $result = $query->fetch();
      
      $contenu = getContenu("template/video_accueil.html.php",array(
         "urlvideo"=>$result["videoAccueil"]));
   
   } else if($page == "villes") {
   
   } else if($page == "theme") {
   
   } else if($page == "interviews") {
   
      if(isset($_POST["urlvideo"])) {
            $query = $dbh->prepare("UPDATE global SET videoAccueil = :video");
            $query->bindParam(":video",$_POST["urlvideo"],PDO::PARAM_STR);
            $query->execute();
            $messageSuccess = "Modification réussie";
      
      }
   
      $query = $dbh->prepare("SELECT * FROM global");
      $query->execute();
      $result = $query->fetch();
      
      $contenu = getContenu("template/video_accueil.html.php",array(
         "urlvideo"=>$result["videoAccueil"]));
   
   // page par défaut
   } else {
       $contenu = getContenu("template/accueil_admin.html.php");
   }
   
} else {

   // demande de déconnexion
   if($page == "deconnexion") {
      $_SESSION['log'] = 0;
      header("location:index.php");
   }

   // demande de connexion
   if(isset($_POST["password"]) and isset($_POST["login"]) ) {
   
      $query = $dbh->prepare("SELECT COUNT(*) FROM user WHERE login = :login AND password = :password");
      $query->bindParam(":login",$_POST["login"],PDO::PARAM_STR);
      $query->bindParam(":password",$_POST["password"],PDO::PARAM_STR);
      $query->execute();
      $result = $query->fetch();
      
      if($result[0]) {
         $_SESSION['log'] = 1;
         $contenu = getContenu("template/accueil_admin.html.php");
      } else {
         $message = "Mauvais identifiant ou mot de passe";
      }
      
      $contenu = getContenu("template/formulaire_login.html.php",array('login'=>$_POST["login"],'password'=>$_POST['password']));
   
   // formulaire de connexion
   } else {
      $contenu = getContenu("template/formulaire_login.html.php");
   }
}

include("template/main_admin.html.php");


?>
