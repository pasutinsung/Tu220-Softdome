<script>
  import { mode, subjects, askedSubject } from './stores.js';

  function deleteSubject(subject) {
    $askedSubject = $askedSubject.filter(item => subject.id != item.id)
    subject.remaining ++
    $subjects.push(subject)
  }
</script>
<div>
  <h1>ประวัติการขอโควต้า</h1>
</div>

{#each $askedSubject as subject}
    <div class='frame'>
      <div><strong>
        {subject.subjectName}
        {subject.id}
      </strong></div>
      <div>
        <strong>Section:</strong> {subject.section}  
      </div>
      <div>
        <strong>อาจารย์:</strong> {subject.teacher}
      </div>
      <div>
        <strong>เวลา:</strong> {subject.date}
      </div>
      <div>
        <strong>จำนวนรับ:</strong> {subject.amount}
        <strong>เหลือ:</strong> {subject.remaining}
      </div>
      <div>
        <strong>เปิดรับสมัครขอโควตา:</strong> {subject.ApplicationDate}
      </div>
      <button class = del on:click|once={() => deleteSubject(subject)}>ยกเลิกการขอ</button>
    </div>
{/each}
<button on:click={()=>$mode='menu'}>Back to Menu</button>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
  
h1 {
  font-family: 'Noto Sans Thai', sans-serif;
}
  
button {
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-family: 'Noto Sans Thai', sans-serif;
}
  
button:hover {
  background: #ababab;
  color: white ;
}
  .frame {
  background: rgba(0 , 0 ,0 ,0.1);
  color: #000000;
  border: 500px;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
div {
  font-family: 'Noto Sans Thai', sans-serif;
  line-height: 30px;
}
  .del {font-family: 'Noto Sans Thai', sans-serif;
  background-color: #EB4646;
  color: white;
  border-radius: 5px;
  font-family: 'Noto Sans Thai', sans-serif;
    
  }
</style>