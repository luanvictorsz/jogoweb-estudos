var canvas = document.getElementById('interface');
var context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(50, 50, 100, 100);

context.lineWidth = 3;
context.strokeStyle = 'blue';
context.strokeRect(50, 50, 100, 100)