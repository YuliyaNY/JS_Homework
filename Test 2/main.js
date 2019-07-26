// Решение 1:

function Person(name, personAge) {
    function getFormattedAge() {
        return personAge + ' лет.';
    }

    this.name = name;

    var self = this;
    this.showInfo = function() {
        console.log('Привет, меня зовут ' + self.name + ', мне ' + getFormattedAge());
    };
}

function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;

    var personShowInfo = this.showInfo;
    this.showInfo = function() {
        personShowInfo();
        console.log('Моя зарплата ' + this.salary + '$.');
    };
}

var person = new Person('Вася', 18);
console.log(person.showInfo());

var employee = new Employee('Петя', 20, 2000);
console.log(employee.showInfo());

// Решение 2:

function Person(name, age) {
    this._personAge = age;
    this.name = name;
}

Person.prototype._getFormattedAge = function() {
    return this._personAge + ' лет.';
};

Person.prototype.showInfo = function() {
    console.log('Привет, меня зовут ' + this.name + ', мне ' + this._getFormattedAge());
};

function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function() {
    Person.prototype.showInfo.apply(this, arguments);

    console.log('Моя зарплата ' + this.salary + '$.');
};

var person = new Person('Вася', 18);
console.log(person.showInfo());

var employee = new Employee('Петя', 20, 2000);
console.log(employee.showInfo());
