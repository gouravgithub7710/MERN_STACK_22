import React from 'react'
import Child_Dreling from './Child_Dreling'

function Parent_Dreling() {
  const userData = {
    firstName:"Gourav",
    lastName:"Giri",
    age:21
  }
  return (
    <div>
      <Child_Dreling userData={userData}/>
    </div>
  )
}

export default Parent_Dreling
