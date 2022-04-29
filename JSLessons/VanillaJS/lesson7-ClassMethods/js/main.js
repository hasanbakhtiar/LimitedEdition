// ()=>{}
// const info=()=>{
//     return 'Hello'
// }
// console.log(info());

// const info = "JAvaScript";

// console.log(eval('info'));
// console.log(info.search(/a/i));
// RegExp
// console.log(info.match(/a/gi));
// console.log(info.repeat(100))

class Car {
    constructor(name){
        this.carName = name;
        return this.carName ;
    }
    
    
  brand(brandName) {
      let a = 5;
    return brandName + a + this.carName;

  }
}

class Moto extends Car {
  calculateYear(year) {
    //    return `My moto year:${year}`;
    return "My moto age:" + (new Date().getFullYear() - year);
  }
}

const infoCar = new Car('Aston Martin');
const infoMoto = new Moto();

console.log(infoCar.brand("Mercedes"));
// console.log(infoMoto.brand("Yamaha"));
console.log(infoMoto.calculateYear(2010));
console.log(infoCar.carName);
