// Задание 1
    let name = prompt('Введите ваше имя');

    const user = {
        name,
        sayHi() {
            return `Hi, ${this.name}!`;
        }
    };
    user.sayHi();

// Задание 2
    function pow({a: x, b: y}, z = 1) {
        return x ** y * z;
    }
    pow({a: 2, b: 3}, 2);

// Задание 3
    const info = ['Kate', 30];

    function getUserInfo(name, age) {
        return `Hello, I'm ${name} and I'm ${age} years old.`;
    }
    getUserInfo(...info);

// Задание 4
    function getNumbers(...numbers) {
        for (let val of numbers) {
            console.log(val);
        }
    }
    getNumbers(1, 2, 3, 4, 5);

// Задание 5
    function countVowelLetters(text) {
        const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
        let counter = 0;

        text.toLowerCase().split('').forEach(letter => vowelLetters.includes(letter) && counter++);

        return counter;
        // text.toLowerCase().split('').filter(letter => vowelLetters.includes(letter)).length;
    }
    countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12

// Задание 6
    function filterUsers(users) {
        const filteredInfo = {};

        filteredInfo['Пользователи младше 40'] = users.filter(user => user.age < 40);
        filteredInfo['Пользователь с именем Федор'] = users.find(user => user.name.startsWith('Fedor'));

        return filteredInfo;
    }

    filterUsers([
        {name: 'Vasya Pupkin', age: 25},
        {name: 'Ivan Petrov', age: 30},
        {name: 'Fedor Ivanov', age: 42}
    ]);

// Задание 7
    function mapUserInfo(userNames) {
        return userNames.map((username, i) => ({[`Пользователь ${i + 1}`]: username}));
    }

    mapUserInfo(['Alesya', 'Vasya', 'Piotr']);

// Задание 8
    function concatObjects(objects) {
        return objects.reduce((previous, current) => Object.assign(previous, current), {});
    }

    concatObjects([
        {name: 'Vasya'},
        {name: 'Piotr', age: 25},
        {salary: '2000$'}
    ]);

// Задание 9
    class Animal {
        constructor(name) {
            this.name = name;
            this._foodAmount = 50;
        }

        _formatFoodAmount() {
            return `${this._foodAmount} гр.`;
        };

        dailyNorm(amount) {
            if (!arguments.length) return this._formatFoodAmount();

            if (amount < 50 || amount > 500) {
                return 'Недопустимое количество корма.';
            }

            this._foodAmount = amount;
        }

        feed() {
            console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
        }
    }

    class Cat extends Animal {
        feed() {
            super.feed();

            console.log('Кот доволен ^_^');
            return this;
        }

        stroke() {
            console.log('Гладим кота.');
            return this;
        }
    }

    let barsik = new Cat('Барсик');

    console.log(barsik.feed().stroke().stroke().feed());

    barsik = null;

// Задание 10
    function createPromise(a, b) {
        return new Promise(resolve => {
            (a > b) && ([a, b] = [b, a]);

            const timer = setInterval(() => {
                if (a === b) {
                    clearInterval(timer);
                    resolve(a);
                }

                console.log(a++);
            }, 1000);
        });
    }

    createPromise(5, 10)
        .then(result => console.log(`Последнее запомненное значение: ${result}`));
