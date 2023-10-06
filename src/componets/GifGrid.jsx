import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({categoria}) => {

  const {images, isLoading} = useFetchGifs(categoria);

  console.log({images, isLoading});


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
