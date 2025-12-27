import React from 'react'
import { useState } from 'react';

function Child({getDataFromChild}) {
  const user ={
    name:"Gourav",
    age:21
  }

  return (
    <div>
      <button onClick={()=>{getDataFromChild(user)}}>me child wali btn hu muze clk karne per Parent me data bhej dugi</button>
    </div>
  )
}

export default Child
