import React, { useState, useEffect, useCallback, useMemo } from "react";

/*
  Rules
  1 - always use the setter for the useState, you never want to set the value directly
  2 - Always put a dependency array on useEffect, useCallback, useMemo
  3 - To run use effect only once use an empty array
  4 - Don't depend on data you fetch in the useEffect, it will cause an infinite loop
  5 - Always add all the state you read from to the dependency array
*/

export default function UseEffectMistakes1() {
  const [numbers, setNumbers] = useState<number[]>([]);


  useEffect(() => {
    fetch("/numbers.json")
      .then((res) => res.json())
      .then((data) => { 
        setNumbers(data.numbers);
      });
  }, []);

  console.log(typeof numbers)


  const addOne = useCallback(() => {
    setNumbers(currentNumbers => [...currentNumbers, currentNumbers.length + 1])
  }, [])

  const sum = useMemo(() => numbers.reduce((acc, val) => acc + val, 0), [numbers])

  return (
    <div>
      <div>Numbers: {JSON.stringify(numbers)}</div>
      <div>Sum: {sum}</div>
      <button onClick={addOne}>Add One</button>
    </div>
  );
}
