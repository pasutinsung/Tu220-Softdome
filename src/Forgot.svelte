<script>
  import { mode, accounts, account} from './stores.js';
  let id = '';
  let newpass = '';
  
  function change_password() {
    let account_now = document.getElementById("account_now").value;
    $account = account_now;
    let new_password = document.getElementById("new_password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (new_password == confirm_password) {
      $accounts[$account].pin = new_password;
      alert("เปลี่ยนรหัสผ่านเรียบร้อย");
      $mode = "";
      $account = "";
    } else {
      alert("รหัสผ่านใหม่ไม่ตรงกัน");
    }
  }

  function goback() {
    $mode = "";
  }
</script>
<div class= frame>
    <h1>Reset password</h1>
    <div class="container-user">
     ID : <input id="account_now" type="text" placeholder="ID" /><br><br>
    </div>
      New password : <input id="new_password" type="text" placeholder="รหัสผ่านใหม่" /><br><br>
     Confirm password  <input
        id="confirm_password"
        type="text"
        placeholder="ยืนยันรหัสผ่านใหม่"
        on:keypress={(e) => {
          if (e.key == "Enter") {
            change_password();
          }
        }}
      /><br><br><br>
<button on:click={() => change_password()}>ยืนยันรหัสผ่านใหม่</button><br><br>
<button on:click={() => goback()}>ย้อนกลับ</button>
</div>
<style>
.frame{
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
  input { border: none;
  outline: none ;
  height: 35px;
  width: 330px;
  font-size: 18px;
  border-radius: 20px;
  text-indent: 10px;
  font-family: 'Noto Sans Thai', sans-serif;
  width: 100%;
  margin-bottom: 20px
  }
  input:focus { border: 5px solid  #1c8adb;
  }
button {border: none;
  outline: none ;
  height: 50px;
  width: 250px;
  background: whitesmoke ;
  color: #1c8adb;
  font-size: 18px;
  border-radius: 20px;
  right: 50% ;
}
button:hover { cursor:pointer;
  background:#1c8adb ;
  color: #000 ;
  
}
</style>