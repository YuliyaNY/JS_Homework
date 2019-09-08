//  Задание 2:

var regExp = /^((\+?375\-?)|(8\-?0))(29|25|44|33|17)\-?(\d{3})\-?(\d{2})\-?(\d{2})$/;
var str = '+375-25-777-77-77';
var result = regExp.test(str);
console.log(result);

//  Задание 3:

function vowelCount(str) {
    var text = str.match(/[аоиеёэыуюя]/gim);
    return text === null ? 0 : text.length;
}
console.log(vowelCount('Доброе утро'));