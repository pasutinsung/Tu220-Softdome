<script>
  import { mode, data, account,accounts } from './stores.js';
</script>
<body>
  <nav>
    <ul>
    <li class='subject'><button on:click={()=>$mode='Displaysub'}>ดูรายชื่อวิชา</button></li>
    <li class='quota'><button on:click={()=>$mode='Askquota'}>ขอโควต้า</button></li>
    <li class='done'><button on:click={()=>$mode='Asked'}>ดูรายชื่อวิชาที่ขอโควต้า</button></li>
    <li class='profile'><button on:click={()=>$mode='Profile'}>โปรไฟล์</button></li>
    </ul>
  </nav>
</body>
<div>
  <h1>ยินดีต้อนรับ {$accounts[$account].prefix} {$accounts[$account].name} {$accounts[$account].lastname}</h1>
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
  
:global(body){
  background: url(662957.png) ;
  
}
  
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #1c8adb;
  border-radius: 20px;
}

li {
  float: left;
}

li button {
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: #1c8adb;
  border: none;
  height: 40px;
  width: 250px;
  list-style: none;
  list-style-position: inside;
  margin-left: 58px;
  font-family: 'Noto Sans Thai', sans-serif;
}
div {
  font-family: 'Noto Sans Thai', sans-serif;
  top: 50%;
  left: 36%;
  position: absolute;
}
  
li button:hover {
  background: #00BFFF;
  color: #000 ;
}
</style>