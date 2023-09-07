import { useEffect, useState } from 'react'
import {  addDataToCollection, getAll} from '../../../commonjs/db.js';




const Ajouter = () => {
 
    // init du State
    const [ask, setAsk] = useState("");

    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");


    // récupération et mise à jour de la donnée dans l'input

    // gtrace le chemin de l'input
    
    const handleChangeAsk = (event) => { 

        setAsk(event.target.value);

     }

     // trace la chemin de category
const handleDropCategory = (event) => { 

    setSelectedCategory(event.target.value);
 }



// sauvegarde en base de données

     const save = async () => { 

        if (ask != '' && selectedCategory != ''  ) {
            console.log('save');

            const data = { 
                category : selectedCategory ,
                
                question : ask
            } // formatage de la base de donnée
                
           await addDataToCollection("questions", data);


            setAsk("");
            
        } else {
            console.log('no save');
            
        }
      }
// gestion des catégories



// init fct 

const initData = async () => { 

    const dataTemp = await getAll('category') ;
    setCategories(dataTemp);

 }

 useEffect(()=> {
        initData();
 }, [])


  return (
    <div className='flex flex-row gap-0' >

   

     <select  value={selectedCategory}  onChange={handleDropCategory} className="select select-bordered w-full max-w-xs">
    <option defaultValue={''} > Sélectionnez une catégoryie</option>
{ categories?.map (data =>  <option key={data.id }  value={data.id}> {data?.name}</option>) }
  
</select>

<input type="text"   value={ask}   onChange={handleChangeAsk}  placeholder="Ajouter une question" className="input input-bordered w-full max-w-xs" />

     <button  onClick={save}  className="btn btn-outline btn-primary">Enregistrer</button>

    </div>
  )
}

export default Ajouter