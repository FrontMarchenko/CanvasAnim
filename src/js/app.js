let canvas = $('#myCanvas')[0]; 
let ctx = canvas.getContext('2d'); 



function draw(t) {
  ctx.clearRect(0,0,500,500);
  let x = 200;
  let y = 200;
  let radius = 60;
  let n = 200;
  ctx.beginPath();
  
  for (var i = 0; i<n; i++) {
    var xx = x + (radius + 40*Math.sin(t/100+130/5*i*Math.PI/n))*Math.sin(i*2*Math.PI/n);
    var yy = y + (radius + 40*Math.sin(t/100+130/5*i*Math.PI/n))*Math.cos(i*2*Math.PI/n);
   
    ctx.lineTo(xx,yy); 
  }
  


  ctx.closePath();
  ctx.stroke();

  window.requestAnimationFrame(draw);
}
draw();




// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// //var time = 0;
// var radius = 100;


// var centerX = 200;
// var centerY = 200;
// var n = 200;

// ctx.beginPath();

// for (var i = 0; i<n; i++) {
//   var x = centerX + (radius + 40*Math.sin(26*i*Math.PI/n))*Math.sin(i*2*Math.PI/n);
//   var y = centerY + (radius + 40*Math.sin(26*i*Math.PI/n))*Math.cos(i*2*Math.PI/n);

//   ctx.lineTo(x,y); 
// }
// ctx.closePath(); 
// ctx.strokeStyle= '#00ff7f';
// ctx.stroke();

