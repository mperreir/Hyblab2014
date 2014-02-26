<!doctype html>
<html class="no-js" lang="en">
   <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Administration dataviz</title>
      <link rel="stylesheet" href="css/foundation.css" />
      <script src="js/vendor/modernizr.js"></script>
      <script src="js/vendor/jquery.js"></script>
      <script src="js/foundation/foundation.js"></script>
      <script src="js/foundation/foundation.alert.js"></script>
   </head>
   <body>
      <nav class="top-bar" data-topbar>
         <ul class="title-area">
            <li class="name"> <h1><a href="#">Administration dataviz terristoire</a></h1></li>
            <li class="toggle-topbar menu-icon"><a href="#">Menu</a></li>
         </ul>
         <section class="top-bar-section">
            <ul class="right">
               <li> <a href="index.php?action=admin&page=deconnexion">Déconnexion</a>
            </ul>
         </section>
      </nav>
      
      <div class="row">
         <div class="medium-2 large-2 columns panel">
            <ul class="side-nav">
               <!-- class="active" -->
               <li class="heading">Général</li>
               <li><a href="index.php?action=admin&page=modifierIdentifiants">modifier login et mot de passe</a></li>
               <li><a href="index.php?action=admin&page=secret">modifier fonctionnalité secrète</a></li>
               <li class="divider"></li>
               <li class="heading">Données</li>
               <li><a href="index.php?action=admin&page=videoAccueil">Vidéo d'accueil</a></li>
               <li><a href="index.php?action=admin&page=villes">Villes</a></li>
               <li><a href="index.php?action=admin&page=theme"">Thèmes</a></li>
               <li><a href="index.php?action=admin&page=interviews">Interviews</a></li>
            </ul>
         </div>
         <div class="medium-10 large-10 columns">
            <div class="panel">
               <?php
               if(isset($message) and $message != "") {
               ?>
                  <div data-alert class="alert-box warning round">
                     <?php echo $message; ?>
                     <a href="#" class="close">&times;</a>
                  </div>
               <?php } ?>
                              <?php
               if(isset($messageSuccess) and $messageSuccess != "") {
               ?>
                  <div data-alert class="alert-box success round">
                     <?php echo $messageSuccess; ?>
                     <a href="#" class="close">&times;</a>
                  </div>
               <?php } ?>
            <?php echo $contenu; ?>         
            </div>
         </div>
      </div>
      
      <script type="text/javascript">
      $(document).foundation({
         alert: {
            animation_speed: 500,
            animation: 'fadeOut'
         }
      });
      </script>
   </body>
</html>
