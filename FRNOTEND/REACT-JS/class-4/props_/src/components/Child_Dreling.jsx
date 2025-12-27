import React from 'react'

function Child_Dreling({userData}) {

  return (
    <div>
      <h1>Data</h1>
      <h2>First Name : {userData.firstName}</h2>
      <h2>Last Name : {userData.lastName}</h2>
      <h2>Age : {userData.age}</h2>
    </div>
  )
}

export default Child_Dreling
