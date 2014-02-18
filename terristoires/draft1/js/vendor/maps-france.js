var MapsFrance = function(el) {
   
   var map = $(el);
   map.css('position','relative');
   var option = new Object();
   option.srcpoint = 'point.svg';
   option.altpoint = 'point situant une ville';

   /**
    * Add a point to the map
    */
   this.addPoint = function(x,y,name) {
      var point = document.createElement('img');
      $(point).attr('src',option.srcpoint);
      $(point).attr('alt',option.altpoint);
      $(point).css('position','absolute');
      $(point).css('display','block');
      
      console.log($(document).width());
      // ratio : 33px -> 800px
      
      $(point).css('width',(33*$(document).width()/800)+'px');
      $(point).css('opacity',0);
      
      // TODO point affiche le nom on hover
      $(point).attr('title',name);
      
      
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

      // ajout du point sur la map
      map.append(point);
      
      // animation d'apparition
      $(point).animate({'opacity':1,'bottom':bottom+'%'},1000);
   }
}
