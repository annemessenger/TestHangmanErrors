
function removeCircle(ctx, errors) {

  // start with full display and remove one circle for each error.
  switch(errors) {
    case 1:
      ctx.clearRect(65,20,20,20);
      break;
    case 2:
      ctx.clearRect(45,50,20,20);
      break;
    case 3:
      ctx.clearRect(85,50,20,20);
      break;
    case 4:
      ctx.clearRect(25,80,20,20);
      break;
    case 5:
      ctx.clearRect(65,80,20,20);
      break;
    case 6:
      ctx.clearRect(105,80,20,20);
      break;
    case 7:
      ctx.clearRect(5,110,20,20);
      break;
    case 8:
      ctx.clearRect(45,110,20,20);
      break;
    case 9:
      ctx.clearRect(85,110,20,20);
      break;
    case 10:
    default:
      ctx.clearRect(125,110,20,20);
      break;
  }

}

function drawCircle(ctx, x, y, color) {
  ctx.beginPath();
  ctx.arc(x, y, 9, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}


function makeCircles(ctx) { 

  // Start with the maximum number of circles.

  drawCircle(ctx, 75, 30, 'red');
  drawCircle(ctx, 55, 60, 'yellow');  
  drawCircle(ctx, 95, 60, 'yellow'); 
  drawCircle(ctx, 35, 90, '#00ff00');  
  drawCircle(ctx, 75, 90, '#00ff00');
  drawCircle(ctx, 115, 90, '#00ff00');
  drawCircle(ctx, 15, 120, '#00ccff');
  drawCircle(ctx, 55, 120, '#00ccff');
  drawCircle(ctx, 95, 120, '#00ccff');
  drawCircle(ctx, 135, 120, '#00ccff');
}  


function addLine(ctx, errors) {
  // add a line for each error.
  switch(errors) {
    case 1:
      ctx.moveTo(5, 170);
      ctx.lineTo(55, 170);
      break;
    case 2:
      ctx.moveTo(30, 170);
      ctx.lineTo(30, 5);
      break;
    case 3:
      ctx.moveTo(30,5);
      ctx.lineTo(90,5);
      break;
    case 4:
      ctx.moveTo(75,5);
      ctx.lineTo(75,30);
      break;
    case 5:
      ctx.arc(75, 40, 9, -0.5 * Math.PI, 1.5 * Math.PI, false);
      break;
    case 6:
      ctx.moveTo(75, 50);
      ctx.lineTo(75, 85);
      break;
    case 7:
      ctx.moveTo(75, 55);
      ctx.lineTo(50, 85);
      break;
    case 8:
      ctx.moveTo(75, 55);
      ctx.lineTo(100,85);
      break;
    case 9:
      ctx.moveTo(75, 85);
      ctx.lineTo(60, 135);
      break;
    case 10:
    default:
      ctx.moveTo(75, 85);
      ctx.lineTo(90, 135)
      break;
  }
  ctx.stroke();
}
