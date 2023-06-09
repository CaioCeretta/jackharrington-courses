interface Database<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol

class InMemoryDatabase<T, K extends DBKeyType> implements Database<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }

}

class PersistentMemoryDB<T, K extends DBKeyType> extends InMemoryDatabase<T, K> implements Persistable{
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
  

}

const myPersistentDB = new PersistentMemoryDB<number, string>();
myPersistentDB.set("foo", 23)// myDB.db["foo"] = "baz"
myPersistentDB.set('john', 22);
myPersistentDB.set("foo", 25)
console.log(myPersistentDB.get("foo"))
const saved = myPersistentDB.saveToString()


const myDB2 = new PersistentMemoryDB<number, string>();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"))
