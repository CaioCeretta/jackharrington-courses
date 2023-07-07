function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((acc, val) => {
    forEachFunc(val);
    return undefined;
  }, undefined)
}

myForEach([1, 5, 10, 12], (v) => {
  console.log(`forEach ${v}`);
})

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce<T[]>((a, v) => (filterFunc(v) ? [...a, v] : a), []);
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 0))

function myMap<T, K>(items: T[], mapFunction: (v: T) => K): K[] {
  return items.reduce<K[]>((acc, val) => [...acc, mapFunction(val)], [] as K[])
}

console.log(myMap([1, 3, 5, 2], v => (v * 10).toString()))