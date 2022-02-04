import { Visualizer } from "./statistician";

export function Charter() {
 return (
  <div id='curve'>
   <canvas id='Results' style='width:100%'></canvas>
   <Visualizer />
  </div>
 )
}