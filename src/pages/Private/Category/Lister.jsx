// import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'
import { getAll } from '../../../commonjs/db';

const Lister = () => {

    const [categories, setCategories] = useState([]);

    // init fct 

    const initData = async () => { 

        const dataTemp = await getAll('category') ;
        setCategories(dataTemp);

     }

     useEffect(()=> {
            initData();
     }, [])

  return (
    <div>Lister
    
    
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
          {/* row 1 */}
      {  categories?.map( data => <Item  key={data.id} category={data}  />)}
          
 
    </tbody>
  </table>
</div>
    
    </div>
  )
}

export default Lister