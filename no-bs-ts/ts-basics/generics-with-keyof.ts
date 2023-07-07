function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
  return items.map(item => item[key]);
}

const dogs = [
  {name: 'Loki', age: 5, },
  {name: 'Meg', age: 2, }
]

 console.log(pluck(dogs, "age"))

const fruits = [
  { name: "Apple", quantity: 5 },
  { name: "Banana", quantity: 10 },
  { name: "Orange", quantity: 3 }
];

console.log(pluck(fruits, "quantity"));

interface IBaseEvent {
  time: number;
  user: string;
}

interface IEventMap {
  addToCart: IBaseEvent & { quantity: number; productID: string};
  checkout: IBaseEvent;
}

function sendEvent<Name extends keyof IEventMap>(name: Name, data: IEventMap[Name]): void {
  console.log(name, data)
}

sendEvent("addToCart", {productID: 'foo', user: 'baz', 'quantity': 1, time: 30 })
sendEvent("checkout", {time: 50, user: 'Lucas'})


