let a = ["new", "table", "pen"];
// a.push('hello');
// a.pop();
// a.unshift('hello');
// a.shift();
// console.log(a);

class Car {
  constructor(brand, name) {
    this.brand = brand;
    this.name = name;
    this.b = '2';
  }
  a(aname) {
    return aname;
  }

}

Car.prototype.year = 2022;
Car.prototype.b = "a";
// Car.prototype.brand = "f";
Car.prototype.year = "q";

const myCar = new Car("BMW", "M100");
// console.log(myCar.a("b"));
console.log(myCar.brand);
console.log(myCar.a("a"));
console.log(myCar.year);
console.log(myCar.b);
