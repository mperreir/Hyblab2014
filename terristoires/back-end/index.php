<?php

// test écriture bdd
is_writable("db/dataviz.sqlite") or die("Veuillez ajouter les droits d'&eacute;critures sur db/dataviz.sqlite");

// connexion à la base de données
$dbh = new PDO('sqlite:db/dataviz.sqlite');
$dbh->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if(isset($_GET['action'])) {

   $action = $_GET['action'];
   
   if($action == "admin") {
      include("admin.php");
   } else if($action == "data") {
      include("data.php");
   }

} else {
   include("template/dataviz.html.php");
}

?>
