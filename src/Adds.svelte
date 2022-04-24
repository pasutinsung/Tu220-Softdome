<script>
  import { mode , subjects} from './stores.js';
  let id = '';
  let subjectName = '';
  let section = '' ;
  let amount = '' ;
  let remaining = '' ;
  let teacher = '' ;
  let date = '' ;
  let ApplicationDate = '' ;
  function addSub(){
    id = document.getElementById('id').value ;
    subjectName = document.getElementById('subjectName').value ;
    section = document.getElementById('section').value ;
    teacher = document.getElementById('teacher').value ;
    date = document.getElementById('date').value ;
    amount = document.getElementById('amount').value ;
    remaining = +document.getElementById('amount').value ;
    ApplicationDate = document.getElementById('ApplicationDate').value ;
    let newSub ={id:id ,
                 subjectName:subjectName ,
                 section:section ,
                 teacher: teacher,
                 date: date,
                 amount: amount,
                 remaining: remaining,
                 ApplicationDate: ApplicationDate
                }
    $subjects.push(newSub);
    $subjects = $subjects
    alert("New subject added")
   id = '';
   subjectName = '';
   section = '' ;
   teacher = '';
   date = '';
   amount = '' ;
   remaining = '' ;
   ApplicationDate = '' ;
  }

</script>

<div>
  <h1>เพิ่มรายวิชา</h1>
  <input type="text" value= {id} id="id" placeholder="รหัสวิชา" /> <br><br>
  <input type="text" value = {subjectName} id="subjectName" placeholder="ชื่อวิชา" /> <br><br>
  <input type="text" value = {section} id="section" placeholder="section" /> <br><br>
  <input type="text" value = {amount} id="amount" placeholder="จำนวนรับ" /> <br><br>
  <input type="text" value = {teacher} id="teacher" placeholder="ชื่อผู้สอน" /> <br><br>
  <input type="text" value = {date} id="date" placeholder="วันและเวลาเรียน XX 00:00-00:00" /> <br><br>
  <input type="text" value = {ApplicationDate} id="ApplicationDate" placeholder="วันเปิดการขอโควตา dd-mm-yyyy"/> <br><br>
  <button class = sub type="submit" on:click={()=>addSub()}>Submit</button>
  </div>
<button class = f on:click={()=>$mode='admin'}>Back to Menu</button>
<style>
 @import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
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
  .f {
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
  
  div {
  width: 400px;
  height: 650px;
  background: rgba(0 , 0 ,0 ,0.3);
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
  box-sizing: border-box;
  padding:70px 30px ;
  font-family: 'Noto Sans Thai', sans-serif;  
  }
</style>







