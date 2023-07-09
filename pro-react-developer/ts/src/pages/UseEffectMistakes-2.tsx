import { divide } from "lodash";
import React, { useCallback, useEffect, useState, useRef } from "react";

let timerId = 0;

function Timer() {
  const [count, setCount] = useState(0);
  const [tooltipShown, setTooltipShown] = useState(false)

  useEffect(() => {

    timerId++;

    const timer = setInterval(() => {
        setCount((currentCount) => {
          console.log(`Timer ${timerId} starts ${count}`);
          return currentCount + 1;
        });

    }, 1000);

    // timerId++
    // setInterval(() => {
    //   console.log(`Timer ${timerId} starts ${count}`)
    //   setCount(count + 1)
    // }, 1000)

    return () => {
      clearInterval(timer);
    };

  }, []);

  const tooltipPopperRef = useRef<HTMLDivElement>(null)

  const onMouseOver = useCallback(() => setTooltipShown(true), [])
  const onMouseOut = useCallback(() => setTooltipShown(false), [])

  useEffect(() => {
    console.log('Add Event Listeners');
    tooltipPopperRef.current?.addEventListener('mouseover', onMouseOver);
    tooltipPopperRef.current?.addEventListener('mouseout', onMouseOut);

    const ref = tooltipPopperRef.current

    return () => {
      console.log('Removing event listeners')
      tooltipPopperRef.current?.removeEventListener('mouseover', onMouseOver);
      tooltipPopperRef.current?.removeEventListener('mouseout', onMouseOut);
    }

  }, [onMouseOut, onMouseOver])

  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
      <div ref={tooltipPopperRef}>
        <h2>Tooltip Pooper</h2>
        {tooltipShown && <div>Tooltip Timer: {count}</div>}
      </div>
    </div>
  );
}

let appRender = 0;
export default function UseEffectMistakes2() {
  console.log(`appRender = ${appRender++}`)
  const [index, setIndex] = useState(0);


  const updateIndex = useCallback(() => {
    setIndex((prevIndex) => prevIndex + 1);
  }, []);

  return (
    <div>
      <Timer key={index} />
      <div>
        <button onClick={updateIndex}>Update Index</button>
      </div>
    </div>
  );
}