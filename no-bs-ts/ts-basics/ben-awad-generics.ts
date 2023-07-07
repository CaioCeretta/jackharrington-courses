const last = <T>(arr: T[]) => {
  return arr[arr.length - 1]
}

const l = last([1, 2, 3]);

const l2 = last(['a', 'b', 'c'])

const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
}

const v = makeArr(5, 6)
const v2 = makeArr('a', 'b');
const v3 = makeArr<string | null, number>("a", 2);

const makeFullName = <T extends { firstName: string, lastName: string}>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  }
}

const v4 = makeFullName({ firstName: 'Caio', lastName: 'Ceretta', age: 27})
// const v5 = makeFullName({ another: 'Caio', lastName: 'Ceretta', age: 27})

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;

type NumberTab2 =  {
  id: string,
  position: number,
  data: number
}

type StringTab = Tab<string>;
