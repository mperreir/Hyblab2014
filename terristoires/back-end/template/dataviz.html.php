<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test dataviz</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="js/vendor/modernizr.js"></script>
    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation/foundation.js"></script>
    <script src="js/vendor/round-chart.js"></script>
  </head>
  <body>

   <div id="page1" class="page row bg-green">
      <div class="columns small-12 large-12 columns">
         <h1 class="title">open data</h1>
         <h3 class="title">ou en est l'ouest ?</h3>
      </div>
   </div>
   
   
   <div id="page2" class="page row bg-blue">
      <h2 class="title">l'open data en question</h2>
      
      <div class="small-12 medium-10 medium-centered large-10 large-centered columns">
         <div class="flex-video">
            <!--
            <iframe src="//www.youtube.com/embed/MCIVuPr2EYw" width="420" height="315"  frameborder="0" allowfullscreen></iframe>
            -->
         </div>
      </div>
   </div>
   
   <div id="page3" class="page row bg-gray">
      <h2 class="title">l'open data en France</h2>
      <div class="small-12 medium-11 large-11 large-centered medium-centered columns">
         <img src="img/carte-France-page3.svg" alt="maps of France"/>
      </div>
      
      <ul class="small-block-grid-2 medium-block-grid-4 large-block-grid-4">
         <li>
            <img src="img/pictogramme-nombre-d-habitant-page3.svg" alt="picture face of one people"/>
            <span id="picto-nb-hab">200000 habitants</span>
         </li>
         <li>
            <img src="img/pictogramme-jeux-de-donnees-page3.svg" alt="chart"/>
            <span id="picto-nb-jeux-donnees">134 jeux de données</span>
         </li>
         <li>
            <img src="img/pictogramme-nombre-de-donnees-par-habitants-page3.svg" alt="two arrow"/>
            <span id="picto-ratio-hab">jeux de données par habitant</span>
         </li>
         <li>
            <img src="img/pictogramme-thematique-des jeux-de-donnees-page3.svg" alt="house with two tree"/>
            <span id="picto-nb-hab">thématiques des jeux de données</span>
         </li>
      </ul>
   </div>
   
   <div id="page4" class="page row bg-red">
      <div class="small-12 medium-11 medium-centered large-11 large-centered columns">
         <div class="row">
            <div class="small-12 medium-6 large-6 columns">
               <h2 class="title">nombre de jeux de données</h2>
               <div class="graphique" id="nb-jeux-donnees">
                  <div class="villes">
                     <span class="ville">nantes</span><br/>
                     <span class="ville">rennes</span><br/>
                     <span class="ville">paris</span><br/>
                     <span class="ville">lyon</span>
                  </div>
               </div>
               <img src="img/ombre.svg" alt="shadow" class="shadow-page4"/>
            </div>
            <div class="small-12 medium-6 large-6 columns">
               <h2 class="title">radio de données par habitants</h2>
               <div class="graphique" id="ratio-jeux-donnees">
                  <div class="villes">
                     <span class="ville">nantes</span><br/>
                     <span class="ville">rennes</span><br/>
                     <span class="ville">paris</span><br/>
                     <span class="ville">lyon</span>
                  </div>
               </div>
               <img src="img/ombre.svg" alt="shadow" class="shadow-page4"/>
            </div>
         </div>
      </div>
   </div>
   
   <div id="page5" class="page row bg-gray">
      <h2 class="title">thématique des jeux de données</h2>
   </div>
   
   <div id="page6" class="page row bg-blue">
      <h1 class="title">et l'ouest ?<h1>
   </div>
   
   <div id="page7" class="page row bg-green">
   </div>
   
   <div id="page8" class="page row bg-red">
      <h2 class="title">interviews</h2>
      
      <div class="small-12 medium-10 medium-centered large-10 large-centered columns">
         <div class="flex-video">
            <!--
            <iframe src="//www.youtube.com/embed/GP7aP67qQjQ" width="420" height="315"  frameborder="0" allowfullscreen></iframe>
            -->
         </div>
         <p>
            <img src="img/facebook.svg" alt="face"/>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, 
         </p>
      </div>
   </div>
   
   <div id="page9" class="page row bg-blue">
   
      <h2 class="title">l'open data en application</h2>
      <div class="small-12 medium-5 large-5 columns">
         <a href="http://nanteslive.fr/">
            <img src="img/logo_nanteslive.png" alt="nantes live logo"/>
         </a>
         <p>
            application mobile gratuite pour iPhone et tablette iPad qui regroupe les actualités, vidéos et services pratiques nantais, en temps réel.
         </p>
         
         <a href="http://www.rengo.fr/rennes/">
            <img src="img/logo_rengo.png" alt="rengo logo"/>
         </a>
         <p>
            application mobile gratuite qui indique en temps réel, les horaires et disponibilités de nombreux services de transports rennais (trains, bus, vélos, parkings, etc.). Cette application est également disponible pour les villes de Nantes, Bordeaux, Strasbourg...
         </p>
      </div>
      <div class="large-2 medium-2 columns">
      </div>
      <div class="small-12 medium-5 large-5 columns">
         <a href="http://www.handimap.org/">
            <img src="img/logo_handimap.png" alt="handimap.org logo"/>
         </a>
         <p>
            application web gratuite qui permet de calculer des itinéraires accessibles aux personnes à mobilité réduite dans la ville de Rennes (ainsi que Montpellier).
         </p>
         
         <a href="http://www.greenraid.fr/">
            <img src="img/logo_greenraid.png" alt="green raid logo"/>
         </a>
         <p>
            application mobile et web gratuite, qui permet de trouver autour de soi des lieux et des infos correspondant à un mode de vie locale et durable.
         </p>
      </div>
   </div>
   
   <footer class="row bg-gray">
      <div class="small-12 medium-2 large-2 columns">
         <a href="https://twitter.com/terristoires" ><img src="img/twitter.svg" alt="twitter logo" class="logo-social-footer logo-social-facebook-footer"/></a>
         <a href="https://www.facebook.com/terristoires.info" ><img src="img/facebook.svg" alt="facebook logo" class="logo-social-footer logo-social-twitter-footer"/></a>
      </div>
      
      <div class="small-12 medium-8 large-8 columns">
         <p class="content-footer">
         &copy; Nom prénom etc..
         </p>
      </div>
      
      <div class="small-12 medium-2 large-2 columns">
         <img src="img/footer-car.svg" alt="flying car" class="logo-car-footer"/>
      </div>
   
   </footer>
  
  <script type="text/javascript"> 
  $(document).foundation({
     // specify the class used for active divs
     active_class: 'active',
     // how many pixels until the magellan bar sticks, 0 = auto
     threshold: 0,
     // pixels from the top of destination for it to be considered active
     destination_threshold: 20,
     // calculation throttling to increase framerate
     throttle_delay: 50}
  );
  // animated round graph
   nbJeuxDonnees = new CanvasRenderer(document.getElementById('nb-jeux-donnees'));
   to = {'greenLine':100,'whiteLine':10,'redLine':40,'yellowLine':100}
   nbJeuxDonnees.animate(to);
   
   ratioJeuxDonnees = new CanvasRenderer(document.getElementById('ratio-jeux-donnees'));
   to2 = {'greenLine':64,'whiteLine':20,'redLine':60,'yellowLine':10}
   ratioJeuxDonnees.animate(to2);
  </script>
  </body>
</html>
