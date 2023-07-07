interface Cat {
  name: string;
  breed: string;
}

// type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed
  }
}


const boris = makeCat('Boris', 'Siberiano');
// boris.name = 'Piter';

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);

// c1[0] = 50;

console.log(c1);

//This says that the contents of the array are constants
const reallyConst = [1, 2, 3] as const;

//Shouldn't be allowed
// reallyConst[0] = 50;


