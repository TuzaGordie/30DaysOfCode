

function draw() {
  console.log('hey');
  varcanvas = document.getElementById("myCanvas");
  varcontext = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = canvas.width / 2 - 20;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  var gradience = context.createRadialGradient(centerX, centerY, radius - 30, centerX, centerY, radius - 15);
  gradience.addColorStop(0, '#ffffff');
  gradience.addColorStop(1, '#000000');
  context.fillStyle = gradience;
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = '#003300';
  context.closePath();
  context.restore();
  context.beginPath();
  context.arc(centerX, centerY, 10, 0, 2 * Math.PI, false);
  context.stroke();
  context.fillStyle = "black";
  context.fill();
  context.closePath();
  context.restore();
  context.strokeStyle = '#ffffff';
  context.translate(centerX, centerY);
  for (var i = 1; i <= 60; i++) {
    angle = Math.PI / 30 * i;
    sineAngle = Math.sin(angle);
    cosAngle = -Math.cos(angle);
    //Hour Ticks
    if (i % 5 == 0) {
      context.lineWidth = 8;
      iPointX = sineAngle * (radius - 55);
      iPointY = cosAngle * (radius - 55);
      oPointX = sineAngle * (radius - 40);
      oPointY = cosAngle * (radius - 40);
    } else {
      //Minute Ticks 	context.lineWidth = 3;
      iPointX = sineAngle * (radius - 50);
      iPointY = cosAngle * (radius - 50);
      oPointX = sineAngle * (radius - 40);
      oPointY = cosAngle * (radius - 40);
    }
    context.beginPath();
    context.moveTo(iPointX, iPointY);
    context.lineTo(oPointX, oPointY);
    context.stroke();
  }
  var now = new Date();
  var hrs = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  //Seconds
  var sangle = (Math.PI / 30 * sec);
  var sPointX = Math.sin(sangle) * (radius - 60);
  var sPointY = -Math.cos(sangle) * (radius - 60);
  context.beginPath();
  context.lineWidth = 2;
  context.moveTo(0, 0);
  context.lineTo(sPointX, sPointY);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.lineWidth = 4;
  sangle = (Math.PI / 30 * (min + (sec / 60)));
  sPointX = Math.sin(sangle) * (radius - 80);
  sPointY = -Math.cos(sangle) * (radius - 80);
  context.moveTo(0, 0);
  context.lineTo(sPointX, sPointY);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.lineWidth = 6;
  sangle = (Math.PI / 6 * (hrs + (min / 60) + (sec / 3600)));
  sPointX = Math.sin(sangle) * (radius - 100);
  sPointY = -Math.cos(sangle) * (radius - 100);
  context.moveTo(0, 0);
  context.lineTo(sPointX, sPointY);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.font = "25px Helvetica light";
  if (hrs > 12) {
    context.fillText(hrs - 12, -30, canvas.height / 2);
  } else {
    context.fillText(hrs, -30, canvas.height / 2);
  }
  context.fillText(":", -6, canvas.height / 2);
  context.fillText(min, 0, canvas.height / 2);
  context.fillText(":", 25, canvas.height / 2);
  context.fillText(sec, 30, canvas.height / 2);
  context.closePath();
  context.restore();
  context.translate(-centerX, -centerY);
  setTimeout(draw, 1000);
}
