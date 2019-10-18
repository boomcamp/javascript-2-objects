const isNode = new Function(`
  try {
    return this === global;
  } catch (e) {
    return false;
  }
`);

if (isNode()) {
  // test if file is running in a node process
  const fs = require('fs');
  const path = require('path');

  const filePath = path.resolve(__dirname, '../../'); // this should be the root dir
  fs.readdirSync(filePath) // eval all of the js files faking how a browser would execute
    .filter(path => {
      if (path) {
        return /\.js$/.test(path);
      } else {
        return false;
      }
    })
    .forEach(file => {
      global.eval(fs.readFileSync(`${filePath}/${file}`) + '');
    });
}

describe('practice.js', function() {
  describe('me', function() {
    it('should exist', function() {
      expect(me).toBeDefined();
    });
    it('should be an object', function() {
      expect(me).toEqual(jasmine.any(Object));
    });
    it('should have name and age keys', function() {
      expect(me.hasOwnProperty('name')).toBe(true);
      expect(me.hasOwnProperty('age')).toBe(true);
    });
    it('should have values for name and age', function() {
      expect(me.name).toBeTruthy();
      expect(me.age).toBeTruthy();
    });
  });

  describe('favoriteThings', function() {
    it('should exist', function() {
      expect(favoriteThings).toBeDefined();
    });
    it('should have band, food, person, book, movie, and holiday keys', function() {
      expect(favoriteThings.hasOwnProperty('band')).toBe(true);
      expect(favoriteThings.hasOwnProperty('food')).toBe(true);
      expect(favoriteThings.hasOwnProperty('person')).toBe(true);
      expect(favoriteThings.hasOwnProperty('book')).toBe(true);
      expect(favoriteThings.hasOwnProperty('movie')).toBe(true);
      expect(favoriteThings.hasOwnProperty('holiday')).toBe(true);
    });
    it('should have values for all keys', function() {
      expect(favoriteThings.band).toBeTruthy();
      expect(favoriteThings.food).toBeTruthy();
      expect(favoriteThings.person).toBeTruthy();
      expect(favoriteThings.book).toBeTruthy();
      expect(favoriteThings.movie).toBeTruthy();
      expect(favoriteThings.holiday).toBeTruthy();
    });
  });

  describe('favoriteThings (part 2)', function() {
    it('should still exist', function() {
      expect(favoriteThings).toBeDefined();
    });
    it('should now have car and brand keys', function() {
      expect(favoriteThings.hasOwnProperty('car')).toBe(true);
      expect(favoriteThings.hasOwnProperty('brand')).toBe(true);
    });
    it('should have values for car and brand', function() {
      expect(favoriteThings.car).toBeTruthy();
      expect(favoriteThings.brand).toBeTruthy();
    });
  });

  describe('favoriteThings (part 3)', function() {
    it('food should be "Chicken Nuggets"', function() {
      expect(favoriteThings.food).toBe('Chicken Nuggets');
    });
    it('book should be "Harry Potter"', function() {
      expect(favoriteThings.book).toBe('Harry Potter');
    });
  });

  describe('backPack', function() {
    it('should exist', function() {
      expect(backPack).toBeDefined();
    });

    describe('item', function() {
      it('should exist', function() {
        expect(item).toBeDefined();
      });
      it('should equal "firstPocket"', function() {
        expect(item).toBe('firstPocket');
      });
    });

    it('should have a firstPocket property', function() {
      // using bracket notation as this is how the readme is written
      var item = 'firstPocket';
      expect(backPack.hasOwnProperty(item)).toBe(true);
    });
    it('firstPocket should have a value of "chapstick"', function() {
      expect(backPack.firstPocket).toBe('chapstick');
    });
  });

  describe('user2', function() {
    it('name should be "Aodhan Hayter" and email should be "aodhan@boom.camp" ', function() {
      expect(user2.name).toBe('Aodhan Hayter');
      expect(user2.email).toBe('aodhan@boom.camp');
    });
  });

  describe('methodCollection', function() {
    it('should exist', function() {
      expect(methodCollection).toBeDefined();
    });
    describe('logHello', function() {
      it('should exist', function() {
        expect(methodCollection.hasOwnProperty('logHello')).toBe(true);
      });
      it('should be a function', function() {
        expect(methodCollection.logHello).toEqual(jasmine.any(Function));
      });
      it('should console.log "hello"', function() {
        var consoleLog = spyOn(console, 'log');
        methodCollection.logHello();
        expect(consoleLog).toHaveBeenCalledWith('hello');
      });
    });
  });

  describe('makePerson', function() {
    it('should exist', function() {
      expect(makePerson).toBeDefined();
    });
    it('should return an object', function() {
      expect(makePerson()).toEqual(jasmine.any(Object));
    });

    describe('return object', function() {
      var returnObject = {};
      beforeEach(function() {
        returnObject = makePerson('Tester', 'Nov 1', '123456789');
      });
      it('should have 3 keys named "name", "birthday" and "ssn"', function() {
        var numberOfKeys = Object.keys(returnObject).length;

        expect(numberOfKeys).toBe(3);
        expect(returnObject.hasOwnProperty('name')).toBe(true);
        expect(returnObject.hasOwnProperty('birthday')).toBe(true);
        expect(returnObject.hasOwnProperty('ssn')).toBe(true);
      });
      it('should assign the values from the arguments passed', function() {
        expect(returnObject.name).toBe('Tester');
        expect(returnObject.birthday).toBe('Nov 1');
        expect(returnObject.ssn).toBe('123456789');
      });
    });
  });

  describe('makeCard', function() {
    it('should exist', function() {
      expect(makeCard).toBeDefined();
    });
    it('should return an object', function() {
      expect(makeCard()).toEqual(jasmine.any(Object));
    });
  });
});