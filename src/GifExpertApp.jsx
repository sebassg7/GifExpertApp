import {useState} from 'react';
import { AddCategory } from './componets/AddCategory';




export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    
    const onAddCategory = (newCategory) => {
        
        // if(categories.includes(newCategory)) return;

        if (categories.map(valor => valor.toLowerCase()).includes(newCategory.toLowerCase()))return;

        setCategories([newCategory,...categories]);        
    };

    return (
        <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}
       < AddCategory 
    //    setCategories={setCategories}
            onNewCategory={value=> onAddCategory(value)}
       />
        {/* Listado de Gifs */}
        
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