import React from 'react'
import { useState } from 'react';
import Child from './Child';


function Parent() {
  const [Data, setData] = useState()

  function getDataFromChild(value){
      console.log(value.name)
      setData(value);
  }

  return (
    <div>

    <p>Data from child {Data?.name}</p>
   
      <Child getDataFromChild={getDataFromChild}/>
       

    </div>
  )
}

export default Parent
