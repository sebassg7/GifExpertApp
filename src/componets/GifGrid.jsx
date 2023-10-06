import { useEffect, useState} from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({categoria}) => {


    const [images, setImages] = useState([ ])

    const getImages = async() => {
      const newImages =  await getGifs(categoria);
      setImages(newImages);
    };

    useEffect(()=>{
        getImages();
    }, [ ])


  return (
    <>
        <h3>{categoria}</h3>

        <div className="card-grid">

          { 
          
          images.map((image) => (
            <GifItem 
            key={image.id}
            {...image}
            />
          ))
          
          }
          
        </div>
    </>
  )
}
