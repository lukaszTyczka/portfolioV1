console.log('hello another');

var gear = document.querySelector('.gear');
var bbox = gear.getBBox();

var x = bbox.x + bbox.width / 2;
var y = bbox.y + bbox.height / 2;

console.log(x, y);
