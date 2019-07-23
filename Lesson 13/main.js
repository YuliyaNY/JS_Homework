var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://google.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://google.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var elem = document.getElementById('button');
elem.addEventListener('click', changeStyle);

function changeStyle(EO) {

var elems = firstPar.children;
for (var i = 0; i < elems.length; i++) {
	var elem = elems[i];
	elem.style.color = 'red';
	elem.style.fontWeight = '600';
	}
}


var x = secondPar.children[0];

x.onclick = function(event) {
var href = event.target.getAttribute('href');
alert(href);

return false;
};















