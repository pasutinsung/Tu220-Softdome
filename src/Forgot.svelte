<script>
  import { mode, accounts, account} from './stores.js';
  let newpass = '';

  function changepass(){
    newpass = document.getElementById('newid').value ;
    alert("New password updated ")
    $accounts[$account].pin = newid ;
  newpass = '';  
  }
</script>

<input type="text" value= {newid} id="newid" placeholder="newid" /><br><br>
  <input type="text" value = {newname} id="newname" placeholder="newname" /><br><br>
  <input type="text" value = {newlastname} id="newlastname" placeholder="newlastname" /><br><br>