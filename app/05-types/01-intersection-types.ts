interface Loggable {
  log(): void;
}

interface Cacheable {
  cache(): void;
}

class Meal implements Loggable, Cacheable {
  constructor(public name: string) { }

  log(): void { }
  cache(): void { }
}

class Menu implements Loggable {
  constructor(public name: string) { }

  log(): void { }
}

function logAndCache(object: Loggable & Cacheable): void {
  object.log();
  object.cache();
}

/*
 * $Required
 * 1. Make logAndCache(menu) work;
 * 2. Add new type to logAndCache function parameter which will add ability to persist object in db
 * 3. Add new function named "extend" with two parameters object1 and object2. Function should extend
 *  object1 with properties of object2, return type of function should be a composition of first object type and second object type
 */


function intersectionTypeApp() {
  // const meal: Meal = new Meal("Salad");
  // const menu: Menu = new Menu("Vegetarian Menu");
  // logAndCache(meal);
  // logAndCache(menu);
}

export { intersectionTypeApp };