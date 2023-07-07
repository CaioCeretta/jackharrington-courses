function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

// console.log(addNumbers(1, 2));

export const addStrings = (str1: string, str2:string =  ""): string => {
  return `${str1} ${str2}`;
}

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param))
}

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`
}

export function getName(user: {first: string; last: string}): string {
  return `${user?.first} ${user?.last}`
}

console.log(getName({first: 'Caio', last: 'Ceretta'}));