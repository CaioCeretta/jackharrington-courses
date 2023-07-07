import React, { useState, useMemo, useEffect } from "react";

import { useFetch } from "../utils/useFetch";

const useStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return count;
};

function TamingUseEffect() {
  const [url, setUrl] = useState(String);
  const count = useStopWatch();

  const myOptions = useMemo(() => ({ url }), [url]);

  const { data } = useFetch({
    url,
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
      <button onClick={() => setUrl("../others/caio.json")}>caio</button>
      <button onClick={() => setUrl("../others/alex.json")}>alex</button>
      <hr />
      Second Example
      <div>
        <span>Count:  {count}</span>
      </div>
      <hr />
    </div>
  );
}

export default TamingUseEffect;
