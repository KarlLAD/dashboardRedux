import { useState } from 'react'
import {  addDataToCollection} from '../../../commonjs/db.js';




const Ajouter = () => {
 
    // init du State
    const [catName, setCatName] = useState("");


    // récupération et mise à jour de la donnée dans l'input

    
    const handleChangeCategory = (event) => { 

        setCatName(event.target.value);

     }

// sauvegarde en base de données

     const save = async () => { 
        if (catName != '') {
            console.log('save');

            const data = { name: catName} // formatage de la base de donnée
                
           await addDataToCollection("category", data);


            setCatName("");
            
        } else {
            console.log('no save');
            
        }
      }


  return (
    <div className='flex flex-row gap-0' >


    {/* <input type='text'   name='formCategory'/> */}
    <input type="text"  name='formCategory' value={catName}   onChange={handleChangeCategory}  placeholder="Ajouter une catégorie" className="input input-bordered w-full max-w-xs" />
    {/* <button>    Ajouter</button>
     */}
     <button  onClick={save}  className="btn btn-outline btn-primary">Enregistrer</button>

    </div>
  )
}

export default Ajouter