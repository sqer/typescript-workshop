interface Person {
  age: number;
  setAge(age: number);
  getName(): string;
}

// Patient class impl
export class Patient {}

// Object instance impl
function testPersonInterface() {
  // let ed: Person = new Patient("ed");

  // let bob: Person;
}


class Power {
  name: string;
  description: string;
}

enum Universe {Marvel, DC, Vertigo, Mucha}

// TODO A: introduce SuperHero interface:
// fields:
// + String name
// + String secretIdentity
// + Power array powers
// + Universe universe

// TODO 1: create object instance implementing SuperHero interface (name: Spider Man)
// TODO 2: create class DCSuperHero implementing SuperHero interface
// TODO 3: create 2 instances of DCSuperHero: Batman and Flash


// TODO B: introduce SuperVillain interface:
// fields:
// + String name
// methods:
// + string evilLaugh()
// + void setMasterPlan(String plan)

// TODO 4: create object instance implementing SuperVillain interface (name: Two-Face)
// TODO 5: create class BatmanEnemy implementing SuperVillain interface
// TODO 6: create 2 instances of BatmanEnemy: Joker and Bane