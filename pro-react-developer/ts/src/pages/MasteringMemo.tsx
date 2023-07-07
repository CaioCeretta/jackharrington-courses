// @ts-nocheck

import { memo, useMemo, useState, useCallback } from "react";

import styles from "./MasteringMemo.module.css";

function Swatch({ params }: {params: {color: string}, onClick: Event}) {
  console.log(`Swatch Rendered: ${params.color}`)
  return <div style={{ width: 75, height: 75, background: params.color }} onClick={onClick}></div>;
}

const MemoedSwatch = memo(Swatch)



export default function MasteringMemo() {
  const [componentRenderIndex, setComponentRenderIndex] = useState(0);
  const [color, setColor] = useState('')

  console.log("Component Rendered", componentRenderIndex);

//Ways to handle to the app memoize the values of an object property

// const MemoedSwatch = memo(Swatch, (prevProps, nextProps) => {
//     return prevProps.params.color === nextProps.params.color
// });


const params = useMemo(() =>
({
  color
}), [color])

const onClick = useCallback(() => {

}, [])


  return (
    <div className={styles.App}>
      <div>MasteringMemo</div>
      <div>
        <button
          onClick={() => setComponentRenderIndex(componentRenderIndex + 1)}
        >
          Increment
        </button>
        <button
          onClick={() => setColor(color === "red" ? "blue" : "red")}
        >
          Change Color
        </button>
      </div>
      <div>
        <MemoedSwatch onClick={onClick} params={params} />
      </div>
    </div>
  );
}
