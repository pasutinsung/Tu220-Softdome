<script> 
import { mode, subjects, askedSubject } from './stores.js'; 


 let src ="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js";



/*หาวิธีดึง ID กับ (Amount - Remaining) มาใส่ใน X กับ Y */
var xValues = ["SF210",'SF220','SF230','MA111'];
var yValues = [50,50,52,52];
var barColors = ["red", "green","blue","orange","brown","pink","dark-blue"];
new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});
</script>

</body>
</html>
<h1>สถิติผู้การเปิดโควต้า</h1>
<canvas id="myChart" style="width:100%;max-width:900px"></canvas>
<button on:click={()=>$mode='admin'}>Back to Menu</button>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Sans+Thai:wght@400;700&display=swap');
  
  button {
  font-family: 'Noto Sans Thai', sans-serif;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-family: 'Noto Sans Thai', sans-serif;
}
</style>
