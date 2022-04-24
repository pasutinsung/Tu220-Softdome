<script>
  import { mode, subjects, askedSubject } from './stores.js';
  
  function addSubject(subject) {
    if (subject.remaining > 0){
      alert('Completed')
      subject.remaining --
      $askedSubject.push(subject)
      $subjects = $subjects.filter(item => subject.id != item.id)
      $subjects = $subjects
    }else{
      alert('The quota was full')
    }
  }
</script>
<div>
  <h1>ขอโควต้า</h1>
</div>

{#each $subjects as subject}
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
      <button class = ask on:click|once={() => addSubject(subject)}>ขอโควตา</button>
    </div>
{/each}

<button on:click={()=>$mode='menu'}>Back to Menu</button>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
  
div {
  font-family: 'Noto Sans Thai', sans-serif;
  line-height: 30px;
}
  
button {
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: black;
  color: white;
  border-radius: 5px;
}
  .frame {
  background: rgba(0 , 0 ,0 ,0.1);
  color: #000000;
  border: 500px;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
}
  .ask{
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: #27D149;
  color: white;
  border-radius: 5px;
    
  }
button:hover {
  background: #ababab;
  color: white ;
}
</style>