interface IMyUser {
  name: string;
  id: number;
  email?: string
  phone?: string;
}

type MyUserOptionals = Partial<IMyUser>;

type RequiredMyUser = Required<IMyUser>;

type JustNameAndEmail = Pick<IMyUser, "name" | "email">
// interface IMyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
//   phone?: string;
// }

const merge = (user: IMyUser, overrides: JustNameAndEmail): IMyUser => {
  return {
    ...user,
    ...overrides
  }
}

console.log(merge({
  name: 'Caio',
  id: 1,
  email: 'caioceretta@gmail.com'
},
{
  name: 'João'
}))

type UserWithoutId = Omit<IMyUser, "id">

const mapId = (users: IMyUser[]): Record<IMyUser['id'], UserWithoutId> => {
  return users.reduce((acc, val) => { 
    const { id, ...rest} = val;
    return {
      ...acc,
      [id]: rest,
    }
  }, {})
}

console.log(mapId([
   {
    id: 1,
    name: "Mr. Foo"
   },
   {
    id: 2,
    name: "Mr. Baz"
   }
]))