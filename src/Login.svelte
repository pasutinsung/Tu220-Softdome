<script>
  import { accounts, account, admins, islogin, mode } from './stores.js';
  let accountNo = '';
  let pin = '';
  function checkLogin() {
    if (!(accountNo in $accounts) || $accounts[accountNo].pin != pin) {  
    } else {
      $islogin = true;
      $mode = 'menu';
      $account = accountNo;
      accountNo = '';
      pin = '';
    }
  }
  function checkLogin_a() {
    if (!(accountNo in $admins) || $admins[accountNo].pin != pin) {
      alert('Invalid ID Numbers or password');
    } else {
      $islogin = true;
      $mode = 'admin';
      $account = accountNo;
      accountNo = '';
      pin = '';
    }
  }
  function Forgot() {
    $islogin = false;
    $mode = "Forgot";
  }
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
</script>
<main on:load={startTime()}>
  <div id="txt" />
  <body>
    <div class=login-box>
      <h3>เข้าสู่ระบบ(นักศึกษา/บุคลากร)</h3>
      <img src = "Avatar-PNG-Download-Image.png" class= "avatar">
      <p>ID</p>
      <input type = "text" bind:value={accountNo} placeholder="Account No">
      <p>Password</p>
      <input type="password" bind:value={pin} placeholder="PIN">
      <button on:click={checkLogin} on:click={checkLogin_a}>Sign In</button>
      <br><br>
      <button class = si on:click={Forgot}>Forgot password</button>
    </div>
  </body>

</main>
<style> 
@import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
body {

  background-size: cover;
  background-position: center;
  font-family: sans-serif;
  }
  
.login-box{
  width: 320px;
  height: 420px;
  background: rgba(0 , 0 ,0 ,0.5);
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  box-sizing: border-box;
  padding:70px 30px ;
  border-radius: 15px ;
}
  
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(32%);
}
  
  h3 {
    margin:0 ;
    padding: 0 0 20px;
    text-aligh: center;
    font-size: 20px
  }
  
.login-box p{
  margin: 0 ;
  padding: 0 ;
  font-weight: strong;
}
  
.login-box input{
  width: 100%;
  margin-bottom: 20px ;
}
  
.login-box input[type="password"],[type=text]{
  border: none;
  border-botttom: 1px solid #fff ;
  background: transparent;
  outline: none;
  height: 40px ;
  color: #fff ;
  font-size: 16px;
  
}
button {
  border: none;
  outline: none ;
  height: 40px;
  width: 250px;
  background: #1c8adb ;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
}
  
button:hover {
  cursor:pointer;
  background: #39dc79;
  color: #000 ;
}

h3 {
  font-family: 'Noto Sans Thai', sans-serif;
}      
.in {
  border: none;
  outline: none ;
  height: 20px;
  width: 100px;
  background: rgba(0 , 0 ,0 ,0.1);
  color: #fff;
  font-size: 10px;
  border-radius: 20px;
}

  #txt {
    display: flex;
    margin-left: 27px;
    color: #ffffff;
    font-size: 30px;
    justify-content: flex-start;
  }
  .si {border: none;
  outline: none ;
  height: 40px;
  width: 90px;
  background: whitesmoke ;
  color: #1c8adb;
  font-size: 15px;
  border-radius: 20px;
  }
  .si:hover {
  cursor:pointer;
  background:#1c8adb ;
  color: #000 ;
}
</style>
