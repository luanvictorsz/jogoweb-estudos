var canvas = document.getElementById('interface');
var context = canvas.getContext('2d');

// context.fillStyle = 'red';
// context.fillRect(50, 50, 100, 100);

// context.lineWidth = 3;
// context.strokeStyle = 'blue';
// context.strokeRect(50, 50, 100, 100);


//iniciar Path
context.beginPath();

context.moveTo(75, 250);
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250, 120);
context.lineTo(75, 250);

context.lineWidth = 2;
context.strokeStyle = 'red';

context.stroke();

//preencher area do desenho:
//context.fillStyle();

//contornar area do desenho:
//context.strokeStyle();


