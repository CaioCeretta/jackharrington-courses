/*O tipo T irá ser atribuido para quaisquer valor que esteja no parametro da
da função, o tipo de um genérico é atribuido quando uma função é chamada*/

function simpleState<T>(initialValue: T): [() => T, (v: T) => void] {
  let val = initialValue;

  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);

console.log(st1getter());
st1setter(30);
console.log(st1getter());

const [st2getter, st2setter] = simpleState<string | null>(null);

console.log(st2getter());
st2setter("oi");
console.log(st2getter());

interface IRank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: IRank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank + b.rank);

  return ranks.map((rank) => rank.item);
}

interface IPokemon {
  name: string;
  hp: number;
}

const pokemon: IPokemon[] = [
  {
    name: "Bulbasaur",
    hp: 100,
  },
  {
    name: 'Charizard',
    hp: 1300
  }
];

const ranks = ranker(pokemon, ({ hp }) => hp);

console.log(ranks);
