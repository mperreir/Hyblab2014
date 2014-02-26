<h2>Modification vidéo d'accueil</h2>
<form action="index.php?action=admin&page=videoAccueil" method="post">
   <div class="row">
      <div class="large-12 columns">
         <label>Url de la vidéo :
            <input type="text" value="<?php printVar($vars["urlvideo"]) ?>" name="urlvideo" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <input type="submit" class="button small" value="valider"/>
      </div>
   </div>
</form>
