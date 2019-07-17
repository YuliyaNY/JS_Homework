// Задание 1:

var names = ['Vasya', 'Kate', 'Olga'];
var obj = {};
var nameObj = names.map(function(name) {
    obj['name'] = names;
    return obj;
});


// Задание 2:

function toStr(arr) {
    console.log('Текущее время ' + arr.join(':'));
}

toStr(['00', '13', '24']);


// Задание 3:

function vowelCount(str) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i].toLowerCase() == 'а' || str[i].toLowerCase() == 'о' || str[i].toLowerCase() == 'и'
            || str[i].toLowerCase() == 'е' || str[i].toLowerCase() == 'ё' || str[i].toLowerCase() == 'э'
            || str[i].toLowerCase() == 'ы' || str[i].toLowerCase() == 'у' || str[i].toLowerCase() == 'ю'
            || str[i].toLowerCase() == 'я') {

            count+=1;
        }
    }
    return count;
}
vowelCount('Доброе утро');

// другой вариант решения:

function vowelCount(str) {

    return str.replace(/[^аоиеёэыуюя]/g, "").length;
}

console.log(vowelCount('Доброе утро'));


// Задание 4: ???

function countLetters(txt) {
    return txt + ' ' + txt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split('').join('').length;

}
countLetters('Hello World!!!');