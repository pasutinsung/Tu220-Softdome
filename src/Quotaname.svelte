<script>
  import { mode, askedSubject,subjects,account,accounts } from './stores.js';
</script>
  {#each $askedSubject as subject}
    <div class = frame>
      <div>
        {subject.subjectName}
        {subject.id}
      </div>
      <div>
        Section: {subject.section}  
      </div>
      <div>
        จำนวนรับ: {subject.amount} คน
        เหลือ: {subject.remaining} คน
      </div>
      <div>
        เปิดรับสมัครขอโควตา: {subject.ApplicationDate}
      </div>
    </div>
{/each}
<button on:click={()=>$mode='admin'}>Back to Menu</button>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
  
div {
  font-family: 'Noto Sans Thai', sans-serif;
  line-height: 50px;
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
  margin: 5px; }
  
</style>