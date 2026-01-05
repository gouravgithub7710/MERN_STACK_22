import React, { useState } from 'react'

const Basic_forms = () => {

  // const [formData , setFormData] = useState({
  //   fullname,
  //   emai
  // });

  const [fullName, setFullName] = useState('gourav giri')
  const [email, setEmail] = useState('g@gmail.com')

  function formData(e){
    //e.preventDefault();
   
    console.log("fullname", fullName);
    console.log("Email",email)
  }
  


  return (
    <div>
      

      <form onSubmit={(e)=>{formData(e)}} method='GET'>
        <div>
          <label htmlFor='fullName'>full name </label>
            <input 
            type='text'  
            placeholder='Enter your full name ' 
            id='fullNname'
            name="fullName"
            value={fullName} 
            onChange={(e)=>{ console.log(e.target) 
             setFullName(e.target.value)}}>
             </input>
        </div>

          <div>
          <label htmlFor='email'>Email </label>
            <input 
            type='email' 
            id='email' 
            name="email"
            placeholder='Enter your Email '
            value={email} 
            onChange={(e)=>{ console.log(e.target) 
             setEmail(e.target.value)}} >
             </input>
        </div>

  <button type='submit'>Submit</button>

      </form>

    
    </div>
  )
}

export default Basic_forms
