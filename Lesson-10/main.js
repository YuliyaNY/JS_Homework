// класс-родитель
function Animal(name) {
    this.name = name;
    this.foodAmount = 50;
}
// методы родителя
Animal.prototype.formatFoodAmount = function() {
    return this.foodAmount + 'гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this.formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this.foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

// класс-потомок
function Cat(name) {
    Animal.apply(this, arguments);
}
// наследование
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// методы потомка
Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
};

var cat = new Cat('Барсик');
cat.feed();
