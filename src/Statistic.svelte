<script> 
import { onMount } from "svelte";
import { mode, subjects, askedSubject } from './stores.js'; 
  var xValues = [];
  var yValues = [];
  for (let i = 0; i < $subjects.length; i++) {
    xValues.push($subjects[i].amount);
    yValues.push($subjects[i].id);
  }
/*หาวิธีดึง ID กับ (Amount - Remaining) มาใส่ใน X กับ Y */
function createChart() {
    const chart1 = document.getElementById("myChart1");
    const myChart1 = new Chart(chart1, {
      type: "bar",
      data: {
        labels: yValues,
        datasets: [{
            label: "สถิติผู้ขอโควตา",
            data: xValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  onMount(() => {
    createChart();
  });
</script>
<h1>สถิติการเปิดโควต้า</h1>
<canvas id="myChart1" width="3" height="1" />
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
