import { useEffect, useState } from "react";


/*
In react 18, strict mode will show us that we have a problem, it's mounting and ummounting twice, to check if our
component is resilient to unmounting, it is helping us to identify unsafe lifecycles, so when we don't clean up the
interval, it will cause the second watch to be called twice on purpose

Correct way of creating a stop watch 

A good stop watch is going to use a useEffect in the right way and return a cleanup function that will remove that remove
that arrow

A bad stop watch is going to do the exact same thing but it will not do a cleanup

A cool thing of strict mode is that it will show me this error
 
*/

const BadStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Bad useEffect')
    setInterval(() => {
      setCount((prev) => prev + 0.1);
    }, 100);
  }, []);

  return <div>Bad Stopwatch: {count.toFixed(1)}</div>
};

// This is bad because it is not cleaning the setInterval, is leak interval everytime it gets mounted

/* Good stop watch */
const GoodStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Good useEffect')
    const timer = setInterval(() => {
      setCount((prev) => prev + 0.1);
    }, 100);

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <div>Good Stopwatch: {count.toFixed(1)}</div>
};

function StrictModeState() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }}>
      <GoodStopWatch />
      <BadStopWatch />
      </div>
  )
}

export default StrictModeState;
