function deepClone(obj) {
  var copy;

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Object.prototype.toString.apply(obj) === '[object Array]') {
    copy = [];
    for (var i = 0; i < obj.length; i += 1) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  copy = {};

  for (i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = deepClone(obj[i]);
    }
  }
  return copy;
}

var initialObj = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };

      var clonedObj = deepClone(initialObj);

      clonedObj.object.object2.array2[1].name = 'Vasya';
      clonedObj.array.push(2);

      console.log(initialObj);
      console.log(clonedObj);

      console.log(clonedObj.boolean);
      console.log(clonedObj.array[3]);
      console.log(clonedObj.object.string2);
      console.log(clonedObj.method);
      console.log(clonedObj.object.object3);



























