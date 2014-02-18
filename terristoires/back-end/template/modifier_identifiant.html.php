<h2>Modification des identifiants</h2>
<form action="index.php?action=admin&page=modifierIdentifiants" method="post">
   <div class="row">
      <div class="large-12 columns">
         <label>Identifiant :
            <input type="text" value="<?php printVar($vars["identifiant"]) ?>" name="identifiant" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <label>Mouveau mot de passe :
            <input type="password" value="<?php printVar($vars["newpassword"]) ?>" name="newpassword" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <label>Mouveau mot de passe confirmation :
            <input type="password" value="<?php printVar($vars["newpassword2"]) ?>" name="newpassword2" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <label>Ancien mot de passe :
            <input type="password" value="<?php printVar($vars["oldpassword"]) ?>" name="oldpassword" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <input type="submit" class="button small" value="valider"/>
      </div>
   </div>
</form>
