
import { useState } from 'react';
import './App.css';
import { TfiKey } from "react-icons/tfi";
function App() {
  const [state,setState] = useState("");
  return (
   
   <>
   
   <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
     <div className="container  bg-white  "> 
      <div className="box ">
        <div className="text-box ">
            <div className="logo"><TfiKey /></div>
            <h5>Password required</h5>
            <p className='text'>You need a Password to access the file</p>
            <p className='Untitled'>Untitled</p>
        </div>
        <div className="input-box">
            <input type="text" name="" id="" placeholder='Enter password'/>
            <span>{state}</span>
            <button type="submit" onClick={()=>setState("Please enter a valid password")}>Continue</button>
        </div>
      </div>
     </div>
   </div>
   </>
  );
}

export default App;
