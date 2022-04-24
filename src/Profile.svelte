<script>
  import { mode, accounts, account} from './stores.js';
  let newid = '';
  let newname = '';
  let newlastname = '' ;
  let newfulty = '' ;
  let newyear = '' ;
  function changeprofile(){
    newid = document.getElementById('newid').value ;
    newname = document.getElementById('newname').value ;
    newlastname =   document.getElementById('newlastname').value ;
    newfulty = document.getElementById('newfulty').value ;
    newyear = document.getElementById('newyear').value ;
    $accounts[$account].studentID = newid ;
    $accounts[$account].name = newname;
    $accounts[$account].lastname = newlastname;
    $accounts[$account].faculty = newfulty ;
    $accounts[$account].year = newyear; 
    alert("New change updated ")
  newid = '';
  newname = '';
  newlastname = '' ;
  newfulty = '' ;
  newyear = '' ;
  }
  
</script>
<div>
  <h1>Profile</h1>
<h2>รหัสนักศึกษา : {$accounts[$account].studentID}</h2>
<h2>{$accounts[$account].prefix} {$accounts[$account].name}
{$accounts[$account].lastname}</h2>
<h2>คณะ : {$accounts[$account].faculty}</h2>
<h2>ชั้นปีที่ : {$accounts[$account].year}</h2>
  <h1>Update profile</h1>
  <input type="text" value= {newid} id="newid" placeholder="newid" /><br><br>
  <input type="text" value = {newname} id="newname" placeholder="newname" /><br><br>
  <input type="text" value = {newlastname} id="newlastname" placeholder="newlastname" /><br><br>
  <input type="text" value = {newfulty} id="newfulty" placeholder="newfaculty" /><br><br>
  <input type="text" value = {newyear} id="newyear" placeholder="newyear" />
  <button class = sub type="submit" on:click={()=>changeprofile()}>Submit</button>
  
</div>
<button on:click={()=>$mode='menu'}>Back to Menu</button>
<style>
input { border: none;
  outline: none ;
  height: 35px;
  width: 330px;
  font-size: 18px;
  border-radius: 20px;
  text-indent: 10px;
  font-family: 'Noto Sans Thai', sans-serif;
  }
  input:focus { border: 5px solid  #1c8adb;
  }
  div {
  width: 400px;
  height: 800px;
  background: rgba(0 , 0 ,0 ,0.3);
  color: #fff;
  top: 45%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  box-sizing: border-box;
  padding:70px 30px ;
  font-family: 'Noto Sans Thai', sans-serif;  
  }
button {
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: black;
  color: white;
  border-radius: 5px;
  top: 50% ;
}
.sub {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  top: 1% ;
  }
.sub:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
  }
  .sub:hover:after {
  transform: translate(0, 0);
}

.sub:active {
  background-color: #ffdeda;
  outline: 0;
}

.sub:hover {
  outline: 0;
}
</style>