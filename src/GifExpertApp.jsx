import {useState} from 'react';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = () => {
        setCategories(['Naruto',...categories])
    };

    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>
        {/* Input */}
        {/* Listado de Gifs */}
        <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return (
                            <li key={category}> {category} </li>
                        )
                    })
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}