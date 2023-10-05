import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({categoria}) => {

    const [counter, setcounter] = useState(10);

    getGifs(categoria);

  return (
    <>
        <h3>{categoria}</h3>
        <h5>{ counter}</h5>
        <button onClick={() => setcounter(counter + 1)}>+1</button>

    </>
  )
}
