const beforeLoad = "beforeLoad";
const loading = "Loading";
const loaded = "Loaded";

enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "Loading",
  loaded = "Loaded",
}

const englishLoadingStates = {
  [LoadingState.beforeLoad]: "Before Load",
  [LoadingState.loading]: 'Loading',
  [LoadingState.loaded]: 'A'
}

const isLoading = (state: LoadingState) => state === loading;

console.log(isLoading(LoadingState.beforeLoad));

// Literal Types

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0

  for(let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1
  }

  return pip;
}

console.log(rollDice(3));

function sendEvent(name: "addToCart", data: { productId: number}): void;
function sendEvent(name: "checkout", data: { cartCount: number}): void;
function sendEvent(name: string, data: unknown) {
  console.log(`${name}: ${JSON.stringify(data)}`)
}

sendEvent("addToCart", {productId: 12})