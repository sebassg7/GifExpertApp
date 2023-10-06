import { useEffect} from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({categoria}) => {

    useEffect(()=>{
        getGifs(categoria);
    }, [ ])


  return (
    <>
        <h3>{categoria}</h3>
    </>
  )
}
