function MyDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    calories = "100";
    name = "override";
  }
}

@MyDecorator
class Meal {
  constructor(public name: string) {

  }
}

function decoratorApp() {
  const meal: Meal = new Meal("Chicken Salad");
  console.log(meal);
}

export { decoratorApp };