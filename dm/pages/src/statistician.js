import { Chart } from "chart.js";
import { rolls } from 'roller.js'

export async function Statistician() {
// how to await the results of the user entry?
// do the math and pass it to chart 
// how to generate the x values? 
 // maybe just special-case the d100

 const results = [xValues, yValues];
 return results
}

export async function Visualizer(results) {
 const labels = results[0];
 const data = rolls;

 new Chart("Results", {
  type: 'line',
  data: {
   labels: labels,
   datasets: [{
    data: data,
    borderColor: 'blue',
    fill: true,
   }]
  }
 })
}

