var MapsFrance = function(el) {
   
   var map = $(el);
   map.css('position','relative');
   
   var option = new Object();
   option.srcpoint = 'img/Point.svg';
   option.altpoint = 'point situant une ville';
   option.zindex = 1000;
   option.maxWidthPoint = 30;
   option.onclick = function(evt){
   
      var ville = $(this).attr('data-ville');
      
      $.getJSON( "data/villes.json", function( data ) {
      
         for(i=0;i<data.length;i++) {
            if(data[i].nom == ville) {
               // ajout d'espace blanc tous les 3 chiffres
               var popu = "";
               var tabPop = (data[i].population+"").split("");
               for(j=0;j<tabPop.length;j++) {
                  if(j%3 == 0){
                     popu= " "+popu;
                  }
                  popu = tabPop[tabPop.length-1-j]+ popu;
               }
               $('#picto-nb-hab').html(popu);
               $('#picto-nb-jeux-donnees').html(data[i].jeuxDeDonnees);
               var ratio = (Math.round(data[i].jeuxDeDonnees/data[i].population*100000*100))/100;
               $('#picto-ratio-hab').html(ratio);
               // gestion des pluriels
               $('#add-s-habitant').html('s');
               $('.add-x-jeu').html('x');
            }
         }
      });
   };
   
   // préchargement de l'image du point
   var img = new Image();
   img.src=option.srcpoint;

   /**
    * Ajoute un point à la carte
    */
   this.addPoint = function(x,y,name) {
      var point = document.createElement('img');
      
      $(point).click(option.onclick);
      
      $(point).attr('src',option.srcpoint);
      $(point).attr('alt',option.altpoint);
      $(point).css('position','absolute');
      $(point).css('display','block');
      
      widthPoint = option.maxWidthPoint*$(document).width()/1000;
      if($(document).width() > 1000) {
         widthPoint = option.maxWidthPoint;
      }
      $(point).css('width',widthPoint+'px');
      $(point).css('opacity',0);
      
      // point affiche le nom on hover
      $(point).attr('title',name);
      $(point).attr('class','has-tip tip-top');
      $(point).attr('data-tooltip','');
      $(point).attr('data-ville',name);
      
      // valeur étalon : nantes
      // latidude 47.218371
      // longitude -1.553621
      // bottom:59.5%;
      // left:20%;
      var correctionLeft = 4.4;
      var left =(20*(y+correctionLeft))/(-1.553621+correctionLeft);
      
      
      var correctionBottom = 41.4;
      var bottom = (59.5*(x-correctionBottom))/(47.218371-correctionBottom); 
      
      $(point).css('left',left+'%');
      $(point).css('bottom',100+'%');
      $(point).attr('data-ville-bottom',bottom);

      // ajout du point sur la map
      map.append(point);
   }
   
   // lance l'animation sur les points
   this.launchAnimate = function() {
      map.find('.has-tip').each(function() {
         var bottom = $(this).attr('data-ville-bottom');
         $(this).animate({'opacity':1,'bottom':bottom+'%'},1000);
      });
   };
   
   /**
    * Supprime tous les points
    */
   this.clear = function() {
      map.find('.has-tip').each(function() {
         $(this).remove();
      });
   }
}
