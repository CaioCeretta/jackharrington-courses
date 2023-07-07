import houses from './houses'

// console.log(houses);

interface IHouse {
  name: string;
  planets: string | string[]
}

interface IHouseWithID extends IHouse{
  id: number;
}


function findHouses(
  input: string | IHouse[],
  filter?: (house: IHouse) => boolean
): IHouseWithID[] {
  const houses: IHouse[] = typeof input === "string" ? JSON.parse(input) : input;

    return (filter ? houses.filter(filter) : houses)
    .map(house => ({
      id: houses.indexOf(house),
      ...house
    }))
    ;
  }
  


console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

