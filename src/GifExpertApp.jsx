import {useState} from 'react';
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';




export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Metallica' ]);
    
    const onAddCategory = (newCategory) => {
        
        // if(categories.includes(newCategory)) return;

        if (categories.map(valor => valor.toLowerCase()).includes(newCategory.toLowerCase()))return;

        setCategories([newCategory,...categories]);        
    };

    return (
        <>
        
        <h1>GifExpertApp</h1>
        
       < AddCategory 
            onNewCategory={value=> onAddCategory(value)}
       />
        
        
            
            {
                categories.map(category => (
                <GifGrid 
                key={category} 
                categoria={category}/>
                ))
            }
            
           
        </>
    )
}