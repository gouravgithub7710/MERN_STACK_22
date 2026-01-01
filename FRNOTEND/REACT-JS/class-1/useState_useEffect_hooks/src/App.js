import { useState } from 'react'
import { useEffect } from 'react';

function App() {
 

  const [Info, setInfo] = useState([])
  
  useEffect( async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
     const ans =   await res.json();
     setInfo(ans);
   
  }, [])
  

  return (
    <div>

   <p>   {Info[0]?.title}</p>

   {Info.map((data)=>{ return <p>{data.title}</p>})}
      


    {/* <h1>hello</h1>
    {userName}
        <button onClick={()=>{
          setUserName("Career dubo diya")
        }}>Change Speed</button> */}

    </div>

  );
}

export default App;
