export class Product {
  public title: string;
  public price: number;
  constructor() {
    this.title = "TV Samsung";
    this.price = 100000;
  }
}
const tv = new Product();
console.log(tv);

export class Person {
  constructor(public name: string, public city?: string) {
    this.name = name;
    this.city = city;
  }
}
const yo = new Person("Ignacio", "Rosario");
console.log(yo);
console.log(yo.name);
console.log(yo.city);

export class Hero extends Person {
  constructor(public alterEgo: string, public power: string) {
    super("Tony", "New York");
  }
}
const ironman = new Hero("Iron Man", "Intelligence");
console.log(ironman);

export class Villain {
  constructor(
    public alterEgo: string,
    public power: string,
    public person: Person
  ) {}
}
const laufi = new Person("Laufi", "Asgard");
const loki = new Villain("Loki", "Magic", laufi);
console.log(loki);
