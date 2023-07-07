class Doggy {
   
  constructor (public readonly name: string, public readonly age: number) {

 }
}

const loki = new Doggy('Loki', 5);
const meg = new Doggy('Meg', 2);

// console.log(meg.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(loki);
console.log(DogList.instance.getDogs());