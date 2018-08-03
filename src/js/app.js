let canvas = $('#myCanvas')[0]; 
let ctx = canvas.getContext('2d'); 



function draw(t) {
  ctx.clearRect(0,0,500,500);
  let x = 250;
  let y = 250;
  let radius = 60;
  let n = 200;
  ctx.beginPath();
  
  for (var i = 0; i<n; i++) {
    var xx = x + (radius + 35*Math.sin(t/100+130/5*i*Math.PI/n))*Math.sin(i*2*Math.PI/n);
    var yy = y + (radius + 35*Math.sin(t/100+130/5*i*Math.PI/n))*Math.cos(i*2*Math.PI/n);
   
    ctx.lineTo(xx,yy);

  }
  


  ctx.closePath();
  ctx.stroke();
  ctx.strokeStyle= '#32CD32';
 

  window.requestAnimationFrame(draw);
}
draw();
