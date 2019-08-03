var xInput = document.getElementById('x'),
    yInput = document.getElementById('y'),
    createBtn = document.getElementsByTagName('button')[0],
	body = document.body;

xInput.onkeyup = disableBtn;
yInput.onkeyup = disableBtn;

function disableBtn() {
    createBtn.disabled = !(xInput.value.trim() && yInput.value.trim());
}

createBtn.onclick = function() {
    var xValue = +xInput.value,
        yValue = +yInput.value;

    if (!isValidFieldValue(xValue)) {
        resetForm([xInput]);
        showError(xInput);
    }

    if (!isValidFieldValue(yValue)) {
        resetForm([yInput]);
        showError(yInput);
    }

    if (isValidFieldValue(xValue) && isValidFieldValue(yValue)) {
        resetForm([xInput, yInput]);
        drawChessTable(xValue, yValue);
    }
};

function isValidFieldValue(value) {
    return value && isInteger(value) && value >=1 && value <= 10;
}

function isInteger(value) {
    return value === parseInt(value);
}

function showError(input) {
    alert('Введите корректное значение в поле ' + input.id.toUpperCase() + ' - целое число от 1 до 10.');
}

function resetForm(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    disableBtn();
}

function drawChessTable(xValue, yValue) {
    var table = document.getElementsByTagName('table')[0];

    if (table) {
        table.remove();
    }

    table = document.createElement('table');

    for (var i = 0; i < yValue; i++) {
        var tr = document.createElement('tr');

        for (var j = 0; j < xValue; j++) {
            var td = document.createElement('td');

            !((i + j) % 2) && td.classList.add('black');

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    body.appendChild(table);
}

body.onclick = function(event) {
	var target = event.target;

	if (target.tagName === 'TD') {
		var tds = document.getElementsByTagName('td');

		for (var i = 0; i < tds.length; i++) {
			tds[i].classList.toggle('black');
		}
	}
};




