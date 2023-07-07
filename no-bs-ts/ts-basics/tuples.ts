type ThreeDCoordinate = [
  x: number,
  y: number,
  z: number
]

function add3DCoordinat(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
  return [
    c1[0] + c2[0],
    c1[1] + c2[1],
    c1[2] + c2[2],
  ]
}

console.log(add3DCoordinat([1, 5, 2], [3, 4, 2]))

function simpleStringState(initialValue: string): [() => string, (v: string) => void] {
  let str: string = initialValue

  return [
    () => str,
    (v: string) => {
      str = v;
    }
  ]
}

const [str1getter, str1setter] = simpleStringState("hello");
const [str2getter, str2setter] = simpleStringState("jorge");

console.log(str1getter());
console.log(str2getter());
str1setter('goodbye');
str2setter('kleber');
console.log(str1getter());
console.log(str2getter());