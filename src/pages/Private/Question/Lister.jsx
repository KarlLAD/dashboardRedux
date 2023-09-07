// import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'
import { getAll } from '../../../commonjs/db';

const Lister = () => {

    const [asks, setAsks] = useState([]);

    // init fct 

    const initData = async () => { 

        const dataTemp = await getAll('question') ;
        setAsks(dataTemp);

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
        <th>Cat.</th>
        <th>Question</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
          {/* row 1 */}
      {  asks?.map( data => <Item  key={data.id} question={data}  />)}
          
 
    </tbody>
  </table>
</div>
    
    </div>
  )
}

export default Lister