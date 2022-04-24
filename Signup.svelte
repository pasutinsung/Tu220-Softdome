<script>
  import { mode, accounts, account} from './stores.js';

  let new_number = "";
  let new_pin = "";
  let new_prefix = "";
  let new_studentID = "";
  let new_name = "";
  let new_lastname = "";
  let new_faculty = "";
  let new_year = "";

  function check() {
    if (new_number != '' &&  new_pin != '' && new_prefix != '' && new_studentID != '' && new_name != '' && new_lastname != '' && new_faculty != "" && new_year != '') {
      $accounts['001'].set('pin' , new_pin)
      mode.set("Login");}
  }
</script>
<div>
<h2>Id : 001</h2>
   {$accounts[$account]}
pin <input on:input={(e) => (new_pin = e.target.value) } /> 
<!--prefix <input on:input={(e) => (prefix = e.target.value) } /> 
name <input on:input={(e) => (name = e.target.value) } /> 
lastname <input on:input={(e) => (lastname = e.target.value) } /> 
faculty <input on:input={(e) => (faculty = e.target.value) } /> 
year <input on:input={(e) => (year = e.target.value) } /> -->
<br><br>
<button class= sub on:click={() => check()}>ยืนยัน</button>
</div>

<button on:click={()=>$mode='Login'}>Back to Menu</button>

<style>
button {
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-family: 'Noto Sans Thai', sans-serif;
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
input { border: none;
  outline: none ;
  height: 40px;
  width: 330px;
  font-size: 18px;
  border-radius: 20px;
  text-indent: 10px;
  font-family: 'Noto Sans Thai', sans-serif;
  }
  input:focus { border: 5px solid  #1c8adb;
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