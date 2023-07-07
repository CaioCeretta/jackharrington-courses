function printIngredient(quantity: string, ingredient: string, extra?: string): void {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : "" }`)
}

printIngredient('1C', 'Flour')
printIngredient('1C', 'Flour', 'Something else')

interface User {
  id: string;
  info?: {
    email?: string;
  }
}

//Bad way
function getEmail(user: User): string {
  if(user.info) {
    return user.info.email!;
  }

  return '';
}

//Easier way
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

//Optional callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  
  callback?.();
  
}

