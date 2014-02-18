<h2>Identification</h2>
<form action="index.php?action=admin" method="post">
   <div class="row">
      <div class="large-12 columns">
         <label>Identifiant :
            <input type="text" value="<?php printVar($vars["login"]) ?>" name="login" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <label>Mot de passe :
            <input type="password" value="<?php printVar($vars["password"]) ?>" name="password" />
         </label>
      </div>
   </div>
   <div class="row">
      <div class="large-12 columns">
         <input type="submit" class="button small" value="valider"/>
      </div>
   </div>
</form>
