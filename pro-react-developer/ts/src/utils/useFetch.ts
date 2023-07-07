import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const useCallbackRef = (callback: any) => {
  
  const callbackRef = useRef(callback)

  useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return callbackRef;

}

export const useFetch = (options: any) => {
  const [data, setData] = useState(null);

  const savedOnSuccess = useCallbackRef(options.onSuccess)

  useEffect(() => {
    console.log("Use Fetch Console")
    if (options.url) {
      let isCancelled = false;
      console.log(options)
      fetch(options.url)
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          savedOnSuccess.current?.(json)
          return setData(json)});
        
    }
  }, [options.url]);

  return {
    data,
  };
};
