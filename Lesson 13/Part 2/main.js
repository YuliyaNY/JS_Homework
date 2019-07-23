var x = document.getElementById("x");
var y = document.getElementById("y");
var button = document.getElementById("button");

function success() {
	 if(x.value==="" || y.value==="") { 
            button.disabled = true; 
        } else { 
           button.disabled = false;
        }
    }

//2: validation 

function isNumb() {
  x = document.getElementById('x').value;
  y  = document.getElementById('y').value;

  if (isNaN(x) || x < 1 || x > 10 || y < 1 || y > 10) {
    alert('Input not valid');
  } else  {
    chessBoard();
  }
}

//3: chess board

function chessBoard() {
var x = document.getElementById('x').value;
var y = document.getElementById('x').value;

var table = document.createElement('table');
for (var i = 1; i <= x; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j <= y; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = 'white';
        } else {
            td.className = 'black';
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);

var i = 0;
  for (i = 0; i < document.getElementsByClassName('black').length; i++) {
    document.getElementsByClassName('black')[i].style.backgroundColor = 'black';
  }
  for (i = 0; i < document.getElementsByClassName('white').length; i++) {
    document.getElementsByClassName('white')[i].style.backgroundColor = 'white';
  }
  for (i = 0; i < document.getElementsByTagName('td').length; i++) {
    document.getElementsByTagName('td')[i].style.width = '25px';
    document.getElementsByTagName('td')[i].style.height = '25px';
  }
}

// change color ???

function start() {
  var submit = document.getElementsByTagName('td');
  submit.addEventListener('click', toggle);
};

function toggle() {
  var color = document.getElementsByClassName('white');
    if(color.style.backgroundColor = 'white') {
      color.style.backgroundColor ='black';
   	} else {
    color.style.backgroundColor = "white";
	}
};
start();




