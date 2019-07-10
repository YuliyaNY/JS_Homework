// Задание 1:

function filterArr(arr) {
 return arr > 0;   
}

var newArr = [-1, 0, 2, 34, -2];
console.log(newArr.filter(filterArr));


// Задание 2:

function positiveNumber(a,b,c) {
	return a > 0;
}

var arr = [-1,5,10];
console.log(arr.find(positiveNumber));


// Задание 3:

function isPalindrome(str) {
	var lowStr = str.toLowerCase();
	var reverseStr = lowStr.split('').reverse().join('');
	return reverseStr === lowStr;
}

console.log(isPalindrome('шалаш'));
console.log(isPalindrome('казак'));


// Задание 4:

function areAnagrams(word1, word2) {

    if (word1.length !== word2.length) {
        return false;
    }
    
    var sortWord1 = word1.split('').sort().join('');
    var sortWord2 = word2.split('').sort().join('');

    return (sortWord1 === sortWord2);
}

console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false


// Задание 5:

function divideArr (arr, count) {
    var newArray = [];

    while (arr.length > 0) {
        newArray.push(arr.splice(0, count));
    }
    return newArray;
}

console.log(divideArr([1,2,3,4], 2));
console.log(divideArr([1,2,3,4,5,6,7,8], 3));
