// Задание 1: Использование перебирающего метода массивов.

function filterArr(numbers) {
    return numbers.filter(function(number) {
      return number > 0;
 });
}

filterArr([-1, 0, 2, 34, -2]);


// Задание 2: Возврат первого найденного положительного числа.

function positiveNumber(numbers) {
    return numbers.find(function(number) {
	return numbrer > 0;
  });
}

positiveNumber([-1, 0, 2, 34, -2]);


// Задание 3: Палиндром.

function isPalindrome(str) {
	var lowStr = str.toLowerCase();
	var reverseStr = lowStr.split('').reverse().join('');
	return reverseStr === lowStr;
}

console.log(isPalindrome('шалаш'));
console.log(isPalindrome('казак'));


// Задание 4: Анаграммы.

function areAnagrams(word1, word2) {
    return word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('');
}

areAnagrams('кот', 'отк');

// Задание 5:  Разделение массива на под-массивы.

function divideArr (arr, count) {
    var newArray = [];

    while (arr.length > 0) {
        newArray.push(arr.splice(0, count));
    }
    return newArray;
}

console.log(divideArr([1,2,3,4], 2));
console.log(divideArr([1,2,3,4,5,6,7,8], 3));
